import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SessionRepositoryService} from "../../../service/repository/session.repository.service";
import {Session} from "../../../models/session";

@Component({
  selector: 'app-view',
  templateUrl: './view.session.component.html',
  styleUrl: './view.session.component.css'
})
export class ViewSessionComponent implements OnInit{

  session!: Session;

  constructor(
    private route: ActivatedRoute,
    private sessionService: SessionRepositoryService
  ) { }

  ngOnInit(): void {
    // Get the session ID from the URL
    let sessionId: string;
    sessionId = <string>this.route.snapshot.paramMap.get('id');
    // Retrieve the session details using the session ID
    this.sessionService.get(sessionId).output$.subscribe((data: Session) => this.session = data);
  }

}
