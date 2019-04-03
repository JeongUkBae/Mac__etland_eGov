package com.bit_etland.web.prod;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bit_etland.web.cmm.IConsumer;
import com.bit_etland.web.cmm.IFunction;
import com.bit_etland.web.cmm.ISupplier;
import com.bit_etland.web.cmm.PrintService;
import com.bit_etland.web.cmm.Proxy;


@RestController
public class ProdController {
	
	private static final Logger logger = LoggerFactory.getLogger(ProdController.class);
	
	@Autowired Product prod;
	@Autowired PrintService ps;
	@Autowired ProductMapper prdMap;
	@Autowired Map<String, Object> map;
	@Autowired Proxy pxy;
	
	
	@PostMapping("/phones")
	public Product login(
		@PathVariable String userid,
		@RequestBody Product param) {
		logger.info("======= cust login 진입 =======");
		IFunction i = (Object o) -> prdMap.selectProduct(param);
		
		return (Product) i.apply(param);
	}
	

	@SuppressWarnings("unchecked")
	@GetMapping("/phones/{page}")
	public Map<?,?> list(
			@PathVariable String page) {
		logger.info("======= list 진입 ======");
		map.clear();
		map.put("page_num", page);
		map.put("page_size", "5");
		ISupplier sup = () -> prdMap.countProduct();
		map.put("block_size", "5");
		ps.accept("총 카운터는?"+sup.get());
		ps.accept("시작값: "+pxy.getStartRow());
		ps.accept("마지막값: "+pxy.getEndRow());
		map.put("total_count", sup.get());
		pxy.carryOut(map);
		IFunction i = (Object o) -> prdMap.selectProducts(pxy);
		List<Product> ls = (List<Product>) i.apply(pxy);
		ps.accept("ps??::"+ls);
		map.clear();
		map.put("ls", ls);
		map.put("pxy", pxy);
		return map;
	}

	@PostMapping("/products")
	public Map<String, Object> join(
			@RequestBody Product param) {
		logger.info("======= cust join  진입 =======");
		ps.accept(param.toString());
		IConsumer i = (Object o)->prdMap.insertProduct(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}

	@PutMapping("/products/{userid}")
	public Map<String, Object> update(
			@PathVariable String userid,
			@RequestBody Product param) {
		logger.info("======= cust update 진입 =======");
		IConsumer i = (Object o)->prdMap.updateProduct(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}

	@DeleteMapping("/products/{userid}")
	public Map<String, Object> delete(
			@PathVariable String userid,
			@RequestBody Product param) {
		logger.info("======= cust delete 진입 =======");
		IConsumer i = (Object o)->prdMap.deleteProduct(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
	
}
