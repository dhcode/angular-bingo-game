import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MarkdownService } from 'angular2-markdown';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {

  @ViewChild('content') content: ElementRef;

  constructor(
    private mdService: MarkdownService
  ) { }

  ngOnInit() {
    this.mdService.getContent('assets/docs.md').subscribe(text => {
      this.content.nativeElement.innerHTML = this.mdService.compile(text);
    });
  }

}
