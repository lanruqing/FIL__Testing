import { IconService } from 'src/app/icon.service';
import { Component, Input, OnInit } from '@angular/core';
IconService
@Component({
  selector: 'fil-bottom-links',
  templateUrl: './fil-bottom-links.component.html',
  styleUrls: ['./fil-bottom-links.component.scss']
})
export class FilBottomLinksComponent implements OnInit {
  @Input() links:[];
  constructor(public icon:IconService) { }

  ngOnInit(): void {
  }

}
