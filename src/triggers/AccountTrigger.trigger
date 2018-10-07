trigger AccountTrigger on Account (after update) {
System.debug('Account after update!');
}