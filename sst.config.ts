/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "angular-monorepo",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    new sst.aws.Analog("Client", {
      path: "apps/analog-app",
      dev: {
        command: "nx serve analog-app",
        autostart: true,
        directory: "./",
        title: "Analog App",
      },
      buildCommand: "nx build analog-app",
    });
  },
});
