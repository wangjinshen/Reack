const data = require("../data/data.json")
module.exports = function (app) {
    app.get("/data", (req, res) => {
        res.send(data)
    })
}