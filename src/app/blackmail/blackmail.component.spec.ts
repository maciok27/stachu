import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackmailComponent } from './blackmail.component';

describe('BlackmailComponent', () => {
  let component: BlackmailComponent;
  let fixture: ComponentFixture<BlackmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlackmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
