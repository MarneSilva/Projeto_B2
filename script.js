function localizacao(){
  navigator.geolocation.getCurrentPosition(showPosition);
}
function showPosition(pos){
  var lt = pos.coords.latitude;
  var lg = pos.coords.longitude;
  
  var map = L.map('map').setView([lt, lg], 17);

  var marker = L.marker([lt, lg]).addTo(map);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

}
