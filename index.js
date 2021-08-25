let navMobile=document.getElementById('navMobile');
let iconOpen=document.getElementById('iconOpen');
let iconClose=document.getElementById('iconClose');
let iconNav=document.getElementById('iconNav');
let navOpen=false;

iconNav.addEventListener('click',()=>{
    if(navOpen){
        navOpen=false;
        iconOpen.style.display='flex';
        iconClose.style.display='none';
        navMobile.classList.remove('navActive');
    }else{
        navOpen=true
        iconOpen.style.display='none';
        iconClose.style.display='flex';
        navMobile.classList.add('navActive');
    }
})