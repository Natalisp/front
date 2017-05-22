$(function() {
  showMessage()
  $('.grid-item').mouseenter(changeImg).mouseleave(changeImgBack);
  $('.menu-item').hover(function(){
    $(this).find('.inside-menu-items').css("display", "block");
    $('.content').css("opacity", 0.5);
  },
  function(){
    $(this).find('.inside-menu-items').css("display", "none");
    $('.content').css("opacity", 1);
  });
  });


function changeImg() {
  // $(this).animate({opacity: 0.8}, 100, function(){
    var $this = $(this).find('img');
    var newSource = $this.data('alt-src');
    $this.data('alt-src', $this.attr('src'));
    $this.attr('src', newSource);
  // });
  // $(this).animate({opacity: 1}, 1000);
}

function changeImgBack() {
  var $this = $(this).find('img');
  var newSource = $this.data('alt-src');
  $this.data('alt-src', $this.attr('src'));
  $this.attr('src', newSource);
}

function showMessage() {
    $('body').addClass('modal-active');

  $('#modal-container').click(function(){
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});
}
