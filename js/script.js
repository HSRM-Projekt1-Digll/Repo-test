/*Dies ist unser eigener JS Code*/
$(document).ready(function() {

  /*Smooth Scrolling*/
  $('.nav-link').click(function() {
    // collapse top menu bar
    var navbarContainerElement = document.getElementById("navbarContainer");
    console.log("Collapsing Top Navbar");
    $('.collapse').collapse("hide");
    // scroll to hash anchor and exclude navbar height from offset
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
    location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
      if ($target.length) {
        var targetOffset = $target.offset().top - navbarContainerElement.clientHeight;
        $('html,body').animate({
          scrollTop: targetOffset
        }, 700);
        return false;
      }
    }
  });

  /*Smooth Scrolling für Kontaktlink*/
  $('.contact').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
    location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
      if ($target.length) {
        var targetOffset = $target.offset().top - 65;
        $('html,body').animate({
          scrollTop: targetOffset
        }, 700);
        return false;
      }
    }
  });

  /*Kartenflip*/
  var card = $('.card');
  $('.card').click(function() {
    $(this).toggleClass('is-flipped');
  });

  /* Kalender  Start*/
  //Öffnet Modal beim Klicken auf Kalendereintrag
  var calendarEvents = [{
    title: "Ladies Night",
    description: "Ladies Night - Jeden Mittwoch ab 18:00 Uhr bekommen die Damen einen Welcome-Prosecco.",
    reservationRequired: false
  },
  {
    title: "Student Special",
    description: "Jeden Donnerstag von 20:00 bis 23:30 Uhr erhaltet ihr gegen Vorlage eures Studentenausweises unser Studi-Gedeck bestehend aus einem Bier und einem Schnaps nach Wahl für nur 3€.",
    reservationRequired: false
  },
  {
    title: "Cocktail Kurs",
    description: "Unser Cocktail Kurs findet jeden vierten Montag im Monat von 18:00 bis 19:00 Uhr statt.",
    reservationRequired: true
  }
];

var modal = $('#calendarModalCenter');
$(".fc-event-title").click(function(event) {
  console.log(event.target);
  console.log("Open Modal");
  $('#calendarModalCenter').modal({
    keyboard: false
  })
  var title = event.target.innerHTML;
  var calendarEvent = findMatchingEvent(title, calendarEvents)
  if (calendarEvent){
    modal.find('.modal-title').text(calendarEvent.title);
    modal.find('.modal-body').text(calendarEvent.description);
    if(calendarEvent.reservationRequired){
      modal.find('.modal-reservation-required').text("Reservierung erforderlich");
      modal.find('.modal-reservation-required').show();
    }
    else {
      modal.find('.modal-reservation-required').hide();
    }
  }

});

function findMatchingEvent(title, calendarEvents){
  for (var i = 0; i < calendarEvents.length; i++) {
    var calendarEvent = calendarEvents[i];
    if(calendarEvent.title === title) return calendarEvent;
  }
}
/*js Kalender Ende*/

});

/*js Kalender Mobile */
function populate(s1, s2) {
  var s1 = document.getElementById(s1);
  var s2 = document.getElementById(s2);
  s2.innerHTML = "";
  if (s1.value == "Januar") {
    var optionArray = ["|", "ladiesNight|Ladies Night", "studentenSpecial|Studenten Special", "cocktailKurs|Cocktail Kurs"];
  } else if (s1.value == "Februar") {
    var optionArray = ["|", "ladiesNight|Ladies Night", "studentenSpecial|Studenten Special", "cocktailKurs|Cocktail Kurs"];
  } else if (s1.value == "März") {
    var optionArray = ["|", "ladiesNight|Ladies Night", "studentenSpecial|Studenten Special", "cocktailKurs|Cocktail Kurs"];
  } else if (s1.value == "April") {
    var optionArray = ["|", "ladiesNight|Ladies Night", "studentenSpecial|Studenten Special", "cocktailKurs|Cocktail Kurs"];
  } else if (s1.value == "Mai") {
    var optionArray = ["|", "ladiesNight|Ladies Night", "studentenSpecial|Studenten Special", "cocktailKurs|Cocktail Kurs"];
  } else if (s1.value == "Juni") {
    var optionArray = ["|", "ladiesNight|Ladies Night", "studentenSpecial|Studenten Special", "cocktailKurs|Cocktail Kurs"];
  } else if (s1.value == "Juli") {
    var optionArray = ["|", "ladiesNight|Ladies Night", "studentenSpecial|Studenten Special", "cocktailKurs|Cocktail Kurs"];
  } else if (s1.value == "August") {
    var optionArray = ["|", "ladiesNight|Ladies Night", "studentenSpecial|Studenten Special", "cocktailKurs|Cocktail Kurs"];
  } else if (s1.value == "September") {
    var optionArray = ["|", "ladiesNight|Ladies Night", "studentenSpecial|Studenten Special", "cocktailKurs|Cocktail Kurs"];
  } else if (s1.value == "Oktober") {
    var optionArray = ["|", "ladiesNight|Ladies Night", "studentenSpecial|Studenten Special", "cocktailKurs|Cocktail Kurs"];
  } else if (s1.value == "November") {
    var optionArray = ["|", "studentenSpecial|Studenten Special", "cocktailKurs|Cocktail Kurs"];
  } else if (s1.value == "Dezember") {
    var optionArray = ["|", "ladiesNight|Ladies Night", "studentenSpecial|Studenten Special", "cocktailKurs|Cocktail Kurs"];
  }


  for (var option in optionArray) {
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    s2.options.add(newOption);
  }
}

/*js Dropdown*/
$('#slct2').on('change', function() {
  var id = this.value;
  $('.Infobox').hide();
  $('#' + id).show();
});
/*js Kalender Mobile Ende*/
