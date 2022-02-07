$(document).ready(function () {

    var educationTitleText = "Where I Studied";
    var i = 0;
    var speed = 50;

    typeOutEducationTitle();
    
    function typeOutEducationTitle() {
        if (i < educationTitleText.length) {
            document.querySelector("#education-title-text").textContent += educationTitleText.charAt(i);
            i++;
            setTimeout(typeOutEducationTitle, speed);
        }
    }

});