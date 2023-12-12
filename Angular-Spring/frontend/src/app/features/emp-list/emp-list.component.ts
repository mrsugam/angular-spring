import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, Subscription, map, takeUntil } from 'rxjs';
import { DialogComponent } from 'src/app/common/dialog/dialog.component';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit,  OnDestroy {


  @ViewChild(MatTable) table!: MatTable<Employee>;
  public dataSource = new MatTableDataSource([]);
  displayedColumns: string[] = ['empId', 'name', 'age', 'dept', 'action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  apiCall1Destory$: Subject<void> = new Subject();
  deleteApiDestory$: Subject<void> = new Subject();
  totalRows = 0;
  pageSize = 10;
  currentPage = 0;
  empId!: number;

  constructor(private empService: EmployeeService,private route: ActivatedRoute,
    private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getEmployeeList();
  }

  getEmployeeList() {
    this.dataSource = new MatTableDataSource([]);
    this.empService.getApi().pipe(takeUntil(this.apiCall1Destory$)).subscribe((resp) => {
      this.dataSource = new MatTableDataSource(resp);
      console.log(this.dataSource);
      this.dataSource.sort = this.sort;
      this.totalRows = resp.length;
      this.paginator.length = resp.length;
    });
  }

  deleteEmp(id: number) {
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.width = '30%';
    matDialogConfig.data = {
      alertTitle: `Confirmation`,
      message: 'Do you want to Delete?'
    };
    const dialogRef = this.dialog.open(DialogComponent, matDialogConfig);
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
          this.empService.deleteEmployee(id).pipe(takeUntil(this.deleteApiDestory$)).subscribe((resp) => {
            console.log("deleted successfully");
          });
          setTimeout(() => {
            this.getEmployeeList();
          }, 1000);
        }
    });
  }

  pageChanged(event: PageEvent) {
    console.log({ event });
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.getEmployeeList();
  }



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy() {
    this.empService.cancelApiCall(this.apiCall1Destory$);
    this.empService.cancelApiCall(this.deleteApiDestory$);
  }
}
