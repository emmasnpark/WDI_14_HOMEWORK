class StudentsController < ApplicationController

  def index
    @students = Student.all
  end

  def new
    @student = Student.new
  end

  def create
     @student = Student.new
     @student.name = params[:name]
     @student.img_url = params[:img_url]
     @student.house_id = params[:house_id]
     if @student.save
       redirect_to student_path(@student)
     else
       render 'new'
     end
   end

  def show
    @student = Student.find(params[:id])
  end

end
