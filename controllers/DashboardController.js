const dashboardView = (req, res) => {
    var page = {
        dashboard: 1
    }
    res.render("index", {
        page: page,
    } );
}
module.exports =  {
    dashboardView
};