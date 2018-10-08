public with sharing class BoatReviews {
    
    @AuraEnabled
    public static List<BoatReview__c> getAll(Id boatId){
        System.debug('BoatReviews.getAll is being executed for boatId='+boatId);
        List<BoatReview__c> brList= [SELECT Id, Name, Comment__c, Rating__c, 
                		LastModifiedDate, CreatedDate, 
                		CreatedBy.Name, CreatedBy.SmallPhotoUrl,
                		CreatedBy.CompanyName 
                FROM 
                	BoatReview__c 
                WHERE Boat__c = :boatId
                ORDER BY LastModifiedDate DESC];
		System.debug('brList='+brList);
        return brList;
    }
    
}