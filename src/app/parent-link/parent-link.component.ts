import { Component, OnInit } from '@angular/core';
import { LinkService } from '../link.service';

/**
 * Responsible for displaying a link to the original page in the input panel
 */
@Component({
  selector: 'app-parent-link',
  templateUrl: './parent-link.component.html',
  styleUrls: ['./parent-link.component.css']
})
export class ParentLinkComponent implements OnInit {

  parent: string;

  constructor(private linkService: LinkService) { }

  ngOnInit(): void {
    this.linkService.parent$.subscribe((newStr: string) => this.parent = newStr);
  }

}