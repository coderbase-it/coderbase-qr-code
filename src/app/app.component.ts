import {Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public myControl: FormControl;
  public url = '';
  constructor(private fb: FormBuilder, private ngZone: NgZone) {
  }
  ngOnInit(){
    this.createControl();

    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      this.url =  tabs[0].url;
      this.ngZone.run( () => {
        this.myControl.setValue(this.url);
        }
      );
    });


  }
  createControl(){
    this.myControl = this.fb.control('url', Validators.required);
    this.myControl.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(
        (data) => {
          this.url = data;
        }

      );

  }

}
