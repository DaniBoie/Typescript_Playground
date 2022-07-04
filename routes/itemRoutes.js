var router = require('express').Router();
var path = require('path');
var fs = require('fs');
router.get('/items', function (req, res) {
    res.json([
        { "text": "Take out trash", "isDone": false },
        { "text": "Cook dinner", "isDone": true },
        { "text": "Walk the dog", "isDone": false }
    ]);
});
router.post('/items', function (req, res) {
    var item = req.body;
    fs.readFile(path.join(__dirname, '..', 'data', 'items.json'), 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        }
        var items = JSON.parse(data);
        items.push(item);
        fs.writeFile(path.join(__dirname, '..', 'data', 'items.json'), JSON.stringify(items), function (err) {
            if (err) {
                console.log(err);
            }
            res.sendStatus(200);
        });
    });
});
router.post('/remove', function (req, res) {
    var items = req.body;
    console.log(req.body);
    fs.writeFile(path.join(__dirname, '..', 'data', 'items.json'), JSON.stringify(items), function (err) {
        if (err) {
            console.log(err);
        }
        res.sendStatus(200);
    });
});
module.exports = router;
