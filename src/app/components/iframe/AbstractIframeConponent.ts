import {IframeService} from '../../services/iframe/iframe.service'
import {AfterViewInit} from "@angular/core";

/**
 * Abstract class for components that are rendered inside a Iframe.
 */
export class AbstractIframeConponent implements AfterViewInit {

  constructor(private iframeService: IframeService, private iframeId: string, private jQueryUrl: string) {}

  ngAfterViewInit(): void {
    this.iframeService.resizeParentIframe(this.iframeId, this.jQueryUrl);
    this.iframeService.addResizeEventToRootWindow(this.iframeId, this.jQueryUrl);
  }
}
