var column = document.querySelectorAll('.panel');

column.forEach(function(element) {
  element.addEventListener('click', toggleLarge);
  element.addEventListener('transitionend', toggleActive);
});

function toggleLarge() {
  this.classList.toggle('large');
}

function toggleActive() {
  if(event.propertyName.includes('flex')) {
    this.classList.toggle('large-active');
  }
}
