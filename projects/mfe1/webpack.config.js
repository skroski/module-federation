const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfe1",
  exposes: {
    // Preferred way: expose corse-grained routes
    "./routes":
      "/Users/danielskroski/Documents/module-federation/projects/mfe1/src/app/app.routes.ts",

    // Technically possible, but not preferred for Micro Frontends:
    // Exposing fine-grained components
    "./Component":
      "/Users/danielskroski/Documents/module-federation/projects/mfe1/src/app/my-tickets/my-tickets.component.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
