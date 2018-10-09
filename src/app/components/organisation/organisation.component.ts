import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.scss']
})
export class OrganisationComponent implements OnInit {

  constructor(
      private title: Title,
      private meta: Meta
  ) { }

  ngOnInit() {
      this.title.setTitle('About / Virtualgodown');
      this.meta.updateTag({
          'description': 'Welcome to about section'
      });

  }

}
