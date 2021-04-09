// Initialize and add the map
//initMap() function will be invoked by callback parameter on html page
function initMap() {
    // The location of UoN (latitude and longitude)
    const uonLocation = { lat: 52.230517350453376, lng: -0.8870532745856453 };

    // create map object centered at UoN
    const uonMap = new google.maps.Map(document.getElementById("uonMap"), {
      zoom: 4,
      center: uonLocation,
    });

    // add marker positioned at UoN
    const marker = new google.maps.Marker({
      position: uonLocation,
      map: uonMap,
    });
  }
