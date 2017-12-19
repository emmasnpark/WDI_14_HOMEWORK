planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]
#Access the second value in planeteers.
puts planeteers[1]
#Add "Heart" to the end of planeteers.
puts planeteers.push("Heart")
#Remove "Captain Planet" from the array (without using a method).
new = []
planeteers.each do |t|
  if(t!="Captain Planet")
    new << t
  end
end
puts new
#Combine planeteers with rangers = ["Red", "Blue", "Pink", "Yellow", "Black"] and save the result in a variable called heroes.
heroes = []
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]
heroes << planeteers
heroes << rangers
print heroes.flatten
#Alphabetize the contents of heroes using a method
heroes = heroes.flatten.sort
print heroes
# #Randomize the contents of heroes using a method.
shuffled = heroes.shuffle
print shuffled
#Select a random element from heroes using a method.
puts heroes.sample
#Select all elements in heroes that begin with "B" using a method.
array_for_b = []
heroes.each do |elem|
  if elem.start_with?('B')
    array_for_b << elem
  end
end
puts array_for_b

#hashes
#Initialize a hash called ninja_turtle
ninja_turtle = {
  :name => 'Michelangelo',
  :weapon => 'Nunchucks',
  :radical => true
}
ninja_turtle[:age] = 593
puts ninja_turtle
#Remove the radical key-value pair from ninja_turtle.
puts ninja_turtle.reject { |key,value| key == :radical}
puts ninja_turtle
# Add a key pizza_toppings to ninja_turtle. Set it to an array of strings (e.g., ["cheese", "pepperoni", "peppers"]).
ninja_turtle[:pizza_toppings] = ["cheese", "pepperoni", "peppers"]
# Access the first element of pizza_toppings.
puts ninja_turtle[:pizza_toppings][0]
#Produce an array containing all of ninja_turtle's keys using a method.
new_arr = []
ninja_turtle.each do | key,value|
  new_arr << key
end
print new_arr
#Print out each key-value pair in the following format
ninja_turtle.each do | key,value|
 puts "#{key}'s is equal to #{value} "
end
