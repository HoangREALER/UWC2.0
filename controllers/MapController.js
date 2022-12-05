const mapView = (req, res) => {
    var page = {
        map: 1
    }
    res.render("map", {
        page: page
    } );
}
module.exports =  {
    mapView
};