({
	onInit : function(component, event) {
        console.log('onInit is being executed');
        var boat = component.get("v.boat");
        console.log("boat="+ JSON.stringify(boat));
        
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
                    console.log("Record template initialized: " + rec.sObjectType);
                    //component.set("v.simpleNewBoatReview.Boat__c", boat.Id);
                    //component.set("v.boatReview.Boat__c", boat.Id);
                }
            })
        );
	}
})