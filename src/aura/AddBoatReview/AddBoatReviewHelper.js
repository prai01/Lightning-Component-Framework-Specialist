({
	onInit : function(component, event) {
        var boat = component.get("v.boat");
        console.log("AddBoatReviewHelper.onInit-boat="+ JSON.stringify(boat));
        
        component.find("service").getNewRecord(
        	"BoatReview__c",// sObject type(objectAPIName)
        	null,			// recordTypeId
        	false,			// skip cache?
            $A.getCallback(function() {
                var rec = component.get("v.boatReview");
                var error = component.get("v.recordError");
                var boat = component.get("v.boat");
                
                if(error || (rec === null)){
                    console.log("AddBoatReviewHelper.onInit-Error initializing record templage:"+error);
                    return;
                }
                else {
                    console.log("AddBoatReviewHelper.onInit-Record template initialized: " + rec.sObjectType);
                }
            })
        );
	}
})