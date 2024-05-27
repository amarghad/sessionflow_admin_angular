import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Session} from "../../../models/session";
import {SessionRepositoryService} from "../../../service/repository/session.repository.service";
import {Router} from "@angular/router";
import {JuryMember} from "../../../models/jury-member";
import {JuryRepositoryService} from "../../../service/repository/jury.repository.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.session.component.html',
  styleUrl: './add.session.component.css'
})
export class AddSessionComponent implements OnInit{
  sessionForm: any;
  members!: Array<JuryMember>;

  constructor(private sessionRepository : SessionRepositoryService,
              private juryRepository : JuryRepositoryService,
              private router : Router) {
  }
  ngOnInit(): void {
    this.sessionForm = new FormGroup({
      date: new FormControl('', Validators.required),
      max: new FormControl('', [Validators.required, Validators.min(1)]),
      start: new FormControl('', Validators.required),
      end: new FormControl('', Validators.required),
      juryMembers: new FormArray([])
    });

    this.juryRepository.search("").output$.subscribe(out => this.members = out);

  }


  onSubmit() {
    if (this.sessionForm.valid) {
      let session : Session = this.sessionForm.value
      this.sessionRepository.save(session).output$.subscribe(x => {
        alert("Seance crée");
        this.router.navigateByUrl("/sessions");
      });
    }
  }

}
