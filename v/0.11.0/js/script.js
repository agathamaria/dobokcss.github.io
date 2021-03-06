
/*
*
* ------------------------------------------------------
* script for DobokCSS
* ------------------------------------------------------
*
* Author:  Estefanio NS <estefanions AT gmail DOT com> 
* Project: https://github.com/dobokcss/dobokcss
* Page:    http://dobokcss.github.io
* version: 0.10.0
*/

$( document ).ready(function() {

$('.nv_bar').prepend('<div class="nv_bt">Menu</div>');
	$('.nv_bar .nv_bt').on('click', function(){
		var nv = $(this).next('ul');
		if (nv.hasClass('open')) {
			nv.removeClass('open');
		}
		else {
			nv.addClass('open');
		}
	});

$('.nv_sidebar li.has_dropdown>a').on('click', function(){
		$(this).removeAttr('href');
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp();
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown();
			element.siblings('li').children('ul').slideUp();
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp();
		}
	});
	$('.nv_sidebar>ul>li.has_dropdown>a').append('<span class="holder"></span>');

	(function getColor() {
		var r, g, b;
		var textColor = $('.nv_sidebar').css('color');
		textColor = textColor.slice(4);
		r = textColor.slice(0, textColor.indexOf(','));
		textColor = textColor.slice(textColor.indexOf(' ') + 1);
		g = textColor.slice(0, textColor.indexOf(','));
		textColor = textColor.slice(textColor.indexOf(' ') + 1);
		b = textColor.slice(0, textColor.indexOf(')'));
		var l = rgbToHsl(r, g, b);
		if (l > 0.7) {
			$('.nv_sidebar>ul>li>a>span').css('border_color', 'rgba(0, 0, 0, .35)');
		}
		else
		{
			$('.nv_sidebar>ul>li>a>span').css('border_color', 'rgba(255, 255, 255, .35)');
		}
	})();

	function rgbToHsl(r, g, b) {
	    r /= 255, g /= 255, b /= 255;
	    var max = Math.max(r, g, b), min = Math.min(r, g, b);
	    var h, s, l = (max + min) / 2;

	    if(max == min){
	        h = s = 0;
	    }
	    else {
	        var d = max - min;
	        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
	        switch(max){
	            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
	            case g: h = (b - r) / d + 2; break;
	            case b: h = (r - g) / d + 4; break;
	        }
	        h /= 6;
	    }
	    return l;
	}


var headertext = [],
headers = document.querySelectorAll(".tb_scale th"),
tablerows = document.querySelectorAll(".tb_scale th"),
tablebody = document.querySelector(".tb_scale tbody");

for(var i = 0; i < headers.length; i++) {
  var current = headers[i];
  headertext.push(current.textContent.replace(/\r?\n|\r/,""));
} 
for (var i = 0, row; row = tablebody.rows[i]; i++) {
  for (var j = 0, col; col = row.cells[j]; j++) {
    col.setAttribute("data-th", headertext[j]);
  } 
}



});

