import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-api-form',
  templateUrl: './api-form.component.html',
  styleUrls: ['./api-form.component.scss']
})
export class ApiFormComponent implements OnInit {

  lblAddUser: string = 'Add USer';
  lblUserData: string = 'User Data';
  lblName: string = 'Name :';
  lblUsername: string = 'Username :';
  lblEmail: string = 'Email :';
  lblPhone: string = 'Phone :';
  lblWebsite: string = 'Website :';
  btnSubmit: string = 'Submit';

  errName: string = 'Name is Required';
  errUsername: string = 'Username is Required';
  errEmail: string = 'Email is Required';
  errPhone: string = 'Phone is Required';
  errWebsite: string = 'Website is Required';

  form!: FormGroup;
  submitted: boolean = false;
  private userId!: number;
  deleteId!: number;
  users!: any;
  search!:string
  constructor(
    private data: DataService,
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private spinner: NgxSpinnerService,
    private route:ActivatedRoute
  ) {
    this.users=this.route.snapshot.data['datas']
  }

  ngOnInit(){
    this.formLoad()
    this.spinner.show();
  }

  formLoad(){
    this.form = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      website: [''],
    });
  }

  get formControls() {
    return this.form.controls;
  }

  // getData() {
  //   this.data.dataGet().subscribe((res : any)=>{
  //     this.users = res;
  //   })
  // }
  

  saveUser() {
    if (this.form.invalid) {
      this.submitted = true;
      return;
    } else {
      this.submitted = false;
      this.btnSubmit = 'Submit';
      
        const data = {
          id: this.users.length + 1,
          ...this.form.value,
        };
        this.data.dataPost(data).subscribe((res: any) => {
          this.users.push(res);
        });
      this.form.reset();
    }
  }

  updateRec(data: any) {
    this.btnSubmit = 'Update';
    this.form.patchValue(data);
    this.userId = data.id;
  }

  ngOnDestroy(){
    this.spinner.hide()
  }

}