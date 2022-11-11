import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveMoneyComponent } from './remove-money.component';

describe('RemoveMoneyComponent', () => {
  let component: RemoveMoneyComponent;
  let fixture: ComponentFixture<RemoveMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveMoneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
