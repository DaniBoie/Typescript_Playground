"use strict";
var _a;
exports.__esModule = true;
var axios_1 = require("axios");
var items = [];
(_a = document.getElementById('addItem')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (event) {
    event.preventDefault();
    var item = {
        text: document.getElementById('item').value,
        isDone: false
    };
    axios_1["default"].post('/items', item)
        .then(function () {
        document.getElementById('item').value = '';
        getItems();
    })["catch"](function (err) { return console.error(err); });
});
document.addEventListener('click', function (event) {
    if ((event === null || event === void 0 ? void 0 : event.target).className === 'delete') {
        items = items.filter(function (item) { return item.text !== (event === null || event === void 0 ? void 0 : event.target).dataset.text; });
        axios_1["default"].post('/remove', items)
            .then(function () {
            getItems();
        })["catch"](function (err) { return console.error(err); });
    }
});
var getItems = function () {
    axios_1["default"].get('/items')
        .then(function (res) {
        console.log(res.data);
        items = res.data;
        document.getElementById('items').innerHTML = '';
        items.forEach(function (item) {
            var _a;
            var itemElem = document.createElement('div');
            itemElem.innerHTML = "\n          <p>".concat(item.text, "</p>\n          <button class=\"update\" data-text=\"").concat(item.text, "\">").concat(item.isDone ? 'Done' : 'Not Done', "</button>\n          <button class=\"delete\" data-text=\"").concat(item.text, "\">X</button>\n          <hr>\n          ");
            (_a = document.getElementById('items')) === null || _a === void 0 ? void 0 : _a.append(itemElem);
        });
    })["catch"](function (err) { return console.error(err); });
};
getItems();
