({
	doSearch : function(component, event, helper) {
		helper.onSearch(component, event, helper);
	},
    onBoatSelect : function(component, event, helper){
        var boatId = event.getParam("boatId");
        component.set("v.selectedBoatId", boatId);
        console.log('BoatSearchResults.onBoatSelect-boatId='+boatId);
    },
    search : function (component, event, helper){
        var params= event.getParam('arguments');
        if (params){
        		component.set("v.boatTypeId", params.boatTypeId);
        		console.log("boatTypeId="+params.boatTypeId);
	        
	        helper.onSearch(component);
	        return "search complete.";
	       }
    }
})