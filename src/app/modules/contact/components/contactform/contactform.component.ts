import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

import { ContactInterface } from 'src/app/modules/contact/components/contactform/types/contact.interface';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss'],
})
export class ContactformComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

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
    if (this.contactForm.valid) {
      const contact: ContactInterface = this.contactForm.value;
      const templateParams = {
        name: contact.name,
        email: contact.email,
        to_name: 'Your Name', // Recipient's name
        subject: contact.subject,
        message: contact.message,
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
            console.log('SUCCESS!', response.status, response.text);
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
