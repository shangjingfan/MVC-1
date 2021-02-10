import './app4.css'
import $ from 'jquery'

const $circle = $("#app4 .circle")
$circle.on('mouseenter', (e) => {
  $(e.currentTarget).addClass('active')
  console.log(e)
}).on('mouseleave', (e) => {
  $(e.currentTarget).removeClass('active')
})