function beforeSubmit(){
    let datePicker = document.getElementById('date-of-birth');
    let hiddenDate= document.getElementById('Date_of_Birth__c');

    //let formattedDate = new Date(datePicker.value).toLocaleDateString("en-US", { month: '2-digit', day: '2-digit', year: 'numeric' });

   //let formattedDate = datePicker.value;
   hiddenDate.value = formattedDate;
    //alert(formattedDate);
}

