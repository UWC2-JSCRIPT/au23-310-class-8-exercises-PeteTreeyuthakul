let mathPromise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    let num = Math.random()
    if(num > 0.5){
      resolve();
    }else{
      reject();
    }
  }, 1000);
});

mathPromise
  .then(function(){
    console.log('success')
  })
  .catch(function(){
    console.log('fail')
  })
  
  .then(function(){
    console.log('complete')
  });

 