import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StoreManagementPage } from './store-management.page';

describe('HomePage', () => {
  let component: StoreManagementPage;
  let fixture: ComponentFixture<StoreManagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StoreManagementPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StoreManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
