function eforeSubmit(){
    let datePicker=document.getElementById('date-of-birth');
    let hidden= document.getElementById('date_of_birth__c');
    let formattedDate=new Date(datePicker.value).toLocaleDateString("en-GB"");
}