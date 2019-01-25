import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../../services/project.service";
import { Global } from "../../services/global";
import { Project } from "../../models/project";
import {Router, ActivatedRoute, Params} from "@angular/router";


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {
  public url : string;
  public project:Project;
  constructor(
    private _projectService : ProjectService,
    private _router : Router,
    private _route : ActivatedRoute
  ) { 
    this.url = Global.url;
  }

  ngOnInit() {
    this._route.params.subscribe(params=>{
      let id = params.id;
      this.getProject(id);
    })
  }

  getProject(id){
    this._projectService.getProject(id).subscribe(
      response=>{
        this.project= response.project;
      },error =>{
        console.log(<any>error);
      }
    )
  }
  deleteProject(id){
    this._projectService.deleteProject(id).subscribe(
      response =>{
        console.log(response);
        this._router.navigate(['/proyectos']);
      },error=>{
        console.log(<any>error);
        
      }
    )
  }

}
