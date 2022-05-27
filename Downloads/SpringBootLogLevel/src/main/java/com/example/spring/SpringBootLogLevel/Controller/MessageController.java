package com.example.spring.SpringBootLogLevel.Controller;

import org.apache.log4j.BasicConfigurator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class MessageController {

	Logger logger = LoggerFactory.getLogger(MessageController.class);
	
	@GetMapping("/getMessage")
	@CrossOrigin(origins="http://localhost:4200/")
	public String getMessage() {
		logger.info("[getMessage] info message");
		logger.warn("[getMessage] warn message");
		logger.error("[getMessage] error message");
		logger.debug("[getMessage] debug message");
		logger.trace("[getMessage] trace message");
//		System.out.println( "open console to check log messages.");
		return "Check log messages on console";
	}
	
}