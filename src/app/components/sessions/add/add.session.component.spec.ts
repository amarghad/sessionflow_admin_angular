import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSessionComponent } from './add.session.component';

describe('AddComponent', () => {
  let component: AddSessionComponent;
  let fixture: ComponentFixture<AddSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSessionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
