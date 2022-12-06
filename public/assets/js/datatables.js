$(document).ready(function () {
  var employeeTable = $('#example').DataTable({
    columns: [
      { data: "ID"},
      { data: "imgsrc", visible:false },
      { data: "Gender", visible: false },
      { data: "Name", },
      { data: "Position", },
      { data: "Age", visible: false },
      { data: "Start date",visible:false },
      { data: "Status", }
    ],
    language: {
      lengthMenu: "Hiển thị _MENU_ kết quả",
      search: "Tìm kiếm:",
      zeroRecords: "Không có dữ liệu",
      info: "Trang _PAGE_/_PAGES_",
      infoEmpty: "Không tìm thấy",
      infoFiltered: "(tổng cộng _MAX_ kết quả)",
      paginate: {
        first: "Trang đầu",
        previous: "Trang trước",
        next: "Trang sau",
        last: "Trang cuối",
      },
    },
  });
  $("#example tbody").on("click", "tr", function () {
    const row = employeeTable.row(this).data();
    const myJSON = JSON.stringify(row);
    console.log(myJSON);
    const myObj = JSON.parse(myJSON);
    updateSide(myObj);
  });
});
const updateSide = (myObj) => {

  //console.log(response)

  //console.log(myAdditionalInfo)
  //console.log(phoneNumbers)
  // hide sample card
  document.getElementById('sample-employee-card').setAttribute("style", "display: none");
  // show personnel info
  document.getElementById('Employee Details').setAttribute("style", "display: block")

  // update card
  document.getElementById('patient-name').innerHTML = "Họ và Tên: " + "&nbsp" + myObj["Name"];
  document.getElementById('patient-position').innerHTML = "Vị trí: " + "&nbsp" + myObj["Position"];
  document.getElementById('patient-age').innerHTML = "Tuổi: " + "&nbsp" + myObj["Age"];
  document.getElementById('gender').innerHTML = "Giới tính: " + "&nbsp" + myObj["Gender"];
  document.getElementById('patient-startdate').innerHTML = "Ngày bắt đầu :" + "&nbsp" + myObj["Start date"];
  document.getElementById('patient-status').innerHTML = "Trạng thái: " + "&nbsp" + myObj["Status"];
  document.getElementById('avatar').src = myObj["imgsrc"];
  document.getElementById('avatar').width = 180;
  document.getElementById('avatar').height = 200;
  document.getElementById('profile-link').href = "/employee/" + myObj["ID"];

}
function add_google_logo() {
  var src = "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg";
  show_image(src, 276, 110, "Google Logo");
}


function show_image(src, width, height, alt) {
  var img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  img.alt = alt;
  document.body.appendChild(img);
}


