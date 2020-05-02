import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonPremierComposantComponent } from './mon-premier-composant.component';

describe('MonPremierComposantComponent', () => {
  let component: MonPremierComposantComponent;
  let fixture: ComponentFixture<MonPremierComposantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonPremierComposantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonPremierComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
