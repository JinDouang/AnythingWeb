import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-view-register',
  templateUrl: './view-register.component.html',
  styleUrls: ['./view-register.component.scss']
})
export class ViewRegisterComponent implements OnInit {

  public form: FormGroup;
  private isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]

    });
  }

  public isFieldInvalid(field: string): boolean {
    return ((!this.form.get(field).valid && this.form.get(field).touched) || (this.form.get(field).untouched));
  }

  onSubmit() {
    if (this.form.valid) {
      this.isSubmitted = true;
      console.log(this.form);
    }
    this.isSubmitted = false;
  }

}
