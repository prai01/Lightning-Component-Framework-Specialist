({
	doInit : function(component, event, helper) {        
        var eventParams = event.getParams();
        console.log("BoatSearchFormController.doInit-eventParams="+eventParams);
        helper.getBoatTypes(component);
        helper.checkIfNewBtnCanBeEnabled(component);
	},
    doSelectBoatType : function(component, event, helper){
        var boatType = component.find("boatTypes").get("v.value");
        component.set("v.selectedBoatType",boatType);
    },
	onFormSubmit : function(component, event, helper){
		var boatTypeId = component.get("v.selectedBoatType"); 
		var formSubmit = component.getEvent("formSubmit");
		console.log('BoatSearchFormController.onFormSubmit-boatTypeId='+boatTypeId);
		formSubmit.setParams(
			{"formData": 
				{"boatTypeId": boatTypeId}
			});
		formSubmit.fire();
	},
	createNewBoatOfSelectedBoatType : function(component, event, helper){
		var boatType = component.find("boatTypes").get("v.value");
		console.log('BoatSearchFormController.createNewBoatOfSelectedBoatType-boatType='+boatType);
		
        if(!boatType){
			boatType = null;
		}		
	
		var createRecordEvent = $A.get("e.force:createRecord");
		createRecordEvent.setParams({
			"entityApiName":"Boat__c",
			"defaultFieldValues": {
				'BoatType__c': boatType
				}
			});
		createRecordEvent.fire();
	}
})