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

// this function hides or shows color selection options based on the design option chosen
design.addEventListener('change', (e) => {
    if (e.target.value === 'js puns') {
        $('#color').children().hide();
        $('#color option[value="cornflowerblue"]').show().select();
        $('#color option[value="darkslategrey"]').show();
        $('#color option[value="gold"]').show();
    } if (e.target.value === 'heart js') {
        $('#color').children().hide();
        $('#color option[value="tomato"]').show().select();
        $('#color option[value="steelblue"]').show();
        $('#color option[value="dimgrey"]').show();
    }
});


