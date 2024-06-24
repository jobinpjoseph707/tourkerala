import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistritcsComponent } from './distritcs.component';

describe('DistritcsComponent', () => {
  let component: DistritcsComponent;
  let fixture: ComponentFixture<DistritcsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistritcsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistritcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
