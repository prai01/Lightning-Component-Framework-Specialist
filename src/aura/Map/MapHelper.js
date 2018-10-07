({
	getLeafletMap : function(component, latitude, longitude) {
		var leafletMap = component.get('v.leafletMap');
		
		if (!leafletMap) {
	    	var mapContainer = component.find('map').getElement(); 
		    leafletMap = L.map(mapContainer, {zoomControl: false, tap: false})
		    	.setView([latitude, longitude], 13);
		    component.set('v.leafletMap', leafletMap);
		}

		return leafletMap;
	}
})