import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCollectionComponent } from './admin-collection.component';

describe('AdminCollectionComponent', () => {
  let component: AdminCollectionComponent;
  let fixture: ComponentFixture<AdminCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
