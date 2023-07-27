function setThemePreference(theme){
    localStorage.setItem('themePreference', theme);
}

function getThemePreference(){
    return localStorage.getItem('themePreference');
}

function applyThemePreference(){
    const bodyColor = document.body;
    const storedTheme = getThemePreference();

    if(storedTheme){
        bodyColor.style.backgroundColor = storedTheme;
    }else{
        bodyColor.style.backgroundColor = '#F1F1F1';    
    }
}

function toggleBackground(){
    const bodyColor = document.body;
    const atualColor = bodyColor.style.backgroundColor; 

    if(atualColor === 'rgb(241, 241, 241)'){
        bodyColor.style.backgroundColor = '#292C35';   
        setThemePreference('#292C35')
    }else{
        bodyColor.style.backgroundColor = '#F1F1F1';    
        setThemePreference('#F1F1F1')
    }
}

document.addEventListener('DOMContentLoaded', applyThemePreference);