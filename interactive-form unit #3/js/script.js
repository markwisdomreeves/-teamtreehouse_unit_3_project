
// ALL VARIBLES
// CHECKBOX VALIDATION ON SUBMIT
const inValidCheckedBoxMessage = $('<span id="invalid_checked_box_message">Please check atlease one checkboxes</span>');
const validCheckedBoxMessage = $('<span id="valid_checked_box_message">Thanks for checking</span>');

// LIVE FORM VALIDATION MESSAGES FOR ALL FORM INPUT
// username live input message variable
const liveValidNameMessage = $('<span id="live_valid_name_message">Thanks, name field is valid</span>');
const liveInvalidNameMessage = $('<span id="live_invalid_name_message">Please enter a vilid name: letters only</span>');
// email live input message variable
const liveValidEmailMessage = $('<span id="live_valid_email_message">Thanks, email field is valid</span>');
const liveInvalidEmailMessage = $('<span id="live_invalid_email_message">Please enter a valid email</span>');
// credit card number live input message variable
const liveValidCreditNumberMessage = $('<span id="live_valid_card_message">Thanks, this is a valid card number</span>');
const liveInvalidCreditNumberMessage = $('<span id="live_invalid_card_message">Must be between (13 to 16 digits long)</span>');
// zipcode live input message
const liveValidZipcodeMessage = $('<span id="live_valid_zipcode_message">Thanks, is valid</span>');
const liveInvalidZipcodeMessage = $('<span id="live_invalid_zipcode_message">Not valid zipcode</span>');
// cvv live input message
const liveValidCvvCodeMessage = $('<span id="live_valid_cvv_message">Thanks, is valid</span>');
const liveInvalidCvvCodeMessage = $('<span id="live_invalid_cvv_message">Cvv code not valid</span>');

const allCheckedActivities = $(".activities");
const totalDivContainer = $("<div>Total Cost: $</div>");
allCheckedActivities.append(totalDivContainer);
let totalActivityCost = 0;
const paymentContainer = $('option[value="select method"]');
paymentContainer.css("display", "none"); //hide selected method on page load
const creditCard = document.querySelector('option[value="credit card"]');
const paypal = document.querySelector('option[value="paypal"]');
const bitcoin = document.querySelector('option[value="bitcoin"]');
creditCard.selected = 'true'; //credit card will be display intially
let allElementItems = $("");
let date_and_time_attr = $("");
let dataCost = $("");
let targetedCheckedValue = $("");
let nameAttribute = $("");

//These two paypal and bitcoin container will be hidden intially on page load
$('#paypal').css("display", "none");
$('#bitcoin').css("display", "none");

$(document).ready(function(){
    $('#name').focus(); // set focus on the user name input on page load
    $('#other-title').hide() // hide the below input but show when javascript is disable 
    $('#color').hide(); // hide the color element initially on page load
    $('#design option:first').hide(); // hide the design element initially on page load
})

