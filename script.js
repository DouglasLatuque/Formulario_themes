function alterarTema() {
    let range = document.querySelector('#temas').value;
    console.log(range);

    if (range == '1') {
        let fonte = document.querySelectorAll('.fontePrincipalEscuro');
        console.log(fonte);

        for (i in fonte) {
            fonte[i].classList.add('fontePrincipalClaro')
            fonte[i].classList.remove('fontePrincipalEscuro')
        }

        
  











    } else {
        let fonte = document.querySelectorAll('.fontePrincipalClaro');
        console.log(fonte);

        for (i in fonte) {
            fonte[i].classList.add('fontePrincipalEscuro')
            fonte[i].classList.remove('fontePrincipalClaro')
        }

    }
}
