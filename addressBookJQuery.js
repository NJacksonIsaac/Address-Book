//this is how far I can go within the timeline
//I am working to improve my Javascript/Jquery skills. I am not yet strong on this
//I think I'm better on HTML and css
//I will soon get there with Javascript

//create an empty array for contacts storage
let contacts = [];
// declare a function to retrieve input data and store as object
function disp() {
      var firstName = $('#firstName').val();
      var lastName =  $('#secondName').val();
      var address =  $('#contact').val();
      var phoneNumber =  $('#phone').val();
      var emailAddress = $('#email').val();
      var image = $('#img').val();

let details={
  firstName: firstName,
  lastName: lastName,
  address:  address,
  phone: phoneNumber,
  email: emailAddress,
  picture: image
};
//add object into contacts array
contacts.push(details);
console.log(contacts);

//list Contact as First Name + Last Name under "Names", in separate line
$(".content").html("")
    $(".content").append("<ul>")
      for(var i=0; i < contacts.length; i++) {
        $('.content').append("<li><span class='remove'>Delete</span>" +
        "   " +"  "+ contacts[i].firstName+ " " + contacts[i].lastName+
        " "+ "<span class='remov'>Edit</span></li>");
};
     $(".content").append("</ul>")
//show other contact details at the right div
$(".details").html("")
    $(".details").append("<ul>")
      for(var i=0; i < contacts.length; i++){
        $('.details').append("<li>" + 'Address:' + contacts[i].address+"</li>");
        $('.details').append("<li>" + 'Phone:' + contacts[i].phone+"</li>");
        $('.details').append("<li>" + 'Email:' + contacts[i].email+"</li>");
        $('.details').append("<li>" +  contacts[i].picture+"</li>");
        $('.details').append("<hr>")
      };
    $(".details").append("</ul>")
};


//call function disp on clicking the add button
 var n = 1
  $("#add").click(function(){
    disp();
    n +=1
  });
//delete an entry
  $(".content").on("click", "li", function(stop){
    $(this).remove()
    var details = $('list')
    $(this).details.remove()
  });
