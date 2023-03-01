
// Obtener los elementos del DOM
const nombre = document.getElementById('Guido Montenegro');
const edad = document.getElementById('35');
const correo = document.getElementById('guidoprograma1987@gmail.com');
const telefono = document.getElementById('2932520271');
const habilidades = document.getElementById('Creatividad,Adaptabilidad,Colaboración,Negociación');

// Actualizar los elementos del DOM con la información del currículum vitae
nombre.textContent = 'Guido Montenegro';
edad.textContent = 'Edad: 35';
correo.textContent = 'Correo electrónico: guidoprograma1987@gmail.com';
telefono.textContent = 'Teléfono: (2932) 520271';
habilidades.textContent = 'Habilidades: HTML (básico),CSS (básico),JavaScript (básico)';

// Agregar una clase activa al enlace de navegación de currículum
const enlaceCurriculum = document.getElementById('enlace-curriculum');

enlaceCurriculum.classList.add('activo');
