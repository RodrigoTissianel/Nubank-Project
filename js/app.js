//Scripts of the project

//scrollHeader animation

function scrollHeader(){
    const header = document.getElementById('header');

    if (this.scrollY >= 50){
        header.classList.add('active-header');
    }
    else{
        header.classList.remove('active-header');
    }
}

window.addEventListener('scroll', scrollHeader);


// Dropdown menu animation
const menuItem1 = document.getElementById('menu-item-1');
const menuItem2 = document.getElementById('menu-item-2');
const menuItem3 = document.getElementById('menu-item-3');

const dropdownMenu1 = document.getElementById('dropdown-1');
const dropdownMenu2 = document.getElementById('dropdown-2');
const dropdownMenu3 = document.getElementById('dropdown-3');


function showDropdown1(e){
    e.preventDefault();
    dropdownMenu1.classList.toggle('active-dropdown-menu');
    dropdownMenu2.classList.remove('active-dropdown-menu');
    dropdownMenu3.classList.remove('active-dropdown-menu');
}

function showDropdown2(e){
    e.preventDefault();
    dropdownMenu1.classList.remove('active-dropdown-menu');
    dropdownMenu2.classList.toggle('active-dropdown-menu');
    dropdownMenu3.classList.remove('active-dropdown-menu');
}

function showDropdown3(e){
    e.preventDefault();
    dropdownMenu1.classList.remove('active-dropdown-menu');
    dropdownMenu2.classList.remove('active-dropdown-menu');
    dropdownMenu3.classList.toggle('active-dropdown-menu');
}

function hideDropdown(e){
    dropdownMenu1.classList.remove('active-dropdown-menu');
    dropdownMenu2.classList.remove('active-dropdown-menu');
    dropdownMenu3.classList.remove('active-dropdown-menu');
}

menuItem1.addEventListener('click', showDropdown1);
menuItem2.addEventListener('click', showDropdown2);
menuItem3.addEventListener('click', showDropdown3);

dropdownMenu1.addEventListener('mouseleave', hideDropdown);
dropdownMenu2.addEventListener('mouseleave', hideDropdown);
dropdownMenu3.addEventListener('mouseleave', hideDropdown);

//MOBILE

// Menu mobile animation

function showMenu(toggleId, navId){
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    const navMobile = document.getElementById('nav-mobile');

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('active-menu-mobile');
            toggle.classList.toggle('active-bx');
            navMobile.classList.toggle('active-nav-mobile');
        });
    }
}

showMenu('bx', 'menu-mobile');