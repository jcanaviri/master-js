import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { environment } from 'src/environments/environment';

import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ ProjectService ]
})
export class DetailComponent implements OnInit {

  public url: string;
  public project: Project;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
    this.url = environment.url;
    this.project = new Project('', '', '', '', 0, '', '')
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params.id;
      
      this.getProject(id);
    })
  }

  getProject(id: any) {
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.p;
      },
      error => {
        console.log(`SOME ERROR HAPPEND 😖`);
      }
    );
  }

  deleteProject(id: any) {
    this._projectService.deleteProject(id).subscribe(
      response => {
        if (response) {
          this._router.navigate(['/proyectos'])
        }
      },
      error => {
        console.log(`SOME ERROR HAPPEND!! 😖`);
      }
    );
  }
}
