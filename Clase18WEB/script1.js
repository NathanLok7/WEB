
function changeText(action) {
    const divs = document.querySelectorAll('div[id^="div_"]');

    divs.forEach((div, index) => {
        if(action === 'par') {
            if (index % 2 === 0) {
                div.textContent = 'Pares activos';
            } else {
                div.textContent = 'Disabled';
            }
        } else if (action === 'non') {
            if (index % 2 !== 0) {
                div.textContent = 'Non activos';
            } else {
                div.textContent = 'Disabled';
            }
        }
    });
}

