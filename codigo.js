const botonUsuarioRandom = document.querySelector('#boton-usuario-random')
const botonUsuarioOriginal = document.querySelector('#boton-usuario-original')

const foto = document.querySelector('#foto')
const nombre = document.querySelector('#nombre')
const mail = document.querySelector('#mail')
const ciudad = document.querySelector('#ciudad')

const expEdu = document.querySelector('#exp-educativa')
const expLaboral = document.querySelector('#exp-laboral')
const listaLaboral = document.querySelector('#lista-exp-laboral')

const habSoftware = document.querySelector('#hab-software')
const habSoftwareList = document.querySelector('#lista-hab-software')
const lenguaExt = document.querySelector('#lengua-ext')



const mensajeRobot = "Ninguna, soy solo un usuario falso generado por una API"

const actualizar =() => {
    location.reload()
    foto.scrollIntoView()
}
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

    expEdu.textContent = mensajeRobot
    listaLaboral.style.display = "none"
    expLaboral.textContent = mensajeRobot

    habSoftwareList.style.display ="none"
    habSoftware.textContent =mensajeRobot
    lenguaExt.textContent = mensajeRobot
    
    foto.scrollIntoView()

} catch (error) {
    console('Ocurrió un error al generar usuario: ', error)
}
}

botonUsuarioRandom.addEventListener('click', generarUsuario)
botonUsuarioOriginal.addEventListener('click', actualizar)

