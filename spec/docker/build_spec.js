import { Q, _, config, defer, path, fs } from 'azk';
import h from 'spec/spec_helper';
import { DockerfileNotFound, DockerBuildError } from 'azk/utils/errors';

var qfs = require('q-io/fs');

describe("Azk docker module, image build @slow", function() {
  this.timeout(20000);
  var repository = config('docker:build_name') + '/buildtest';

  var build = (file_path, tag = null) => {
    var build_options = {
      dockerfile: path.join(h.fixture_path('build'), file_path),
      tag: `${repository}:${tag || file_path}`,
    }
    return h.docker.build(build_options);
  }

  describe('with a valid Dockerfile', function () {
    // Used to test the performance of a container
    var outputs = { };
    var mocks = h.mockOutputs(beforeEach, outputs);

    it("should generate a valid image", function() {
      return build('Dockerfile', 'sucess')
        .then((image) => {
          var result = h.docker.run(
            image.name,
            ["/bin/bash", "-c", "/run.sh" ],
            { stdout: mocks.stdout, stderr: mocks.stderr, rm: true }
          );

          return result.then((container) => {
            h.expect(outputs.stdout).to.equal("Sucess!!\n");
            return container.remove();
          });
        });
    });

    it("should parse progress mensagens", function() {
      var events = [];
      return build('Dockerfile')
        .progress((event) => events.push(event))
        .then(() => {

          var status = [
            'building_from',
            'building_maintainer',
            'building_complete',
          ];
          _.each(status, (status) => {
            h.expect(events)
              .to.contain.an.item.with.deep.property('statusParsed.type', status);
          });
        });
    });
  });

  describe("with a invalids Dockerfile's", function () {
    it("should raise error for a invalid image", function() {
      return h.expect(build('DockerfileInvalid')).to.be.rejectedWith(DockerBuildError, /DockerfileInvalid/);
    });

    it("should raise error for not found from", function() {
      return h.expect(build('DockerfileFrom404')).to.be.rejectedWith(DockerBuildError, /not_found/);
    });
  });
});