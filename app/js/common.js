

$(function () {
	// document.addEventListener('touchmove', function(e) {e.preventDefault();}, false);
	// document.ontouchmove = function(e) {e.preventDefault()};

	$('.admin-nav-menu-button').click(function () {
		$(this).toggleClass('admin-nav-button-active')
	})
	$('.admin-nav-sm-right').click(function () {
		$('.admin-nav-menu-button').removeClass('admin-nav-button-active')
	})

	var galleryThumbs = new Swiper('.gallery-thumbs', {
		spaceBetween: 10,
		slidesPerView: 4,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	var galleryTop = new Swiper('.gallery-top', {
		spaceBetween: 10,
		loop: true,
		loopedSlides: 5, //looped slides should be the same
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs,
		},
	});

	// Slider
	var mySwiper = new Swiper('.hero-slider', {
		loop: true,
		loopedSlides: 3, //looped slides should be the same
		navigation: {
			nextEl: '.hero-swiper-button-next',
			prevEl: '.hero-swiper-button-prev',
		},
		effect: "fade",
	});

	// Parallax
	$('.parallax-window').parallax({
		imageSrc: '/img/BS_Pic3.jpg',
		speed: 0.8,
		position: 'top'
	});
	// End

	if (document.querySelector('.hamburger')) {
		// Hamburger button
		var hamburger = document.querySelector(".hamburger");
		// On click
		hamburger.addEventListener("click", function () {
			// Toggle class "is-active"
			hamburger.classList.toggle("is-active");
			// Do something else, like open/close menu
		});
	}

	// Search field
	$('.search-toggle').click(function () {
		$('.search-field').addClass('search-active')
		$('.search-field-out').addClass('search-active')
		$('.focus').focus()
	});
	$(document).keyup(function (e) {
		if (e.keyCode == 27) {
			$('.search-field').removeClass('search-active')
			$('.search-field-out').removeClass('search-active')
		}
	})
	$('.search-field-out').click(function () {
		$(this).removeClass('search-active');
		$('.search-field').removeClass('search-active')
	});
	// End



	// mobile-menu slide left-right

	function menuMouse() {
		if ($(window).width() >= 1200) {
			$('.li-level-1').on({
				mouseenter: function () {
					$(this).children('.level-2').fadeIn(10)
				},
				mouseleave: function () {
					$(this).children('.level-2').fadeOut(10)
				},
			});
			$('.arrow').removeClass('accord')
		} else {
			$('.arrow').addClass('accord')

		}
	}
	menuMouse();
	$(window).resize(function () {
		menuMouse();
	});
	//end


	//	accordeon mobile-menu
	resizeScreen();
	function resizeScreen() {
		if ($(window).width() < 1200) {
			$('.a-level-1').click(function () {
				event.preventDefault();
				$(this).siblings('.level-2').slideToggle(200)
			});
			// $('.a-level-2').click(function () {
			// 	event.preventDefault();
			// 	$(this).siblings('.level-3').slideToggle(200)
			// });
		}
	}
	// End

	$('.nav-hamburger').click(function (event) {
		$('.header-nav-1').toggleClass('nav-active');
	});

	$('.nav-right').click(function (event) {
		$('.header-nav-1').removeClass('nav-active');
	})
	$('.close-nav').click(function (event) {
		$('.header-nav-1').removeClass('nav-active');
	})

	// end

	// Button to the top of the page

	if ($(this).scrollTop() > 350) {
		$('.button-up').fadeIn();
	} else {
		$('.button-up').fadeOut();
	}
	$(window).scroll(function () {
		if ($(this).scrollTop() > 350) {
			$('.button-up').fadeIn();
		} else {
			$('.button-up').fadeOut();
		}
	});

	$('.button-up').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
	// End

	$('.accordeon').click(function () {
		$(this).next().toggleClass('accordeon-show');
	});
	//colapse

	$('.filter-title').click(function () {
		$(this).parent().toggleClass('active')
	});

// scroll-lock v1
	// const bodyScrollLock = require('body-scroll-lock');
	// const disableBodyScroll = bodyScrollLock.disableBodyScroll;
	// const enableBodyScroll = bodyScrollLock.enableBodyScroll;

	// const targetElement = document.querySelector(".shopping-cart")

	// $('.btn-shopping-cart').click(function () {
	// 	$('.shopping-cart').removeClass('close')
	// 	$('.white-box').addClass('active')
	// 	disableBodyScroll(targetElement);
	// });

	// $('.close-shop-cart').click(function () {
	// 	$('.shopping-cart').addClass('close')
	// 	$('.white-box').removeClass('active')
	// 	enableBodyScroll(targetElement);
	// });

	// $(document).keyup(function (e) {
	// 	if (e.keyCode == 27) {
	// 		$('.shopping-cart').addClass('close')
	// 		$('.white-box').removeClass('active')
	// 		enableBodyScroll(targetElement);
	// 	}
	// })
	// $(document).mouseup(function (e) {
	// 	var cart = $('.shopping-cart');
	// 	if (cart.has(e.target).length === 0) {
	// 		cart.addClass('close');
	// 		$('.white-box').removeClass('active');
	// 		enableBodyScroll(targetElement);
	// 	}
	// });

// end v1

// scroll-lock v2
	// scroll-bar width
	var div = document.createElement('div');

	div.style.overflowY = 'scroll';
	div.style.width = '50px';
	div.style.height = '50px';
	div.style.visibility = 'hidden';

	document.body.appendChild(div);
	var scrollWidth = div.offsetWidth - div.clientWidth;
	document.body.removeChild(div);

	// end
	function bodyScrollLock() {
		var hideBodyScroll = $(window).scrollTop()
		var returnScroll
		$('.btn-shopping-cart').click(function () {
			$('.shopping-cart').removeClass('close')
			$('html').addClass('no-scroll')
			$('.white-box').addClass('active')
			$('.no-scroll-body').css({
				'position': 'fixed',
				'top': '-'+hideBodyScroll+'px',
				// 'right': '0',
				// 'padding-right': scrollWidth+'px',
			});
			returnScroll = hideBodyScroll
		});
		$('.close-shop-cart').click(function () {
			$('.shopping-cart').addClass('close')
			$('html').removeClass('no-scroll')
			$('.white-box').removeClass('active')
			$('.no-scroll-body').css({
				'position': 'relative',
				'top': '0',
				// 'padding-right': '0',
			});
			$('body,html').scrollTop(returnScroll);
		});
		$(document).keyup(function (e) {
			if (e.keyCode == 27) {
				$('.shopping-cart').addClass('close')
				$('html').removeClass('no-scroll')
				$('.white-box').removeClass('active')
			$('.no-scroll-body').css({
				'position': 'relative',
				'top': '0',
				'padding-right': '0',
			});
			$('body,html').scrollTop(returnScroll);
			}
		})
		$('.white-box').click(function () {
			$('.shopping-cart').addClass('close');
			$('html').removeClass('no-scroll');
			$(this).removeClass('active');
			$('.no-scroll-body').css({
				'position': 'relative',
				'top': '0',
				'padding-right': '0',
			});
			$('body,html').scrollTop(returnScroll);
		});
	}
	bodyScrollLock();
	$(window).scroll(bodyScrollLock);
	$('.btn-shopping-cart').click(function () {
		$('.shopping-cart').removeClass('close');
		$('html').addClass('no-scroll');
		$('.white-box').addClass('active')
	});

	$('.close-shop-cart').click(function () {
		$('.shopping-cart').addClass('close');
		$('html').removeClass('no-scroll');
		$('.white-box').removeClass('active')
	});

	$(document).keyup(function (e) {
		if (e.keyCode == 27) {
			$('.shopping-cart').addClass('close');
			$('html').removeClass('no-scroll');
			$('.white-box').removeClass('active')
		}
	});
	$(document).mouseup(function (e) {
		var cart = $('.shopping-cart');
		if (cart.has(e.target).length === 0) {
			cart.addClass('close');
			$('html').removeClass('no-scroll');
			$('.white-box').removeClass('active');
		}
	});

// end v2
})

$('.add-category').parent().append('<li class="list-group-item add-cat-form mt-3 mb-3"><form action="" class=""><input class="new-input" type="text" placeholder="Новая категория" name="new-category"><button class="btn btn-purple btn-purple-large btn-add">Добавить</button></form></li>')
$('.add-sub-category').parent().append('<li class="list-group-item add-cat-form mt-3 mb-3"><form action="" class=""><input class="new-input" type="text" placeholder="Новая категория" name="new-category"><button class="btn btn-purple btn-purple-large btn-add">Добавить</button></form></li>')
// $('.add-category').append('<form action="" class="add-cat-form"><input class="new-input" type="text" placeholder="Новая категория" name="new-category"><button class="btn btn-purple btn-purple-large btn-add">Добавить</button></form>')
$(document).on('click', '.add-category', (function () {
	$(this).addClass('add-category-close');
	$(this).siblings('.add-cat-form').addClass('add-cat-form-active')
	$('.add-cat-form-active').children().children('input').focus();
}));
$(document).on('click', '.add-sub-category', (function () {
	$(this).addClass('add-category-close');
	$(this).siblings('.add-cat-form').addClass('add-cat-form-active')
	$('.add-cat-form-active').children().children('input').focus();
}));
	var numberI = 1
$(document).on('click', '.btn-add', (function (event) {
	event.preventDefault();
	$('.add-category').removeClass('add-category-close')
	$('.add-sub-category').removeClass('add-category-close')
	$('.add-cat-form').removeClass('add-cat-form-active')
	var newCatOrBrand = $(this).siblings('.new-input').val();
	$(this).parent().parent().siblings('.add-category').before('<li class="list-group-item for-choice li-last">' +newCatOrBrand+ '</li>');
	$(this).parent().parent().siblings('.add-sub-category').before('<li class="list-group-item category-title"><a data-toggle="collapse" href="#collapse-n-'+numberI+'" class="collapsed">' +newCatOrBrand+ '</a><ul id="collapse-n-'+numberI+'" class="panel-collapse collapse to-add-new-li"><li class="add-category list-group-item mt-3 mb-3 btn-purple-inverse">Добавить подкатегорию</li><li class="list-group-item add-cat-form mt-3 mb-3"><form action="" class=""><input class="new-input" type="text" placeholder="Новая категория" name="new-category"><button class="btn btn-purple btn-purple-large btn-add">Добавить</button></form></li></ul></li>');
	// console.log(numberI)
	numberI = numberI + 1;
	$(this).siblings('.new-input').val('');
	$('.add-category').removeClass('add-category-active')
}))
$(document).on('mouseup', (function(e) {
	var div = $('.add-cat-form-active');
	if (!div.is(e.target) && div.has(e.target).length === 0) {
		$('.add-category').removeClass('add-category-close')
		$('.add-sub-category').removeClass('add-category-close')
		$('.add-cat-form').removeClass('add-cat-form-active')
	}
}));
// $(document).on('mouseup', (function(e) {
// 	var div = $('h2');
// 	if (div.is(e.target) && div.has(e.target).length === 0) {
// 		alert(numberI)
// 	}
// }));


var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
	toggler[i].addEventListener("click", function () {
		this.parentElement.querySelector(".nested").classList.toggle("active");
		this.classList.toggle("caret-down");
	});
}

$(document).on('click', '.for-choice', function () {
	$(this).toggleClass('active');
	$('.for-choice').not($(this)).removeClass('active')
})


// if($('.shopping-cart').hasClass('close')){
// 	$('html').addClass('no-scroll')
// }


if (document.getElementById('slider')) {
	var slider = document.getElementById('slider');

	noUiSlider.create(slider, {
		start: [0, 100000],
		step: 1000,
		tooltips: true,
		connect: true,
		range: {
			'min': 0,
			'max': 100000,
		},
		format: wNumb({
			decimals: 0
		}),
	});
}