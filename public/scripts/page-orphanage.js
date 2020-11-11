const options = {
  dragging: false,
  touchZoom: false,
  doubleClickzoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

//create map
const map = L.map('mapid', options).setView([-22.658609, -43.0440682], 15);
//creat and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon

const icon = L.icon({
  iconUrl: '/images/map-marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//crete and add marker
L.marker([-22.658609, -43.0440682], { icon }).addTo(map);

// image gallery//

function selectImage(event) {
  const button = event.currentTarget;

  const buttons = document.querySelectorAll('.images button');
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {}

  const image = button.children[0];
  const imageContainer = document.querySelector('.orphanage-details  > img');

  imageContainer.src = image.src;

  button.classList.add('active');
}
