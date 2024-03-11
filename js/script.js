let toggles = document.querySelectorAll('.toggle');
let cards = document.querySelectorAll('.card');

toggles.forEach((toggle, i)=>{ 
    toggle.onclick = function(){
        cards[i].classList.toggle('active');
    }
});