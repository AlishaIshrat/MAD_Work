let myPromise = new Promise(function(myResolve, myReject) {
    let a= Math.random();
    if(a<0.5)
    {
      myReject("No random no for you today");  
    }
    else{
      myResolve("random no is" + a); 
    }
    
      
      
    });
    
  
   myPromise.then((value)=>
  {
    console.log(value)
  }).catch((err)=>{
console.log(err)
  })
