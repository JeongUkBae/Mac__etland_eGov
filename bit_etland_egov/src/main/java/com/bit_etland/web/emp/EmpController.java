package com.bit_etland.web.emp;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bit_etland.web.cmm.ISupplier;
import com.bit_etland.web.cmm.PrintService;
import com.bit_etland.web.cmm.Users;


@RestController
public class EmpController {
	private static final Logger logger = LoggerFactory.getLogger(EmpController.class);


	@Autowired Employee emp;
	@Autowired PrintService ps;
	@Autowired EmployeeMapper empMap;
	@Autowired Users<?> user;
	@Autowired Map<String, Object> map;
	@Autowired List<Employee> list;
	
	@GetMapping("/Employees")
	public Employee login() {
		logger.info("======= emp login 진입 =======");
		ISupplier i = ()-> empMap.findOneEmployee();
		
		return (Employee) i.get();
	}
	
	
	
}
