const profileView = (req, res) => {
    var page = {
        employee: 1
    }
    res.render("profile", {
        page: page
    } );
}
module.exports =  {
    profileView
};