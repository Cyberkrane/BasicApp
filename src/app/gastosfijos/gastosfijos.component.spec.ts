import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosfijosComponent } from './gastosfijos.component';

describe('GastosfijosComponent', () => {
  let component: GastosfijosComponent;
  let fixture: ComponentFixture<GastosfijosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GastosfijosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastosfijosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
