//Esta é a configuração que queremos apenas
//para fornecer ao webpack quando o estivermos executando
//dentro de um modo de desenvolvimento.
//----------------------------------------
//Merge é uma função que podemos usar para mesclar
//dois objetos de configuração diferentes do webpack.
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing:'marketing@http://localhost:8081/remoteEntry.js'
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}

//Então agora precisamos pegar nossa configuração de desenvolvimento e mesclá-la
//com uma configuração que nós
//escreveu dentro do arquivo comum.
module.exports = merge(commonConfig, devConfig);