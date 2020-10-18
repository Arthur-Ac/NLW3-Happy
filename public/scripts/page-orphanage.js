//tipos de dados
// String ""
//Number 01
// Object{}
//Boolean true or false
// Array []

const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
//get value from html 
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng 

// create map
const map = L.map('mapid', options).setView([lat, lng], 15)

// create and add titleLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize : [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})




// create and add marker


L.marker([lat, lng], { icon })
.addTo(map)

/* image gallery */

function selectImage (event) {
     const button = event.currentTarget

     //remover tds as classes .active
     const buttons = document.querySelectorAll(".images button")
     buttons.forEach(removeActiveClass) /* buttons.forEach( (button) => {
         button.classList.remove("active")})*/

    function removeActiveClass(button) {
           button.classList.remove('active')
    }
     // selecionar a IMG clicada
     const image = button.children[0]
    const imageContainer = document.querySelector('.orphanage-details > img')
     //atualizar container de IMG
     imageContainer.src = image.src
     // adicionar a classe .active p esse botão
      button.classList.add('active')
     // só?...
}