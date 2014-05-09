
module.exports = {
  app : {
    manifest: {
      not_found: "no such '%s' in current project"
    },

    box: {
      invalid: "'%s' is not a valid definition of box"
    },

    image: {
      provisioned: "image '%s' has be provisioned",
      not_provision: "application image '%s' not found, try `azk provision`"
    }
  },

  commands: {
    not_found: "%s: Command '%s' not found",
    agent: {
      description: "Control azk agent"
    },
    exec: {
      check_image: "Check for image: `%s`",
      description: "Run a command in application box context",
      interactive: "Run command in interactive"
    },
    help: {
      description: "Show help about the specific command"
    },
    helpers: {
      pull: {
        pulling: 'Pulling repository %s',
        bar_progress: '  :title [:bar] :percent :progress',
        bar_status: '  :title :msg',
      }
    },
    init: {
      description: "Initializes a project by adding the file azkfile.json",
      enter: "Enter the box name",
      generated: "'%s' generated",
      id: "Generate a new app id",
      already: "'%s' already exists",
      generated: "'%s' generated",
    },
    kill: {
      description: "Kill a azk process by `azk pid`"
    },
    provision: {
      description: "Provision app image",
      removing: "Removing old image '%s'"
    },
    ps: {
      description: "Displays a information about the application process"
    },
    service: {
      description: "Control application services",
      instances: "number of instances to be added or removed",
      invalid_service: "'%s' not a valid service for this application",
      scale: "scale from %s to %s instances",
      not_runnig: "service not running",
      running: "running `%s` instances"
    },
    vm: {
      installed: "virtual machine already installed.",
      installed_successfully: "virtual machine was successfully installed.",
      not_installed: "virtual machine is not installed, try `azk vm install`.",
      running: "virtual machine is running",
      not_runnig: "virtual machine is not running, try `azk vm start`",
      starting: "starting virtual machine...",
      started: "virtual machine was successfully started.",
      stoping: "stoping virtual machine...",
      stoped: "virtual machine was successfully stoped.",
      removing: "removing virtual machine...",
      removed: "virtual machine was successfully removed.",
      network_pogress: "try connect vm and configure hostonly ip (%(attempts)d/%(max)d) ...",
      setting_network: "configuring the network virtual machine...",
      network_configured: "virtual machine network configured."
    }
  },

  docker: {
    connect: "connecting docker: %s"
  },

  proxy: {
    adding_backend: "adding backend:%(backend)s to hostname:%(hostname)s",
    removing_backend: "removing backend:%(backend)s to hostname:%(hostname)s",
    request: "proxy request %s => %s",
    started: "proxy started in %s port",
    not_configured: "host '%s' not configured in proxy"
  },

  test: {
    before: "Before all tasks:",
    remove_containers: "- Removing %s containers before run tests",
    remove_images: "- Removing %s images before run tests",
    check_vm: "- Check for required vm",
    i18n_test: "test i18n module"
  }
}