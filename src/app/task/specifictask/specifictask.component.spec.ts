import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecifictaskComponent } from './specifictask.component';

describe('SpecifictaskComponent', () => {
  let component: SpecifictaskComponent;
  let fixture: ComponentFixture<SpecifictaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecifictaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecifictaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
