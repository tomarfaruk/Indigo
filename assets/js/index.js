
$(document).ready(function () {
    $('.slick-slider').slick({
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        
    prevArrow: $(".next-arow"),
    nextArrow: $(".prev-arow"),
        
  })

  $('.number').counterUp({
      delay: 10,
      time: 3000
  })

  //video popup
  $('#btn-poper-video').magnificPopup({
    type: 'inline',
    midClick: true
  })

  //search box popup
  $('#btn-poper-search').magnificPopup({
    type: 'inline',
    midClick: true
  })

  $('#container').imagesLoaded( function() {
    
    
      var $grid  = $('.grid-isotop').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        layoutMode: 'fitRows',
        masonry: {
          // use outer width of grid-sizer for columnWidth
          rowWidth: '.grid-item'
        }
      })

      $('.filter-button-group').on( 'click', 'button', function() {
        $(this).addClass('active').siblings().removeClass('active');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });
  });


  // pagination part
    $('.page-item').on('click', 'a', function(){
        $('.page-link').removeClass('active');
        $(this).addClass('active');
    });

    // tricky menubar

    // $('.site-header').css({
    //   position: 'sticky',
    //   paddingBottom: '10px',
    //   background: '#20213c',
    // })
    // $(window).scroll(function () {
    //   if($(window).scrollTop() > 0) {
    //     $(".site-header").addClass('sticky');
    //   } else {
    //     $(".site-header").removeClass('sticky');
    //   }

    //   if($(window).scrollDown()){


    //     $(".site-header").removeClass('sticky');
    //   }
    // });

    var position = $(window).scrollTop(); 

// should start at 0

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if(scroll >= position) {
          $(".site-header").removeClass('sticky');
        } else {
          $(".site-header").addClass('sticky');
        }
        position = scroll;
        if(position == 0){
          $('.site-header').removeClass('sticky');
        }
    });
  
});

  
  
