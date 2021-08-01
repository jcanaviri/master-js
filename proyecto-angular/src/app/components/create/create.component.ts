import { Component, OnInit } from '@angular/core';

import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService],
})
export class CreateComponent implements OnInit {
  public title: string;
  public project: Project;
  public saveProject: any;
  public status: string;
  public filesToUpload: Array<File> = new Array<File>();
  public url: string;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ) {
    this.title = 'Crear Projecto';
    this.project = new Project('', '', '', '', 2021, '', '');
    this.status = '';
    this.url = environment.url;
  }

  ngOnInit(): void {}

  onSubmit(form: any): void {
    this._projectService.saveProject(this.project).subscribe(
      (response) => {
        if (response) {
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
        } else {
          this.status = 'failed';
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
}
