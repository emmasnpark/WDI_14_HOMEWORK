class Phone
  def initialize(num)
   @num = num
  end

  def number
   @num_1 = @num.gsub(/[\D]/, "")
   if @num_1.length == 11 && @num_1[0] == "1"
      @num_1[0]= ""
     return @num_1
   elsif @num_1.length == 11 && @num_1[0] != "1"
     return "0000000000"
   elsif @num_1.length < 10
     return "0000000000"
   else
     return @num.gsub(/[\D]/, "")
   end
  end

  def area_code
    @num[0..2]
  end

  def to_s
   "(#{area_code}) #{@num[3..5]}-#{@num[6..9]}"
  end

end
