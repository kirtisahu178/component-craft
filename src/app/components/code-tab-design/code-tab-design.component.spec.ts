import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeTabDesignComponent } from './code-tab-design.component';

describe('CodeTabDesignComponent', () => {
  let component: CodeTabDesignComponent;
  let fixture: ComponentFixture<CodeTabDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeTabDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeTabDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
