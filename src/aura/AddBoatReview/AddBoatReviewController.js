({
    doInit:function(component, event, helper){
      helper.onInit(component, event);  
    },
	onSave : function(component, event, helper) {        
        component.set("v.simpleNewBoatReview.Boat__c", component.get("v.boat.Id"));
       
        console.log("AddBoatReviewController.onSave-v.boatReview="+JSON.stringify(component.get("v.boatReview")));
        console.log("AddBoatReviewController.onSave-v.simpleNewBoatReview="+JSON.stringify(component.get("v.simpleNewBoatReview")));
        
        component.find("service").saveRecord(function(saveResult){
            console.log('AddBoatReviewController.onSave-saveResult='+JSON.stringify(saveResult));
            if(saveResult.state === "SUCCESS" || saveResult.state === "DRAFT")
            {
                var resultsToast = $A.get("e.force:showToast");
                if(resultsToast){
                    resultsToast.setParams({
                        "title":"Submitted",
                        "message":"The review was saved."
                    });
                    resultsToast.fire();
                } else {
                    alert("The review was saved.");
                }
            }
            else if (saveResult.state === "INCOMPLETE"){
                console.log("AddBoatReviewController.onSave-User is offline, device doesn't support drafts.");
            }
            else if (saveResult.state === "ERROR"){
                console.log("AddBoatReviewController.onSave-Encountered error while attampting to save Review. Error:"+
                           JSON.stringify(saveResult.error));       
            } else {
                console.log("AddBoatReviewController.onSave-Unknown error, state:"+ saveResult.state + 
                            ',error :' +
                           JSON.stringify(saveResult.error));
            }
             
            var boatReviewAddedEvent = component.getEvent("boatReviewAdded");
            boatReviewAddedEvent.fire();            
            //helper.onInit(component, event);
        });
	},
    onRecordUpdated : function(component, event, helper) {
		var eventParams=event.getParams();
        if(eventParams.changeType==="CHANGED"){
            var changedFields = eventParams.changedFields;
            var saveResultsToast = $A.get("e.force:showToast");
            if(saveResultsToast != 'undefined')
            {
                saveResutlsToast.setParams({
                    "title":"Saved",
                    "message":"Boat Review Saved"
                });
                saveResultsToast.fire();
            }
            else {
                alert("Boat Review Saved");
            }
        }
	}
})