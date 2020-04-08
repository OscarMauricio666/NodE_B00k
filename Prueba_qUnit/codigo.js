function factorial(n){
    if( n % 1 == 0 ) {
        if( n > 0 ) {
            return n * factorial(n-1);
        }
        else{
            return 1;
        }
    }
    else{
        return -1;
    }
}
QUnit.test( " Prueba Funcion Factorial ", function(assert) {
    assert.equal(factorial(5),120, "Correcto el factorial de 5"); //prueba efectiva
})
QUnit.test( "Prueba Funcion Factorial", function( assert ) {
    assert.equal(factorial(6),720, "¡Correcto el factorial de  6 ");
});
QUnit.test( "Prueba Funcion Factorial", function( assert ) {
    assert.equal(factorial(8),720, "¡Correcto el factorial de  8 "); //esta genera un error aproposito
});

let miarray = ["hola", "estamos", "haciendo", "una", "prueba"];
miarray["indice"]= "cadena de texto";
QUnit.test("prueba Array", function( assert) {
    assert.equal(miarray[0],"hola", "Correcto");
});
QUnit.test("prueba array texto", (assert)=>{
    assert.equal(miarray["indice"], "cadena de texto", "correcto prueba de texto");
});
var usuario = new Array();
usuario["nick"] = "jvix"; // las aserciones por cadenas de texto son correctas 'JSON'
usuario["nombreCompleto"] = "Javier Pérez Álvarez";
usuario["email"] = "jvix@jvix.com";
usuario["password"] = "jvix543";
QUnit.test( "Prueba Array", function( assert ) {
assert.equal(usuario["nick"],"jvix", "Correcto" );
assert.equal(usuario["nombreCompleto"],"Javier Pérez Álvarez",
"Correcto" );
assert.equal(usuario["email"],"jvix@jvix.com", "Correcto" );
assert.equal(usuario["password"],"jvix543", "Correcto" );
assert.equal(usuario.nick,"jvix", "Correcto" );
assert.equal(usuario.nombreCompleto,"Javier Pérez Álvarez",
"Correcto" );
assert.equal(usuario.email,"jvix@jvix.com", "Correcto" );
assert.equal(usuario.password,"jvix543", "Correcto" );
});

var usuarioJSON = {
    nick: "M666",
    nombreCompleto: "Óscar Mauricio Rondón",
    email: "orondon@ue.edu.co",
    password: "1018466301Ue"
};

// La Forma de Acceder a los datos de un objeto JSON es diferente a la de un array
QUnit.test("Prueba JSON", function( assert ){
    assert.equal(usuarioJSON.nick, "M666", "nick Correcto");
    assert.equal(usuarioJSON.nombreCompleto, "Óscar Mauricio Rondón", "Nombre Completo Ok");
    assert.equal(usuarioJSON.email, "orondon@ue.edu.co", "Email Ok");
});

let biblioteca = [
    {
        titulo: "JavaScript",
        autor: {
            nombreCompleto: "Javier Perez Alvarez",
            nacionalidad: "española"
        },
        fechaPrimeraEdicion: "04/07/1982"
    },
    {
        prueba: "Segunda posicion"
    }
];
QUnit.test("Prueba array de JSON", (assert) => {
    assert.equal(biblioteca[0].titulo, "JavaScript", "Primera pruena ok posicion 1");
    assert.equal(biblioteca[0].autor.nacionalidad, "española", "2da prueba ok, JSON anidado 'subobjeto'");
    assert.equal(biblioteca[1].prueba, "Segunda posicion", "segunda poscion ok");
});
  
