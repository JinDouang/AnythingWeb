import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {takeUntil} from 'rxjs/internal/operators';
import {Subject} from 'rxjs/index';
import {RegisterService} from '../../services/register/register.service';

@Component({
  selector: 'app-view-register',
  templateUrl: './view-register.component.html',
  styleUrls: ['./view-register.component.scss']
})
export class ViewRegisterComponent implements OnInit, OnDestroy {

  public form: FormGroup;
  private isSubmitted = false;
  private onDestroySubject$: Subject<void> = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private registerService: RegisterService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.passwordValidator
    });
  }

  public passwordValidator(form: FormGroup) {
    const condition = form.get('password').value !== form.get('confirmPassword').value;
    return condition ? { passwordsDoNotMatch: true} : null;
  }

  public isFieldInvalid(field: string): boolean {
    return ((!this.form.get(field).valid && this.form.get(field).touched) || (this.form.get(field).untouched));
  }


  onSubmit() {
    if (this.form.valid) {
      this.isSubmitted = true;
      console.log(this.form);
      const values = this.form.value;

      this.registerService
        .register(values.firstName, values.lastName, values.email, values.password)
        .pipe(takeUntil(this.onDestroySubject$))
        .subscribe({
          next: () => {
            // this.router.navigate([`/${this.routingKeys.register}/${this.routingKeys.success}`], {
            //   relativeTo: this.route,
            // });
          },
          error: err => {
            console.log(err);
            throw err;
          },
        });
    }
    this.isSubmitted = false;
  }

  /**
   * On destroy handler
   */
  public ngOnDestroy(): void {
    this.onDestroySubject$.next();
    this.onDestroySubject$.complete();
  }

}
