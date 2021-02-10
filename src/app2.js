import './app2.css'
import $ from 'jquery'

const $tab = $('#app2 > .tab')
const $content = $('#app2 > .content')

$tab.on('click', 'li', (e) => {
  $(e.currentTarget)
    .addClass('active')
    .siblings()
    .removeClass('active')

  const index = $(e.currentTarget).index()
  $content.children().eq(index)
    .addClass('active')
    .siblings()
    .removeClass('active')
})

$tab.children().eq(0).trigger('click')