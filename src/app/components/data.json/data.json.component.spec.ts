import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataJsonComponent } from './data.json.component';

describe('DataJsonComponent', () => {
  let component: DataJsonComponent;
  let fixture: ComponentFixture<DataJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataJsonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
