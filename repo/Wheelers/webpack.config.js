const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: "http://localhost:6999/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 6999,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "Wheelers",
      filename: "remoteEntry.js",
      remotes: {
       
        Bykes_X: "Bykes_X@http://localhost:6996/remoteEntry.js",
        Cars_Xxx:`promise new Promise(resolve => {
          const urlParams = new URLSearchParams(window.location.search)
         
         
          const remoteUrlWithVersion = 'http://localhost:6997/remoteEntry.js'
          const script = document.createElement('script')
          script.src = remoteUrlWithVersion
          script.onerror=() => {
            alert("!error");
            window.location.href= "http://localhost:6996/";
          }
          script.onload = () => {
           
            const proxy = {
              get: (request) => window.Cars_X.get(request),
              init: (arg) => {
                try {
                  return window.Cars_X.init(arg)
                } catch(e) {
                  console.log('remote container already initialized')
                }
              }
            }
            resolve(proxy)
          }
          // inject this script with the src set to the versioned remoteEntry.js
          try {
          document.head.appendChild(script);
        } catch(e) {
          console.log(123);
        }
        })
        `
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
