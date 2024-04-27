function beforeSubmit(){
    let datePicker=document.getElementById('date_of_birth__c');
    let hiddenDate= document.getElementById('Date_of_Birth__c');
   // let formattedDate=new Date(datePicker.value).toLocaleDateString("en-GB");
   let formattedDate = datePicker.value;
   hiddenDate.value=formattedDate;
    //alert(formattedDate);
}

