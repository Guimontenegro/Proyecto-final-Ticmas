
// Obtener los elementos del DOM
let nombre = document.getElementById('Nombre');
let edad = document.getElementById('Edad');
let correo = document.getElementById('Correo');
let telefono = document.getElementById('Telefono');
let habilidades = document.getElementById('Habilidades');

// Actualizar los elementos del DOM con la información del currículum vitae
nombre.textContent = 'Guido Montenegro';
edad.textContent = 'Edad: 35';
correo.textContent = 'Correo electrónico: guidoprograma1987@gmail.com';
telefono.textContent = 'Teléfono: (2932) 520271';
habilidades.textContent = 'Habilidades: HTML, CSS, JavaScript (básico)';
/**AREA PARA GENERAR PDF */
let areaCv = document.getElementById('area-cv')


/**FUNCION PARA LLAMAR A AREACV Y HTML2PDF */
function generateResume(){
    html2pdf(areaCv,opt);
}
resumeButton.addEventListener;{('click',() => {
    scaleCv(),
    generateResume();
})};

generateResume()
var opt = {
  margin:       0,
  filename:     'documento.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 4 },
  jsPDF:        { format: 'a4', orientation: 'portrait' },
}




