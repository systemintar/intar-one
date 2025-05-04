import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotrerosComponent } from './potreros.component';

describe('PotrerosComponent', () => {
  let component: PotrerosComponent;
  let fixture: ComponentFixture<PotrerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PotrerosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotrerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
