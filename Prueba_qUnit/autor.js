// implementacion de la clase Autor con getters y setters
var Autor = function() { // La funcion flecha no funciona como un constructor
    var sThis = this;
        this.datosAutor = { // JSON
            nombreCompleto: '',
            fechaNacimiento: '',
            nacionalidad: ''
        };
    var getNombreCompleto = ()=> {
        return sThis.datosAutor.nombreCompleto;
    }
    setNombreCompleto = (nombreCompleto)=> {
        sThis.datosAutor.nombreCompleto = nombreCompleto;
    },
    getFechaNacimiento = ()=> {
        return sThis.datosAutor.fechaNacimiento;
    },
    setFechaNacimiento = (fechaNacimiento)=> {
        sThis.datosAutor.fechaNacimiento = fechaNacimiento;
    },
    getNacionalidad = ()=> {
        return sThis.datosAutor.nacionalidad;
    },
    setNacionalidad = (nacionalidad)=> {
        sThis.datosAutor.nacionalidad = nacionalidad;
    };
    return {
        getNombreCompleto: getNombreCompleto,
        setNombreCompleto: setNombreCompleto,
        getFechaNacimiento: getFechaNacimiento,
        setFechaNacimiento: setFechaNacimiento,
        getNacionalidad: getNacionalidad,
        setNacionalidad: setNacionalidad
    }

};