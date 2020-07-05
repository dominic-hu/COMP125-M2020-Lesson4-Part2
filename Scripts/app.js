// IIFE - Immediately Invoked Function Expression = anonymous self-executing function - closure
// IIFE - Immediately Invoked Function Expression = anonymous self-executing function - closure
(function(){

    
   

    //nameed function
    function Start()
    {
       
        console.log('%cApp Started...', "color:blue; font-size: 24px;");
    
        Second();
    }

    function Second()
    {
        console.log("This is second function");
    }
    

    //declarative format
   /*  let start=function()
    {
        console.log("App Started...");
    } */

    /* let Start=()=>
    {
        console.log("App Started...");
    } */

    window.addEventListener("load", Start);

})();