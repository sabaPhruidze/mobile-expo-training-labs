module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }], // ეს ხაზი ძალიან მნიშვნელოვანია!
      "nativewind/babel",
    ],
  };
};
