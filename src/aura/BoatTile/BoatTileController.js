({
	onBoatClick : function(component, event, helper) {
		var cmpEvent = component.getEvent("BoatSelect");
        var boatId = event.getSource().get("v.name");
        console.log('BoatTileController.onBoatClick-boatId='+boatId);
        cmpEvent.setParams({"boatId" : boatId});
        cmpEvent.fire();      
        console.log('BoatTile.onBoatClick-cmpEvent.fired');
        
        var appEvent=$A.get("e.c:BoatSelected");
        var boat=component.get("v.boat");
        console.log('BoatTileController.onBoatClick-boat='+JSON.stringify(boat));    
        appEvent.setParams({"boat" : boat});
        console.log('BoatTileController.onBoatClick-about to fire appEvent'+appEvent);
        appEvent.fire();
        
        var mapEvent=$A.get("e.c:PlotMapMarker");
        console.log('boat***='+JSON.stringify(boat)); 
       
        /* 
        * Note that fields names are case sensitive in client side scripting.
        */
        console.log('BoatTileController.onBoatClick-boat.Geolocation__Latitude__s='+boat.Geolocation__Latitude__s);
        console.log('BoatTileController.onBoatClick-boat.Geolocation__Longitude__s='+boat.Geolocation__Longitude__s);
        mapEvent.setParams({"lat": boat.Geolocation__Latitude__s,"lng": boat.Geolocation__Longitude__s});
        mapEvent.fire();
    }
})