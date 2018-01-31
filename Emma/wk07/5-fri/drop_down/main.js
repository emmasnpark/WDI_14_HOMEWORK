
var myobject = {
    nyc : 'NYC',
    sf : 'SF',
    la : 'LA',
    sydney : 'SYD',
    austin : 'ATX'
};

var select = document.getElementById("city-type");
for(property in myobject) {
    select.options[select.options.length] = new Option(myobject[property], property);
}

//Navigate to URL when select box is changed
var navigateToValue = function() {
  var element = document.querySelector("body")
  element.classList.remove("nyc","sf","la","sydney","austin");
  element.classList.add(this.value);
  console.log(this.value);
}

select.addEventListener('change',  navigateToValue);
