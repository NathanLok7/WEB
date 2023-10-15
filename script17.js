
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
            console.log("Usuarios:")
            console.table(JSON.parse(xhr.response))
            alert("Usuarios léidos!")
        }
    };
  }

function print_cat(req, res, next) {
    console.log(ascii_cats());
    next();
  }

function getProducts(queryType) {
    fetch('http://localhost:3000/products', {
        method: 'GET',
        headers: {
            'X-Query-Type': queryType
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); 
    })
    .catch(error => {
        console.error(error);
    });
}
