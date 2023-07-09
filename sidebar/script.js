let sidebarOpen = true;

function toggleSideBar(){
    const sidebar = document.querySelector(".sidebar");
    const menuText = document.querySelector(".sidebar-menu-text");
    /*const menuText = sidebar.querySelector(".sidebar-menu-text");*/
    /*const menuText = sidebar.querySelectorAll(".sidebar-menu-text");*/
    sidebar.style.width = sidebarOpen ? "60px" : "240px";
    sidebar.style.width = sidebarOpen ? menuText.style.visibility = "hidden" : menuText.style.visibility = "visible";
    sidebarOpen = !sidebarOpen;
}



/*document.querySelector(".sidebar-header-button").addEventListener('click', function(){
    const sidebarButton = document.querySelector(".sidebar");
    if(sidebarButton.style.width === '240px'){
        sidebarButton.style.width = '50px';
    }else{
        sidebarButton.style.width = '240px';
    }
})*/