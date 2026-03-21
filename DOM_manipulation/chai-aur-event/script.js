const btn = document.getElementById('btn');


// btn.onclick = function(){
//     alert('hello from DOM')
// }
// btn.onclick = function(){
//     alert('hello from DOM - 2')
// }



// btn.addEventListener('click',()=>{
//     alert('yooo!!');
// })
// btn.addEventListener('click',()=>{
//     alert('yooo1!!');
// })
// btn.addEventListener('click',()=>{
//     alert('yooo2!!');
// })



const parent = document.getElementById('parent');
const child = document.getElementById('child');
const body = document.body;
body.addEventListener('click',()=>{
    console.log('body clicked');
    
},true)

parent.addEventListener('click',()=>{
    console.log('parent clicked');
},true)
child.addEventListener('click',()=>{
    console.log('child clicked');
    
},true)

