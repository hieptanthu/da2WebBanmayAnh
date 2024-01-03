








function themModule(moduleName){

  var body_child = document.getElementById('main')
  const moduleHTMLPath = `/admin/modules/${moduleName}/html/index.html`;
  
 
  body_child.data=moduleHTMLPath
  }

  

function themModuleHD(moduleName){
  var body_child = document.getElementById('main')

    const moduleHTMLPath = `/admin/modules/HoaDon/${moduleName}/html/index.html`;
    
    body_child.data=moduleHTMLPath;
}
  


function themModuleThongKe(moduleName){
  var body_child = document.getElementById('main')

    
    const moduleHTMLPath = `/admin/modules/ThongKe/${moduleName}/html/index.html`;
      
    body_child.data=moduleHTMLPath
}
    
    