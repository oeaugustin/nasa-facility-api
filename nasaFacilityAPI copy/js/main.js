//main.js 

//Pull Nasa Facility list request API

let apiUrl = "https://data.nasa.gov/resource/gvk9-iz74.json"

$.ajax({
url:apiUrl,
success: function(result){
  console.log(result)
  result.forEach(function(object) {
    let location = object.location
      if(object.center + " located in " + object.city !== $("body > ul > li:last-child").text()){
          $("ul").append('<li>' + object.center + " located in " + object.city + '</li>')
          console.log(object.location)
      }
  })
},
error:function(err){
  console.log(err)
}
})
