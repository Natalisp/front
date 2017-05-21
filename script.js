$(function() {
  $('.grid-item').mouseenter(changeImg).mouseleave(changeImgBack);
  });


function changeImg() {
  $(this).animate({opacity: 0}, 500, function(){
    var $this = $(this).find('img');
    var newSource = $this.data('alt-src');
    $this.data('alt-src', $this.attr('src'));
    $this.attr('src', newSource);
  });
  $(this).animate({opacity: 1}, 1000);
}

function changeImgBack() {
  var $this = $(this).find('img');
  var newSource = $this.data('alt-src');
  $this.data('alt-src', $this.attr('src'));
  $this.attr('src', newSource);
}
