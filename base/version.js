// 写入当前时间至version文件 此文件会自动创建 react环境变量必须由REACT_APP_开头
// require('fs').writeFile('version', 'REACT_APP_BUILD_TIME=' + now(), function(err) {
//     if (err) {
//         throw err
//     }
// })

// 此处定义的环境变量会覆盖env文件定义的环境变量
module.exports = Promise.resolve({
    REACT_APP_VERSION: '1.0',
    REACT_APP_BUILD_TIME: now()
})

function now() {
    const date = new Date
    const y = date.getFullYear()
    const M = (date.getMonth() + 1).toString().padStart(2, '0')
    const d = date.getDate().toString().padStart(2, '0')
    const H = date.getHours().toString().padStart(2, '0')
    const m = date.getMinutes().toString().padStart(2, '0')
    const s = date.getSeconds().toString().padStart(2, '0')
    return `${y}-${M}-${d} ${H}:${m}:${s}`
}
