function mostrarPass (e, img) {
    if (e.classList.contains('senha')==false) {
        img.setAttribute('src', 'icone/show.png');
        e.setAttribute('type', 'text');
        e.classList.add('senha');
        return;
    } else {
        img.setAttribute('src', 'icone/hide.png');
        e.setAttribute('type', 'password');
        e.classList.remove('senha');
        return;
    }
}
function update () {
    var lightAndDark = document.querySelector('#icone');
    var select = document.querySelector('header select');
    var modo = select.options[select.selectedIndex];
        if (modo.text == 'Dark' ) {
            lightAndDark.setAttribute('src', 'icone/dark.png');
            let lightInputs = document.querySelectorAll('.light-inputs');
            let lightBG = document.querySelectorAll('.lightBG') ;
            let lightSubmit = document.querySelectorAll('.light-submit') ;
            for (let x of lightInputs) {
                x.classList.add('dark-inputs');
        
                x.classList.remove('light-inputs');
            };
            for (let x of lightBG) {
                x.classList.add('darkBG');
        
                x.classList.remove('lightBG');
            };
            for (let x of lightSubmit) {
                x.classList.add('dark-submit');
        
                x.classList.remove('light-submit');
            };
            return;
        } else {
            lightAndDark.setAttribute('src', 'icone/light.png');
            let lightInputs = document.querySelectorAll('.dark-inputs');
            let lightBG = document.querySelectorAll('.darkBG') ;
            let lightSubmit = document.querySelectorAll('.dark-submit') ;
            for (let x of lightInputs) {
                x.classList.add('light-inputs');
        
                x.classList.remove('dark-inputs');
            };
            for (let x of lightBG) {
                x.classList.add('lightBG');
        
                x.classList.remove('darkBG');
            };
            for (let x of lightSubmit) {
                x.classList.add('light-submit');
        
                x.classList.remove('dark-submit');
            };
            return;
        };
};
