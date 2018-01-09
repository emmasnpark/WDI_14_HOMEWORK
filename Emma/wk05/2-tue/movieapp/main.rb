
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

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
  result = HTTParty.get("http://omdbapi.com/?apikey=2f6435d9&t=#{params["title"]}")
  @movie = result.parsed_response
  erb :show
end

get '/history' do
  file = File.readlines('search_history.txt')
  @list = file
  erb :history
end
