
var byButton = document.querySelector('.button')
var popup = document.querySelector('.hotel-class')
var form = document.querySelector('.form-hotel-index')
var checkin = form.querySelector('[name=checkin-date]')
var checkout = form.querySelector('[name=checkout-date]')

byButton.addEventListener('click', function () {
  popup.classList.toggle('hotel-search')
  popup.classList.toggle('hotel-none')
  checkin.focus()
})

form.addEventListener('submit', function (evt) {
  if (!checkin.value || !checkout.value) {
    evt.preventDefault()
    popup.classList.remove("input-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("input-error");
  }
})  

/*var byButton = document.querySelector('.button')
var popup = document.querySelector('.hotel-class')

byButton.addEventListener('click', function () {
  popup.classList.add('hotel-none')
})

byButton.addEventListener('click', function () {
    popup.classList.remove('hotel-none')
  })
  */