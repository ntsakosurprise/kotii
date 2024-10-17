const printHelloWorld = function () {
  console.log("HELLOW WORLD");
};

const clientTools = {
  self: this,
  //=============================================================================================*/

  domLoaded: function (code) {
    // Define domLoaded method

    this.ev_addHandler(window, "load", code); // Call the event handler method of this object to tie the laod
    // event to the Window object, and execute the code passed to
    // handle the event
  }, // End of afterLoad method

  throwErrors: function (errorMessage) {
    // Define throwErrors method

    throw new Error(errorMessage);
  }, // End of afterLoad method

  /*********************************** EVENT HANDLING ************************************************************/

  ev_addHandler: function (element, evtype, handler) {
    if (element.addEventListener) {
      element.addEventListener(evtype, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent("on" + evtype, handler);
    } else {
      element["on" + evtype] = handler;
    }
  }, // end of event handler

  ev_removeHandler: function (element, evtype, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(evtype, handler, false);
    } else if (element.detachEvent) {
      element.detachEvent("on" + evtype, handler);
    } else {
      element["on" + evtype] = null;
    }
  },

  getEvent: function (event) {
    return event ? event : window.event;
  },

  getTarget: function (event) {
    return event.target || event.srcElement;
  },

  preventDefault: function (event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },

  stopPropagation: function (event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  },

  /*==========================================================================*/

  reloadPageContent: function () {
    console.log("RELOAD PAGE CONTENT");
    // location.reload()
  },
  listenToServerEvents: function (eventData) {
    let eventSource = new EventSource("/subscribe-to-events");
    console.log("THE EVENT SOURCE", eventSource);
    eventSource.addEventListener("error", (error) => {
      console.log("An error occured", error);
      // eventSource.close();
    });
    eventSource.addEventListener("kotii-client-reload", function (event) {
      console.log("DATA FROM THE SERVER", event);
      self.reloadPageContent();
    });
  },
};

// clientTools.domLoaded(clientTools.listenToServerEvents)
