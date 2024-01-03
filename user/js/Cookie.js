



// Hàm để đọc cookie
function getCookie(name) {
    const nameEQ = name + '=';
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === ' ') cookie = cookie.substring(1, cookie.length);
      if (cookie.indexOf(nameEQ) === 0) return cookie.substring(nameEQ.length, cookie.length);
    }
    return null;
  }
  
  // Hàm để thiết lập cookie
  function setCookie(name, value, days) {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toGMTString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';

  }

  // // Bắt đầu viết mã JavaScript
  // var element = document.getElementsByClassName("myElement");

  // // Bắt sự kiện khi di chuột vào
  // element.addEventListener("mouseover", function() {
  //   console.log("Đã hover vào phần tử");
  //   // Thêm các hành động khác nếu cần
  // });

  // // Bắt sự kiện khi di chuột ra khỏi phần tử
  // element.addEventListener("mouseout", function() {
  //   console.log("Đã di chuột ra khỏi phần tử");
  //   // Thêm các hành động khác nếu cần
  // });