// places the focus on the name field on page load
document.getElementById("name").focus();

// Variables for the title dropdown and the other title field
const title = document.getElementById("title");
const otherTitle = document.getElementById("other-title");

// Variables for the design and color selection dropdowns
const design = document.getElementById('design');
const colorSelection = document.getElementById('color');

// This function hides the other title text box on page load
window.onload = function() {
    otherTitle.style.display = 'none';
};

// this shows the other title text box when 'other' has been selected from the title menu
title.addEventListener('change', (e) => {
    if (e.target.value === 'other') {
        otherTitle.style.display = 'block';
    } else {
        otherTitle.style.display = 'none';
    }
});

// this function hides all the color options
function hideColors() {
    $('#color').children().hide();
}

// this function displays the "select a theme" option in the color dropdown
function selectTheme() {
let option = document.createElement("option");
option.value = 'selecttheme';
option.text = 'Please select a theme';
colorSelection.appendChild(option);
option.setAttribute('selected', 'selected');
}

//declares functions to hide the colors and display "select a theme"
hideColors();
selectTheme();

// Hides the "select theme" from the design menu
function hideSelectTheme() {
    $('#design option').eq(0).attr('disabled', 'hidden', true).hide();
}

// Get the color dropdown menu and hide it initially
const colorSelectionDiv = document.getElementById('colors-js-puns');
$(colorSelectionDiv).hide();

// this addEventListern hides or shows color selection options based on the design option chosen
design.addEventListener('change', (e) => {
    hideSelectTheme()
    if (e.target.value === 'js puns') {
        $(colorSelectionDiv).show();
        hideColors();
        $('#color option[value="cornflowerblue"]').show();
        $('#color option[value="darkslategrey"]').show();
        $('#color option[value="gold"]').show();
        $('#color').prop('selectedIndex', 0);
    } if (e.target.value === 'heart js') {
        $(colorSelectionDiv).show();
        hideColors();
        $('#color option[value="tomato"]').show();
        $('#color option[value="steelblue"]').show();
        $('#color option[value="dimgrey"]').show();
        $('#color').prop('selectedIndex', 3);
    } else {
        $(colorSelectionDiv).hide();
        $('#color option[value="tomato"]').removeAttr('selected');
        $('#color option[value="steelblue"]').removeAttr('selected');
        $('#color option[value="dimgrey"]').removeAttr('selected');
        $('#color option[value="cornflowerblue"]').removeAttr('selected');
        $('#color option[value="darkslategrey"]').removeAttr('selected');
        $('#color option[value="gold"]').removeAttr('selected');
        hideColors();
    }       
});


// Variables for storing the activities section and the total price div and calculation
const activities = document.getElementsByClassName("activities");
const activityCheckboxes = $('.activities input:checkbox');
let totalPrice = 0;
const totalPriceDiv = document.createElement('div');
totalPriceDiv.className = "total-price";
let textContent = totalPriceDiv.textContent = 'Total Price: $' + totalPrice + '.00';
$(activities).append(totalPriceDiv);

// When checkboxes are clicked their day and time data is checked against other events
// conflicting events are then disabled
// The cost of each selected event is caluclated and displayed in the total price line
$(activityCheckboxes).change(function (event) {

    for (let i = 0; i < activityCheckboxes.length; i++) {
        let eventTime = event.target.getAttribute('data-day-and-time');
        let conflictEvent = activityCheckboxes[i].getAttribute('data-day-and-time')
        let eventName = activityCheckboxes[i].getAttribute('name');
        let clickedEventName = event.target.getAttribute('name');
        if (conflictEvent === eventTime && clickedEventName !== eventName) {
        if ($(event.target).is(":checked")) {
                $(activityCheckboxes[i]).prop('disabled', true);
            } else {
                $(activityCheckboxes[i]).prop('disabled', false);
            }
        }
    }
    for (let i = 0; i < activities.length; i++) {
        if ($(event.target).is(":checked")) {
            totalPrice += parseInt(event.target.getAttribute('data-cost'));
            totalPriceDiv.textContent = 'Total Price: $' + totalPrice + '.00';
        } else {
            totalPrice -= parseInt(event.target.getAttribute('data-cost'));
            totalPriceDiv.textContent = 'Total Price: $' + totalPrice + '.00';
        }
    }
  });
  
// Hide payment method sections and then show based on what is selected
// Show the credit card payment section on page load
const payment = document.getElementById('payment');
const creditCardDiv = document.getElementById('credit-card');
const paypalDiv = document.getElementById('paypal');
const bitcoinDiv = document.getElementById('bitcoin');

