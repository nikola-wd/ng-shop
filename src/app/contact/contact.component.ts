import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @ViewChild('f') contactForm: NgForm;

  // to show data after submit
  submitted = false;

  constructor() { }


  onSubmit(form: NgForm) {
    this.submitted = true;
    window.alert(
      `Your name: ${form.value.name},
      Your email: ${form.value.email},
      Your message: ${form.value.message}`
    );
    this.contactForm.reset();
  }

}
