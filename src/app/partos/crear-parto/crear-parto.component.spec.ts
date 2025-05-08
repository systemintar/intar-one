import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPartoComponent } from './crear-parto.component';

describe('CrearPartoComponent', () => {
  let component: CrearPartoComponent;
  let fixture: ComponentFixture<CrearPartoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearPartoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearPartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
