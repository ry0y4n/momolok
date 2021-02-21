const pavlok = require('pavlok');
const express = require('express')

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

pavlok.init(
    "f421bc3ab16596d574b334578d379c98e500db565eccdbd7adbe0e20f32a14ea",
    "f3fe1e1a2f78f46dd345d4d63110347e5fb2e8d12624ed555cdb6e3e81d25fd5",
    {
        "verbose": true,
        "app" : app,
        "message": "Hello from the Pavlok Remote example!",
        "callbackUrl": "http://localhost/auth/pavlok/result",
        "callbackUrlPath": "/auth/pavlok/result",
        "successUrl": "/api/v1/auth/success",
        "errorUrl": "/api/v1/auth/error"
    }
);

app.get("/", function(req, result){
	if(pavlok.isLoggedIn(req)){
		result.sendFile(__dirname + "/main.html");
	} else {
   		result.redirect("login.html");
	}
});
app.get("/api/v1/auth/login", function(req, result){
	pavlok.auth(req, result);
});

app.get("/zap", function(req, result){
	pavlok.zap({
		"request": req
	});
	console.log("Zapped!");
	result.sendFile(__dirname + "/main.html");
});
app.get("/vibrate", function(req, result){
	pavlok.vibrate({
		"request": req
	});
	console.log("Vibrated!");
	result.sendFile(__dirname + "/main.html");
});
app.get("/beep", function(req, result){
	pavlok.beep({
		"request": req
	});
	console.log("Beeped!");
	result.sendFile(__dirname + "/main.html");
});

app.get("/pattern", function(req, result){
	pavlok.pattern({
		"request": req,
		"pattern": [ "beep", "vibrate", "zap" ],
		"count": 2
	});
	console.log("Pattern'd!");
	result.sendFile(__dirname + "/main.html");
});
app.get("/logout", function(req, result){
	pavlok.logout(req);
	result.redirect("/");	
});

app.listen(app.get('port'), (err) => {
    if (err) {
        console.log("Failed to start the server");
        console.log(err)
    } else {
        console.log("Visit the IP address of this machine, or http://localhost:3000/.");
    }
});
