"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_register.js

   Author:  Maria De Jesus Rizo
   Date:    4.18.19
   
   Function List
   =============
   
   formTest()
      Performs a validation test on the selection of the conference
      session package and the conference discount number
   
   calcCart()
      Calculates the cost of the registration and saves data
      in session storage
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form


*/
// The code block below states that the anonymous function written within will be run when the page is loaded in the browser window.
window.addEventListener("load", function () {
      // The line below calls the calcCart function to run when the anonymous function is run.
      calcCart();
      // The line below states that the sessionTest function will run when the element with an id of regSubmit is clicked on the page by the user. 
      document.getElementById("regSubmit").onclick = sessionTest;
      // The following lines state that the elements with the specified ids, upon loosing the input focus, will run the calcCart function.
      document.getElementById("fnBox").onblur = calcCart;
      document.getElementById("lnBox").onblur = calcCart;
      document.getElementById("groupBox").onblur = calcCart;
      document.getElementById("mailBox").onblur = calcCart;
      document.getElementById("phoneBox").onblur = calcCart;
      document.getElementById("banquetBox").onblur = calcCart;
      // The line below states that the element with an id of sessionBox, upon changing, will run the calcCart function.
      document.getElementById("sessionBox").onchange = calcCart;
      // The line below states that the element with an id of mediaCB, upon being clicked, will run the calcCart function.
      document.getElementById("mediaCB").onclick = calcCart;
});

// The code block below creates a function with the name of sessionTest. This function is not given any parameters.
function sessionTest() {
      // The line below creates a variable with the name of confSession. The varaible is then assigned the element with the id of sessionBox.
      var confSession = document.getElementById("sessionBox");
      // The line below creates an if statement that will run when the index of the confSession variable is equal to the value of -1.
      if (confSession.selectedIndex === -1) {
            // If the condition above is true, the form will display the user the message written inside of the setCustomValidity method.
            confSession.setCustomValidity("Select a Session Package");
            // Otherwise, no message will be displayed.
      } else {
            confSession.setCustomValidity("");
      }

}

// The code block below creates a function with the name of calcCart. This function serves to calculate the cost of registartion while storing that information in sessionStorage. It is not given any parameters.

// Note: While session storage is considered to be a variable, it is not initialized in the same way that a regular variable would be. 
function calcCart() {
      // The line below states that the value of confName within the sessionStorage variable will be assigned the value of
      sessionStorage.confName = document.forms.regForm.elements.fnBox.value + " " + document.forms.regForm.elements.lnBox.value;
      // The following lines state that the value of the specified information stored in sessionStorage will be assigned the value of the specified elements with the provided ids in the HTML document.
      sessionStorage.confGroup = document.forms.regForm.elements.groupBox.value;
      sessionStorage.confMail = document.forms.regForm.elements.mailBox.value;
      sessionStorage.confPhone = document.forms.regForm.elements.phoneBox.value;
      sessionStorage.confBanquet = document.forms.regForm.elements.banquetBox.value;
      // The line below states that the value of confBanquetCost within the sessionStorage variable will be assigned the value of the confBanquet value mutiplied by 55.
      sessionStorage.confBanquetCost = sessionStorage.confBanquet * 55;
      // the line below creates a variable with the name of selectedIndex which is then assigned the value of the selectedIndex of the element with the id of sessionBox.
      var selectedIndex = document.getElementById("sessionBox").selectedIndex;
      // The line below creates an if statements that will run if the value of selectedInde is not -1.
      if (selectedIndex != -1) {
            // The line below states that the value of confSession within the sessionStorage variable will be assigned the value of the text of the element with the id of sessionBoxand the selectedIndex.
            sessionStorage.confSession = document.forms.regForm.elements.sessionBox[selectedIndex].text;
            // The line below states that the value of confSessionCost within the sessionStorage variable will be assigned the value of the value of the element with the id of sessionBox and the selectedIndex.
            sessionStorage.confSessionCost = document.forms.regForm.elements.sessionBox[selectedIndex].value;
            // Otherwise the value of confSession will be an empty string and the value of confSessionCost will be 0.
      } else {
            sessionStorage.confSession = "";
            sessionStorage.confSessionCost = 0;
      }
      // The line below creates an if statement that will run if the element with an id of mediaCB is checked in the form. 
      if (document.forms.regForm.elements.mediaCB.checked) {
            // The line below sets the value of confPack in the sessionStorage variable to yes.
            sessionStorage.confPack = "yes";
            //The line below sets the value of confPackCost in the sessionStorage variable to 115.
            sessionStorage.confPackCost = 115;
            // Otherwise, the value of confPack is set to no and the value of confPackSession is set to 0.
      } else {
            sessionStorage.confPack = "no"
            sessionStorage.confPackCost = 0;
      }
      // The line below states that the value of confTotal in the sessionSotrage variable will be set to the sum of confBanquetCost, confSessionCost, and confPackCost. The parseFloat method converts the sting stored in each of these to a number. 
      sessionStorage.confTotal = parseFloat(sessionStorage.confBanquetCost) + parseFloat(sessionStorage.confSessionCost) + parseFloat(sessionStorage.confPackCost);
      // The line below calls the writeSessionValues function to run.
      writeSessionValues();
}

// The code block below creates a function with the name of writeSessionValues. This fuction is used to write the information stored within the sessionStorage variable into the registration summary form.
function writeSessionValues() {
      // The line below state that the textContent of the element with the id of regName will be reassigned to the value of the confName information stored within the sessioStorage variable. 
      document.getElementById("regName").textContent = sessionStorage.confName;
      // The comment above applies to the following six lines, the only difference being what id is being targeted and what infomation in the sessionStorage variable is being accessed.
      document.getElementById("regGroup").textContent = sessionStorage.confGroup;
      document.getElementById("regEmail").textContent = sessionStorage.confMail;
      document.getElementById("regPhone").textContent = sessionStorage.confPhone;
      document.getElementById("regSession").textContent = sessionStorage.confSession;
      document.getElementById("regBanquet").textContent = sessionStorage.confBanquet;
      document.getElementById("regPack").textContent = sessionStorage.confPack;
      // The prior comments apply here too, the only difference being that a dollar sign is being concatonated to the front of the information.
      document.getElementById("regTotal").textContent = "$" + sessionStorage.confTotal;
}