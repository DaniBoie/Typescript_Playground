var _a, _b;
(_a = document.getElementById('mainBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    console.log('hello world!');
});
(_b = document.getElementById('signIn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(document.getElementById('email').value);
});
