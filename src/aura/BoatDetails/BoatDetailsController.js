({
	onBoatSelected : function(component, event, helper) {
		var boat=event.getParam("boat");
		console.log('BoatDetailsController.boat='+boat);
        component.set("v.id", boat.Id);
		
		var tempRec =  component.find("service");
		tempRec.reloadRecord();
	},
	onRecordUpdated: function(component, event, helper){
        var BRcmp = component.find("BRcmp");
        if(typeof BoatReviews != 'undefined'){
        	var auraMethodResult = BRcmp.refresh();        
        }
	},
    onBoatReviewAdded:function(component, event, helper){
    	component.find("boatDetails").set("v.selectedTabId","boatreviewtab");
        
        var BRcmp = component.find("BRcmp");
        if(typeof BoatReviews != 'undefined'){
        	var auraMethodResult = BRcmp.refresh();        
        }
	}
})