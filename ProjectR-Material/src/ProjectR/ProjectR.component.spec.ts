/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { ProjectR } from './ProjectR.component';

describe('ProjectR', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProjectR
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(ProjectR);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(ProjectR);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(ProjectR);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
