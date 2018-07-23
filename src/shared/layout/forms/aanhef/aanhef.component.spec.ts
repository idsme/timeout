import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AanhefComponent } from './aanhef.component';
import { FormGroup } from '@angular/forms';

describe('AanhefComponent', () => {
  let component: AanhefComponent;
  let fixture: ComponentFixture<AanhefComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [],
        declarations: [AanhefComponent, FormGroup]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AanhefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
