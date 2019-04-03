var prod = prod || {};
prod = (()=>{
	let _,js,compojs,r_cnt, l_cnt;
	let setpath=()=>{
		  _ = $.ctx();
	      js = $.js();
	      compojs = js+'/component/compo.js';
	      r_cnt = '#right_content';
	      l_cnt = '#left_content';
	};
	let init=()=>{

		onCreate();
	};
	let onCreate=()=>{
		setpath();
		setContentView();
	};
	let setContentView=()=>{
		$.getScript(compojs,()=>{

		});
	};
	let carousel =()=>{	
		setpath();
		$.getScript(compojs,()=>{
			$(r_cnt).empty();
			$(compo.shop_Carousel()).appendTo(r_cnt);
			$(r_cnt).after(compo.prod_post());
			
		});
			
		/*$(compo.shop_Carousel).html(r_cnt);*/
	};
	let prod_post =()=>{
		setpath();
		$(r_cnt).empty();
		$(compo.prod_post_to()).appendTo(r_cnt);
		
	};
	
	/*
	 * productID, productName, supplierID, categoryID,
	unit, price, productImage;
	 * */
	let prod_list=x=>{
		setpath();
		alert('상품 리스트 진입::::');
		$.getJSON(_+'/phones/'+x, d=>{
			$(r_cnt).empty();
			$(compo.list()).appendTo(r_cnt);
			$('#list font').html('<h1><font style="font-size: 30px">상품 목록</font></h1>');
			let table ="";
			let prod_name = [
				{val:'NO'},
				{val:'상품번호'},
				{val:'상품명'},
				{val:'공급자번호'},
				{val:'카테고리'},
				{val:'수량'},
				{val:'판매금액'},
				{val:'이미지번호'}
				
			];
			$('#list_content').empty();
			$.each(prod_name,(i,j)=>{
				$('<th>'+j.val+'</th>').appendTo('#list_content');
			});
			$.each(d.ls,(i,j)=>{
				table += '<tr><td>'+j.rownum+'</td>'
				+'<td>'+j.productID+'</td>'
				+'<td>'+j.productName+'</td>'
				+'<td>'+j.supplierID+'</td>'
				+'<td>'+j.categoryID+'</td>'
				+'<td>'+j.unit+'</td>'
				+'<td>'+j.price+'</td>'
				+'<td>'+j.productImage+'</td>'
				+'</tr>'
			});
			$(table).appendTo('#list_content');
			$('#list_content_2').attr('id','pagination');
			let pxy = d.pxy;
			if(pxy.existPrev){
				$('<a>&laquo;</a>').appendTo('#pagination')
				.click(function(){
					prod_list(pxy.prevBlock);
				});
			}
			let i= 0;
			for(i=pxy.startPage; i<=pxy.endPage; i++){
				if(pxy.pageNum == i){
					$('<a class="page active">'+i+'</a>')
				/*	.attr('href',_+'/phones/'+i)*/
					.appendTo('#pagination')
					.click(function(){
						alert('클릭한페이지'+$(this).text());
						prod_list($(this).text());
					});
					
				}else{
					$('<a class="page">'+i+'</a>')
				/*	.attr('href',_+'/phones/'+i)*/
					.appendTo('#pagination')
					.click(function(){
						alert('클릭한페이지'+$(this).text());
						prod_list($(this).text());
					});
				}
			};
			
			
			if(pxy.existNext){
				$('<a>&raquo;</a>').appendTo('#pagination')
				.click(function(){
					prod_list(pxy.nextBlock);
				});
				
			}
			
		});
		
		
	};
	
	let post =()=>{};
	let get =()=>{};
	let put =()=>{};
	let del =()=>{};
	
	return {init:init, carousel:carousel, prod_post:prod_post, prod_list:prod_list}
	
})();