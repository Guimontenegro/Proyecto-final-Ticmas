
// Obtener los elementos del DOM
let nombre = document.getElementById('Nombre');
let edad = document.getElementById('Edad');
let correo = document.getElementById('Correo');
let telefono = document.getElementById('Telefono');
let habilidades = document.getElementById('Habilidades');

// Actualizar los elementos del DOM con la información del currículum vitae
nombre.textContent = 'Guido Montenegro';
edad.textContent = 'Edad: 35';
correo.textContent = 'Correo electrónico: nombre.apellido@gmail.com';
telefono.textContent = 'Teléfono: (2932) 520271';
habilidades.textContent = 'Habilidades: HTML, CSS, JavaScript (básico)';

function scaleCv(){
    document.body.classList.add('scale-cv')
};
function removeScale(){
    document.body.classList.remove('scale-cv')
}
let areaCv=document.getElementById('area-cv');
let boton =document.getElementById('boton-pdf');
function generateResume(){
    html2pdf(areaCv, opt)
};


let opt = {
  margin:       0,
  filename:     'documento.pdf',
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 4 },
  jsPDF:        { format: 'a4', orientation: 'portrait' }
};

