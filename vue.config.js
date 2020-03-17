// 这个文件的名字必须为：vue.config.js，这里面的配置会和其他配置进行融合
module.exports = {
    configureWebpack: {
        resolve: {
            // 1.这样配置的话，一些文件的后缀名就可以不写了，但是自己不需要配置了，脚手架默认给配置过了
            // extensions: []

            // 2.配置路径的别名
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'
            }
        }
    }
}