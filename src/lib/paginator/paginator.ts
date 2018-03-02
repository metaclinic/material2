import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MatPaginatorIntl } from './paginator-intl';

/** The default page size if there is no page size and there are no provided page size options. */
const DEFAULT_PAGE_SIZE = 50;

export class PageEvent {
  /** The current page index. */
  pageIndex: number;

  /** The current step index. */
  stepIndex: number;

  /** The current step size */
  stepSize: number;

  /** The current page size */
  pageSize: number;

  /** The current total number of items being paged */
  length: number;
}

/**
 * Component to provide navigation between paged information. Displays the size of the current
 * page, user-selectable options to change that size, what items are being shown, and
 * navigational button to go to the previous or next page.
 */
@Component({
  moduleId: module.id,
  selector: 'mat-paginator',
  exportAs: 'matPaginator',
  templateUrl: 'paginator.html',
  styleUrls: ['paginator.css'],
  host: {
    'class': 'mat-paginator',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class MatPaginator implements OnInit, OnDestroy {
  private _initialized: boolean;
  private _intlChanges: Subscription;
  private _pageIndices: number[];
  _stepIndices: number[][];
  private _pageIndicesFocusRange: number = 9;
  private _lastPageIndex: number | null = null;
  private _lastStepIndex: number | null = null;

  /** The zero-based page index of the displayed list of items. Defaulted to 0. */
  @Input()
  get pageIndex(): number { return this._pageIndex; }
  set pageIndex(pageIndex: number) {
    this._pageIndex = pageIndex;
    this._changeDetectorRef.markForCheck();
  }
  _pageIndex: number = 0;

  /** The zero-based step index of the displayed list of items. Defaulted to 0. */
  @Input()
  get stepIndex(): number { return this._stepIndex; }
  set stepIndex(stepIndex: number) {
    this._stepIndex = stepIndex;
    this._changeDetectorRef.markForCheck();
  }
  _stepIndex: number = 0;

  /** The length of the total number of items that are being paginated. Defaulted to 0. */
  @Input()
  get length(): number { return this._length; }
  set length(length: number) {
    this._length = length;
    this._changeDetectorRef.markForCheck();
  }
  _length: number = 0;

  /** Number of items to display on a page. By default set to 50. */
  @Input()
  get pageSize(): number { return this._pageSize; }
  set pageSize(pageSize: number) {
    this._pageSize = pageSize;
    this._updateDisplayedPageSizeOptions();
  }
  private _pageSize: number;

  /** Number of steps to display on a page. By default set to 7. */
  @Input()
  get stepSize(): number { return this._stepSize; }
  set stepSize(stepSize: number) {
    this._stepSize = stepSize;
    // this._updateDisplayedPageSizeOptions();
  }
  private _stepSize: number;

  /** The set of provided page size options to display to the user. */
  @Input()
  get pageSizeOptions(): number[] { return this._pageSizeOptions; }
  set pageSizeOptions(pageSizeOptions: number[]) {
    this._pageSizeOptions = pageSizeOptions;
    this._updateDisplayedPageSizeOptions();
  }
  private _pageSizeOptions: number[] = [];

  /** Event emitted when the paginator changes the page size or page index. */
  @Output() page = new EventEmitter<PageEvent>();

  /** Displayed set of page size options. Will be sorted and include current page size. */
  _displayedPageSizeOptions: number[];

  constructor(public _intl: MatPaginatorIntl,
    private _changeDetectorRef: ChangeDetectorRef) {
    this._intlChanges = _intl.changes.subscribe(() => this._changeDetectorRef.markForCheck());
  }

  ngOnInit() {
    this._initialized = true;
    this._updateDisplayedPageSizeOptions();
    this._updatePageIndexArray();
  }

  refresh() {
    this._initialized = true;
    this._updateDisplayedPageSizeOptions();
    this._updatePageIndexArray();
  }

  ngOnDestroy() {
    this._intlChanges.unsubscribe();
  }

  gotoPage(pageIndex: number) {
    if (this._pageIndex === pageIndex) { return; }
    this.pageIndex = pageIndex;
    this._emitPageEvent();
  }

  /** Advances to the next page if it exists. */
  nextPage() {
    if (!this.hasNextPage()) { return; }
    const lastPageInStepIndex = this._stepIndices[this.stepIndex].length - 1;
    const lastPageInStep = this._stepIndices[this.stepIndex][lastPageInStepIndex];
    if (this.pageIndex === (lastPageInStep - 1)) {
      this.nextStep();
    } else {
      this.pageIndex++;
      this._emitPageEvent();
    }
  }

  /** Move back to the previous page if it exists. */
  previousPage() {
    if (!this.hasPreviousPage()) { return; }
    const firstPageInStep = this._stepIndices[this.stepIndex][0];
    if (this.pageIndex === (firstPageInStep - 1)) {
      this.previousStep();
    } else {
      this.pageIndex--;
      this._emitPageEvent();
    }
  }

  gotoStep(stepIndex: number, pageIndex: number) {
    this.stepIndex = stepIndex;
    this.pageIndex = pageIndex;
    this._emitPageEvent();
  }

  nextStep() {
    this.stepIndex++;
    this.pageIndex = (this._stepIndices[this.stepIndex][0] - 1);
    this._emitPageEvent();
  }

  previousStep() {
    this.stepIndex--;
    const lastPageInStep = this._stepIndices[this.stepIndex].length - 1;
    this.pageIndex = (this._stepIndices[this.stepIndex][lastPageInStep] - 1);
    this._emitPageEvent();
  }

  /** Whether there is a previous page. */
  hasPreviousPage() {
    return this.pageIndex >= 1 && this.pageSize != 0;
  }

  /** Whether there is a next page. */
  hasNextPage() {
    const numberOfPages = Math.ceil(this.length / this.pageSize) - 1;
    return this.pageIndex < numberOfPages && this.pageSize != 0;
  }

  /**
   * Changes the page size so that the first item displayed on the page will still be
   * displayed using the new page size.
   *
   * For example, if the page size is 10 and on the second page (items indexed 10-19) then
   * switching so that the page size is 5 will set the third page as the current page so
   * that the 10th item will still be displayed.
   */
  _changePageSize(pageSize: number) {
    // Current page needs to be updated to reflect the new page size. Navigate to the page
    // containing the previous page's first item.
    this.stepIndex = 0;
    this.pageIndex = 0;
    this.pageSize = pageSize;
    this._emitPageEvent();
  }

  /**
   * Updates the list of page size options to display to the user. Includes making sure that
   * the page size is an option and that the list is sorted.
   */
  private _updateDisplayedPageSizeOptions() {
    if (!this._initialized) { return; }

    // If no page size is provided, use the first page size option or the default page size.
    if (!this.pageSize) {
      this._pageSize = this.pageSizeOptions.length != 0 ?
        this.pageSizeOptions[0] :
        DEFAULT_PAGE_SIZE;
    }

    this._displayedPageSizeOptions = this.pageSizeOptions.slice();
    if (this._displayedPageSizeOptions.indexOf(this.pageSize) == -1) {
      this._displayedPageSizeOptions.push(this.pageSize);
    }

    // Sort the numbers using a number-specific sort function.
    this._displayedPageSizeOptions.sort((a, b) => a - b);

    this._changeDetectorRef.markForCheck();
  }

  private _updatePageIndexArray() {
    this._stepIndices = [];
    this._pageIndices = [];
    const entryMod = this._length % this._pageSize;
    let adjustedCount = this._length;
    let offsetPad = 0;
    if (entryMod !== 0) {
      adjustedCount = this._length - entryMod;
      offsetPad = 1;
    }
    const numberOfIndices = (adjustedCount / this._pageSize) + offsetPad;
    for (let i = 1; i <= numberOfIndices; i++) {
      this._pageIndices.push(i);
    }

    if (this._pageIndices.length <= this._pageIndicesFocusRange + 1) {
      this._stepIndices.push(this._pageIndices);
    } else {
      const stepMod = this._pageIndices.length % this._pageIndicesFocusRange;
      let adjustedStepCount = this._pageIndices.length;
      if (stepMod !== 0) {
        adjustedStepCount = this._pageIndices.length - stepMod;
        for (let i = 0; i < (adjustedStepCount / this._pageIndicesFocusRange); i++) {
          let stepStartIndex = i * this._pageIndicesFocusRange;
          let stepEndIndex = stepStartIndex + this._pageIndicesFocusRange;
          this._stepIndices.push(this._pageIndices.slice(stepStartIndex, stepEndIndex));
        }
        this._stepIndices.push(this._pageIndices.slice(adjustedStepCount, this._pageIndices.length));
      } else {
        for (let i = 0; i < (adjustedStepCount / this._pageIndicesFocusRange); i++) {
          let stepStartIndex = i * this._pageIndicesFocusRange;
          let stepEndIndex = stepStartIndex + this._pageIndicesFocusRange;
          this._stepIndices.push(this._pageIndices.slice(stepStartIndex, stepEndIndex));
        }
      }
    }

    this._lastPageIndex = this._pageIndices.length;
    this._lastStepIndex = (this._stepIndices.length - 1);
  }

  /** Emits an event notifying that a change of the paginator's properties has been triggered. */
  private _emitPageEvent() {
    this.page.next({
      pageIndex: this.pageIndex,
      stepIndex: this.stepIndex,
      pageSize: this.pageSize,
      stepSize: this.stepSize,
      length: this.length
    });
    this._updatePageIndexArray();
  }
}
