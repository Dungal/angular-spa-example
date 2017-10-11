package org.dungal.angular.example.repository;

import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.dungal.angular.example.model.Employee;
import org.springframework.data.repository.PagingAndSortingRepository;

@RepositoryRestResource
public interface EmployeeRepository extends PagingAndSortingRepository<Employee, Long> {
}