/* ############## LIVE VALIDATION ON THE USERNAME, EMAIL AND PAYMENT CARD SECTIONS ############## */
$(document).ready(function(){
    // use keyup event on user name field
    $("#name").keyup(function(){
        if(validateName()){
            // if the user name is valid set the input text and border to red
            $("#name").before(liveValidNameMessage)
            $('#live_valid_name_message').css({"font-size":"1em", "color":"green"});
            $("#name").css("border", "2px solid green");
            liveInvalidNameMessage.css("display","none");
            liveValidNameMessage.css("display","block");
            return true;
        } else{
            // if the user name is not valid set the input text and border to red
            $("#name").before(liveInvalidNameMessage)
            $('#live_invalid_name_message').css({"font-size":"1em", "color":"red"});
            $("#name").css("border", "2px solid red");
            liveInvalidNameMessage.css("display","block");
            liveValidNameMessage.css("display","none"); 
            return false;  
        }
    });

    // use keyup event on email field
    $("#mail").keyup(function(){
        if(validateEmail()){
            // if the user email is valid set the input text and border to red
            $("#mail").before(liveValidEmailMessage)
            $('#live_valid_email_message').css({"font-size":"1em", "color":"green"});
            $("#mail").css("border", "2px solid green");
            liveInvalidEmailMessage.css("display","none");
            liveValidEmailMessage.css("display","block");
            return true;
        } else{
            // if the user email is not valid set the input text and border to red
            $("#mail").before(liveInvalidEmailMessage)
            $('#live_invalid_email_message').css({"font-size":"1em", "color":"red"});
            $("#mail").css("border", "2px solid red");
            liveInvalidEmailMessage.css("display","block");
            liveValidEmailMessage.css("display","none");
            return false;   
        }
    });

    // use keyup event on user credit card Number
    $("#cc-num").keyup(function(){
        if(validateCardNumber()){
            // if the user credit credit number is valid set the input text and border to red
            $("#cc-num").before(liveValidCreditNumberMessage)
            $('#live_valid_card_message').css({"font-size":"1em", "color":"green"});
            $("#cc-num").css("border", "2px solid green");
            liveInvalidCreditNumberMessage.css("display","none");
            liveValidCreditNumberMessage.css("display","block");
            return true;
        } else{
            // if the user credit card number is not valid set the input text and border to red
            $("#cc-num").before(liveInvalidCreditNumberMessage)
            $('#live_invalid_card_message').css({"font-size":"1em", "color":"red"});
            $("#cc-num").css("border", "2px solid red");
            liveInvalidCreditNumberMessage.css("display","block");
            liveValidCreditNumberMessage.css("display","none");
            return false;   
        }
    });

    // use keyup event on zip code field
    $("#zip").keyup(function(){
        if(validateZipCode()){
           // if the user zip code is valid set the input text and border to red
           $("#zip").before(liveValidZipcodeMessage)
           $('#live_valid_zipcode_message').css({"font-size":"1em", "color":"green"});
           $("#zip").css("border", "2px solid green");
           liveInvalidZipcodeMessage.css("display","none");
           liveValidZipcodeMessage.css("display","block");
           return true;
       } else{
           // if the user zip code is not valid set the input text and border to red
           $("#zip").before(liveInvalidZipcodeMessage)
           $('#live_invalid_zipcode_message').css({"font-size":"1em", "color":"red"});
           $("#zip").css("border", "2px solid red");
           liveInvalidZipcodeMessage.css("display","block");
           liveValidZipcodeMessage.css("display","none");
           return false;   
       }
    });

    // use keyup event on CVV field
    $("#cvv").keyup(function(){
        if(validateCvvCode()){
            // if the user cvv code is valid set the input text and border to red
           $("#cvv").before(liveValidCvvCodeMessage)
           $('#live_valid_cvv_message').css({"font-size":"1em", "color":"green"});
           $("#cvv").css("border", "2px solid green");
           liveInvalidCvvCodeMessage.css("display","none");
           liveValidCvvCodeMessage.css("display","block");
           return true;
       } else{
           // if the user cvv code is not valid set the input text and border to red
           $("#cvv").before(liveInvalidCvvCodeMessage)
           $('#live_invalid_cvv_message').css({"font-size":"1em", "color":"red"});
           $("#cvv").css("border", "2px solid red");
           liveInvalidCvvCodeMessage.css("display","block");
           liveValidCvvCodeMessage.css("display","none");
           return false;   
       }
    });   
});


// name validation function
function validateName(){
    // get value from name input
    const name = $("#name").val();
    const regexName = /^[A-Za-z]+\s?([A-Za-z]+)?$/; 
    if(regexName.test(name)){
        return true;
    } else{
        return false;
    }
}
// email validation function
function validateEmail(){
    // get value from email input
    const email = $("#mail").val();
    const regexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if(regexEmail.test(email)){
        return true;
    } else{
        return false;
    }
}
// card number validation function
function validateCardNumber(){
    // get value from card input
    const cardValue = $("#cc-num").val();
    const regexCardNumber = /^\d{13,16}$/;
    if(regexCardNumber.test(cardValue)){
        return true;
    } else{
        return false;
    }
}
// zip code validation function
function validateZipCode(){
    // get zip code value
    const zipCodeValue = $("#zip").val();
    const regexZipCode = /^\d{5}$|^\d{5}-\d{4}$/;
    if(regexZipCode.test(zipCodeValue)){
        return true;
    } else{
        return false;
    }
}
// CVV code validation function
function validateCvvCode(){
    // get cvv code value
    const cvvValue = $("#cvv").val();
    const regexCvvCode = /^[0-9]{3,3}$/;
    if(regexCvvCode.test(cvvValue)){
        return true;
    } else{
        return false;
    }
}


/* ############## ACTIVITIES / CHECKBOX SECTION ############## */
allCheckedActivities.change(function(event){
    targetedCheckedValue = $(event.target);
    // geting all attribute as data-day-and-time
    date_and_time_attr = targetedCheckedValue.attr('data-day-and-time');
    //parsing the input clicked to an integer value when click
    dataCost = parseInt(targetedCheckedValue.attr('data-cost').slice(-3));
    // checking if a checkedbox property is check
    if (targetedCheckedValue.prop('checked')) {
        totalActivityCost += dataCost;
    } else
        totalActivityCost -= dataCost;
    $('.activities div').html('<div>Total Cost: $' + totalActivityCost + '</div>');
    // looping over all items and checking if a single item is checked by the name attribute
    allElementItems = $('.activities input');
    for (let i = 0; i <= allElementItems.length; i++) {
        nameAttribute = targetedCheckedValue.attr('name');
        if (targetedCheckedValue.prop('checked')) {  
            // checking for both attributes on each item
            if (date_and_time_attr === $(allElementItems[i]).attr('data-day-and-time') && 
                nameAttribute != $(allElementItems[i]).attr('name')) { 
               //if attributes matched, matching items disabled
                $(allElementItems[i]).attr('disabled', true); 
            }
        } else {
              // if not, remove disabled from from item
            if (date_and_time_attr === $(allElementItems[i]).attr('data-day-and-time') && 
                nameAttribute != $(allElementItems[i]).attr('name')) {
                $(allElementItems[i]).removeAttr('disabled');
            }
        }
    }
})


