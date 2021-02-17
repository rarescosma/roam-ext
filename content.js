chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "roam_export_action" ) {
      // "..." menu
      $("span.bp3-icon-more[tabindex=0]").click();

      // Export
      setTimeout(
        function() {
          $("div.bp3-popover-content li:nth-child(6) .bp3-menu-item > div:contains('Export')").click();
        },
        1000
      );

      // Export Format dropdown 
      setTimeout(
        function() {
          $("span:contains('Export Format')").next().find("button").click();
        },
        1800 
      );

      // JSON 
      setTimeout(
        function() {
          $("span.bp3-popover-wrapper div:contains('JSON')").click();
        },
        2800
      );

      // Export!
      setTimeout(
        function() {
          $("button.bp3-intent-primary:contains('Export')").click();
        },
        3200
      );
    }
  }
);
