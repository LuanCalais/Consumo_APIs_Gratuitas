$(document).ready(function(){

    let foo;

    // Controle de API Jokes Chuck
    $('#btn-generate-joke').on('click', function(){
        fetch('https://api.chucknorris.io/jokes/random').then(response => {
            response.json().then(data => showData(data))
        })
    })

    const showData = (result) =>{
        foo = result.value;
        $('#joke-generator').text(result.value); 
    }

    //Fim Controle de API Jokes Chuck
    
    //Controle de API Fun Translate
    $('#btn-generate-translate').on('click', function(){
        if(typeof foo === 'undefined'){
            alert('Primeiro é necessário gerar um uma string acima');
        }else{
            fetch(`https://api.funtranslations.com/translate/yoda.json?text=${foo}`).then(response => {
                response.json().then(data => showTransate(data))
            });
        }
    })

    const showTransate = (result) => {

        console.log(result.contents);

        if(typeof result.error !== "undefined"){
            let error = `Im sorry :C, we catch a error return from the API - ${result.error.message}`;
            $('#yoda-generator').text(error);
        }
        $('#yoda-generator').text(result.contents.translated);
    }
    //FIM Controle de API Fun Translate

    // Controle de API ViaCep
    
    // FIM Controle de API ViaCep

})