module.exports = {
    chainWebpack: config => {
        config.plugins.delete('prefetch');  // prefetch 삭제
    },
    publicPath: '/portfolio/',
    outputDir: 'docs'
}