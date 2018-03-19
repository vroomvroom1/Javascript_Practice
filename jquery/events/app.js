
$('.spoiler').on('click', 'button', function(event){
  $(this).prev().show();
  $(this).hide();
});


//Create reveal spoiler button
const $button = $('<button>Reveal Spoilers</button>');
//Append to webpage
$('.spoiler').append($button);

$('.spoiler span').hide();
