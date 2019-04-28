import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-view-authentication',
  templateUrl: './view-authentication.component.html',
  styleUrls: ['./view-authentication.component.scss']
})
export class ViewAuthenticationComponent implements OnInit {

  public form: FormGroup;
  private isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public isFieldInvalid(field: string): boolean {
    return ((!this.form.get(field).valid && this.form.get(field).touched) || (this.form.get(field).untouched));
  }

  onSubmit() {
    if (this.form.valid) {
      this.isSubmitted = true;
      console.log(this.form);
      // this.authService.login(this.form.value);
    }
    this.isSubmitted = false;
  }

}
