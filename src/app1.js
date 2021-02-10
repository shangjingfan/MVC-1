import './app1.css'
import $ from 'jquery'

const $output = $("#app1 .output")
const $add = $("#app1 .add")
const $minus = $("#app1 .minus")
const $multiply = $("#app1 .multiply")
const $divide = $("#app1 .divide")
let num = localStorage.getItem("number")
$output.text(num || 100)

$add.on('click', () => {
  let n = parseInt($output.text())
  n += 1
  $output.text(n)
  localStorage.setItem('number', n)
})
$minus.on('click', () => {
  let n = parseInt($output.text())
  n -= 1
  $output.text(n)
  localStorage.setItem('number', n)
})
$multiply.on('click', () => {
  let n = parseInt($output.text())
  n *= 2
  $output.text(n)
  localStorage.setItem('number', n)
})
$divide.on('click', () => {
  let n = parseInt($output.text())
  n /= 2
  $output.text(n)
  localStorage.setItem('number', n)
})