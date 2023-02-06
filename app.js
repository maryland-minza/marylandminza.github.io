// Smooth scrolling via animate()
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash && window.location.pathname == "/") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

// Navigation change on scroll
$(document).ready(function(){
  var maxOffset = 300;
  $(window).scroll(function() {
    if ($(window).scrollTop() >= maxOffset) {
      $('.navbar-default').addClass('navbar-shrink');
    }
    else {
      $('.navbar-default').removeClass('navbar-shrink');
    }
  });
});

$(document).ready(function(){
  var maxOffset = 300;
  if ($(window).scrollTop() >= maxOffset) {
    $('.navbar-default').addClass('navbar-shrink');
  }
  else {
    $('.navbar-default').removeClass('navbar-shrink');
  }
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Async contact form
$('form[id=contactForm]').submit(function(){
  $.post($(this).attr('action'), $(this).serialize(), function(res){
    $('form[id=contactForm] #success').hide();
    $('form[id=contactForm] #error').hide();
    if (res.code == "200")
      $('form[id=contactForm] #success').show();
    }).fail(function(){
    $('form[id=contactForm] #success').hide();
    $('form[id=contactForm] #error').hide();
    $('form[id=contactForm] #error').show();
  });
  return false;
});

(function () {
  var expand;
  expand = function () {
      var $input, $search;
      $search = $('.search');
      $input = $('.input');
      if ($search.hasClass('close')) {
          $search.removeClass('close');
          $input.removeClass('square');
      } else {
          $search.addClass('close');
          $input.addClass('square');
      }
      if ($search.hasClass('close')) {
          $input.focus();
      } else {
          $input.blur();
      }
  };
  $(function () {
      var $accordion, $wideScreen;
      $accordion = $('#accordion').children('li');
      $wideScreen = $(window).width() > 767;
      if ($wideScreen) {
          $accordion.on('mouseenter click', function (e) {
              var $this;
              e.stopPropagation();
              $this = $(this);
              if ($this.hasClass('out')) {
                  $this.addClass('out');
              } else {
                  $this.addClass('out');
                  $this.siblings().removeClass('out');
              }
          });
      } else {
          $accordion.on('touchstart touchend', function (e) {
              var $this;
              e.stopPropagation();
              $this = $(this);
              if ($this.hasClass('out')) {
                  $this.addClass('out');
              } else {
                  $this.addClass('out');
                  $this.siblings().removeClass('out');
              }
          });
      }
  });
  $(function () {
      var $container, $menu, $menubtn, $navbar;
      $menubtn = $('#hb');
      $navbar = $('.navbar');
      $menu = $('.navigation');
      $container = $('.site-inner');
      $menubtn.on('click', function (e) {
          if ($menubtn.hasClass('active')) {
              $menubtn.removeClass('active');
              $menu.removeClass('slide-right');
              $container.removeClass('slide-right');
              $navbar.removeClass('slide-right');
          } else {
              $menubtn.addClass('active');
              $menu.addClass('slide-right');
              $container.addClass('slide-right');
              $navbar.addClass('slide-right');
          }
      });
  });
  $(function () {
      var $button, clickOrTouch;
      clickOrTouch = 'click touchstart';
      $button = $('#search-button');
      $button.on(clickOrTouch, expand);
  });
  $(function () {
      var $box;
      $box = $('.sm-box');
      $box.on('click', function (e) {
        e.preventDefault();
          var $this;
          $this = $(this);
          if ($this.hasClass('active')) {
              $this.removeClass('active');
          } else {
              $this.addClass('active');
          }
      });
  });
}.call(this));

$("select").each(function() {
  var $this = $(this),
      $options = $(this).children("option").length;

  $this.addClass("select-hidden");
  $this.wrap("<div class='select'></div>");
  $this.after("<div class='select-styled'></div>");

  var $styledSelect = $this.next("div.select-styled");
  $styledSelect.text($this.children("option").eq(0).text());

  var $list = $("<ul />", {
      "class": "select-options"
  }).insertAfter($styledSelect);

  for (var i = 0; i < $options; i++) {
      $("<li />", {
          text: $this.children("option").eq(i).text(),
          rel: $this.children("option").eq(i).val()
      }).appendTo($list);
  }

  var $listItems = $list.children("li");

  $styledSelect.on("click", function(e) {
      e.stopPropagation();
      $("div.select-styled.active").each(function() {
          $(this).removeClass("active").next("ul.select-options").hide();
      });

      $(this).toggleClass("active").next("ul.select-options").toggle();
  });

  $listItems.on("click", function(e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass("active");
      $this.val($(this).attr("rel"));
      $list.hide();
  });

  $(document).on("click", function() {
      $styledSelect.removeClass("active");
      $list.hide();
  });

  $(".select-sibling").next(".select-styled").css({
    "border-top": "0px"
  });
});


(function () {
var $addItem = $("#add-item");
var $badge = $(".badge");
var $count = 1;

$addItem.on("click", function(e) {
  e.preventDefault();
  $badge.html($count++);
});
}.call(this));

