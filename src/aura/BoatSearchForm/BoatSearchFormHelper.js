({
	getBoatTypes : function(component) {
		var action = component.get("c.getBoatTypes");
        action.setCallback(this, function(response){
            var responseState = response.getState();
            if(responseState == "SUCCESS"){
                var boatTypeList = response.getReturnValue();
                component.set("v.boatTypes", boatTypeList)
            }
        });
        $A.enqueueAction(action)
    },
    /*Check if event.force.createRecord event is supported and show or hide the New button*/
    checkIfNewBtnCanBeEnabled : function(component){
        var createRecordEvent = $A.get('event.force:createRecord');
        console.log('crateRecordEvent='+createRecordEvent);
        if(createRecordEvent){
            component.set("v.boolShowNewBtn", true);
        }
    }
})