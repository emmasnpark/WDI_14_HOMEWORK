console.log('hi');
//using s=jaws to request of the list of movies
//use javascript dom creation to show it in page wrapped
//in paragraphs for each movie

var $addBtn = $('button')
        $addBtn.click(function() {
           $input = $('input').val();
           console.log($input);
          options = {
            url: 'http://www.omdbapi.com/?apikey=2f6435d9&s='+$input
          }
            var $container = $('.container')
          $.ajax(options).done(function(response) {
            response.Search.forEach(function(movie) { //read it and returns object 'response' and Search is a key
              var $div = $('<div>').addClass('box')
              var $h1 = $('<h1>')
              var $img = $('<img>')
              $img.attr("src",movie.Poster);
              $h1.text(movie.Title)  //movie is also an oject
              $div.append($h1)
              $div.append($img)
              $container.append($div)
            });
console.log('zzzzz')
          });
          });
console.log('look over here');
