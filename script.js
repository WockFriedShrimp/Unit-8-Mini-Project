let comedy = ["https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iTXvFT6NrtN0/v0/-1x-1.jpg", "https://i0.wp.com/www.theilluminerdi.com/wp-content/uploads/2021/12/smiling-friends-3.jpg"];

let action = ["https://upload.wikimedia.org/wikipedia/en/8/8a/Daredevil_%28TV_series%29_logo.jpg","https://cdn.mos.cms.futurecdn.net/hif2W9veLGmYV2gUmmviM5.jpeg"];


$(".submit-button").click(function(){
    let genreInput=$(".get-suggestions").val();
     $(".shows").empty();
    //Write code for Task Two below this line1
	if(genreInput === "comedy"){
    for(let name of comedy){
    $(".shows").append("<img src=" + name + ">");
    }
    }
    if(genreInput === "action"){
    for(let name of action){
    $(".shows").append("<img src=" + name + ">");
    }
    }
});

$(".suggestion-button").click(function(){
    let suggestion=$(".give-suggestions").val();
    $(".shows").text("Thanks for your suggestion! Check the console to see that it was added!");
  //Write code for Task Three below this line!
    comedy.push(suggestion);
    console.log(comedy);
    action.push(suggestion);
    console.log(action);
});