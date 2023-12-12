package com.curdapplication.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.curdapplication.example.entity.Employee;
import com.curdapplication.example.repository.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository repository;
	
	public Employee saveEmployee(Employee employee) {
		return repository.save(employee);
	}
	
	public List<Employee> saveEmployees(List<Employee> employees) {
		return repository.saveAll(employees);
	}
	
	public List<Employee> getEmployees() {
		return repository.findAll();
	}
	
	public Employee getEmployeeById(int empId) {
		return repository.findById(empId).orElse(null);
	}
	
	public Employee getEmployeeByName(String name) {
		return repository.findByName(name);
	}
	
	public String deleteEmployee(int empId) {
		repository.deleteById(empId);
		return "Employee Removed !!" + empId;
	}
	
	public Employee updateEmployee(Employee employee) {
		Employee existingEmployee = repository.findById(employee.getEmpId()).orElse(null);
		existingEmployee.setName(employee.getName());
		existingEmployee.setAge(employee.getAge());
		existingEmployee.setDept(employee.getDept());
		return repository.save(existingEmployee);
	}
}
