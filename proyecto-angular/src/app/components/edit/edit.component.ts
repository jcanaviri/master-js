import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';


@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService],
})
export class EditComponent implements OnInit {

  public title: string;
  public project: Project;
  public saveProject: any;
  public status: string;
  public filesToUpload: Array<File> = new Array<File>();
  public url: string;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { 
    this.title = 'Editar Projecto';
    this.project = new Project('', '', '', '', 2021, '', '');
    this.status = '';
    this.url = environment.url;
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
        console.log('Some error happend 😕');
      }
    )
  }

  onSubmit(form: any) {
    this._projectService.updateProject(this.project).subscribe(
      response => {
        // Basically if the object filesToUpload
        // was changed or already has a value
        if (this.filesToUpload.length >= 1) {
          // Send the image
          this._uploadService
            .makeFileRequest(
              `${environment.url}upload-img/${response.p._id}`,
              [],
              this.filesToUpload,
              'image'
            )
            .then((result: any) => {
              this.status = 'success';
              this.saveProject = result.p;
              form.reset();
            }).catch((error) => {
              console.log(`SOME ERROR 👿: ${error}`)
            });
        }
      },
      error => {
        console.log('Some error happend 😕');
      }
    )
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
