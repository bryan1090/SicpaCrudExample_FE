import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { NgbModal,NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Enterprise } from 'src/app/interfaces/Enterprise';
import { EnterpriseService } from 'src/app/services/enterprise.service';
import { EnterpriseUpdateComponent } from '../../update/enterprise-update/enterprise-update.component';

@Component({
  selector: 'app-enterprise-list',
  templateUrl: './enterprise-list.component.html',
  styleUrls: ['./enterprise-list.component.scss']
})
export class EnterpriseListComponent implements OnInit {
  lista: any[] = [];

  constructor(private service: EnterpriseService,private modalService: NgbModal,config: NgbModalConfig) {
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
    const modalRef = this.modalService.open(EnterpriseUpdateComponent);
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
    const modalRef = this.modalService.open(EnterpriseUpdateComponent);
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
