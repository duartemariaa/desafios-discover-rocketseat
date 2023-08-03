function setThemePreference(theme){
    localStorage.setItem('themePreference', theme);
}

function getThemePreference(){
    return localStorage.getItem('themePreference');
}

function applyThemePreference(){
    const bodyColor = document.body;
    const storedTheme = getThemePreference();
    const slider = document.querySelector('.slider');

    if(storedTheme){
        bodyColor.style.backgroundColor = storedTheme;
        if(storedTheme === '#292C35'){
            slider.style.transform = 'translateX(63px)';
        }
        else{
            slider.style.transform = 'tranlateX(0)';
        }
    }else{
        bodyColor.style.backgroundColor = '#F1F1F1';    
    }
}

function toggleBackground(){
    const bodyColor = document.body;
    const atualColor = bodyColor.style.backgroundColor;
    const slider = document.querySelector('.slider');

    if(atualColor === 'rgb(241, 241, 241)'){
        bodyColor.style.backgroundColor = '#292C35';   
        setThemePreference('#292C35');
        slider.style.transform = 'translateX(63px)';
    }else{
        bodyColor.style.backgroundColor = '#F1F1F1';    
        setThemePreference('#F1F1F1');
        slider.style.transform = 'translateX(0)';
    }
}

document.addEventListener('DOMContentLoaded', applyThemePreference);