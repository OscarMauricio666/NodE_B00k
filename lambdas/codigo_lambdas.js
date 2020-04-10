// Lambdas:
//     Es una funcion que se comporta como si fueran datos, estas funciones pueden ser
//     pasadas como si fueran parametros
var saludo = function(idioma) {
    var cadena;
    switch(idioma) {
        case 'espanol':
            cadena = 'hola que tal?';
            break;
        case 'ingles':
            cadena = 'hello, how are you?';
            break;
        case 'frances':
            cadena = 'salut! comment ca va?';
            break;        
    }
    return cadena;
}
var despedida = function(idioma) {
    var cadena;
    switch(idioma) {
        case 'espanol':
            cadena = 'Adios Amigo';
            break;
        case 'ingles':
            cadena = 'see you later';
        case 'frances':
            cadena = 'á tout a l\'heure';
            break;
        }    
    return cadena;
}
function funcionPrincial(valor, umbral, funcion1, funcion2, idioma) {
    var cadena;
    if (valor>=umbral) {
        cadena = funcion1(idioma);
    }
    else{
        cadena = funcion2(idioma);
    }
    return cadena;
}
QUnit.test( "Prueba", function(assert) {
    //Saludo en ingles.
    var cadena = funcionPrincial(1,0,saludo,despedida,'ingles');
    assert.equal(cadena, 'hello, how are you?', 'Saludo en ingles Correcto');
    // Despedida en frances
    cadena = funcionPrincial(0,1,saludo,despedida,'frances');
    assert.equal(cadena,'á tout a l\'heure','Despedida en frances correcta');
    // Despedida en español
    cadena = funcionPrincial(0,1,saludo,despedida,'espanol');
    assert.equal(cadena, 'Adios Amigo', 'Despedida en Español Correcta riend');
});


    
