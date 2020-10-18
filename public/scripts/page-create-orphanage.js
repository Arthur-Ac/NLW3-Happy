// create map
const map = L.map('mapid').setView([-23.2004639,-47.2950336], 15)

// create and add titleLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize : [58, 68],
    iconAnchor: [29, 68],
})

let marker;

//create and add marker
map.on('click', (event) => {

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng
    // remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})



// adicionar o campo de fts
function addPhotoField () {
   //pegar o container de fts #images
   const container = document.querySelector('#images')
   //pegar o container p duplicar .new-image
   const fieldsContainer = document.querySelectorAll('.new-upload')
   // realizar o clone da ultima img add
   const newFieldContainer = fieldsContainer [fieldsContainer.length -1].cloneNode(true)
//verificar se o campo está vazio se S, n add ao container de imgs
   const input = newFieldContainer.children[0]

         if (input.value =="") {
             return
         }

   //limpar o campo antes de add ao container de images
   input.value = ""
   // add o clone ao containar de #images
   container.appendChild(newFieldContainer)
}

function deleteField(event) {   
    const span = event.currentTarget

   const fieldsContainer = document.querySelectorAll('.new-upload')

         if(fieldsContainer.length <= 1) {
             //limpar o valor do campo
            span.parentNode.children[0].value=""
             return
         }
         
            //deleter o campo
            span.parentNode.remove();

}

// select yes or no

 function toggleSelect(event) {
    // retirar a class .active dos botoes
 document.querySelectorAll('.button-select button')
 .forEach(function(button) {
     button.classList.remove('active')
})
    // colocar a classe .active
    const button = event.currentTarget
    button.classList.add('active')

    // atualixar o meu input hidden c o valor selecionado
    const input = document.querySelector(' [name="open_on_weekends"]')

    //verificar se S OU N
    input.value = button.dataset.value

    
}

/*function validate(event) {
    //validar se lat e lng estão preenchidos
   // const needsLatAndLng = true;
    if(needsLatAndLng) {
  event.preventDefault()
    alert('Selecione um ponto no mapa')
    }
    //não consegui validar
  
}  */
