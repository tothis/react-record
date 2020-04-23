import Mock from 'mockjs'

Mock.mock('/mock', 'post', {
    // `/mock`为ajax请求地址
    'users|4': [{ // 生成四个数据
        'id|+1': 1, // id从1开始 后续递增1
        'name': '@cname', // 名字为随机中文名
        'age|18-28': 25, // 年龄为`18-28`随机项
        'sex|1': ['男', '女'] // 性别为数组随机项
    }]
})

Mock.mock('/data', 'get', require('./data.json'))
