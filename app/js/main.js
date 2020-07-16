$ (function() {

    $('.slider__inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'<button type="button" class=" slick-btn slick-prev"><img src="images/icons/chevron-left.svg" alt=""></button>',
        nextArrow:'<button type="button" class=" slick-btn slick-next"><img src="images/icons/chevron-right.svg" alt=""></button>',
        arrows:true,        
      });
      
      $(".rate-star").rateYo({
          starWidth: "15px",
          rating: 4.5,
          readOnly: true
        });

        $('.header__account').on('click', function(){
          $('.user__menu').slideToggle()
        })
        $('.header__basket').on('click', function(){
          $('.basket__menu').slideToggle()
        })
        $('.header__message').on('click', function(){
          $('.message__menu').slideToggle()
        })
        $('.header__notification').on('click', function(){
          $('.notification__menu').slideToggle()
        })


        
        var mixer = mixitup('.product__item-inner');

  
    });
    
    