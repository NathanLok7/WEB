
function readUsers(value) {
    let url = "http://localhost:3000/a";
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
  
    if (value) {
        xhr.setRequestHeader("x-auth", "PASS123");
    }
  
    xhr.send();
    xhr.onload = function() {
        if (xhr.status == 200) {
            console.log(xhr.responseText);
        } else {
            console.log("Error on the authentication");
        }
    };
  }

