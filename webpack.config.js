var config = {
    mode: 'development',
    entry: __dirname + '/src/index.js',
    output:{
        path: __dirname + '/dist',
        filename:'index.js',
    },
    module:{
      rules:[
          {
            test:/\.(js|jsx)$/,
            exclude:/node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                plugins: [
                [
                  'transform-runtime',
                  {
                    polyfill: false,
                    regenerator: true,
                  },
                ],
                ],
              }
            }
          },
      ]
    },
    devServer:{
        inline:true,
        port:7777
    },
}

module.exports = config;