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

window.addEventListener("load", function () {
      calcCart();

      document.getElementById("regSubmit").onclick = sessionTest;
      document.getElementById("fnBox").onblur = calcCart;
      document.getElementById("lnBox").onblur = calcCart;
      document.getElementById("groupBox").onblur = calcCart;
      document.getElementById("mailBox").onblur = calcCart;
      document.getElementById("phoneBox").onblur = calcCart;
      document.getElementById("banquetBox").onblur = calcCart;

      document.getElementById("sessionBox").onchange = calcCart;

      document.getElementById("mediaCB").onclick = calcCart;
});

function sessionTest() {
      sessionStorage.confSession = document.getElementById("sessionBox");
      if (confSession.selectedIndex === -1) {
            confSession.setCustomValidity("Select a Session Package");
      } else {
            confSession.setCustomValidity("");
      }

}

function calcCart() {
      sessionStorage.confName = document.getElementById("fnBox").value + " " + document.getElementById("lnBox").value;

      sessionStorage.confGroup = document.getElementById("groupBox").value;
      sessionStorage.confMail = document.getElementById("mailBox").value;
      sessionStorage.confPhone = document.getElementById("phoneBox").value;
      sessionStorage.confBanquet = document.getElementById("banquetBox").value;

      sessionStorage.confBanquetCost = sessionStorage.confBanquet * 55;

      sessionStorage.selectedIndex = document.forms.regForm.elements.sessionBox.value;
      if (sessionBox.selectedIndex !== -1) {
            sessionStorage.confSession = document.forms.regForm.elements.sessionBox[selectedIndex].textContent;
            sessionStorage.confSessionCost = document.forms.regForm.elements.sessionBox.value;
      } else {
            sessionStorage.confSession = "";
            sessionStorage.confSessionCost = 0;
      }

      if (document.getElementById("mediaCB").onclick) {
            sessionStorage.confPack = "yes";
            sessionStorage.confPackCost = 115;
      } else {
            sessionStorage.confPack = "no"
            sessionStorage.confPackCost = 0;
      }

      sessionStorage.confTotal = parseFloat(sessionStorage.confBanquetCost) + parseFloat(sessionStorage.confSessionCost) + parseFloat(sessionStorage.confPackCost);

      writeSessionValues();
}

function writeSessionValues() {
      sessionStorage.confName = document.getElementById("regName");
      sessionStorage.confGroup = document.getElementById("regGroup");
      sessionStorage.confMail = document.getElementById("regEmail");
      sessionStorage.confPhone = document.getElementById("regPhone");
      sessionStorage.confSession = document.getElementById("regSession");
      sessionStorage.confBanquet = document.getElementById("regBanquet");
      sessionStorage.confPack = document.getElementById("regPack");

}