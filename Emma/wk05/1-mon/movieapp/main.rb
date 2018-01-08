
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :index
end

get '/show' do
  result = HTTParty.get("http://omdbapi.com/?apikey=2f6435d9&t=#{params["title"]}")
  @answer = result.parsed_response

   erb :show
end
