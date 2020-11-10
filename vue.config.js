//vue.config.js
module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                // Title of Webpage
                args[0].title = "Thompson T";
                return args;
            })
    }
}