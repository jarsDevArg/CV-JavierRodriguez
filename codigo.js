const boton = document.querySelector('#boton')
const foto = document.querySelector('#foto')
const nombre = document.querySelector('#nombre')
const mail = document.querySelector('#mail')
const ciudad = document.querySelector('#ciudad')

const expEdu = document.querySelector('#exp-educativa')
const expLaboral = document.querySelector('#exp-laboral')
const listaLaboral = document.querySelector('#lista-exp-laboral')

const mensajeRobot = "soy solo un usuario falso generado por una API"

const generarUsuario = async() => {
    
try {
    const url = 'https://randomuser.me/api/'
    const respuesta = await fetch(url)
    const {results} = await respuesta.json()
    const datos = results[0]
    
    
    foto.src = datos.picture.large
    nombre.textContent = datos.name.first + " " + datos.name.last
    mail.textContent = datos.email
    ciudad.textContent = datos.location.city

    listaLaboral.style.display = "none"
    expLaboral.textContent = "Ninguna, " + mensajeRobot
    

} catch (error) {
    console('Ocurrió un error al generar usuario: ', error)
}
}

boton.addEventListener('click', generarUsuario)

