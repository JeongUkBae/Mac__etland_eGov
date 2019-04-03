"use strict";
function Session(x){
	sessionStorage.setItem('ctx',x);
	sessionStorage.setItem('img',x+'/resources/img');
	sessionStorage.setItem('css',x+'/resources/css');
	sessionStorage.setItem('js',x+'/resources/js');

	return {
		ctx:()=>{return sessionStorage.getItem('ctx')},
		img:()=>{return sessionStorage.getItem('img')},
		css:()=>{return sessionStorage.getItem('css')},
		js:()=>{return sessionStorage.getItem('js')}
		
	};
}