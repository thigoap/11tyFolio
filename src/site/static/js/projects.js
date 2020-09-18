webdev = document.getElementById('.webdev')
mobiledev = document.getElementById('.mobiledev')
gamedev = document.getElementById('.gamedev')

toall.addEventListener('click', () => {
  [...document.getElementsByClassName('webdev')].forEach((item) => {
    item.classList.add('block')
    item.classList.remove('hidden')
  });
  [...document.getElementsByClassName('mobiledev')].forEach((item) => {
    item.classList.add('block')
    item.classList.remove('hidden')
  });
  [...document.getElementsByClassName('gamedev')].forEach((item) => {
    item.classList.add('block')
    item.classList.remove('hidden')
  });
})

towebdev.addEventListener('click', () => {
  [...document.getElementsByClassName('webdev')].forEach((item) => {
    item.classList.add('block')
    item.classList.remove('hidden')
  });
  [...document.getElementsByClassName('mobiledev')].forEach( (item) => {
    item.classList.add('hidden')
  });
  [...document.getElementsByClassName('gamedev')].forEach( (item) => {
    item.classList.add('hidden')
  });
})

tomobiledev.addEventListener('click', () => {
  [...document.getElementsByClassName('webdev')].forEach( (item) => {
    item.classList.add('hidden')
  });
  [...document.getElementsByClassName('mobiledev')].forEach((item) => {
    item.classList.add('block')
    item.classList.remove('hidden')
  });
  [...document.getElementsByClassName('gamedev')].forEach( (item) => {
    item.classList.add('hidden')
  });
})

togamedev.addEventListener('click', () => {
  [...document.getElementsByClassName('webdev')].forEach( (item) => {
    item.classList.add('hidden')
  });
  [...document.getElementsByClassName('mobiledev')].forEach( (item) => {
    item.classList.add('hidden')
  });
  [...document.getElementsByClassName('gamedev')].forEach((item) => {
    item.classList.add('block')
    item.classList.remove('hidden')
  });
})
