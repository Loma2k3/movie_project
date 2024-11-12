import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanveComponent } from './banve.component';

describe('BanveComponent', () => {
  let component: BanveComponent;
  let fixture: ComponentFixture<BanveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BanveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BanveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
