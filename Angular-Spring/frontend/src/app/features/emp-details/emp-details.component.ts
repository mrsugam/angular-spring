import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.scss']
})
export class EmpDetailsComponent implements OnInit, OnDestroy {

  nameByCall4Destory$: Subject<void> = new Subject();
  employee!: Employee;

  constructor(private empService: EmployeeService, private router: Router,
    private route: ActivatedRoute) {}

    ngOnInit(): void {
        const empId = this.route.snapshot.params['id'];
        this.empService.getApiByName(empId).pipe(takeUntil(this.nameByCall4Destory$)).subscribe(resp => {
          this.employee = resp;
        })
    }

    navigateEmpList() {
      this.router.navigate(['emp-list']);
    }

    ngOnDestroy(): void {
      this.empService.cancelApiCall(this.nameByCall4Destory$);
    }

}
