console.log($);

// const key = AIzaSyC3-dRwU-380T2MF5h331zf8tltwcDIQiA
//User latitude and longitude

let x = navigator.geolocation;

const success = (position) => {
  // fetch coordinates
  const lat = position.coords.latitude;
  const long = position.coords.longitude
  // console.log(lat,long);
  // feed to google API
  let coords = new google.maps.LatLng(lat,long)
  //Set up map
  let mapOtions = {
    zoom: 16,
    center: coords,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  // Create Map
  let map = new google.maps.Map(document.getElementById("map"), mapOptions)
  //Creat Marker
  let marker = new google.maps.Marker({map: map, position: coords})
}

const failure = () => {
  console.log('Co-ordinates not available.');
}

x.getCurrentPosition(success, failure);

$(() => {

})
