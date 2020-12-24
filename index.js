const pavlok = require('pavlok');

pavlok.init(
    "f421bc3ab16596d574b334578d379c98e500db565eccdbd7adbe0e20f32a14ea",
    "f3fe1e1a2f78f46dd345d4d63110347e5fb2e8d12624ed555cdb6e3e81d25fd5"
);

pavlok.login(function (result, code) {
    if (result) {
        console.log("Code is " + code);
        pavlok.vibrate(); // or you can call other methods like beep() or zap()
        pavlok.beep();
    }
});
