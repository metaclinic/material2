import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {dispatchFakeEvent} from '@metaclinic/cdk/testing';
import {MdOption, MdOptionModule} from './index';

describe('MdOption component', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MdOptionModule],
      declarations: [OptionWithDisable]
    }).compileComponents();
  }));

  describe('ripples', () => {
    let fixture: ComponentFixture<OptionWithDisable>;
    let optionDebugElement: DebugElement;
    let optionNativeElement: HTMLElement;
    let optionInstance: MdOption;

    beforeEach(() => {
      fixture = TestBed.createComponent(OptionWithDisable);
      fixture.detectChanges();

      optionDebugElement = fixture.debugElement.query(By.directive(MdOption));
      optionNativeElement = optionDebugElement.nativeElement;
      optionInstance = optionDebugElement.componentInstance;
    });

    it('should show ripples by default', () => {
      expect(optionInstance.disableRipple).toBe(false, 'Expected ripples to be enabled by default');
      expect(optionNativeElement.querySelectorAll('.mat-ripple-element').length)
        .toBe(0, 'Expected no ripples to show up initially');

      dispatchFakeEvent(optionNativeElement, 'mousedown');
      dispatchFakeEvent(optionNativeElement, 'mouseup');

      expect(optionNativeElement.querySelectorAll('.mat-ripple-element').length)
        .toBe(1, 'Expected one ripple to show up after a fake click.');
    });

    it('should not show ripples if the option is disabled', () => {
      expect(optionNativeElement.querySelectorAll('.mat-ripple-element').length)
        .toBe(0, 'Expected no ripples to show up initially');

      fixture.componentInstance.disabled = true;
      fixture.detectChanges();

      dispatchFakeEvent(optionNativeElement, 'mousedown');
      dispatchFakeEvent(optionNativeElement, 'mouseup');

      expect(optionNativeElement.querySelectorAll('.mat-ripple-element').length)
        .toBe(0, 'Expected no ripples to show up after click on a disabled option.');
    });

    it('should not show ripples if the ripples are disabled using disableRipple', () => {
      expect(optionNativeElement.querySelectorAll('.mat-ripple-element').length)
        .toBe(0, 'Expected no ripples to show up initially');

      optionInstance.disableRipple = true;
      fixture.detectChanges();

      dispatchFakeEvent(optionNativeElement, 'mousedown');
      dispatchFakeEvent(optionNativeElement, 'mouseup');

      expect(optionNativeElement.querySelectorAll('.mat-ripple-element').length)
        .toBe(0, 'Expected no ripples to show up after click when ripples are disabled.');
    });

  });

});

@Component({
  template: `<md-option [disabled]="disabled"></md-option>`
})
export class OptionWithDisable {
  disabled: boolean;
}
