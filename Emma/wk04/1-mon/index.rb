# number 1
      # ran_num = rand(0..10)
      # puts ran_num
      # print "Type in your guess:"
      # guess = gets.to_i
      #
      # while guess != ran_num do
      #   if guess > ran_num
      #     puts "Wrong, guess lower"
      #     print "Type in your guess:"
      #     guess = gets.to_i
      #   elsif guess < ran_num
      #     puts "Wrong, guess higher"
      #     print "Type in your guess:"
      #     guess = gets.to_i
      #   end
      # end
      #
      # puts "Congratulations"

# number 2
days_of_the_week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
new_week = days_of_the_week.rotate(-1)
# print new_week

# number 3
new_days_of_the_week = []
week_days = days_of_the_week[0..4]
weekends = days_of_the_week[5,6]
new_days_of_the_week[0] = week_days
new_days_of_the_week[1] = weekends
# print new_days_of_the_week

#number 4
new_days_of_the_week.delete_at 1
# print new_days_of_the_week.flatten.sort

arr = [1,2,3,[4,[5,6],7],[8,9]]
newarr = arr.flatten(1)
print newarr
