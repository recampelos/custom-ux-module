/**
 * Javascript file defining Iframe element util functions.
 */
(function () {

  var jQyeryCDN = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';

  /**
   * Gets the page root window object.
   *
   * @param {Window} currentWindow to process or blank to use the current document window
   * @returns {Window} the page root window
   */
  function getRootWindow(currentWindow) {
    currentWindow = (currentWindow || document.defaultView);

    if (currentWindow && currentWindow.parent && currentWindow.parent !== currentWindow) {
      return getRootWindow(currentWindow.parent);
    } else {
      return currentWindow;
    }
  }

  /**
   * Verifies if jQuery exists in current window
   * if jQuery not exists is automatically injected unless justVerify is true.
   *
   * @param {Window} currentWindow window where to verify is jQuery exists
   * @param (fn) callback function
   * @param (fn) error callback function
   * @param {String} jQueryUrl URL to jQuery script
   */
  function varifyAndInjectJQuery(currentWindow, jQueryUrl, success, error, justVerify) {
    if (currentWindow) {
      if (currentWindow.jQuery) {
        success({hasJquery: true, injected: false});
      } else if (justVerify) {
        success({hasJquery:false, injected:false});
      } else {
        var currentDocument = currentWindow.document;
        var head = currentDocument.querySelector('head')[0];
        var jQuery = currentDocument.createElement('script');

        jQuery.src = (jQueryUrl || jQyeryCDN);
        jQuery.onload = function () {
          success({hasJquery: true, injected: true});
        }

        head.appendChild(jQuery);
      }
    } else {
      error('Parameter currentWindow must be set!!');
    }
  }

  /**
   * Finds the iframe with the given iframeId in the given window.
   *
   * @param {String} iframeId iframe id to find
   * @param {Window} window where to find the iframe
   * @param {fn} success callback
   * @param {fn} error callback
   */
  function findIframe(iframeId, window, success, error, jQueryUrl) {
    if (!iframeId) {
      error('Parameter iframeId must be set!!');
      return;
    }

    if (!window) {
      error('Parameter window must be set!!');
      return;
    }

    varifyAndInjectJQuery(window, jQueryUrl, function (resp) {
      var iframeEl = window.jQuery('#' + iframeId).get(0);

      if (iframeEl) {
        success(iframeEl);
      } else {
        error('Iframe with given ID ' + iframeId + ' does not exists');
      }
    }, error);
  }

  /**
   * Resize parent iframe height to current document height.
   *
   * @param {String} iframeId the iframe to resize
   * @param {String} jQueryUrl jQuery script URL
   */
  function resizeParentIframe(iframeId, jQueryUrl) {
    if (iframeId && document && document.defaultView && document.defaultView.parent) {
      findIframe(iframeId, document.defaultView.parent, function (iframe) {
        iframe.style.height = (document.body.offsetHeight + 20) + px;
      }, function (error) {
        console.log(error)
      }, jQueryUrl);
    }
  }

  /**
   * Adds resize event to page root window and changes iframe height accordingly.
   *
   * @param {String} iframeId the iframe to resize
   * @param {String} jQueryUrl jQuery script URL
   */
  function addResizeEventToRootWindow(iframeId, jQueryUrl) {
    if (iframeId && document && document.defaultView && document.defaultView.parent) {
      findIframe(iframeId, document.defaultView.parent, function (iframe) {
        if (iframe) {
          var rootWindow = getRootWindow(document.defaultView);

          if (rootWindow) {
            varifyAndInjectJQuery(rootWindow, jQueryUrl, function () {
              rootWindow.jQuery(rootWindow).resize(function () {
                iframe.style.height = (document.body.offsetHeight + 20) + px;
              });
            }, function (error) {
              console.log(error);
            });
          }
        }
      }, function (error) {
        console.log(error);
      }, jQueryUrl);
    }
  }

  /**
   * Main IframeUtils object
   */
  window.IframeUtils = {
    /**
     * Resize parent iframe height to current document height.
     *
     * @param {String} iframeId the iframe to resize
     * @param {String} jQueryUrl jQuery script URL
     */
    resizeParentIframe: function (iframeId, jQueryUrl) {
      resizeParentIframe(iframeId, jQueryUrl);
    },

    /**
     * Adds resize event to page root window and changes iframe height accordingly.
     *
     * @param {String} iframeId the iframe to resize
     * @param {String} jQueryUrl jQuery script URL
     */
    addResizeEventToRootWindow: function(iframeId, jQueryUrl) {
      addResizeEventToRootWindow(iframeId, jQueryUrl);
    }
  }
})();
