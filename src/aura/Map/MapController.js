({
	jsLoaded: function(component) {
        component.set("v.jsLoaded", true);
    },
    onPlotMapMarker: function(component, event, helper) {
    	var id = event.getParam('sObjectId');
    	var latitude = event.getParam('lat');
        var longitude = event.getParam('lng');
    	var label = event.getParam('label');
        
        console.log('id='+id);
        console.log('latitude='+latitude);
        console.log('longitude='+longitude);
        console.log('label='+label);
        
        try {
            if(latitude != null && longitude != null){
              
                component.set("v.location", "{'latitude' : latitude, 'longitude' : longitude}");
            }
    
            var leafletMap = helper.getLeafletMap(component, latitude, longitude);
            L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(leafletMap);
            
            L.marker([latitude, longitude]).addTo(leafletMap)
                .bindPopup(label)
                .openPopup();
            }
        catch(err){
            console.log('Encountered Error. '+err.message);
        }
    }
})