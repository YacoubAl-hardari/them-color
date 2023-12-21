const btnColor = document.querySelectorAll('.color-theme .btnColor');
const btn = document.querySelector('.fa-cog');
const hideColor = document.querySelector('.hide-colors');

btn.addEventListener('click',function(){
    hideColor.classList.toggle('show-colors');
});

btnColor.forEach(element => {
   element.addEventListener("click",()=>{
    var setattrbiutes = element.getAttribute('data-theme');
    // console.log(setattrbiutes);
    localStorage.setItem('--mian-theme',setattrbiutes);
    document.querySelector(':root').style.setProperty('--mian-theme',
    setattrbiutes);

    if (localStorage.getItem('--mian-theme') !==null) {
    document.querySelector(':root').style.setProperty('--mian-theme',
    localStorage.setItem('--mian-theme'))
    }
    
});
});