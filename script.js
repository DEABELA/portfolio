let darkMode = localStorage.getItem('darkMode');

//check if dark mode is enabeled
// if its enabled, turn it off
// if its disabled, turn it on
const enableDarkMode =()=>{
    //1. add the class dark mode to the body
    document.body.classList.add('darkMode');

    //2. update darkmode in the local storage
localStorage.setItem('darkMode', 'enabled');
};


const disableDarkMode =()=>{
    //1. remove the class dark mode to the body
    document.body.classList.remove('darkMode');

    //2. update darkmode in the local storage
localStorage.setItem('darkMode', null);
};


const darkModeToggle = document.querySelector('#dark-mode-toggle');
darkModeToggle.addEventListener('click', ()=>{
    darkMode = localStorage.getItem('darkMode');
    if(darkMode !== 'enabled'){
        enableDarkMode();
        
    }
    else{
        disableDarkMode();
    }    
    
});
