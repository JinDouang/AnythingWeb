import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'component-search-bar',
  templateUrl: './component-search-bar.component.html',
  styleUrls: ['./component-search-bar.component.scss'],
})
export class ComponentSearchBarComponent implements OnInit{
  public searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchValue: null,
    });
  }

  public onSearch() {
    const search = this.searchForm.get('searchValue').value;
  }

}
