document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.section-header__burger').forEach(function (burgerBtn) {
    burgerBtn.addEventListener('click', function () {
      document.querySelector('.header__menu-mobile').classList.toggle('not-active');
      document.querySelector('.section-header__burger').classList.toggle('is-active');
    })

    $(document).click(function(e) {
      if($(e.target).closest('.header__menu-mobile').length ||
          $(e.target).closest('.section-header__burger').length) return;
      $('.header__menu-mobile').addClass('not-active');
      $('.section-header__burger').addClass('is-active');
  });

    document.querySelectorAll('.howwework__link-style').forEach(function (btnWork) {
      btnWork.addEventListener('click', function (event) {
        const path = event.currentTarget.dataset.path

        document.querySelectorAll('.howwework__consalt').forEach(function (tabContent) {
          tabContent.classList.remove('consalt-active')
        })

        document.querySelector(`[data-target="${path}"]`).classList.add('consalt-active')
      })
    })
  })
})
