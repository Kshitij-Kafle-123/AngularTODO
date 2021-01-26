import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KshitijComponent } from './kshitij.component';

describe('KshitijComponent', () => {
  let component: KshitijComponent;
  let fixture: ComponentFixture<KshitijComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KshitijComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KshitijComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
