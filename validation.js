let r;
for(let i = 1; i <= 3; i += 0.5) {
    document.getElementById(`b_${i}`).addEventListener('click', () => {
        document.getElementById('coorRd2_x').innerHTML = i / 2;
        document.getElementById('coorR_x').innerHTML = i;
        document.getElementById('coorRd2_y').innerHTML = i / 2;
        document.getElementById('coorR_y').innerHTML = i;
        document.getElementById('coor-Rd2_x').innerHTML = -i / 2;
        document.getElementById('coor-R_x').innerHTML = -i;
        document.getElementById('coor-Rd2_y').innerHTML = -i / 2;
        document.getElementById('coor-R_y').innerHTML = -i;
        r = i;
        console.log(r);
    });
}

document.getElementById('form').addEventListener('submit', (e) => {
    let x = [];
    let message = '';
    let alertt = false;

    for (let i = -3; i <= 3; i++) {
        let dataX = document.getElementById(`cb_${i}`);
        if(dataX.checked) {
            x.push(dataX.value);
        }
    }
    if (x.length == 0) {
        message += 'Выберите хотя бы одно значение X!\n';
        alertt = true;
    }
    
    let dataY = document.getElementById('inputY').value;
    if (!/\d/.test(dataY) || dataY < -3 || dataY > 3) {
        message += 'Введите Y от -3 до 3!';
        alertt = true;
    }

    if (alertt) {
        alert(message);
        e.preventDefault();
    }
});