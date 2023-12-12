package com.curdapplication.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.curdapplication.example.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

	Employee findByName(String name);

}
