const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$="pdf"]');
const $pdfCheckBox = $('<label><input type="checkbox"> Allow PDF downloads</label>');

$secureLinks.attr('target', '_blank');
$pdfs.attr('download', true);

$secureLinks.addClass('secure');
$pdfs.addClass('pdf');

$pdfs.on('click', function(event){
	if ($(':checked').length === 0) {
		event.preventDefault();
		alert('Please check the box to allow downloads.')
	}
});
$('#links').append($pdfCheckBox);

$('a').each(function(){
	const url = $(this).attr('href');
	$(this).partent().append(`(${url})`);
});