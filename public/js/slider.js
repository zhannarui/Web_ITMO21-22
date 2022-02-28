const slider = document.querySelector('.swiper-container');
let mySwiper = new Swiper(slider,{
  //количество отображаемых фотографий
    slidesPerView: 1,
    //отступ между фотографиями
    spaceBetween: 10,
    //объект для определения типа разбивки на страницы
    pagination: {
      //класс элемента
            el: '.swiper-pagination',
            //тип разбивки (у меня это точки)
            type: 'bullets',
            //при нажатии на точки страница свайпается
            clickable: true,
  },
  //выделение активного слайда как центрального
  centeredSlides: true,
  //цикличность слайдера
  loop: true,
  //объект с переключателями
  navigation: {
    //класс для стрелочки "вперед"
    nextEl: '.swiper-button-next',
    //класс для стрелочки "назад"
    prevEl: '.swiper-button-prev',
  },
  //адаптивность
  breakpoints:{
    //если экран больше 768
      768:{
        //сколько фотографий отображается
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024:{
        slidesPerView: 3,
        spaceBetween: 50,
      },
  }
})