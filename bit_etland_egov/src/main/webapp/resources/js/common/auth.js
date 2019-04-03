var auth = auth || {}
auth = (()=>{
/*	let _ = $.ctx();
	let js = $.js();
	let comopjs = $.js()+'/component/compo.js';
	let rightCtnt = $('#right_content');
	*/
	let _,js,compojs,r_cnt, l_cnt;
	const ERR_MSG = '호출하는 JS 파일을 찾지 못하였습니다.'
	let init =()=>{
		
		  _= $.ctx();
	      js = $.js();
	      compojs = js+'/component/compo.js';
	      custjs = js+'/customer/cust.js';
	      r_cnt = '#right_content';
	      l_cnt = '#left_content';
	      
		onCreate();
	};
	let onCreate =()=>{
		
		setContentView();
		};
	let setContentView =()=>{
		$.getScript($.js()+'/component/compo.js')
		.done(()=>{
			$('#right_content').html(compo.cust_login_form());
			$()
			$('form button[type=submit]').click(e=>{
				e.preventDefault();
				login();
			});
			
			$('#left_content ul').empty();

			$.each(nav(),(i,j)=>{
				
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
						case 'login' : 
							$('#right_content').empty();
							$(compo.cust_login_form()).appendTo('#right_content');
							$('form button[type=submit]').click(e=>{
								e.preventDefault();
								login();
							});

							break;
						case 'join' : 
							$('#right_content').empty();
							$(compo.cust_join_form()).appendTo('#right_content');
							$('form button[type=submit]').click(e=>{
								e.preventDefault();
								alert('회원가입 클릭 ')
								join();
							});
							
							break;
						case 'access' : 
							$('#right_content').empty();
							$(compo.emp_access_form()).appendTo('#right_content');
							$('#access_btn').click(e=>{
								e.preventDefault();
								alert('access_btn 클릭!');
								access();
							});
							break;
						case 'registe' : 
							$('#right_content').empty();
							$(compo.emp_register_form()).appendTo('#right_content');
							$('form button[type=submit]').click(e=>{
								e.preventDefault();
								alert('레지스터 클릭 ')
								register();
							});
							break;
						}
					});
			}); //navi_end
			$('#login').addClass('active');
		
		})
		.fail(()=>{
			alert(ERR_MSG);
		});
	};
	let nav = ()=>{
		return arr = [
			{val:'회원 로그인', name:'login'},
			{val:'회원 가입', name:'join'},
			{val:'사원 로그인', name:'access'},
			{val:'사원 가입', name:'registe'}];
	};
	let login =()=>{	
			let data = {customerID:$('form input[name=uname]').val(), 
						password:$('form input[name=psw]').val()};
			alert('ID :: '+data.customerID);
			$.ajax({
				url: $.ctx()+'/customers/'+data.customerID,
				type: 'post',
				data: JSON.stringify(data),
				dataType: 'json',
				contentType: 'application/json; charset=UTF-8',
				success: d=>{
					if(d.customerID!==''){
						alert('로그인성공::'+d.customerID);
						/*$('#right_content').html('<h1>테스트</h1>')*/
						cust.init(d);
						
						
					//	$(compo.cust_mypage()).appendTo('#right_content');
					}else{
						alert('로그인 실패');
					}
						
				},
				error: e=>{
					alert('실패');
				}
			});
		
	};

    let join =()=>{
    	let data = { customerID : $('form input[name=customerID]').val(),
    			customerName : $('form input[name=customerName]').val(),
    			password : $('form input[name=password]').val(),
    			ssn : $('form input[name=ssn]').val(),
    			phone : $('form input[name=phone]').val(),
    			city : $('form input[name=city]').val(),
    			address : $('form input[name=address]').val(),
    			postalcode : $('form input[name=postalcode]').val()};
    	$.ajax({
    		url: $.ctx()+'/customers',
    		type: 'post',
    		data: JSON.stringify(data),
    		dataType: 'json',
    		contentType: 'application/json; charset=UTF-8',
    		success: d=>{
				if(d.msg=='SUCCESS'){
					alert('회원가입 성공::'+d.msg);
					$('#right_content').empty();
					$(compo.cust_login_form()).appendTo('#right_content');
					
					$('form button[type=submit]').click(e=>{
						e.preventDefault();
						login();
						
					});
					
				}else{
					alert('회원가입 실패');
					$(compo.cust_join_form()).html('#right_content');
				}
					
			},
			error: e=>{
				alert('실패');
			}
    	
    	});
    	
    	
    };
    let register =()=>{
    	let data = {employeeID:$('form input[name=employeeID]').val(),
				manager:$('form input[name=manager]').val(),
				name :$('form input[name=name]').val(), 
				birthDate:$('form input[name=birthDate]').val(),
				photo:$('form input[name=photo]').val(),
				notes:$('form input[name=notes]').val(),};
	alert('ID :: '+data.employeeID);
	$.ajax({
		url: $.ctx()+'/employees/'+data.employeeID,
		type: 'post',
		data: JSON.stringify(data),
		dataType: 'json',
		contentType: 'application/json; charset=UTF-8',
		success: d=>{
			if(d.employeeID!==''){
				alert('로그인성공::'+d.employeeID);
				/*$('#right_content').html('<h1>테스트</h1>')*/
				$('#right_content').html(compo.cust_mypage());
				
			//	$(compo.cust_mypage()).appendTo('#right_content');
			}else{
				alert('로그인 실패');
				$(compo.emp_register_form()).html('#right_content');
			}
				
		},
		error: e=>{
			alert('실패');
		}
	});
    	
    };
    let access =()=>{
    	let ok = confirm('사원 입니까?');
    	if(ok){
    		let emp_no = prompt('사원번호를 입력하세요.');
    		$.getJSON(_+'/Employees',d=>{
	    		if(emp_no==d.employeeID){
	    			// 이름 입력창을 그린다. 
	    			$('.container').empty();
	    			$('#access_btn').empty();
	    			$('.container').after(compo.emp_input);
	    			$('#employeeID').attr('value',d.employeeID);
	    			$('#name').attr('value',d.name);
	    			if($('#name').val()===d.name){
	    				//고객명단 그린다.
	    				$.getScript(custjs,()=>{
	    					cust.cust_list('1');
	    				});
	    			}else{
	    				
	    			}
	    		}else{
	    			alert('사원번호가 일치하지 않습니다.');
	    			// 사원번호가 일치하지 않습니다.
	    		}
    		});
    	}else{
    		alert('사원 전용 페이지 입니다.');
    		// 사원 전용 페이지 입니다. 
    		// 되돌아가기 버튼이 보인다.
    	}
    /*	let data = {employeeID:$('form input[name=employeeID]').val(), 
    			name:$('form input[name=name]').val()};
    	alert('ID :: '+data.employeeID);
		$.ajax({
			url: $.ctx()+'/employees/'+data.employeeID,
			type: 'post',
			data: JSON.stringify(data),
			dataType: 'json',
			contentType: 'application/json; charset=UTF-8',
			success: d=>{
				if(d.employeeID!==''){
					alert('로그인성공::'+d.employeeID);
					$('#right_content').html('<h1>테스트</h1>')
					$('#right_content').html(compo.emp_mypage());
					
				//	$(compo.cust_mypage()).appendTo('#right_content');
				}else{
					alert('로그인 실패');
					$(compo.emp_access_form()).html('#right_content');
				}
					
			},
			error: e=>{
				 
			}
		});*/
    };
	return {init:init, login:login};
	
})();