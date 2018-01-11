import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable()
export class IframeService {

  constructor(@Inject(DOCUMENT) private document: any) { }

  /**
   * Resize parent iframe height to current document height.
   *
   * @param {String} iframeId the iframe to resize
   * @param {String} jQueryUrl jQuery script URL
   */
  resizeParentIframe(iframeId: string, jQueryUrl?:string):void {
    this.document.defaultView.IframeUtils.resizeParentIframe(iframeId, jQueryUrl);
  }

  /**
   * Adds resize event to page root window and changes iframe height accordingly.
   *
   * @param {String} iframeId the iframe to resize
   * @param {String} jQueryUrl jQuery script URL
   */
  addResizeEventToRootWindow(iframeId: string, jQueryUrl?:string):void {
    this.document.defaultView.IframeUtils.addResizeEventToRootWindow(iframeId, jQueryUrl);
  }
}
