import { SubmissionService } from './../submission.service';
import { Details } from './../details';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  details: Details;

  constructor(private submit: SubmissionService) { }

  ngOnInit() {
  }

  onSubmit(name, email, location, id){ 
    this.details = new Details(name, email, location, id);
    console.log(this.details);
    this.submit.writeTo(this.details);
  }

}
