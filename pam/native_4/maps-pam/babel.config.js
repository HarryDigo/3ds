module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      ["module-resolver", {
        root: ["./src"],
        alias: {
          "@components": "./src/components",
          "@contexts": "./src/contexts",
          "@hooks": "./src/hooks",
          "@services": "./src/services"
        }
      }]
    ]
  };
};