import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsEditorComponent } from './graphics-editor.component';

describe('GraphicsEditorComponent', () => {
  let component: GraphicsEditorComponent;
  let fixture: ComponentFixture<GraphicsEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicsEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
