function beforeSubmit(){
    let datePicker = document.getElementById('date-of-birth');
    let hiddenDate= document.getElementById('Date_of_Birth__c');

    //let formattedDate = new Date(datePicker.value).toLocaleDateString("en-US", { month: '2-digit', day: '2-digit', year: 'numeric' });
    let rawDate = datePicker.value;
    let splitDate = rawDate.split('-');
    let formattedDate = splitDate[1] + '/' + splitDate[2] + '/' + splitDate[0];
   //let formattedDate = datePicker.value;
   hiddenDate.value = formattedDate;
    //alert(formattedDate);
}

