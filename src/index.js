document.addEventListener("DOMContentLoaded",()=>{

    let prev = document.querySelector(".prev")
    let next = document.querySelector(".next")
    let carucel = document.querySelector(".caruc1")
    let acumCaru = 0

    prev.addEventListener("click",()=>{
        if(acumCaru == 1){
            let cont = 0;
            const inter = setInterval(() => {
                cont++;
                carucel.scrollLeft = carucel.scrollLeft - 1;   
                if(cont == 400){
                    clearInterval(inter);
                    acumCaru--;
                    console.log(acumCaru);
                }
    
            }, 0.25);
        }
        else{
            console.log("not do")
            acumCaru = 0
        }
        //carucel.scrollLeft = carucel.scrollLeft - 350;
    })

    next.addEventListener("click",()=>{
        if(acumCaru == 0){
        let cont = 0;
        const inter = setInterval(() => {
            cont++;
            carucel.scrollLeft = carucel.scrollLeft + 1;    
            if(cont == 385){
                clearInterval(inter);
                acumCaru++;
                console.log(acumCaru);
            }
        }, 0.25);
    }else{
        console.log("not do")
        acumCaru = 1
    }})

})



