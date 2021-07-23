module.exports = {
  target: "server",
  images: {
    domains: ["placeimg.com", "tailwindcss.com", "images.unsplash.com"],
  },
  env: {
    siteTitle: "Fashion Store",
    siteDescription: "Get your fashion list checked",
    siteKeywords:
      "womens clonthing, fashion, women fashion, mens clothing, kids clothing, kids fashion, shoes, mens fashion",
    siteUrl: "https://www.fs.in",
    siteImagePreviewUrl: "/main-logo.png",
    twitterHandle: "@vishnulalmaddy",
  },
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].[ext]",
        },
      },
    });
    return config;
  },
};
