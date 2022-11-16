import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoutComponent } from './adout.component';

describe('AdoutComponent', () => {
  let component: AdoutComponent;
  let fixture: ComponentFixture<AdoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
