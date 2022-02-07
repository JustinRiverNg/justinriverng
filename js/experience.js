$(document).ready(function () {

    var experienceTitleText = "Previous Experience";
    var i = 0;
    var speed = 50;

    typeOutExperienceTitle();
    
    function typeOutExperienceTitle() {
        if (i < experienceTitleText.length) {
            document.querySelector("#experience-title-text").textContent += experienceTitleText.charAt(i);
            i++;
            setTimeout(typeOutExperienceTitle, speed);
        }
    }

});