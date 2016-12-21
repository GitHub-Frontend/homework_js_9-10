$(function(){

      $('.owl-carousel').owlCarousel({
          items: 3,
          loop:true, //Зацикливаем слайдер
          margin:5, //Отступ от элемента справа в 50px
          nav:true, //Отключение навигации
          autoplay:true, //Автозапуск слайдера
          smartSpeed:1000, //Время движения слайда
          autoplayTimeout:4500, //Время смены слайда

      });


//TASK 2
      $('.SlectBox').SumoSelect();

});
