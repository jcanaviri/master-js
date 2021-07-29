import { Component, OnInit } from '@angular/core';

import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService]
})
export class CreateComponent implements OnInit {

  public title: string;
  public project: Project;
  public status: string;


  constructor(
    private _projectService: ProjectService,
  ) {
    this.title = "Crear Projecto",
    this.project = new Project('', '', '', '', 2021, '', '');
    this.status = '';
  }

  ngOnInit(): void {
  }

  onSubmit(form: any): void {
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if (response) {
          this.status = 'success';
          form.reset();
        } else {
          this.status = 'failed';
        }
      },
      error => {
        console.log(error);
      }
    )
  }
}
