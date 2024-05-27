import {Component, OnInit} from '@angular/core';
import {JuryRepositoryService} from "../../../service/repository/jury.repository.service";
import {JuryMember} from "../../../models/jury-member";
import {PageRequest} from "../../../utils/page-request";

@Component({
  selector: 'app-index',
  templateUrl: './index.jury.component.html'
})
export class IndexJuryComponent implements OnInit{

  members!: Array<JuryMember>

  constructor(private juryRepository : JuryRepositoryService) {}

  ngOnInit() {
    this.juryRepository.search("")
      .output$
      .subscribe(ms => this.members = ms);
  }


}
