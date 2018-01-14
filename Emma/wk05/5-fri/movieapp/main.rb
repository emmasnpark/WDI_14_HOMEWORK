
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'
require 'pg'

get '/' do
  erb :index
end

get '/movie_list' do
  result = HTTParty.get("http://omdbapi.com/?apikey=2f6435d9&s=#{params["title"]}").parsed_response
  @answer = result["Search"]

  file = File.open('search_history.txt', 'a')
  file.puts(params[:title])
  file.close

  if result["totalResults"] == "1"
    redirect to("/show?title=#{@answer[0]['Title']}")
  else
    erb :'movie_list'
  end


end

get '/show' do
  conn = PG.connect(dbname: 'movie')
  sql = "SELECT * FROM movies WHERE title = '#{params["title"]}';"
  db_result = conn.exec(sql)
  # binding.pry


  if db_result.count == 0
  result = HTTParty.get("http://omdbapi.com/?apikey=2f6435d9&t=#{params["title"]}")
  @movie = result.parsed_response #parsed_response is a HTTParty method. it returns a data to hash
  sql = "INSERT INTO movies (title, poster, year, released, runtime, genre, director, awards, plot)
         VALUES ('#{@movie["Title"]}', '#{@movie["Poster"]}', '#{@movie["Year"]}', '#{@movie["Released"]}','#{@movie["Runtime"]}', '#{@movie["Genre"]}',
         '#{@movie["Director"]}', '#{@movie["Awards"]}', '#{@movie["Plot"].gsub("'","''")}');"


          #return sql
  @movie_one = conn.exec(sql)
  erb :show
  else
    @movie = db_result[0]
    # binding.pry
    erb :show_from_my_server
  end
end

get '/history' do
  file = File.readlines('search_history.txt')
  @list = file
  erb :history
end
