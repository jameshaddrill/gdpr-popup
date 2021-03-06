# GDPR Popup

This plugin will ask user for consent to use tracking code on the website and keep it as a cookie setting. If user denies, tracking code doesn't get added and all tracking cookies (plus any specifed additional ones) get removed.

This plugin uses pure javascript so no additional libraries are required.

## Getting Started

1. Include the plugin javascript and stylesheet (you can choose from using a normal CSS file or SASS).

2. Add a div element with an id of "gdpr-popup" to your website's body.


### Usage

To initiate the plugin you have to start the plugin by calling it

```
initiateGdpr()
```


### Parameters/Options

This plugin has a number of parameters that you can use:

```
initiateGdpr(GTM, UA, Additional, Position, Title, Message, Button1, Button2);
```



GTM - Google tag manager API KEY

```
initiateGdpr('GTM-XXXXXXX');
```



UA - Google analytics API KEY

```
initiateGdpr(..., 'UA-XXXXXXX-X');
```



Additional - You can specify additional cookie names to disable. (Has to be an array)

```
initiateGdpr(..., ['cookie1']);
```

```
initiateGdpr(..., ['cookie1', 'cookie2', 'cookie3']);
```



Postition - sets the position of the popup window ('center', 'top', 'bottom')

```
initiateGdpr(..., 'center');
```



Title - Sets popup title
		
Message - Sets popup main text

Button1: Sets popup opt-in button text

Button2: Sets popup opt-out button text


## An example using all possible parameters

```
initiateGdpr('GTM-XXXXXXX', 'UA-XXXXXXX-X', ['cookie1', 'cookie2'], 'bottom', 'Welcome!', 'Please use these buttons to opt in or out of tracking functionality', 'Opt-in', 'Opt-out');
```
