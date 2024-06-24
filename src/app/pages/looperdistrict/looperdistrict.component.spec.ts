import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LooperdistrictComponent } from './looperdistrict.component';

describe('LooperdistrictComponent', () => {
  let component: LooperdistrictComponent;
  let fixture: ComponentFixture<LooperdistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LooperdistrictComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LooperdistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
