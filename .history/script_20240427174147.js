function BeforeSubmit(){
    let datePicker=document.getElementById('date-of-birth');
    let hidden= document.getElementById('Date_of_Birth__c');
    let formattedDate=new Date(datePicker.value).toLocaleDateString("en-GB");
    hiddenDate.value=formattedDate;
}
function BeforeSubmit(){