const btn = document.getElementById("toggleButton");


btn.addEventListener("click" , ()=>{
    document.body.classList.toggle("dark")
    if(document.body.classList.value === "dark"){
        btn.innerHTML = `Toggle to Light Mode`
    }else{
        btn.innerHTML = `Toggle to Dark Mode`
    }
})