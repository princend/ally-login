import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { AriaDescriber, LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = '';
  @ViewChild('forget') forget: ElementRef<HTMLElement>;
  qq:any
  constructor(private annoucer: LiveAnnouncer, private _ariaDescriber: AriaDescriber) {
  }

  ngAfterViewInit(): void {
    this.annoucer.announce('歡迎進入登入頁面', 'assertive');
  }

  ngOnDestroy() {
    this.annoucer.ngOnDestroy();
  }
}
