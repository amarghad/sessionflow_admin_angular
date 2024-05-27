import {Component, OnInit} from '@angular/core';
import {SessionRepositoryService} from "../../../service/repository/session.repository.service";
import {Session} from "../../../models/session";

@Component({
  selector: 'app-index',
  templateUrl: './index.session.component.html',
  styleUrl: './index.session.component.css'
})
export class IndexSessionComponent implements OnInit{

    sessions! : Array<Session>

    constructor(private sessionRepository : SessionRepositoryService) {
    }

    ngOnInit(): void {
      this.sessionRepository.search("").output$.subscribe(x => {
        this.sessions = x;
      });
    }

}
