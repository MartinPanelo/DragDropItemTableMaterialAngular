import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteunoComponent } from './componenteuno.component';

describe('ComponenteunoComponent', () => {
  let component: ComponenteunoComponent;
  let fixture: ComponentFixture<ComponenteunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
