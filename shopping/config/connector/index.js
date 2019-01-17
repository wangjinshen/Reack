const data = require("../data/data.json")
const list = require("../data/mock")
module.exports = function (app) {
    app.get("/data", (req, res) => {
        res.send(data)
    })
    app.get("/list",(req,res)=>{
        res.send(list)
    })
}