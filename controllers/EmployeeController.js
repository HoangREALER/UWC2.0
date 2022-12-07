const employeeList = (req, res) => {
    var page = {
        employee: 1
    }
    res.render("employeelist", {
        page: page,
    } );
}
const profileView = (req, res) => {
    var page = {
        employee: 1
    }
    res.render("profile", {
        page: page
    } );
}

const scheduleView = (req, res) => {
    var page = {
        employee: 1
    }
    res.render("calendar", {
        page: page
    } );
}

const routeView = (req, res) => {
    var page = {
        employee: 1
    }
    // var route = {
    //     points : {
    //         point1: 
    //     }
    // }\
    res.render("route", {
        page: page
    } );
}

module.exports =  {
    employeeList,
    profileView,
    scheduleView,
    routeView
};