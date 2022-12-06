const vehicleView = (req, res) => {
    var page = {
        vehicle: 1
    }
    res.render("vehiclelist", {
        page: page
    } );
}
module.exports =  {
    vehicleView
};