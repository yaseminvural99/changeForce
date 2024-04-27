function beforeSubmit(){
    let datePicker=document.getElementById('Date_of_Birth__c');
    let hiddenDate= document.getElementById('Date_of_Birth__c');
    let formattedDate=new Date(datePicker.value).toLocaleDateString("en-GB");
    hiddenDate.value=formattedDate;
}

