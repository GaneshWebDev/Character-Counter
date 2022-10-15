const c=document.getElementById("ta");
const d=document.getElementById("t");
const s=document.getElementById("r");
c.addEventListener("input",()=>{
    updateCount();
});
function updateCount(){
    let mL=c.getAttribute("maxLength");
    let rL=c.value.length;
    s.innerText=`${mL-rL}`;
    d.innerText=`${rL}`;


}

