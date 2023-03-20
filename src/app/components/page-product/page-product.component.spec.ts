import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductComponent } from './page-product.component';

describe('PageProductComponent', () => {
  let component: PageProductComponent;
  let fixture: ComponentFixture<PageProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
