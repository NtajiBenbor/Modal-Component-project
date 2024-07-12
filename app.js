

const modal = document.querySelector('.modal-bg');
const showModal = document.querySelector('.show-btn');
const closeModal = document.querySelector('.close');


showModal.addEventListener('click',()=>{

     modal.classList.add('display');
      
})

modal.addEventListener('click',(e)=>{
   if(e.target.classList.contains('close') || e.target.classList.contains('modal-bg')){
    modal.classList.remove('display');
   }
    
})

closeModal.addEventListener('click',()=>{
    modal.classList.remove('display');
})