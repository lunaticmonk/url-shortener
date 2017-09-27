'use strict';

const submitBtn = document.querySelector('#shortenBtn');
const copyBtn = document.querySelector('#copyBtn');

submitBtn.addEventListener('click', () => {
  if (window.XMLHttpRequest) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('POST', '/shortenURL', true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.onreadystatechange = ()=> {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.querySelector('#shortenedURL').value = xhttp.responseText;
      }
    }
    xhttp.send(JSON.stringify({ longURL : document.querySelector('#longURL').value, origin: window.location.origin }));
  }
  // for IE
  // else {
  //   let xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  // }
});

copyBtn.addEventListener('click', ()=> {
});
