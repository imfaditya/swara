const menuToggleInput = document.querySelector('.mainResponsiveCheckbox');
const text = document.querySelector('.mainResponsiveTwo');
const text2 = document.querySelector('.mainResponsiveThree');
const text3 = document.querySelector('.mainResponsive');
const text4 = document.querySelector('.mainResponsiveFour');
const button = document.querySelector('.mainResponsiveBtnTwo')
const button2 = document.querySelector('.mainResponsiveBtn');

menuToggleInput.addEventListener('click', function(){
    text.classList.toggle('clicked');
    text2.classList.toggle('clicked');
    text3.classList.toggle('clicked');
    text4.classList.toggle('clicked');
    button.classList.toggle('clicked');
    button2.classList.toggle('clicked');
})