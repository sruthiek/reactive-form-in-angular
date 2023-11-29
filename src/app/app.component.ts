import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'reactive-forms';

  myForm!: FormGroup;

  constructor(public formbuilder: FormBuilder) {
    
  }


  ngOnInit() {
    this.myForm = new FormGroup({
      bookname: new FormControl(null,Validators.required),
      author: new FormControl(null,[Validators.required,Validators.minLength(3)]),
      publication: new FormControl(null),
      price: new FormControl(null),
      genre: new FormControl(null),
      publisheddate: new FormControl(null),
      country: new FormControl('india'),
      description: new FormControl(null),

    });
  }


  onsubmit(){
    console.log(this.myForm);
    
  }
}
