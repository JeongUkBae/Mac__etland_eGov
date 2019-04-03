package com.bit_etland.web.cmm;

import java.util.function.Consumer;

import org.springframework.stereotype.Service;

@Service
public class PrintService implements IConsumer{
	
	public void accept(Object o) {
	Consumer<String> c = System.out :: println;
	c.accept((String)o);
	}
}
