lines = 0
puts "Enter file name: "
file_name = gets.chomp
File.readlines(file_name).each do |line|
  lines = lines + 1
end
puts "#{lines} line(s)"
