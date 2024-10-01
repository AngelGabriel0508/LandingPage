function iniciarMap(){
    var coord = {lat:-13.0835481, lng: -76.3890397};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}