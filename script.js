const $About = document.getElementById('About');
const $Skills = document.getElementById('Skills');
const $Projects = document.getElementById('Projects');
const $contacts = document.getElementById('Contact');
const $button = document.querySelector('.btn');
const $box = document.querySelectorAll('.box');
const $NavItems = document.querySelector('.navigation ul li')
const $github = document.getElementById('github');
const $linkedin = document.getElementById('linkedin');
const $instagram = document.getElementById('instagram');
const $X = document.getElementById('X');

$github.addEventListener('click',()=>{
  window.open('https://github.com/kunal3111', '_blank');
})
$linkedin.addEventListener('click',()=>{
  window.open('https://www.linkedin.com/in/kunal-arora-8a4869297/', '_blank');
})
$instagram.addEventListener('click',()=>{
  window.open('https://www.instagram.com/kunal_00c?igsh=MWJhZml4YW91dGhobQ==', '_blank');
})
$X.addEventListener('click',()=>{
  window.open('https://x.com/kunal_00c?t=yQHEDz1-6drs7X4_xVgaXA&s=09', '_blank');
})