import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCarCardComponent } from './featured-car-card.component';

describe('FeaturedCarCardComponent', () => {
  let component: FeaturedCarCardComponent;
  let fixture: ComponentFixture<FeaturedCarCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedCarCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedCarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
