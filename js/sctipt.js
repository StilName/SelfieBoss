"use strict"
const iconMenu = document.querySelector('.menu-icon');
const bodyMenu = document.querySelector('.header__menu');
const logoActive = document.querySelector('.logo');
const bodyActive = document.querySelector('.body');

if(iconMenu){
	iconMenu.addEventListener("click", function(){
		iconMenu.classList.toggle('active');
		bodyMenu.classList.toggle('active');
		logoActive.classList.toggle('active');
		bodyActive.classList.toggle('active');
	})

}
console.log();