class Hello
  begin
  # Any exceptions in here...
  1/0
  rescue
    # ...will cause this code to run
    puts "Got an exception, but I'm responding intelligently!"
    do_something_intelligent()
  end

  def do_something_intelligent
     puts "zzzz"
  end

end
hello = Hello.new
p hello.do_something_intelligent
