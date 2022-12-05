$(document).ready(function () {
    var employeeTable = $('#example').DataTable({
      columns: [
        { data: "ID"},
        { data: "imgsrc", visible:false },
        { data: "Type" },
        { data: "Start Date",visible:false},
        { data: "Status", },
        { data: "vec_id",visible:false},
        {data:"emp_id",visible:false},
        {data:"emp_name",visible:false},
        {data:"loc",visible:false}
        
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
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const updateSide = (myObj) => {
  
    //console.log(response)
  
    //console.log(myAdditionalInfo)
    //console.log(phoneNumbers)
    // hide sample card
    document.getElementById('sample-employee-card').setAttribute("style", "display: none");
    // show personnel info
    document.getElementById('Employee Details').setAttribute("style", "display: block")
  
    // update card  
    document.getElementById('patient-name').innerHTML = "Loại: " + "&nbsp" + myObj["Type"];
    document.getElementById('patient-position').innerHTML = "Trạng thái: " + "&nbsp" + myObj["Status"];
    document.getElementById('patient-age').innerHTML = "Mã phương tiện: " + "&nbsp" + myObj["vec_id"];
    if (myObj["Type"]=="Xe chở rác thải"){
        
        document.getElementById('vecdel').setAttribute("style", "display: block")
        document.getElementById('avatar').src = myObj["imgsrc"];
        document.getElementById('avatar').width = 300;
        document.getElementById('avatar').height = 200;
        document.getElementById('gender').innerHTML = "Đăng kiểm: " + "&nbsp" + myObj["Start Date"];

        var s=getRandomInt(100)
        if (s<34){
          document.getElementById('load').setAttribute("class","circular-chart green");
        }
        else if (s<75){
          document.getElementById('load').setAttribute("class","circular-chart orange");
        }
        else{
          document.getElementById('load').setAttribute("class","circular-chart blue");

        }
        var strs=s.toString();
        strs=strs+' ,100'
        if (myObj["ID"]!="TRK_01"){
          document.getElementById('per').setAttribute("stroke-dasharray",strs);
          document.getElementById('per_text').innerHTML=s.toString()+"%";
          document.getElementById('work-status').innerHTML="Trạng thái công việc: "+"&nbsp"+"Đang thu gom"

        }
        else{
          document.getElementById('per').setAttribute("stroke-dasharray","0, 100");
          document.getElementById('per_text').innerHTML="0  %";
          document.getElementById('work-status').innerHTML="Trạng thái công việc: "+"&nbsp"+"Chưa tiến hành"
          document.getElementById('load').setAttribute("class","circular-chart grey");
        }
        document.getElementById('emp').innerHTML="Nhân viên vận hành: "+"&nbsp"+myObj["emp_id"]+"&nbsp"+myObj["emp_name"];
        
        document.getElementById('wloc').innerHTML="Lộ trình: "+"&nbsp"+myObj['loc']
    }
    else{
        document.getElementById('gender').innerHTML = "Khu vực hoạt động: " + "&nbsp" + myObj["loc"];

        document.getElementById('vecdel').setAttribute("style", "display: none")
        document.getElementById('avatar').src = myObj["imgsrc"];
        document.getElementById('avatar').width = 300;
        document.getElementById('avatar').height = 200;
    }
  }
  

