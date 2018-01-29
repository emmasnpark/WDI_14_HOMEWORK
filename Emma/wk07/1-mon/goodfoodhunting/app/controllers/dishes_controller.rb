class DishesController < ApplicationController

  def index
   @dishes = Dish.all
  end

  def new
    @dish = Dish.new
  end

  def create
    @dish = Dish.new
    @dish.name = params[:name]
    @dish.image_url = params[:image_url]
    @dish.save
    redirect_to '/dishes'
  end

  def show
   @dish = Dish.find(params[:id])
  end

  def edit
   @dish = Dish.find(params[:id])
  end

  def update
    @dish = Dish.find(params[:id])
    @dish.name = params[:name]
    @dish.image_url = params[:image_url]
    @dish.save
    if @dish.save
       redirect_to '/dishes'
    else
       redirect_to 'dishes/edit'
    end
  end

  def destroy
     dish = Dish.find(params[:id])
     if dish.destroy
       redirect_to '/dishes'
     else
       render :show
     end
  end
end
