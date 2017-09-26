'use strict';

const submitBtn = document.querySelector('#shortenBtn');

submitBtn.addEventListener('click', () => {
  console.log('clicked');
  if (window.XMLHttpRequest) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('POST', '/shortenURL', true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.onreadystatechange = ()=> {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        console.log('Shortened URL: ', xhttp.responseText);
      }      
    }
    xhttp.send(JSON.stringify({ longURL : document.querySelector('#longURL').value }));
  }
  // else {
  //   let xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  // }
});
