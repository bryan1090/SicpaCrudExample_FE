import { Component,EventEmitter,Input,OnInit,Output } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Enterprise } from 'src/app/interfaces/Enterprise';
import { EnterpriseService } from 'src/app/services/enterprise.service';

@Component({
  selector: 'app-enterprise-update',
  templateUrl: './enterprise-update.component.html',
  styleUrls: ['./enterprise-update.component.scss']
})
export class EnterpriseUpdateComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    address: ["",[Validators.required]],
    name: ["",[Validators.required]],
    phone: ["",[Validators.required]]

  });

  form_sent = false;

  @Input() title: string = '';
  isUpdate: boolean = false;

  @Input() objUpd: Enterprise = { address: '',name: '',phone: '' };

  constructor(private service: EnterpriseService,private formBuilder: FormBuilder,public activeModal: NgbActiveModal) { }

  ngOnInit(): void {

    if (this.objUpd.name != null) {
      this.isUpdate = true;
      this.actualizarFormulario();
    }


  }

  actualizarFormulario() {
    this.form.get('address')?.patchValue(this.objUpd.address);
    this.form.get('name')?.patchValue(this.objUpd.name);
    this.form.get('phone')?.patchValue(this.objUpd.phone);
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
      this.objUpd.address = this.form.get('address')?.value;
      this.objUpd.name = this.form.get('name')?.value;
      this.objUpd.phone = this.form.get('phone')?.value;

      this.service.update(this.objUpd).subscribe((objUpdated) => {

        this.activeModal.close();
      })

    } else {
      //creación
      let newObj: Enterprise =
      {
        address: this.form.get('address')?.value,
        name: this.form.get('name')?.value,
        phone: this.form.get('phone')?.value
      }

      this.service.create(newObj).subscribe((objUpd) => {

        this.activeModal.close();
      })
    }


    return false;
  }


}
