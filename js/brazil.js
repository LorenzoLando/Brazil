//function for google maps

function initMap() {
        var uluru = {lat: 57.1445876, lng: -2.1033751};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

//when scrolling down nav background rgb(0,0,128)

$(window).on('scroll', function() {    
      var scroll = $(window).scrollTop();

      if (scroll >= 500) {
        
 			$('.navbar').removeClass('background-top');

 //when scrolling up nav background back to normal
      } else {

      		$('.navbar').addClass('background-top');
      }
 });









//when scrolling down button and h1 and h1 p to disappear





//when scrolling up button and h1 and h1 p to re-appear
