$(document).ready(function () {
    
    // setInterval(() => {
    //     $.ajax({
    //         type: "GET",
    //         url: "https://api.chucknorris.io/jokes/random",
    //         dataType: "json",
    //         beforeSend: function () {
                
    //         },
    //         success: function (response) {
    //             $("h1").text(response.value);
    //         },
    //         error: function (err) {
    //             console.log(err);
    //         },
    //         complete: function () {
                
    //         },
    
    //     });
    
    // }, 5000);

    // $.ajax({
    //     type: "get",
    //     url: "https://countriesnow.space/api/v0.1/countries/",
    //     dataType: "json",
    //     success: function (response) {

    //         $.each(response.data, function (index,Element) { 
    //              let eachoption = `<option>${Element.country}</option>`

    //              $("select").append(eachoption)
    //         });

    //     },

    // });

    $.ajax({
        type: "get",
        url: "https://aibit-translator.p.rapidapi.com/api/v1/translator/support-languages",
        dataType: "json",
        headers: {
            'x-rapidapi-key': 'b7d1dc9525msh7de4ab839107dbcp1fa6b9jsn305f75409285',
            'x-rapidapi-host': 'aibit-translator.p.rapidapi.com'
        },
        success: function (response) {
        $.each(response, function (index,element) { 

            let option = `
                 <option value="${element.code}">${element.language}</option>
            `
             $("#from").append(option);
             $("#to").append(option);

        });
            
        }
    });

    // translate

$("button").click(function () { 
        let text = $("input").val()
        let languagefrom = $("#from").val()
        let languageto = $("#to").val()

        $.ajax({
            type: "post",
            url: "https://aibit-translator.p.rapidapi.com/api/v1/translator/text",
            dataType: "json",
            data: {from: languagefrom, to: languageto, text: text},
            headers: {
                'x-rapidapi-key': 'b7d1dc9525msh7de4ab839107dbcp1fa6b9jsn305f75409285',
                'x-rapidapi-host': 'aibit-translator.p.rapidapi.com'
            },
            success: function (response) {
                $("h2").text(response.trans);
                
            },
            error:function (err) {
                console.log(err);
                
            }
            
        });
        
    });





});