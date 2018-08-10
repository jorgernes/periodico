import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-sep',
  templateUrl: './sep.component.html',
  styleUrls: ['./sep.component.css']
})
export class SepComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class Sarasa implements OnInit {
  @Input()
  url: string = "https://www.gob.mx/sep";
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}