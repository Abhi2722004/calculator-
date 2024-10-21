// craco.config.js
module.exports = {
    devServer: {
      setupMiddlewares: (middlewares, devServer) => {
         return middlewares;
      },
    },
  };
  