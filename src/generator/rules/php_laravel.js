import { log } from 'azk';
import { Rule as BaseRule } from 'azk/generator/rules/php_composer';

export class Rule extends BaseRule {
  constructor(ui) {
    super(ui);
    this.type      = "framework";
    this.name      = "php_laravel";
    this.rule_name = "php_laravel";
    this.replaces  = ['php', 'php_composer', 'node'];

    // Suggest a docker image
    // http://images.azk.io/#/php-fpm
    this.version_rules = {};
  }

  getFrameworkVersion(content) {
    var parsedJson, version;
    try {
      parsedJson = JSON.parse(content);
    } catch (err) {
      log.error('JSON.parse error', err.stack || err);
    }
    // remove garbage
    version = parsedJson && parsedJson.require && parsedJson.require['laravel/framework'];
    if (version) {
      // strip non valid chars
      version = version.replace(/[^*.\d]/g, "");
      // * -> 0
      version = version.replace(/\*/g, "0");
    }
    return version && this.semver.clean(version);
  }
}
