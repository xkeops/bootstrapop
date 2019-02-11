$(document).ready(function(){
	  $( "#direction_modal" ).on('shown.bs.modal', function(){
	    initialize_direction();
	  });
	});

	function initialize_direction() {
	    var directionDisplay;
	    var directionsService = new google.maps.DirectionsService();
	    var direction_map;

		var outputAtoB = document.getElementById('a2b');
		
	    directionDisplay = new google.maps.DirectionsRenderer();
	    var myOptions = {
	        mapTypeId: google.maps.MapTypeId.ROADMAP,
	    }
	    direction_map = new google.maps.Map(document.getElementById("direction_canvas"), myOptions);
	    directionDisplay.setMap(direction_map);

	    var start = '345 Main Street West, Hamilton, ON, Canada';
	    var end = '950 Burnhamthorpe Rd W Mississauga, ON L5C 3B4';
	    var request = {
	        origin:start,
	        destination:end,
	        travelMode: google.maps.DirectionsTravelMode.DRIVING
	    };
	    directionsService.route(request, function(response, status) {
	        if (status == google.maps.DirectionsStatus.OK) {
	            directionDisplay.setDirections(response);
				outputAtoB.innerHTML = Math.round(directionDisplay.getDirections().routes[directionDisplay.getRouteIndex()].legs[0].distance.value / 1000) + "Km";
	        }
	    });
	}