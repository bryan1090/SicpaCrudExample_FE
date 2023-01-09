import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { DepartmentService } from 'src/app/services/department.service';
import { DepartmentUpdateComponent } from '../../update/department-update/department-update.component';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

  lista: any[] = [];

  constructor(private service: DepartmentService,private modalService: NgbModal,config: NgbModalConfig) {
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
    const modalRef = this.modalService.open(DepartmentUpdateComponent);
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
    const modalRef = this.modalService.open(DepartmentUpdateComponent);
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
