package com.example.spring.SpringBootLogLevel.Service.Impl;


import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.spring.SpringBootLogLevel.Service.LogService;

@Service
public class LogServiceImpl implements LogService{

	@Override
	public String setLoglevel(String loggerName, String level) {
		ch.qos.logback.classic.Logger root = getLogger(loggerName);
		return setLogLevel(level, root);
	}

	private ch.qos.logback.classic.Logger getLogger(String loggerName) {
		ch.qos.logback.classic.Logger root;
		if (loggerName != null && !loggerName.isEmpty())
			root = (ch.qos.logback.classic.Logger) LoggerFactory.getLogger(loggerName);
		else
			root = (ch.qos.logback.classic.Logger) LoggerFactory.getLogger(org.slf4j.Logger.ROOT_LOGGER_NAME);
		return root;
	}
	
	@GetMapping("/setLogLevel")
//	@CrossOrigin(origins="http://localhost:4200/")
	private String setLogLevel(String level, ch.qos.logback.classic.Logger root) {
		if ("info".equalsIgnoreCase(level)) {
			root.setLevel(ch.qos.logback.classic.Level.INFO);
		} else if ("debug".equalsIgnoreCase(level)) {
			root.setLevel(ch.qos.logback.classic.Level.DEBUG);
		} else if ("warn".equalsIgnoreCase(level)) {
			root.setLevel(ch.qos.logback.classic.Level.WARN);
		} else if ("trace".equalsIgnoreCase(level)) {
			root.setLevel(ch.qos.logback.classic.Level.TRACE);
		} else if ("error".equalsIgnoreCase(level)) {
			root.setLevel(ch.qos.logback.classic.Level.ERROR);
		} else if ("off".equalsIgnoreCase(level)) {
			root.setLevel(ch.qos.logback.classic.Level.OFF);
		} else {
			root.setLevel(ch.qos.logback.classic.Level.ALL);
			level = "all";
		}
		return "Logger level set as " + level;
	}
}