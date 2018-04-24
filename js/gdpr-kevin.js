'use strict';

function initiateGdpr(gtmKey, uaKey, additional, position, title, message, button1, button2){

  message = typeof message !== 'undefined' ? message : 'This website works best when using tracking such as Google Analytics and Google Tag Manager. If disabled website will still work but might lose some functionality. Please use buttons below to opt-in or out of tracking.';
  position = typeof position !== 'undefined' ? position : 'center';
  additional = typeof additional !== 'undefined' ? additional : [];
  uaKey = typeof uaKey !== 'undefined' ? uaKey : 'UA-XXXXX-X';
  gtmKey = typeof gtmKey !== 'undefined' ? gtmKey : 'GTM-XXXXX-X';
  title = typeof title !== 'undefined' ? title : 'Before you start';
  button1 = typeof button1 !== 'undefined' ? button1 : 'Allow tracking on this website';
  button2 = typeof button2 !== 'undefined' ? button2 : 'Disable tracking on this website';

  var popupContent = '<div class="popup-overlay"><div class="popup-container"><div class="popup-wrapper ' + position + '"><div class="popup-title"><h2>' + title + '</h2></div><div class="popup-content">' + message + '<p><button id="gdpr-enable-tracking">' + button1 + '</button></p><p><button id="gdpr-disable-tracking">' + button2 + '</button></p></div></div></div></div>';

  // Populate the popup with data
  document.getElementById('gdpr-popup').innerHTML = popupContent;

  // Check if consent cookie exists
  if(document.cookie.indexOf('GDPR') > -1){

    // If consent exist hide popup
    document.getElementById('gdpr-popup').style.display = "none";
    var gdpr = getCookie('GDPR');

    // Check the consent cookie value
    if(gdpr == 0){
      // If tracking disabled
      removeTracking();
    } else {

      // If tracking enabled add google tag manager function
  		if(gtmKey != 'GTM-XXXXX-X'){
  			(function (w, d, s, l, i) {
  				w[l] = w[l] || [];
  				w[l].push({
  					'gtm.start': new Date().getTime(),
  					event: 'gtm.js'
  				});
  				var f = d.getElementsByTagName(s)[0],
  					j = d.createElement(s),
  					dl = l != 'dataLayer' ? '&l=' + l : '';
  				j.async = true;
  				j.src =
  					'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
  				f.parentNode.insertBefore(j, f);
  			})(window, document, 'script', 'dataLayer', gtmKey);
  		}
  	}
  } else {
    // If cookie doesn't exist then remove cookies and show the popup
    removeTracking();
    document.getElementById('gdpr-popup').style.display = "block";
  }


  // Button functions
  document.getElementById('gdpr-disable-tracking').addEventListener('click', function(){
    setCookie(["GDPR"], 0, 'Fri, 1 Jan 2021 12:00:00 UTC');
    location.reload();
  });

  document.getElementById('gdpr-enable-tracking').addEventListener('click', function(){
    setCookie(["GDPR"], 1, 'Fri, 1 Jan 2021 12:00:00 UTC');
    location.reload();
  });


  // Get rid of tracking code and cookies
  function removeTracking(){

    // Disable analytics tracking
    window['ga-disable-' + uaKey] = true;


    // Gather all cookies to delete
    var cookies = document.cookie.split(';').filter(function(c) {
      return c.trim().indexOf('_ga') === 0;
    }).map(function(c) {
      return c.trim();
    });

    // Any additional cookiess to remove
    cookies.push('_gid');
    for (var i = 0; i < additional.length; i++) {
      cookies.push(additional[i]);
    }

    // Remove tracking cookies
    setCookie(cookies, 0, 'delete');

    // Create tracking variables if they don't exist
    if (!window.dataLayer) {
      window.dataLayer = [];
    }

    if (!window.ga) {
      window.ga = function() {};
    }
  }

  // Get cookie by name helper function
  function getCookie(cookie) {
    var name = cookie + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
    	var c = ca[i];
    	while (c.charAt(0) == ' ') {
    	  c = c.substring(1);
    	}
    	if (c.indexOf(name) == 0) {
    	  return c.substring(name.length, c.length);
    	}
    }
    return "";
  }

  function setCookie(cookies, value, date) {
    if(date == 'delete'){
      date = 'Thu, 01 Jan 1970 00:00:01 GMT';
      value = '';
    }

    for (var i = 0; i < cookies.length; i++) {
      document.cookie = cookies[i] + '=' + value + ';expires='+ date + ';';
    }
  }


}
