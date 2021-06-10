import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDeatailComponent } from './listing-deatail.component';

describe('ListingDeatailComponent', () => {
  let component: ListingDeatailComponent;
  let fixture: ComponentFixture<ListingDeatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingDeatailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDeatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
