let sidebarOpen = true;

function toggleSideBar(){
    const sidebar = document.querySelector(".sidebar");
    const menuTexts = document.querySelectorAll(".hide-menu-close");
        for(let i=0; i< menuTexts.length; i++){
            menuTexts[i].style.display = sidebarOpen
            ? "none" : "inline";
        }
    sidebar.style.width = sidebarOpen ? "60px" : "240px";
    
    sidebarOpen = !sidebarOpen;
}