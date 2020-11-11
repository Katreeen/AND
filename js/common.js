

$(window).resize(function () {
  if ($(window).width() > '1560') {
    $('.navbar_wrap').show();
  }
});

$(document).ready(function(){

// policy checkbox
// $(".policy__checkbox").on("click", function(){
// 	if($(this)[0].checked == true){
// 		$(this).parents('form').find('input[type="submit"]').prop('disabled', false);
// 		$(this).parents('form').find('button[type="button"]').prop('disabled', false);
// 	}else{
// 		$(this).parents('form').find('input[type="submit"]').prop('disabled',true);
// 		$(this).parents('form').find('button[type="button"]').prop('disabled',true);
// 	}
// });


if ($(window).width() <= '1560') { 
$('.navbar-toggler').click(function () {
  $(this).next('.navbar_wrap').slideToggle();
});
}else{
  $('.navbar_wrap').show();
}



// $('.ipartners_slides').flickity({
//   pageDots: false,
//   cellAlign: 'left',
//   contain: true
// });

// owlCarousel



  $('.itop_slider').owlCarousel({
    loop:true,
    nav:true,
    dots:true,
    slideBy:1,
    items:1,
    smartSpeed:1000,
    fluidSpeed:1000,
    mouseDrag:true,
    touchDrag:true,
    //autoHeight: true,
    // responsive: {
    //   575: {
    //     autoHeight: true,
    //   },
    // }
    // navContainer: '.itop_slider_item_box_nav'
  });




  $('.ibest_slider').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    slideBy:1,
    items:1,
    smartSpeed:1000,
    fluidSpeed:1000,
    mouseDrag:true,
    touchDrag:true,
    navContainer: '.ibest_slider_arrows'
   

  });
  


initialize_owl($('#owl-news-all'));
let tabs = [
  { target: '#news-all', owl: '#owl-news-all' },
  { target: '#news-heals', owl: '#owl-news-heals' },
  { target: '#news-smi', owl: '#owl-news-smi' },
  { target: '#news-corp', owl: '#owl-news-corp' },
  { target: '#news-prof', owl: '#owl-news-prof' },
];
// Setup 'bs.tab' event listeners for each tab
tabs.forEach((tab) => {
  $(`a[href="${tab.target}"]`)
    .on('shown.bs.tab', () => initialize_owl($(tab.owl)))
    .on('hide.bs.tab', () => destroy_owl($(tab.owl)));
}); 
function initialize_owl(el) {
  el.owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    slideBy: 1,
    items: 4,
    margin: 30,
    smartSpeed: 1000,
    fluidSpeed: 1000,
    mouseDrag: true,
    touchDrag: true,
    
    responsive: {
      992: {
        items: 4,
        navContainer: '.inews_slider_arrows',
      },
      768: {
        items: 3,
        navContainer: '.inews_slider_arrows',
      },
      575: {
        items: 2,
        navContainer: '.inews_slider_arrows',
      },
      0: {
        items: 1,
      }

    }
  });
}
function destroy_owl(el) {
  el.data('owl.carousel').destroy();
}







// кнопка вверх
$(function() {
	$(window).scroll(function() {
	 if($(this).scrollTop() != 0) {
	   $('#toTop').fadeIn();
	 } else {
	   $('#toTop').fadeOut();
	 }
	});
	$('#toTop').click(function() {
	 $('body,html').animate({scrollTop:0},800);
	});
});

// mask
// $(function(){
//   $("#tel").mask("+7(999) 999-9999");
// });

// if($(window).width()<='575'){}








});//$(document).ready



