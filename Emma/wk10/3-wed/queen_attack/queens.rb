class Queens
 #
 #  def initialize(*h)
 #    if h.length == 0
 #      @white_set = [0,3]
 #      @black_set = [7,3]
 #    elsif h.first[:white] != h.first[:black]
 #      @white = h.first[:white]
 #      @black = h.first[:black]
 #    end
 #
 #   raise ArgumentError, 'Queens cannot occupy same space' if white == black
 # end
 def initialize(*h)
     @white = h.first[:white] || [0,3]
     @black = h.first[:black] || [7,3]
     raise ArgumentError, 'Queens cannot occupy same space' if h.first[:white] == h.first[:black]
 end
  def white
    if @white
      return @white
    else
      return @white_set
    end
  end

  def black
    if @black
      return @black
    else
      return @black_set
    end
  end

  def to_s

  end

  def attack?

  end
end


# queen = Queens.new(white: [3, 7], black: [6, 1])
# p queen
# p queen.white
# p queen.black

queen = Queens.new(white: [2, 4], black: [2, 4])
p queen
p queen.white
p queen.black

# queen = Queens.new
# p queen
# p queen.white
# p queen.black
