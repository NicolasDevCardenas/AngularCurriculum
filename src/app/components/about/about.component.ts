import { Component, OnInit, ViewChild  } from '@angular/core';
import { text } from '@angular/core/src/render3';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @ViewChild('textos') textos;

  constructor() { 
    
  }

  ngOnInit() {
    var opcion_clasica = document.querySelector('#texto').innerHTML;
    console.log(this.textos.nativeElement.textContent);
    
  }

  
}
