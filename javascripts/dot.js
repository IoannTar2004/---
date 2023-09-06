function createDot(r, x, y) {
    let w = 125;
    let h = 125;
    let whiteBack = document.getElementById('whiteBack');
    let ctx = whiteBack.getContext('2d');
    ctx.beginPath()
    ctx.fillStyle = 'red';
    console.log(w + x/r*90, h - y/r*90);
    ctx.arc(w + x/r*90, h - y/r*90, 2, 2*Math.PI, false);
    ctx.closePath();
    ctx.fill();
}
