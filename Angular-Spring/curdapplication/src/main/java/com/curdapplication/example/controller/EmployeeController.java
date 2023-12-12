package com.curdapplication.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.curdapplication.example.entity.Employee;
import com.curdapplication.example.service.EmployeeService;

@RestController
public class EmployeeController {
	
	@Autowired
	private EmployeeService service;

	@PostMapping("/addEmp")
	public Employee addEmployee(@RequestBody Employee employee) {
		return service.saveEmployee(employee);
	}
	
	@PostMapping("addEmps")
	public List<Employee> addEmployees(@RequestBody List<Employee> employees) {
		return service.saveEmployees(employees);
	}
	
	@GetMapping("/employees")
	public List<Employee> getAllEmployee() {
		return service.getEmployees();
	}
	
	@GetMapping("/employeeById/{empId}")
	public Employee getEmpById(@PathVariable int empId) {
		return service.getEmployeeById(empId);
	}
	
	@GetMapping("/employeeByName/{name}")
	public Employee getEmpByName(@PathVariable String name) {
		return service.getEmployeeByName(name);
	}
	
	@PutMapping("/update")
	public Employee updateEmp(@RequestBody Employee employee) {
		return service.updateEmployee(employee);
	}
	
	@DeleteMapping("/delete/{empId}")
	public String deleteEmp(@PathVariable int empId) {
		return service.deleteEmployee(empId);
	}

}
