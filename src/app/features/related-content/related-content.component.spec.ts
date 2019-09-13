import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedContentComponent } from './related-content.component';

describe('RelatedContentComponent', () => {
  let component: RelatedContentComponent;
  let fixture: ComponentFixture<RelatedContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
