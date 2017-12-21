# def calculator
#     puts "what operators do you want to use(+,-,*,/,**,sqrt,quit)?"
#     op = gets.chomp
#
#     while op != 'quit'
#         puts "type the first number"
#         first_num = gets.chomp.to_i
#         puts "type the second number.(if you select sqrt, never mind ths)"
#         second_num = gets.chomp.to_i
#
#         case op
#          when '+'
#            result = first_num + second_num
#          when '-'
#            result = first_num - second_num
#          when '*'
#            result = first_num * second_num
#          when '/'
#            result = first_num / second_num
#          when '**'
#            result = first_num ** second_num
#         when 'sqrt'
#           result = Math.sqrt(first_num)
#         end
#         puts "result is #{result}"
#
#         puts "what operators do you want to use(+,-,*,/,**,sqrt,quit)?"
#         op = gets.chomp
#     end
# end
# calculator

def multi_calculation
  puts "what operators do you want to use(+,-,*,/,**,sqrt,quit)?" # 2 + 2 * 3
  op = gets.chomp.gsub(/\s+/,"").split('')

  new_arr = []
  op.each do |elem|
    if elem.match(/\d/)
      elem = elem.to_i
      new_arr << elem
    elsif elem == "+"
      r = '+'.to_sym
      p r
    end
  end
  p new_arr
  # p new_arr.inject(r)
end
multi_calculation

r = :+
p [2,3,3].inject(r)
