$('.spoiler').on('click', 'button', function(event){
	console.log(event.target)
	$(this).prev().show();
	$(this).hide();
});

const $button = $('<button>Reveal Spoiler</button>');
$('.spoiler').append($button);
$('.spoiler span').hide();