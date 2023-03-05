document.addEventListener('click', clickAction);
const burgerIcon = document.querySelector('.burger-btn')
const burgerMenuBlock = document.querySelector('.burger-munu')

function clickAction(event) {
   const targetClick = event.target;
   if (targetClick.closest('.burger-btn')) {
      burgerIcon.classList.toggle('_active')
      burgerMenuBlock.classList.toggle('_active')
      event.preventDefault();
    }
}
