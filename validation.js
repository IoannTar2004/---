document.getElementById('submit').addEventListener('click', () => {
    let y = document.getElementById('inputY').value;
    console.log(y);
});

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
    });
}