package com.bit_etland.web.cust;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.bit_etland.web.cmm.Proxy;

@Repository
public interface CustomerMapper {
	public void insertCustomer(Customer cust);
		
		public List<Customer> selectAllCustomersList(Map<?,?> map);
		public List<?> selectCustomers(Proxy pxy);
		public Customer selectCustomer(Customer cust);
		public int countCustomer();
		
		public void updateCustomer(Customer cust);
		public Map<String, Object> selectProfile(Map<?,?> m); 
		public void deleteCustomer(Customer cust);
	
		public Map<String, Object> selectPhone(Map<?,?> m);
}
/*
 * $('<div class="grid-item" id="cust_lst">'
		+'<h1><font style="font-size: 30px">사원 리스트</font>'
		+'</h1>'
	    +'</div>'
	    +'<div class="grid-item" id="content_2"></div>')
	    .appendTo('#right_content');
		let table ='<table><tr><th>No.</th>'
		+'<th>아이디</th>'
		+'<th>이름</th>'
		+'<th>생년월일</th>'
		+'<th>성별</th>'
		+'<th>전화</th>'
		+'<th>주소</th>'
		+'<th>우편번호</th>'
		+'</tr>'
		$.each(d,(i,j)=>{
			table += '<tr><td>'+j.rownum+'</td>'
			+'<td>'+j.customerID+'</td>'
			+'<td>'+j.customerName+'</td>'
			+'<td>'+j.ssn+'</td>'
			+'<td>'+'남'+'</td>'
			+'<td>'+j.phone+'</td>'
			+'<td>'+j.address+'</td>'
			+'<td>'+j.postalCode+'</td>'
			+'</tr>'
		});
		table += '</table>'
		//$(r_cnt).empty();
		$(table)
		.attr('id','cust_tab')
		.css({'font-family':'arial, sans-serif',
			'border-collapse':'collapse',
			'width':'100%',
			'text-align': 'center',
			'display': 'inline-block'
			
		})
		.addClass('pagination center')
		.appendTo('#cust_lst');
		$('<div style="height: 50px"></div>')
		.appendTo('#cust_lst');
		html = '<div class="pagination">';
		if(pagination.existPrev){
			html += '<a href="${ctx}/customer.do?cmd=cust_list&page=list&page_num=${pagination.prevBlock}">&laquo;</a>';
		}
		let i = 0;
		for(i=0;i<5;i++){
			if(pagination.pageNum == status.index){
				
			}else{
				
			}
		}
 * */