import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'src/app/interfaces/Employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeUpdateComponent } from '../../update/employee-update/employee-update.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  lista: any[] = [];

  constructor(private service: EmployeeService,private modalService: NgbModal,config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.list();
  }

  list()
  {
    this.service.list().subscribe((lista: []) => {
      this.lista = lista;
    })
  }


  delete(obj: any) {
    this.service.delete(obj).subscribe(()=>{
      this.list();
    });
  }
  create() {
    const modalRef = this.modalService.open(EmployeeUpdateComponent);
    modalRef.componentInstance.title = 'Create';
    modalRef.result.then((data) => {
      //window.location.reload();
      this.list();
    }, (reason) => {
      window.location.reload();
      this.list();
      // on dismiss
    });

  }
  update(obj:any) {
    const modalRef = this.modalService.open(EmployeeUpdateComponent);
    modalRef.componentInstance.title = 'Update';
    modalRef.componentInstance.objUpd = obj;
    modalRef.result.then((data) => {
      //window.location.reload();
      this.list();
    }, (reason) => {
      window.location.reload();
      this.list();
      // on dismiss
    });

  }


}
