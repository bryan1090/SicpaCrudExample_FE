import { Component,Input,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Department } from 'src/app/interfaces/Department';
import { Enterprise } from 'src/app/interfaces/Enterprise';
import { DepartmentService } from 'src/app/services/department.service';
import { EnterpriseService } from 'src/app/services/enterprise.service';

@Component({
  selector: 'app-department-update',
  templateUrl: './department-update.component.html',
  styleUrls: ['./department-update.component.scss']
})
export class DepartmentUpdateComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({

    description: ["",[Validators.required]],
    name: ["",[Validators.required]],
    phone: ["",[Validators.required]],
    idEnterprise: ["",[Validators.required]]
  });

  listEnterprises: Enterprise[] | undefined;
  form_sent = false;

  @Input() title: string = '';
  isUpdate: boolean = false;

  @Input() objUpd: Department = { enterprise: { address: '',name: '',phone: '' },description: '',name: '',phone: '' };

  constructor(private entService: EnterpriseService,private service: DepartmentService,private formBuilder: FormBuilder,public activeModal: NgbActiveModal) {

  }

  ngOnInit(): void {
    this.entService.list().subscribe(list => {
      this.listEnterprises=list;
    })

    if (this.objUpd.name != null&&this.objUpd.name!='') {
      this.isUpdate = true;
      this.actualizarFormulario();
    }


  }

  actualizarFormulario() {
    this.form.get('description')?.patchValue(this.objUpd.description);
    this.form.get('name')?.patchValue(this.objUpd.name);
    this.form.get('phone')?.patchValue(this.objUpd.phone);
    this.form.get('idEnterprise')?.patchValue(this.objUpd.enterprise?.idEnterprise);
  }

  validateRequireField(field: string) {
    let form = this.form;
    let fieldControl = form.get(field);
    return (fieldControl?.errors?.required && fieldControl.touched) || (fieldControl?.errors?.required && this.form_sent);
  }


  submitForm() {
    this.form_sent = true;

    if (!this.form.valid) {
      return false;
    }


    //actualización
    if (this.isUpdate) {
      this.objUpd.description = this.form.get('description')?.value;
      this.objUpd.name = this.form.get('name')?.value;
      this.objUpd.phone = this.form.get('phone')?.value;
      this.objUpd.enterprise = this.listEnterprises?.find(( idEnterprise) => idEnterprise == this.form.get('idEnterprise')?.value)

      this.service.update(this.objUpd).subscribe((objUpdated) => {

        this.activeModal.close();
      })

    } else {
      //creación
      let newObj: Department =
      {
        description: this.form.get('description')?.value,
        name: this.form.get('name')?.value,
        phone: this.form.get('phone')?.value,
        enterprise:this.listEnterprises?.find(( {idEnterprise}) => idEnterprise == this.form.get('idEnterprise')?.value)
      }

      this.service.create(newObj).subscribe((objUpd) => {

        this.activeModal.close();
      })
    }


    return false;
  }



}
