$ (function() {

    $('.slider__inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'<button type="button" class=" slick-btn slick-prev"><img src="images/icons/chevron-left.svg" alt=""></button>',
        nextArrow:'<button type="button" class=" slick-btn slick-next"><img src="images/icons/chevron-right.svg" alt=""></button>',
        arrows:true,        
      });


      $('.feedback__slider-inner').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots:false,
        arrows:false,
        customPaging:'20px',
        variableWidth: true
        
        

      });
      





      $(".rate-star").rateYo({
          starWidth: "15px",
          
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
        $('.menu__btn ').on('click' , function(){
          $('.menu__list').slideToggle()
        });
        $('.lnr-users').on('click' , function(){
          $('.header__box').toggleClass('active')
          $('.header__logo').toggleClass('active')
         
        });


        $('.slider-product__inner').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          prevArrow:'<button type="button" class=" slick-btn slick-prev"><img src="images/icons/chevron-left.svg" alt=""></button>',
          nextArrow:'<button type="button" class=" slick-btn slick-next"><img src="images/icons/chevron-right.svg" alt=""></button>',
          arrows:true,        
        });


        
        var mixer = mixitup('.product__item-inner');

  
    });
    
    

    