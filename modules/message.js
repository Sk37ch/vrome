chrome.extension.onConnect.addListener(function(port) {
  port.onMessage.addListener(function(msg) {
    var tab = port.tab;
		var actions = msg.action.split('.');
		var action  = window[actions.shift()];

		while (action && actions[0]) { action = action[actions.shift()]; }
		if(Debug) Debug("actions" + msg.action + " action" + action);

		if(action instanceof Function) action.apply('',msg.arguments);
  });
})