document.getElementById("ver_mas").addEventListener("click", function () { 

    // Antes de mostrar el panel de Experiencia labora, fijarse el style del boton
    let styleDelPanel = document.getElementById('ExperienciaLaboral').style.display;
    console.log('El style del ExperienciaLaboral es:' + styleDelPanel);

    if (styleDelPanel == 'inline-block') {
        // El panel esta visiable - ocultarlo
        document.getElementById("ExperienciaLaboral").style.display="none";
        // Cambiar el nombre del botón
        document.getElementById("ver_mas").innerHTML="Ver más"

    } else {
        // El panel esta invisble - mostrarlo
        document.getElementById("ExperienciaLaboral").style.display="inline-block";
        // Cambiar el nombre del boton
        document.getElementById("ver_mas").innerHTML="Ver menos"

    }



}) ; 


document.getElementById("ver_mas2").addEventListener("click", function () { 

    // Antes de mostrar el panel de Experiencia labora, fijarse el style del boton
    let styleDelPanel = document.getElementById('FormacionAcademica').style.display;
    console.log('El style del FormacionAcademica es:' + styleDelPanel);

    if (styleDelPanel == 'inline-block') {
        // El panel esta visiable - ocultarlo
        document.getElementById("FormacionAcademica").style.display="none";
        // Cambiar el nombre del botón
        document.getElementById("ver_mas2").innerHTML="Ver más"

    } else {
        // El panel esta invisble - mostrarlo
        document.getElementById("FormacionAcademica").style.display="inline-block";
        // Cambiar el nombre del boton
        document.getElementById("ver_mas2").innerHTML="Ver menos"

    }



}) ; 

document.getElementById("ver_mas3").addEventListener("click", function () { 

    // Antes de mostrar el panel de Experiencia labora, fijarse el style del boton
    let styleDelPanel = document.getElementById('Intereses').style.display;
    console.log('El style del Intereses es:' + styleDelPanel);

    if (styleDelPanel == 'inline-block') {
        // El panel esta visiable - ocultarlo
        document.getElementById("Intereses").style.display="none";
        // Cambiar el nombre del botón
        document.getElementById("ver_mas3").innerHTML="Ver más"

    } else {
        // El panel esta invisble - mostrarlo
        document.getElementById("Intereses").style.display="inline-block";
        // Cambiar el nombre del boton
        document.getElementById("ver_mas3").innerHTML="Ver menos"

    }



}) ; 
