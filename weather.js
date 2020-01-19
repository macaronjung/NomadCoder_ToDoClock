const API_KEY = "e553b7dfa3d905bdc513239cc5a55f9e";
const COORDS = 'coords';

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);

}

function handleGeoError() {
  console.log('Cant access geo location')
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords () {
  const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
      askForCoords();
    } else {

    }
}

function init () {
  loadCoords();
}

init();