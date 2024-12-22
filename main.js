document.addEventListener('DOMContentLoaded',function(){
  const nav = document.querySelector('nav')
  const menuBtn = document.querySelector('.menu-btn')
  const logo = document.querySelector('.logo')
  const exploreBtn = document.querySelector('.explore-btn')
  const bgVideo = document.querySelector('.bgVideo')
  menuBtn.addEventListener('click',function(){
    nav.classList.toggle('nav-open')
  })

  let currentVideo = 1;
  exploreBtn.addEventListener('click',function(){
    currentVideo = currentVideo >= 3 ? 1 : currentVideo + 1
    bgVideo.src = `video/tech${currentVideo}.mp4`
  })
})