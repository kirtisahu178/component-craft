import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyCardComponent } from './sticky-card.component';

describe('StickyCardComponent', () => {
  let component: StickyCardComponent;
  let fixture: ComponentFixture<StickyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StickyCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
