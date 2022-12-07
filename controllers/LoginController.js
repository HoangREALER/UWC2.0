const loginView = (req, res) => {
    res.render("login", {
    } );
}
const login = (req, res) => {
    if (req.body.username === "backofficer" || req.body.password === "UWC_FTW!") {
        let message = {
            status: "authenticated"
        };
        let response = JSON.stringify(message);
        res.send(response);
    }
    else {
        res.send({"status":"nope"})
    }
    console.log(req.body);
}
module.exports =  {
    loginView,
    login
};