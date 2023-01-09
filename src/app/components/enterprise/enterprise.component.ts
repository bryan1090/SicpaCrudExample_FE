import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { EnterpriseUpdateComponent } from './update/enterprise-update/enterprise-update.component';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.scss']
})
export class EnterpriseComponent implements OnInit {

  constructor(private modalService: NgbModal,config: NgbModalConfig) { 
    
  }



  ngOnInit(): void {
  }

  
}
