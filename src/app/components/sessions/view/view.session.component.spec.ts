import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSessionComponent } from './view.session.component';

describe('ViewComponent', () => {
  let component: ViewSessionComponent;
  let fixture: ComponentFixture<ViewSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewSessionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
