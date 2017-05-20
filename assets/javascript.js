
var topics = ["Iron-Man","Hulk","Spider-man","Captain-America","Thor"];










$( document ).on("click",".gif-button", function() {
    

    
	$("#gif-holder").empty();
   
    	
	    var name = $(this).attr("id");
	    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
	      	name + "&api_key=dc6zaTOxFJmzC";

	$.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
       
        console.log(response);

       
        var results = response.data;
        

        for (var i = 0; i < results.length; i++) {

        var gifDiv = $("<div>");
        
        var gifImage = $("<img>");
        gifImage.attr("class","gif");
        gifImage.attr("data-still",results[i].images.fixed_height_still.url );
        gifImage.attr("data-state","animate");
        gifImage.attr("data-animate",results[i].images.fixed_height.url);
        gifImage.attr("src",results[i].images.fixed_height.url);
        
       gifDiv.append(gifImage);
        $("#gif-holder").prepend(gifDiv);
        
            
        // ==================================
        };
        $(".gif").on("click", function() {
          
          var state = $(this).attr("data-state");
          
          var animate = $(this).attr("data-animate");
        
          var still =$(this).attr("data-still");
         
          if (state ==="still"){
            $(this).attr("src", animate);
            $(this).attr("data-state", "animate");
          } else if (state ==="animate"){
            $(this).attr("src", still);
            $(this).attr("data-state", "still");
          }
        });
	    }); 
    


});
$(document).ready( function(){
	createBtns(topics);

	function createBtns(arr) {
	
	for (var i = 0; i < arr.length; i++) {
		var btn = $("<button>");
		
		btn.attr("id",arr[i]);
		btn.attr("class", "gif-button")
		btn.text(arr[i]);
		
		$("#gif-buttons").append(btn);
	}
};

$(document).on("click", "#add-user" , function() {
		console.log("testing");
		event.preventDefault();
      $("#gif-buttons").empty();
      
      
      var name = $("#name-input").val().trim();
      
      console.log(name);
      topics.push(name);
      console.log(topics);
      createBtns(topics);
     
      
    });

})

