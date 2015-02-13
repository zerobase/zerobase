window.addEventListener('load', function () {

  // status is 'open', 'close' or 'toggle'
  function markAs(status) {
    var content = document.querySelector('.tab.navigation .menu.content')
    if (status == 'open') {
      content.classList.add('is-open')
      content.setAttribute('aria-expanded', true)
    } else {
      content.classList.remove('is-open')
      content.setAttribute('aria-expanded', false)
    }
  }

  function toggle(content) {
    var content = document.querySelector('.tab.navigation .menu.content')
    if (content.classList.contains('is-open')) {
      markAs('close')
    } else {
      markAs('open')
    }
  }

  // menu button handler
  var button = document.querySelector('.tab.navigation .menu.button')
  button.addEventListener('click', function () {
    toggle()
  })

  // media query hook
  enquire
  .register("screen and (max-width: 42.5em)", { // smaller than tablet
    match : function() {
      markAs('close')
    }
  }, true) // `true` for mobile first (see the doc)
  .register("screen and (min-width: 42.5em)", { // tablet or bigger
    match : function() {
      markAs('open')
    }
  })

}, false)