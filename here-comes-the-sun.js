let rgb = 0

const animateToSun = function(){
    if(rgb<256){
        rgb++;
        document.body.style.backgroundColor = `rgb(${rgb},${rgb},${rgb})`
        requestAnimationFrame(animateToSun)
    }
}

requestAnimationFrame(animateToSun)