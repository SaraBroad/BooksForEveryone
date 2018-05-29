var map;
var infoWindow;
var service;
// var curLocation = new google.maps.LatLng(39.9520323,-75.1641467);
var curLocation = {
  lat: 39.9520323,
  lng: -75.1641467
};
var curMap = 'library'
var markersList = [];

function whereAmI() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      map.setCenter(pos);
      curLocation = pos;
    }, function () {
      handleLocationError(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false);
  }
}

function handleLocationError(browserHasGeolocation) {
  var msg = (browserHasGeolocation ? 
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
  console.log(msg)
}

function initMap() {
  console.log("in init map");
  console.log(curLocation);
  //  debugger;
    map = new google.maps.Map(document.getElementById('map'), {
    center: curLocation,
    zoom: 14,
    styles: [{
      stylers: [{
        visibility: 'simplified'
      }]
    }, {
      elementType: 'labels',
      stylers: [{
        visibility: 'off'
      }]
    }],
    mapTypeControl: false
  });
  console.log("do we get here");
  infoWindow = new google.maps.InfoWindow();
  service = new google.maps.places.PlacesService(map);

  // The idle event is a debounced event, so we can query & listen without
  // throwing too many requests at the server.
  map.addListener('idle', performSearch);
  map.addListener('bounds_changed', boundsChanged)
}

function boundsChanged() {
  curLocation = map.getCenter();
}

function performSearch() {
  var request = {
    bounds: map.getBounds(),
    keyword: curMap
  };
  // var request = {location: curLocation,radius: 1000,keyword: 'book store'};
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status !== google.maps.places.PlacesServiceStatus.OK) {
    console.error(status);
    return;
  }
  for (var i = 0, result; result = results[i]; i++) {
    // console.log(result);
    addMarker(result);
  }
}

  function makeHoursHTML(anArray) {
    var returnHTML = '';
    var weekday = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
    for (i = 0; i < anArray.length; i++) {
      var day = weekday[i];
      var opensAt = moment(anArray[i].open.time, "HHmm").format("hh:mm a");
      var closesAt = moment(anArray[i].close.time).format("hh:mm a");
      returnHTML += day + ": " + opensAt + " to " + closesAt + "<br>";
    }
    return returnHTML;
  }


function addMarker(place) {
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
    icon: {
      url: 'https://developers.google.com/maps/documentation/javascript/images/circle.png',
      anchor: new google.maps.Point(10, 10),
      scaledSize: new google.maps.Size(10, 17)
    }
  });
  markersList.push(marker)
  
  // handle clicks on markers
  google.maps.event.addListener(marker, 'click', function () {
    var request = {
      placeId: place.place_id
    };

    service.getDetails(request, function (result, status) {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        console.error(status);
        return;
      }
      try {
        var theHours = makeHoursHTML(result.opening_hours.periods);
      } catch (error) {
        console.log(error);
        var theHours = '';
      }
      try {
        var telNo = result.formatted_phone_number;
      } catch (error) {
        console.log(error);
        var telNo = '';
      }

      var bubbleHTML = "<b>"+result.name + "</b><br>" + result.website + "<br>" + result.formatted_address + "<br>" + telNo + "<br>" + theHours;
      console.log("what's up?")
      infoWindow.setContent(bubbleHTML);
      infoWindow.open(map, marker);
    });
  });
}

function listPlaces() {
//   console.log("in ListPlaces")
//   console.log(markersList)
  for (i=0; i<markersList.length; i++) {
    
    // console.log(i, markersList[i]);
  }
}