function hideSelectPayment() {
    $('#payment option').eq(0).attr('disabled', 'hidden', true).hide();
}
function hideCreditCard() {
    $(creditCardDiv).hide();
}
function hidePaypal() {
    $(paypalDiv).hide();
}
function hideBitcoin() {
    $(bitcoinDiv).hide();
}

hidePaypal();
hideBitcoin();

$('#payment').prop('selectedIndex', 1);

payment.addEventListener('change', (e) => {
    hideSelectPayment();
    if (e.target.value === 'credit card') {
        $(creditCardDiv).show();
        hideBitcoin();
        hidePaypal();
    } if (e.target.value === 'paypal') {
        $(paypalDiv).show();
        hideCreditCard();
        hideBitcoin();
    } if (e.target.value === 'bitcoin') {
        $(bitcoinDiv).show();
        hidePaypal();
        hideCreditCard();
    }       
});


// Form field variables
const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#mail");
const creditcard = document.querySelector("#cc-num");
const zipcode = document.querySelector("#zip");
const cvv = document.querySelector("#cvv");

// Name validation
const nameValidator = () => {
    let nameValue = name.value;
    console.log(nameValue);
    if (name.value.length > 0) {
        return (true);
    } else {
        return (false);

    }
};

// Email validation
const emailValidator = () => {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let emailValue = email.value;
    console.log(emailValue);
    if (emailValue.match(mailformat)) {
        return (true)
    } else {
        return (false)
    }
};

// Activities validation
const activitiesValidator = () => {
    if ($(activityCheckboxes).is(":checked")) {
        console.log('activity is checked');
        return (true);
    } else {
        return (false);
    }
};

// Validation for credit card only if that is the selected payment options

// Credit card validation
const creditcardValidator = () => {
    let creditcardFormat = /4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11}/;
    let creditcardValue = creditcard.value;
    if (creditcardValue.match(creditcardFormat)) {
        return (true);
    } else {
        return (false);
    }
};

// zipcode validation
const zipcodeValidator = () => {
    let zipcodeFormat = /^[0-9]{5}$/;
    let zipcodeValue = zipcode.value;
    if (zipcodeValue.match(zipcodeFormat)) {
        return (true);
    } else {
        return (false);
    }
};

// CVV validation
const cvvValidator = () => {
    let cvvFormat = /^[0-9]{3}$/;
    let cvvValue = cvv.value;
    if (cvvValue.match(cvvFormat)) {
        return (true);
    } else {
        return (false);
    }
};


// Form submit and validation error messages
form.addEventListener('submit', (e) => {
    if (!nameValidator()) {
        if ($('.name-error').length > 0) {
            $(".name-error").remove();
          }
        e.preventDefault();
        name.style.borderColor = "red";
        $(name).after("<span class='name-error' style='color:red;'>Please enter your name</span>");
    } else {
        name.removeAttribute("style");
        $(".name-error").remove();
    }
    if (!emailValidator()) {
        if ($('.email-error').length > 0) {
            $('.email-error').remove();
            } 
        e.preventDefault();
        email.style.borderColor = "red";
        $(email).after("<span class='email-error' style='color:red;'>Please enter your email</span>");
    } else {
        email.removeAttribute("style");
        $(".email-error").remove();
    }
    if (!activitiesValidator()) {
        if ($('.activities-error').length > 0) {
            $('.activities-error').remove();
            } 
        e.preventDefault();
        $(activities).after("<span class='activities-error' style='color:red;'>Please select at least one activity</span>");
    } else {
        $(".activities-error").remove();
    }

    if (payment.value === 'credit card') {
        if (!creditcardValidator()) {
            if ($('.cc-error').length > 0) {
                $('.cc-error').remove();
                } 
            e.preventDefault();
            creditcard.style.borderColor = "red";
            $(creditcard).after("<span class='cc-error' style='color:red;'>Please enter your credit card number</span>");
        } else {
            creditcard.removeAttribute("style");
            $(".cc-error").remove();
        }
        if (!zipcodeValidator()) {
            if ($('.zipcode-error').length > 0) {
                $('.zipcode-error').remove();
                } 
            e.preventDefault();
            zipcode.style.borderColor = "red";
            $(zipcode).after("<span class='zipcode-error' style='color:red;'>Please enter your billing zipcode</span>");
        } else {
            zipcode.removeAttribute("style");
            $(".zipcode-error").remove();
        }
        if (!cvvValidator()) {
            if ($('.cvv-error').length > 0) {
                $('.cvv-error').remove();
                } 
            e.preventDefault();
            cvv.style.borderColor = "red";
            $(cvv).after("<span class='cvv-error' style='color:red;'>Please enter your CVV</span>");
        } else {
            cvv.removeAttribute("style");
            $(".cvv-error").remove();
        }
    };
});





