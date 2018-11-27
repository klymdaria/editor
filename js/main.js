;
(function () {
    "use strict";

    const showText = document.querySelector('.ba-text'),
        showEditor = document.querySelector('.ba-editor');


    //Hide the showEditor
    showEditor.hidden = true;
    //Announce the event for key
    document.addEventListener('keydown', changeField);

    function changeField(event) {
        console.log(event);
        //If user pressed key E and CTRL
        if (event.keyCode == 69 && event.ctrlKey && showEditor.hidden) {

            event.preventDefault();

            //Information from editor is recorded to div 
            //Trim deletes leading and trailing spaces
            showEditor.value = showText.innerHTML.trim();

            //Show the editor and hide the text
            showText.hidden = true;
            showEditor.hidden = false;

            showEditor.focus();

        } if (event.keyCode == 83 && event.ctrlKey && showText.hidden) {

            event.preventDefault();
            //Information from div is recorded to editor
            showText.innerHTML = showEditor.value;

            //Show the text and hide the editor
            showText.hidden = false;
            showEditor.hidden = true;
        }if (event.keyCode == 27 && showText.hidden) {

            event.preventDefault();
            showText.hidden = false;
            showEditor.hidden = true;

        }
    }

})();