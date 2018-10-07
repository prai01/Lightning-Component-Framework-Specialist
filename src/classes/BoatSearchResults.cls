public class BoatSearchResults {

    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
    	    List<Boat__c> boats = new List<Boat__c>();
    		
    		try{
    			//check if user has access to the name field
    			if ((!Schema.SObjectType.Boat__c.fields.Name.isAccessible())){
    				throw new System.NoAccessException();
    				}
                
                if (String.isEmpty(boatTypeId)){
                        boats = [select Id,Name,Picture__c,contact__r.Name,Geolocation__Latitude__s,Geolocation__Longitude__s  from Boat__c];
                }
                else{
                    boats = [select Id,Name,Picture__c,contact__r.Name,Geolocation__Latitude__s,Geolocation__Longitude__s  from Boat__c where BoatType__c =: boatTypeId];
                }
    		}
    		catch(Exception e){
    			return boats;
    		}
        
        return boats;
    }
}