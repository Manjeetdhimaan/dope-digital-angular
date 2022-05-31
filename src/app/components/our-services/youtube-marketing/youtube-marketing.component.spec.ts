import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeMarketingComponent } from './youtube-marketing.component';

describe('YoutubeMarketingComponent', () => {
  let component: YoutubeMarketingComponent;
  let fixture: ComponentFixture<YoutubeMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeMarketingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
