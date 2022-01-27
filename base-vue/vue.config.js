const path = require("path");
module.exports = {
    devServer: {
        proxy: process.env.VUE_APP_API_ENDPOINT,
        host: '127.0.0.1',
    },
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "~@/assets/scss/variables.scss";`,
            },
        },
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, './src')
            },
            extensions: ['.js', '.vue', '.json']
        }
    },
}