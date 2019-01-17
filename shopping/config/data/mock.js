let Mock = require('mockjs')
let Random = Mock.Random
let list = Mock.mock({
    "list|5-15": [
        {
            "name": "@cname",
            "word|10-20": "@cword",
            "num|10.25-100.60": 1,
            "num|1000": 1,
            "id|+1": 1,
            "ids|1000-9000": 1,
            "check": 0,
            "add": '添加',
            "hisadd": "已添加",
            "checked": 1,
            "src": () => Random.image("50*50", Random.color(), Random.cword())
        }
    ]
})

module.exports = list