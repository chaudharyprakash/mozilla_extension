
var buttons= require('sdk/ui/button/action');
var tabs = require('sdk/tabs');
var window = require("sdk/window/utils").getMostRecentBrowserWindow();
Q = '';

var buttons = buttons.ActionButton({
	id: "ein-link",
	label: "share to Readit4Me",
	icon: {
	"16": "./button-16.png"	
	},

  onClick: function(state) {
	open_url = 'http://readit4me.com/users/articles/bookmark' +
                '?u=' + escape(tabs.activeTab.url) +
                '&n=' + encodeURI(tabs.activeTab.title) +
                '&t=' + escape(Q),
                'ReadIt4MeForm';
	 open_options = 'scrollbars=no,width=400,height=450,top=175,left=75,status=yes,resizable=yes';
	 current_window = window.open(open_url,'ReadIt4MeForm',open_options);
		current_window.setTimeout(function() {
			    window.close();
			}, 2500);

	}	
});


