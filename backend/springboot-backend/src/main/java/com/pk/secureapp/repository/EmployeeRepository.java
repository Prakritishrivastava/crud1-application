package com.pk.secureapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pk.secureapp.mpdel.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>  {

}
