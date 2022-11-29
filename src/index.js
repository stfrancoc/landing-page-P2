document.addEventListener("DOMContentLoaded",()=>{

    let prev = document.querySelector(".prev")
    let next = document.querySelector(".next")
    let carucel = document.querySelector(".caruc1")

    prev.addEventListener("click",()=>{
        
        let cont = 0;
        const inter = setInterval(() => {
            cont++;
            carucel.scrollLeft = carucel.scrollLeft - 1;
            console.log(cont)    
            if(cont == 350){
                clearInterval(inter);
            }
        }, 1);
        
        //carucel.scrollLeft = carucel.scrollLeft - 350;
    })

    next.addEventListener("click",()=>{
        let cont = 0;
        const inter = setInterval(() => {
            cont++;
            carucel.scrollLeft = carucel.scrollLeft + 1;
            console.log(cont)    
            if(cont == 350){
                clearInterval(inter);
            }
        }, 1);
    })

})



