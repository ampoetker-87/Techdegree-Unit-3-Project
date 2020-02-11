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
selectTheme();
hideColors();
    
// this addEventListern hides or shows color selection options based on the design option chosen
design.addEventListener('change', (e) => {
    if (e.target.value === 'js puns') {
        hideColors();
        $('#color option[value="cornflowerblue"]').show();
        $('#color option[value="darkslategrey"]').show();
        $('#color option[value="gold"]').show();
        $('#color').prop('selectedIndex', 0);
    } if (e.target.value === 'heart js') {
        hideColors();
        $('#color option[value="tomato"]').show();
        $('#color option[value="steelblue"]').show();
        $('#color option[value="dimgrey"]').show();
        $('#color').prop('selectedIndex', 3);
    } else {
        $('#color option[value="tomato"]').removeAttribute('selected');
        $('#color option[value="steelblue"]').removeAttribute('selected');
        $('#color option[value="dimgrey"]').removeAttribute('selected');
        $('#color option[value="cornflowerblue"]').removeAttribute('selected');
        $('#color option[value="darkslategrey"]').removeAttribute('selected');
        $('#color option[value="gold"]').removeAttribute('selected');
        hideColors();
        selectTheme();        
    }       
});




