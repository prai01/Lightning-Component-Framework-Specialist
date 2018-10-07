({
	onInit : function(component, event) {
		var boat = component.get("v.boat");
        console.log("BoatReviewsHelper.boat="+JSON.stringify(boat));
        var action = component.get("c.getAll");
        console.log("boat.Id="+boat.Id);
        
        action.setParams({boatId : boat.Id});
        
        console.log('About to initiate action.setCallback');
        //console.log('action.getParam='+ action.getParam({boatId}));
        
        action.setCallback(this, function(response){
            var state = response.getState();
            console.log("state="+JSON.stringify(state));
            if(state === "SUCCESS"){
                component.set("v.boatReviews", response.getReturnValue());
            }
            else if (state === "ERROR"){
            	var errors= response.getError();
                 if(errors){
                     if(errors[0] && errors[0].message){
                        console.log("Encountered Error:" + errors[0].message);
                       }
                    	} else {
                        console.log("Encountered Error: Unknown");
                    }
                }
        });
        $A.enqueueAction(action)
	}
})