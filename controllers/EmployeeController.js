const employeeList = (req, res) => {
    var page = {
        employee: 1
    }
    res.render("employeelist", {
        page: page,
    } );
}
module.exports =  {
    employeeList
};