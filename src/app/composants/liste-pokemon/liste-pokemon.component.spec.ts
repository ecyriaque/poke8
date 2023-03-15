import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePokemonComponent } from './liste-pokemon.component';

describe('ListePokemonComponent', () => {
  let component: ListePokemonComponent;
  let fixture: ComponentFixture<ListePokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
