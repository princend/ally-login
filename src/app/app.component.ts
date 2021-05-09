import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { AriaDescriber, LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit ,OnDestroy{
  title = '';
  @ViewChild('account') account: ElementRef<HTMLElement>;

  constructor(private annoucer: LiveAnnouncer, private _ariaDescriber: AriaDescriber) {
  }

  ngAfterViewInit(): void {
    this.annoucer.announce('歡迎進入登入頁面', 'assertive');
    this._ariaDescriber.describe(this.account.nativeElement,'若忘記帳號可以改輸入手機號碼')
  }

 ngOnDestroy(){
  this.annoucer.ngOnDestroy() ;
  this._ariaDescriber.removeDescription(this.account.nativeElement,'若忘記帳號可以改輸入手機號碼');
 }
}
