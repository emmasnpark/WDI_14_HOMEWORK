console.log('hi');
$('button').click(function(){
  var $input = $('input').val()
  var options = {
    url: 'http://api.giphy.com/v1/gifs/search?q='+$input+'&api_key=jMflqaysu95s0hvOMxsKVw2XYGSdpDh8',
    method: 'get'
  }
  $.ajax(options).done(function(response) {
    console.log(response.data.length);
    for (var i = 0; i < 10; i++) {
      var $p = $('<p>').text(i)
      var $img = $('<img>').attr('src', response.data[i].images.fixed_width.url)
      var $div = $('<div>')
      $div.append($img)
      $div.append($p)
      $('body').append($div)
    }
  });

var t = 0
  $(window).scroll(function() {
    if ($('body').height() <= ($(window).height() + $(window).scrollTop())) {
        console.log('zzzz');
        $.ajax(options).done(function(response) {
          for (var i = 10; i < 20; i++) {
            if((i+t) >= response.data.length) {
             console.log('over');
             $(window).off('scroll')
             return
            }else {
              var $img = $('<img>').attr('src', response.data[i+t].images.fixed_width.url)
              var $p = $('<p>').text(i+t)
              var $div = $('<div>')
              $div.append($img)
              $div.append($p)
              $('body').append($div)
            }//else
         } //for
        t+=10;
      });
      // t+=10;
    }
  });
});
