var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();

$(function(){
  $('<style id="tableHoverStyle"></style>').appendTo('body');
  $('td:not(:first-child), th').on('mouseenter',function(e) {
      $('#tableHoverStyle').html('td:nth-child('+($(this).index()+1)+') {color: rgba(255,255,255,.8) !important;}');
  });
  $('th:first-child').on('mouseenter',function(e) {
      $('#tableHoverStyle').html('td {color: #fff !important;}');
  });
    $('td:first-child').on('mouseenter',function(e) {
      $('#tableHoverStyle').html('');
  });
  $('tbody').on('mouseleave',function(e){
    $('#tableHoverStyle').html('');
  })
});
