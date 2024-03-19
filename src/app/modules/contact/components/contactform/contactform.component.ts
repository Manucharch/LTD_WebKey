import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';
import { TranslateService } from '@ngx-translate/core';

import { ContactInterface } from 'src/app/modules/contact/components/contactform/types/contact.interface';
import { GetfromstorageService } from 'src/app/shared/services/getfromstorage.service';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss'],
})
export class ContactformComponent implements OnInit {
  contactForm!: FormGroup;
  showSpinner: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private service: GetfromstorageService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.initialiseForm();
  }

  initialiseForm(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  submitForm() {
    var btn = document.getElementById('sbmbtn') as HTMLElement;

    var replText: string = '';
    var hello: string = '';
    var newMess: string = '';
    var wish: string = '';

    if (this.contactForm.valid) {
      this.showSpinner = true;
      this.translate.get('contact').subscribe((data) => {
        replText = data.replText;
        hello = data.hello;
        newMess = data.newMess;
        wish = data.wish;
        (document.getElementById('sbmbtn') as HTMLElement).innerHTML =
          data.sending;
      });

      const contact: ContactInterface = this.contactForm.value;
      const templateParams = {
        name: contact.name,
        email: contact.email,
        subject: contact.subject,
        message: contact.message,
        replText: replText,
        hello: hello,
        newMess: newMess,
        wish: wish,
      };

      emailjs
        .send(
          'webkey_service',
          'contact_form',
          templateParams,
          'J6Bi7Kay3zEujjAm4'
        )
        .then(
          (response) => {
            this.translate.get('contact').subscribe((data) => {
              btn.innerHTML = data.send;
            });
            alert(response.text);
            this.contactForm.reset();
            this.showSpinner = false;
          },
          (error) => {
            console.log('FAILED...', error);
          }
        );
    } else {
      // Handle invalid form
    }
  }
}
