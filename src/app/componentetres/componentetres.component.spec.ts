import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentetresComponent } from './componentetres.component';

describe('ComponentetresComponent', () => {
  let component: ComponentetresComponent;
  let fixture: ComponentFixture<ComponentetresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentetresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentetresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
