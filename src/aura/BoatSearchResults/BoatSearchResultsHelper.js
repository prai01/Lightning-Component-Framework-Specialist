({
	onSearch : function(component, event, helper) {
		var action = component.get("c.getBoats");
        var btid = component.get("v.boatTypeId");        
        action.setParams({boatTypeId : btid});
        
        action.setCallback(this, function(response){
            var state = response.getState();
            
            if(state === "SUCCESS"){
                component.set("v.boats", response.getReturnValue());
            }
            else if (state === "INCOMPLETE"){
                console.log('INCOMPLETE');
            }
            else if (state === "ERROR"){
            		var errors= response.getError();
                 if(errors){
                     if(errors[0] && errors[0].message){
                        console.log("BoatSearchResultsHelper.onSearch-Encountered Error:" + errors[0].message);
                       }
                    	} else {
                        console.log("BoatSearchResultsHelper.onSearch-Encountered Error: Unknown");
                    }
                }
        		});
        	$A.enqueueAction(action);
	}
})