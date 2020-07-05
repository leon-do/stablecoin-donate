module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/pay": { page: "/pay" },
      "/test": { page: "/test" },
    };
  },
};
