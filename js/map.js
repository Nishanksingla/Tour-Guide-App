var geocoder;
            var map;
            function initialize() {

            geocoder = new google.maps.Geocoder();
            var latlng = new google.maps.LatLng(-34.397, 150.644);
            var mapOptions = {
            zoom: 16,
            center: latlng
            }
            var panoramaOptions = {
    position: latlng,
    pov: {
      heading: 34,
      pitch: 10
    }
  };
  var map = new  google.maps.StreetViewPanorama(document.getElementById('map-canvas'),panoramaOptions);
//            map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
            
            var address = document.getElementById("Place").value+ document.getElementById("State").value+document.getElementById("country").value;

            geocoder.geocode( {'address': address}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
            });
            } else {
            alert('Geocode was not successful for the following reason: ' + status);
            }
            });
            }
            document.addEventListener("deviceready", initialize, false);
//google.maps.event.addDomListener(window, 'load', initialize);