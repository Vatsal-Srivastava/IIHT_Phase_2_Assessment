import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup;
  stores = ['USPA', 'Fashion Factory', 'Outpost Store', 'Wok This Way'];
  constructor(private router: Router, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      fname: ['', [Validators.required, Validators.minLength(3)]],
      lname: ['', [Validators.required]],
      store: ['', [Validators.required]],
      com: ['', [Validators.required]],
    });
  }
  contact() {
    alert('We Will Get In touch With You Soon');
    this.router.navigate(['home']);
  }
}
