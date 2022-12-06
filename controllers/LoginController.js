const loginView = (req, res) => {
    res.render("login", {
    } );
}
const login = (req, res) => {
    res.redirect('/');
}
module.exports =  {
    loginView,
    login
};