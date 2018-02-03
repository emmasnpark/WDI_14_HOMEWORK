class PokemonsController < ApplicationController
  def index
    @pokemons = Pokemon.all
  end

  def new
  end

  def api_index
    @pokemons = Pokemon.all
    render json: @pokemons
  end

  def create
   pokemon = Pokemon.new
   pokemon.species = params[:species]
   pokemon.nickname = params[:nickname]
   pokemon.level = params[:level]
   pokemon.save
   redirect_to '/pokemons'
  end

  def show
    @pokemon = Pokemon.find(params[:id])
  end

  def edit
    @pokemon = Pokemon.find(params[:id])
  end

  def update
    pokemon = Pokemon.find(params[:id])
    pokemon.species = params[:species]
    pokemon.nickname = params[:nickname]
    pokemon.level = params[:level]
    if pokemon.save
      redirect_to "/pokemons/#{pokemon.id}"
    end
  end

end
