function incrementQuantity() {
    var quantityElement = document.getElementById('quantity-number');
    var currentQuantity = parseInt(quantityElement.innerText);
    quantityElement.innerText = currentQuantity + 1;
}

function decrementQuantity() {
    var quantityElement = document.getElementById('quantity-number');
    var currentQuantity = parseInt(quantityElement.innerText);
    if (currentQuantity > 1) {
        quantityElement.innerText = currentQuantity - 1;
    }
}
function getTextByClassName(className) {
    var elements = document.getElementsByClassName(className);
    if (elements.length > 0) {
        return elements[0].innerText;
    } else {
        console.error('Element with class name ' + className + ' not found.');
        return null;
    }
}


function getSrcByClassName(className) {
    var elements = document.getElementsByClassName(className);
    if (elements.length > 0 && elements[0].tagName === 'IMG') {
        return elements[0].getAttribute('src');
    } else {
        console.error('Image element with class name ' + className + ' not found.');
        return null;
    }
}


function themgioHang(Id)
{
    var name= getTextByClassName('name-product');

    var soLuong = parseInt(getTextByClassName('quantity-number'));
    var giaSanPham =parseInt(getTextByClassName('giaTien').replace(/\./g, ''), 10)
    var img =getSrcByClassName('sp-img')
    console.log(Id+ name+ soLuong+ giaSanPham+ img)
   

    themSanPham(Id, name, soLuong, giaSanPham, img)
}