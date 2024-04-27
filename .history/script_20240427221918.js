function beforeSubmit(){
    let datePicker = document.getElementById('date-of-birth');
    let hiddenDate= document.getElementById('Date_of_Birth__c');

    let formattedDate = new Date(datePicker.value).toLocaleDateString("en-GB", { day: '2-digit', month: '2-digit', year: 'numeric' });



    //let formattedDate = new Date(datePicker.value).toLocaleDateString("en-US", { month: '2-digit', day: '2-digit', year: 'numeric' });
   // Tarihi alma
/*let date = new Date(datePicker.value);

// Tarih değerlerini alarak MM/DD/YYYY biçimine dönüştürme
let month = date.getMonth() + 1;
let day = date.getDate();
let year = date.getFullYear();

// Biçimlendirilmiş tarihi oluşturma
let formattedDate = month + '/' + day + '/' + year;
*/
   //let formattedDate = datePicker.value;
   hiddenDate.value = formattedDate;
    //alert(formattedDate);
}
function timestamp() { var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500); 

