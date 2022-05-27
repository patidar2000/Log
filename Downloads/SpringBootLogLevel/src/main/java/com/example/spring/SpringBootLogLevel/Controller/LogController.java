package com.example.spring.SpringBootLogLevel.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.spring.SpringBootLogLevel.Service.LogService;

@RestController
public class LogController {

	@Autowired
	private LogService logService;
	
	@GetMapping("/changeloglevel")
	@CrossOrigin(origins="http://localhost:4200/")
	public String changeLogLevel(@RequestParam(required = false) String loggerName,
			@RequestParam("level") String level) {
		return logService.setLoglevel(loggerName, level);
	}
}