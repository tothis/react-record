const path = require('path')
const {
    override
    , fixBabelImports
    , addWebpackAlias
    , addWebpackPlugin
} = require('customize-cra')

const chalk = require('chalk')
    // progress 进度条插件
    , progressBarPlugin = require('progress-bar-webpack-plugin')({
        width: 60
        , format: `${chalk.green('build')} [ ${chalk.cyan(':bar')} ]`
        + ` ${chalk.cyan(':msg')} ${chalk.red('(:percent)')}`
        , clear: true
    })

// customize-cra中组件 在此函数中使用方可生效
module.exports = override(
    // 添加插件
    addWebpackPlugin(progressBarPlugin)
    , addWebpackAlias({
        '@': path.resolve(__dirname, 'src')
        // , 'components': path.resolve(__dirname, 'src/components')
    })
    // 配置按需加载 依赖babel-plugin-import库
    , fixBabelImports('import', {
        libraryname: 'antd',
        librarydirectory: 'es',
        style: true
    })
)

/**
 * 不使用customize-cra包 仅使用react-app-rewired包 覆写webpack配置
 * 虽然此处未对config进行操作但 此文件从上往下执行 此方法会把上方override配置全部冲掉
 * so 只能二者选一使用
 */
// module.exports = (config, env) => {
//     // console.log(env, 'env')
//     // console.log(config, 'config')
//     // 配置路径别名
//     config.resolve.alias = {
//         '@': path.resolve(__dirname, 'src')
//     }
//     // 添加插件
//     config.plugins.push(progressBarPlugin)
//
//     return config
// }
