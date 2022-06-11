window.addEventListener('scroll',()=>{
    document.querySelector("nav").classList.toggle('window__scroll' ,window.scrollY>40)
})
const faqs= document.querySelectorAll(".faq")
faqs.forEach(faq=> {
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');
        const icon=faq.querySelector('.faqs__icon i')
        if (icon.className==='fa-solid fa-plus'){
            icon.className ='fa-solid fa-minus'.toggle('Invalid input');

   
        } else{
            icon.className='fa-solid fa-plus'

        }
       
    })
    
});
const btn =document.getElementById('open-menu-btn')
const btn2=document.getElementById('close-menu-btn')
const nav=document.querySelector('.nav__menu')
btn.addEventListener('click',()=>{
    nav.classList.add('open-btn');
    btn.style.display='none';
    btn2.style.display='inline-block'
})
btn2.addEventListener('click',()=>{
    nav.classList.remove('open-btn');
    btn.style.display='inline-block';
    btn2.style.display='none'
})



