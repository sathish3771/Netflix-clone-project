let btn=document.getElementById('NavBtn')
btn.addEventListener("click",function(){
    window.location.href="SignUpPage3.html";
});

function NavBtn1(){
window.location.href="landingPage.html";
}
document.addEventListener("DOMContentLoaded",function(){
    let btn2=document.getElementById("btnNext");
    if(btn2){
        btn2.addEventListener("click",NavBtn1);
    }
})
