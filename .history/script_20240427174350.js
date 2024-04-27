function BeforeSubmit(){
    let datePicker=document.getElementById('date-of-birth');
    let hidden= document.getElementById('Date_of_Birth__c');
    let formattedDate=new Date(datePicker.value).toLocaleDateString("en-GB");
    hiddenDate.value=formattedDate;
}
function BeforeSubmit2(){
    let datePicker=document.getElementById('Contract-Date');
    let hidden= document.getElementById('Contract_Date__c');
    let formattedDate=new Date(datePicker.value).toLocaleDateString("en-GB");
    hiddenDate.value=formattedDate;
}
