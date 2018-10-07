({
	onFormSubmit : function(component, event, helper) {
		console.log('BoatSearch.onFormSubmit is being executed!');
        var formData = event.getParam("formData");
        var boatTypeId = formData.boatTypeId;
        console.log('BoatSearch.onFormSubmit-boatTypeId='+boatTypeId);
        var bsrCmp = component.find("bsrId");
        var auraMethodResult = bsrCmp.search(boatTypeId);	
	}
})