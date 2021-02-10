import './app3.css'
import $ from 'jquery'

const $square = $('#app3 .square')

$square.on('click', (e) => {
  $(e.currentTarget).toggleClass('active')
})