/* #################### T.SHIRT SECTION #################### */
$('#design').on('change', function(){
    if ($('#design option:selected').val() == "js puns"){
        $('#color').show();
        $('#color option[value="cornflowerblue"]').show().attr('selected', 'selected');
        $('#color option[value="darkslategrey"]').show();
        $('#color option[value="gold"]').show();
        $('#color option[value="tomato"]').hide().attr('selected', false);
        $('#color option[value="steelblue"]').hide();
        $('#color option[value="dimgrey"]').hide();

    }else if ($('#design option:selected').val() == 'heart js'){
        $('#color').show();
        $('#color option[value="cornflowerblue"]').hide().attr('selected', false);
        $('#color option[value="darkslategrey"]').hide();
        $('#color option[value="gold"]').hide();
        $('#color option[value="tomato"]').show().attr('selected', true);
        $('#color option[value="steelblue"]').show();
        $('#color option[value="dimgrey"]').show();
    }
});

/* #################### PAYMENT METHOD SECTION #################### */
$("#payment").change(function() {
    if (paypal.selected) {
        $('#credit-card').css("display", "none");
        $('#paypal').css("display", "block");
        $('#bitcoin').css("display", "none");

      } else if (bitcoin.selected) {
        $('#credit-card').css("display", "none");
        $('#paypal').css("display", "none");
        $('#bitcoin').css("display", "block");

      } else if (creditCard.selected) {
        $('#credit-card').css("display", "block");
        $('#paypal').css("display", "none");
        $('#bitcoin').css("display", "none");
      }
  });

  
// ON SUBMIT FORM VALIDATION(VALIDATION FORM ALL INPUT WHEN FORM IS SUBMIT)
  $("form").submit(function(event) {
    event.preventDefault();
    if(validateName() == "" || validateEmail() == "" ||
      validateCardNumber() == "" || validateZipCode() == "" || 
      validateCvvCode() == ""){
        $("#name").before(liveInvalidNameMessage);
        $("#mail").before(liveInvalidEmailMessage);
        $("#cc-num").before(liveInvalidCreditNumberMessage);
        $("#zip").before(liveInvalidZipcodeMessage);
        $("#cvv").before(liveInvalidCvvCodeMessage);
        $(".activities").before(inValidCheckedBoxMessage);
        $('#live_invalid_name_message').css({"font-size":"1em", "color":"red"});
        $('#live_invalid_email_message').css({"font-size":"1em", "color":"red"});
        $('#live_invalid_card_message').css({"font-size":"1em", "color":"red"});
        $('#live_invalid_zipcode_message').css({"font-size":"1em", "color":"red"});
        $('#live_invalid_cvv_message').css({"font-size":"1em", "color":"red"});
        $("#invalid_checked_box_message").css({"font-size":"1.5em", "color":"red"});
        $("#name").css("border", "2px solid red");
        $("#mail").css("border", "2px solid red");
        $("#cc-num").css("border", "2px solid red");
        $("#zip").css("border", "2px solid red");
        $("#cvv").css("border", "2px solid red");
        liveInvalidNameMessage.css("display","block");
        liveInvalidEmailMessage.css("display","block");  
        liveInvalidCreditNumberMessage.css("display","block");  
        liveInvalidZipcodeMessage.css("display","block");  
        liveInvalidCvvCodeMessage.css("display","block");
        inValidCheckedBoxMessage.css("display", "block");
        validCheckedBoxMessage.css("display", "none");
        console.log("form did not submit...");
        return false;
     } else {
        $("#name").css("border", "none");
        $("#mail").css("border", "none");
        $("#cc-num").css("border", "none");
        $("#zip").css("border", "none");
        $("#cvv").css("border", "none");
        validCheckedBoxMessage.css("display", "none");
        liveValidNameMessage.css("display","none");
        liveValidEmailMessage.css("display","none");
        liveValidCreditNumberMessage.css("display","none");
        liveValidZipcodeMessage.css("display","none");
        liveValidCvvCodeMessage.css("display","none");
        $("#name").val(" ");
        $("#mail").val(" ");
        $("#cc-num").val(" ");
        $("#zip").val(" ");
        $("#cvv").val(" ");
        $('#name').focus();
        console.log("form submited...");
        $("form")[0].reset(); // reseting the form after submit
        return true;   
    }

});
