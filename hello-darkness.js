let rgb = 256

const backgroundToDark = setInterval(function(){
    if(rgb > 0){
        rgb--;
        document.body.style.backgroundColor =`rgb(${rgb},${rgb},${rgb})`
    }else {
        clearInterval(backgroundToDark)
    }
},500
)