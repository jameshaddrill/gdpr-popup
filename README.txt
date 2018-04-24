1. Installation:

	- Include the plugin javascript and stylesheet (you can choose from using a normal CSS file or SASS).
	- Add a new div with an id of "gdpr-popup" to your website's body. (<div id="gdpr-popup"></div>).

2. Usage:

	- To initiate the plugin you have to start the plugin by calling it - "initiateGDPR()"
	- Parameters/Options:
	
		- Google tag manager API KEY: Please provide google analytics or tag manager api key. eg. initiateGDPR(..., 'GTM-XXXXXXX');
	
		- Google analytics API KEY: Please provide google analytics or tag manager api key. eg. initiateGDPR(..., 'UA-XXXXXXX-X');

		- Cookie names to delete: You can specify additional cookie names to disable (if more than one please use an array). eg. initiateGDPR(..., ['cookie1', 'cookie2']);

		- Postition: 'center', 'top', 'bottom' eg. initiateGDPR(..., 'center');

		- Title: You can provide the GDPR popup title as a string eg. initiateGDPR(..., 'Welcome to our site!');
		
		- Message: GDPR popup main text as a string eg. initiateGDPR(..., 'Please use the buttons below');

		- button1: GDPR popup first button text as a string eg. initiateGDPR(..., 'Yes');

		- button2: GDPR popup first button text as a string eg. initiateGDPR(..., 'No);
		