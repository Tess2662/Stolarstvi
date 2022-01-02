import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VyrobkyComponent } from './vyrobky.component';

describe('VyrobkyComponent', () => {
  let component: VyrobkyComponent;
  let fixture: ComponentFixture<VyrobkyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VyrobkyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VyrobkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
