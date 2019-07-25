import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  constructor(private fb: FormBuilder, public service: DataService) { }

  ngOnInit() {     
    // add corresponding validators
    this.searchForm = this.fb.group({
      'searchText': ['']
    });

    // tslint:disable-next-line:no-unused-expression
    this.onChanges();
    // write a subsciber/valueChanges function that calls changeSearchText upon value change in the form
  }
  onChanges() {
    this.searchForm.get('searchText').valueChanges.subscribe(value => {
      this.service.changeSearchText(value);
    });
  }

}
