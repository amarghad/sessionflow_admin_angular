import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {JuryMember} from "../../../models/jury-member";
import {JuryRepositoryService} from "../../../service/repository/jury.repository.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.jury.component.html'
})
export class AddJuryComponent implements OnInit{

  insertForm!: FormGroup;

  constructor(private juryRepository : JuryRepositoryService,
              private router : Router) {
  }

  ngOnInit() {
    this.insertForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      specialty: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    let member : JuryMember = this.insertForm.value;
    this.juryRepository.save(member).output$.subscribe(m => {
      alert("Jury added");
      this.router.navigateByUrl("/jury");
    })
  }
}
