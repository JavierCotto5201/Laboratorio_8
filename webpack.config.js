const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:
    {
        primerCancion:"./src/index1.js",
        segundaCancion:"./src/index2.js",
        buki:"./src/index3.js",
        Carro:"./src/index4.js",
        disparos:"./src/index5.js",
        halloween:"./src/index6.js",
        ohana:"./src/index7.js",
        trenzas:"./src/index8.js",
        graduacion:"./src/index9.js",
        inicio:"./src/index10.js",
        badbunny:"./src/index.js",
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
      },

      plugins: [new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
          template:"./src/badbunny/badBunny.html",
          filename:"badBunny.html",
          chunks:["index"]
      }),
        new HtmlWebpackPlugin({
        template:"./src/1erCancion/primerCancion.html",
        filename:"primerCancion.html",
        chunks:["index1"]
    }),
    new HtmlWebpackPlugin({
        template:"./src/2daCancion/segundaCancion.html",
        filename:"segundaCancion.html",
        chunks:["index2"]
    }),
    new HtmlWebpackPlugin({
        template:"./src/buki/elbuki.html",
        filename:"buki.html",
        chunks:["index3"]
    }),
    new HtmlWebpackPlugin({
        template:"./src/carro/Carro.html",
        filename:"carro.html",
        chunks:["index4"]
    }),
    new HtmlWebpackPlugin({
        template:"./src/disparos/disparos.html",
        filename:"disparos.html",
        chunks:["index5"]
    }),
    new HtmlWebpackPlugin({
        template:"./src/halloween/halloween.html",
        filename:"halloween.html",
        chunks:["index6"]
    }),
    new HtmlWebpackPlugin({
        template:"./src/ohana/Ohana.html",
        filename:"Ohana.html",
        chunks:["index7"]
    }),
    new HtmlWebpackPlugin({
        template:"./src/trenzas/trenzas.html",
        filename:"trenzas.html",
        chunks:["index8"]
    }),
    new HtmlWebpackPlugin({
        template:"./src/graduacion/graduacion.html",
        filename:"graduacion.html",
        chunks:["index9"]
    }),
    new HtmlWebpackPlugin({
        template:"./src/inicio/Inicio.html",
        filename:"Inicio.html",
        chunks:["index10"]
    }),],

      module: {
        rules: [    
            {test: /\.css$/i, use: ['style-loader', 'css-loader']},

            {test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  MiniCssExtractPlugin.loader,
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            },

            {test: /\.(png|jpe?g|gif|mp4|jpg|mpeg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options:{
                        name:'[path] [name].[ext]',
                    }
                  },
                ],
            },   
        ],
      },    
  };