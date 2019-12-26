import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCollectionEditComponent } from './admin-collection-edit.component';

describe('AdminCollectionEditComponent', () => {
  let component: AdminCollectionEditComponent;
  let fixture: ComponentFixture<AdminCollectionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCollectionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCollectionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
