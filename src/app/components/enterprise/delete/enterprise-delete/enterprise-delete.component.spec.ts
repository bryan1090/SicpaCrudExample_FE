import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseDeleteComponent } from './enterprise-delete.component';

describe('EnterpriseDeleteComponent', () => {
  let component: EnterpriseDeleteComponent;
  let fixture: ComponentFixture<EnterpriseDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriseDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
