

let url = "https://api.victorsanmartin.com/feriados/en.json"
$.get(url, function(respuesta){

    respuesta.foreach(function(item) {
        console.log(item)
    })

}, "json")

