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
const $Mail = document.getElementById('mail');
const $fIcon = document.getElementById('fIcon');
const $left = document.getElementById('left');
const $right = document.getElementById('right');
const $pokedex = document.querySelector('.box-1');
const $bootstrap = document.querySelector('.box-2');
const $EmojiGallery = document.querySelector('.box-3');
const $Dominoes = document.querySelector('.box-4');
const $colorCh = document.querySelectorAll('.colorCh');
const $links = document.querySelectorAll('.chc')

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
$Mail.addEventListener('click', () => {
  window.open("mailto:arorakunal.dev@gmail.com", '_blank');
});
$pokedex.addEventListener('click', () => {
  window.open("https://kunal3111.github.io/Web-programming/pokedex-kunal3111/", '_blank');
});
$bootstrap.addEventListener('click', () => {
  window.open("https://kunal3111.github.io/Web-programming/bootstrap-promo-kunal3111", '_blank');
});
$EmojiGallery.addEventListener('click', () => {
  window.open("https://kunal3111.github.io/Web-programming/emoji-gallery-kunal3111/", '_blank');
});
$Dominoes.addEventListener('click', () => {
  window.open("https://kunal3111.github.io/Web-programming/dominoes-kunal3111-1/", '_blank');
});
