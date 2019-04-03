var emp = emp || {}
emp =(()=>{
	let setpath =()=>{
		 _= $.ctx();
	      js = $.js();
	      compojs = js+'/component/compo.js';
	      prdjs = js+'/prod/prod.js';
	      custjs = js+'/customer/cust.js';
	      r_cnt = '#right_content';
	      l_cnt = '#left_content';
		
	};
	let init =()=>{
		setpath();
		onCreate();
	};
	let onCreate =()=>{
		setContentView();
	};
	let setContentView =()=>{
		$.getScript(compojs,()=>{
			$('#left_content ul').empty();
			$('<h2 id="menu-name">bit_etland</h2>').html('#menu-name');
			emp_navi();
		});
	};
/*	고객 목록
	상품 등록
	상품 목록
	상품 통계*/
	let emp_navi =()=>{
		setpath();
		let arr = [
			{val:'고객 목록', name:'cust_list'},
			{val:'상품 등록', name:'prd_rest'},
			{val:'상품 목록', name:'prd_list'},
			{val:'상품 수정', name:'prd_update'},
			{val:'상품 삭제', name:'prd_delete'},
			{val:'상품 통계', name:'prd_stats'}
			];
		$.each(arr,(i,j)=>{
			$('<li><a href="#">'+j.val+'</a></li>')
				.attr('name',j.name)
				.attr('id',j.name)
				.addClass('cursor')
				.appendTo('#left_content ul')
				.click(function(){
					let that = $(this).attr('name');
					$(this).addClass('active');
					$(this).siblings().removeClass('active');
				switch(that){
					case 'cust_list': 
						alert('고객목록 클릭');
						break;
					case 'prd_rest': 
						$('#prd_rest').click(e=>{
							e.preventDefault();
							alert('상품등록 클릭');
							prod.prod_post();
						});
						
						break;
					case 'prd_list': 
						$('#prd_list').click(e=>{
							e.preventDefault();
							alert('상품목록 클릭');
							prod.prod_list(1);
							
						});
						
						
						break;
					case 'prd_update':
						alert('상품수정 클릭');
						break;
					case 'prd_delete':
						alert('상품삭제 클릭');
						break;
					case 'prd_stats':
						alert('상품통계 클릭');
						break;
				};
					
			});
		});
		
	};
	return {init:init}
})();