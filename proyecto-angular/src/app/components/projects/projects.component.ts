import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService],
})
export class ProjectsComponent implements OnInit {

  public projects: Project[] = [];
  public url: string;

  constructor(
    private _projectService: ProjectService,
  ) {
    this.url = environment.url;
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this._projectService.getProjects().subscribe(
      response => {
        this.projects = response.projects;
      },
      error => {
        console.log(<any>error);
      }
    )
  }
}
