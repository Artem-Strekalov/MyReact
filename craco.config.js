const CracoLessPlugin = require("craco-less")

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { "@primary-color": "#fe6d73" },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
}
