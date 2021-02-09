document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.burger-btn').forEach(function (burgerBtn) {
    burgerBtn.addEventListener('click', function () {
      document.querySelector('.burger-menu').classList.toggle('burger-active');
    })
  })

  document.querySelectorAll('.burger-menu__close').forEach(function (burgerBtnClose) {
    burgerBtnClose.addEventListener('click', function () {
      document.querySelector('.burger-menu').classList.remove('burger-active');
    })
  })

  document.querySelectorAll('.tab-container-list__link').forEach(function (btnWork) {
    btnWork.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path


      document.querySelectorAll('.swiper-container').forEach(function (tabContent) {
        tabContent.classList.remove('is-active')
      })

      document.querySelector(`[data-target="${path}"]`).classList.add('is-active')


      document.querySelectorAll('.swiper-container').forEach(function (refrash) {
        refrash.swiper.update()

      })
    })
  })
});
