import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.scss']
})
export class AddEmpComponent implements OnInit, OnDestroy {

  apiCall2Destory$: Subject<void> = new Subject();
  apiCall3Destory$: Subject<void> = new Subject();
  apiCall4Destory$: Subject<void> = new Subject();
  myForm!: FormGroup;
  empId!: number;
  constructor(private empService: EmployeeService, private router: Router,
    private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.empId = this.route.snapshot.params['id'];
    if(this.empId) {
      this.empService.getApiById(this.empId).pipe(takeUntil(this.apiCall3Destory$)).subscribe(resp => {
        this.myForm.patchValue(resp);
      })
    }
    this.myForm = this.fb.group({
      'empId': [''],
      'name': ['', Validators.required],
      'age': ['', Validators.required],
      'dept': ['', Validators.required]
    });
  }

  submitForm() {
    if(this.myForm.valid) {
      if (this.empId) {
        this.empService.putApi(this.myForm.value).pipe(takeUntil(this.apiCall4Destory$))
        .subscribe(result => {
          this.router.navigate(['/emp-list']);
      });
      } else {
        this.empService.postApi(this.myForm.value).pipe(takeUntil(this.apiCall2Destory$))
        .subscribe(result => {
          this.router.navigate(['/emp-list']);
      });
      }
    } else {
      alert('Invalid form data');
    }
  }

  onCancel() {
    this.router.navigate(['/emp-list']);
  }

  ngOnDestroy(): void {
    this.empService.cancelApiCall(this.apiCall2Destory$);
    this.empService.cancelApiCall(this.apiCall3Destory$);
    this.empService.cancelApiCall(this.apiCall4Destory$);
  }
}
