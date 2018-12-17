
/*

Name: custom.js
Author: Fourtabs
Website: https://www.fourtabs.com
Exclusively available here: https://themeforest.net/user/fourtabsthemes

 */







/*====================================================


	Table of Contents
	
	
		01. Loading Screen 
		
		02. Lightbox 
		
		03. Map

	
	
====================================================*/



jQuery(document).ready(function($) {
	"use strict";

	
	
/*======================

	01. Loading Screen 

========================*/



	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 0);

	

	
/*======================

	02. Lightbox 

========================*/



	lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });
	
	
/*======================

	03. Map

========================*/


	jQuery(document).ready(function($) {
		
		$('#map_canvas').mapit();

		
	});
	
	
});