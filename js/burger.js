//ChatGPT kode

function openSidebar() {
    document.querySelector('.burger-sidebar').classList.add('burger-sidebar-active');
    document.body.classList.add("no-scroll")
  
    const sidebarUlElement = document.querySelector(".sidebar-nav ul")
    sidebarUlElement.classList.add("sidebar-animate")
  }
  
  function closeSidebar() {
    document.querySelector('.burger-sidebar').classList.remove('burger-sidebar-active');
    document.querySelector('#bg-overlay').classList.remove('active');
    document.body.classList.remove("no-scroll")
  
    setTimeout(() => {document.querySelector(".sidebar-nav ul").classList.remove("sidebar-animate")}, 350)
  }