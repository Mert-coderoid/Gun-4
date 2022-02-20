
// ------------------------------------
// This file for learning purposes only.
// ------------------------------------


const xmlreq = require("xmlhttprequest").default;

var data = new FormData();
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://www.nosyapi.com/apiv2/pharmacy?city=istanbul&county=avcilar");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Authorization", "Bearer bLYBXRtcdEqjtObNYwnNL7ZOBuMtXuFBmyW1pnexHoAENLwaFc2n4lDorLpN");

xhr.send(data); 