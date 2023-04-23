module.exports = {

    module: {
        //Vamos definir o que é chamado de carregador.
        //O objetivo de um carregador,
        //é dizer ao Webpack para processar
        //alguns arquivos diferentes conforme começamos
        //importá-los para o nosso projeto.
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        //Então, a predefinição do React aqui,
                        //significa que Babel vai processar
                        //todas as diferentes tags jsx,
                        //então adicionamos em nosso aplicativo.
                        //--------------------------------------
                        //Preset, aqui vai transformar nosso código
                        //em uma variedade de maneiras diferentes.
                        //Então pegue todo tipo de ES 2015, 16, 17
                        //e assim por diante sintaxe,
                        //e converta-o para ES cinco.
                        presets: ['@babel/preset-react','@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    }
                }
            }
        ]
    }
}