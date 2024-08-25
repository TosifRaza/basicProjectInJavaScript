const Buttons=document.querySelectorAll(".Button");
console.log(Buttons)
Buttons.forEach(Button => {
    Button.addEventListener('click',(e)=>{
        // console.log(e)
        // console.log(e.target.id)
        if(e.target.id === "green"){
            document.body.style.backgroundColor=e.target.id;
            const h1=document.getElementById("h1");
            h1.style.color="white";
          
        }else if(e.target.id === "black"){
            document.body.style.backgroundColor=e.target.id;
            const h1=document.getElementById("h1");
            h1.style.color="red";
        }else if(e.target.id === "blue"){
            document.body.style.backgroundColor=e.target.id;
            const h1=document.getElementById("h1");
            h1.style.color="black";
        }else{
            document.body.style.backgroundColor=e.target.id;
            const h1=document.getElementById("h1");
            h1.style.color="yellow";
        }
    })
    // if(Button.id==="green"){
    //     document.body.style.backgroundColor=Button.id;
    // }else if(Button.id==="black"){
    //     document.body.style.backgroundColor=Button.id;
    // }else if(Button.id==="blue"){
    //     document.body.style.backgroundColor=Button.id;
    // }else{
    //     document.body.style.backgroundColor=Button.id;
    // }
    
});

// window.document.body.style.backgroundColor:"red"
// console.log("hello");