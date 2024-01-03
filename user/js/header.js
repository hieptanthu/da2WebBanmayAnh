

var data =[
  {
    "id": 1,
    "tenDanhMuc": "máy ảnh",
    "danhMucConId": 0
  },
  {
    "id": 6,
    "tenDanhMuc": "phụ kiện máy ảnh",
    "danhMucConId": 0
  },
  {
    "id": 8,
    "tenDanhMuc": "ống kính máy ảnh",
    "danhMucConId": 0
  },
  {
    "id": 20,
    "tenDanhMuc": "khác",
    "danhMucConId": 0
  },
  {
    "id": 1005,
    "tenDanhMuc": "may anh",
    "danhMucConId": 0
  },
  {
    "id": 1006,
    "tenDanhMuc": "phu kien",
    "danhMucConId": 0
  },
  {
    "id": 1007,
    "tenDanhMuc": "may Quay",
    "danhMucConId": 0
  },
  {
    "id": 1008,
    "tenDanhMuc": "flaycam",
    "danhMucConId": 0
  },
]






function renderDanhMucCon(data) {
  const $BodyDm = $("#BodyDanhMuc"); // Chắc chắn rằng bạn chọn đúng phần tử bằng cách thêm dấu # trước ID
  $BodyDm.empty();
  if(data==[]){
    $BodyDm.append(`<h1>chua co hm con</h1>`);
  }
  data.forEach(item => {
      $BodyDm.append(`<div ><a  href="/HtmlPage/SanPham.html?DanhMucId=${item.id}" data-id="${item.id}">${item.tenDanhMuc}</div> </a> `);
  });
}

function renderDanhMuc(data) {
  const $DsDanhMuc = $("#DsDanhMuc").find("ul");
  data.forEach(item => {

    $DsDanhMuc.append(`<li><a onclick="GetDmCon(${item.id})">${item.tenDanhMuc}</a></li>`);
  });
}







renderDanhMuc(data)
window.GetDmCon=GetDmCon








$(document).ready(function() {
  var modal = $("#DsDanhMuc");
  $(window).click(function(event) {
    if (event.target == modal[0]) { // Sử dụng [0] để truy cập phần tử DOM từ jQuery object
      modal.css("display", "none");
    }
  });
  
});



window.seach=seach






