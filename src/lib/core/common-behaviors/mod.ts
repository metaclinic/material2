import { Constructor } from './constructor';
import { ElementRef, Renderer2 } from '@angular/core';

/** @docs-private */
export interface CanMod {
  mod: ModOptions;
}

/** @docs-private */
export interface HasRenderer {
  _renderer: Renderer2;
  _elementRef: ElementRef;
}

/** Possible mod option values.  */
export type ModOptions = 'normal' | 'large' | undefined;

/** Mixin to augment a directive with a `mod` property. */
export function mixinMod<T extends Constructor<HasRenderer>>(base: T, defaultMod?: ModOptions)
  : Constructor<CanMod> & T {
  return class extends base {
    private _mod: ModOptions;

    get mod(): ModOptions { return this._mod; }
    set mod(value: ModOptions) {
      const modOptions = value || defaultMod;

      if (modOptions !== this._mod) {
        if (this._mod) {
          this._renderer.removeClass(this._elementRef.nativeElement, `mat-${this._mod}`);
        }
        if (modOptions) {
          this._renderer.addClass(this._elementRef.nativeElement, `mat-${modOptions}`);
        }

        this._mod = modOptions;
      }
    }

    constructor(...args: any[]) {
      super(...args);

      // Set the default mod that can be specified from the mixin.
      this.mod = defaultMod;
    }
  };
}

