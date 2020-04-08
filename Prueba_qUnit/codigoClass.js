QUnit.test( "Prueba", function ( assert ) {
    var autor = new Autor();
    autor.setNombreCompleto('Ismael López Quintero');
    autor.setFechaNacimiento('04/07/1983');
    autor.setNacionalidad('española');
    var libro = new Libro();
    libro.setTitulo('Aprendiendo Notación JSON');
    libro.setEditorial('Publicaciones Universitarias SL');
    libro.setAutor(autor);
    libro.setFechaPrimeraEdicion('01/01/2012');
    libro.setIsbn('123456789');
    /*
    Aquí iría otro código, como visualización en la interfaz de usuario,
    acceso a datos... Vamos a recuperar los datos de la estructura
    creada y a hacer aserciones.
    */
    var tituloLibro = libro.getTitulo();
    var editorialLibro = libro.getEditorial();
    var autorLibro = libro.getAutor();
    var nombreCompletoAutor = autorLibro.getNombreCompleto();
    var fechaNacimientoAutor = autorLibro.getFechaNacimiento();
    var nacionalidadAutor = autorLibro.getNacionalidad();
    var fechaPrimeraEdicionLibro = libro.getFechaPrimeraEdicion();
    var isbnLibro = libro.getIsbn();
    assert.equal(tituloLibro,'Aprendiendo Notación JSON',
    'Titulo correcto');
    assert.equal(editorialLibro,'Publicaciones Universitarias SL','Editorial correcta');
    assert.equal(fechaPrimeraEdicionLibro,'01/01/2012','Fecha Primera Edición correcta');
    assert.equal(isbnLibro,'123456789','ISBN correcto');
    assert.equal(nombreCompletoAutor,'Ismael López Quintero','Nombre del autor correcto');
    assert.equal(fechaNacimientoAutor,'04/07/1983','Fecha de nacimiento del autor correcta');
    assert.equal(nacionalidadAutor,'española','Nacionalidad del autor correcta');
    });