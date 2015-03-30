# ScriptNo - Experimental Version #
## THIS PAGE NOW OBSOLETE (FOR NOW) DUE TO v1.0.6.0 ##

As I cannot update this to the Chrome Extensions Gallery (because it uses an experimental API), you'll have to download this manually and install it.

Shiny New Features:
  * Truly blocks inline scripts (which may cause incompatibilities with other extensions!)
  * Block Unwanted Cookies - block cookies from being set by domains in the unwanted content domain list (Default: Enabled)
  * User-Agent Spoof - spoof your browser and operating system (Default: Disabled)
  * Referrer Spoof - spoofs the referrer for all requested resources (options: Same Document, Same Domain, Off) (Default: Same Domain)
  * Block Cross-Domain XML - block cross-domain XML HTTP Requests (Default: Enabled)
  * Leverages WebRequest API for more reliable blocking and cookie-blocking/spoofing features (http://code.google.com/chrome/extensions/trunk/experimental.webRequest.html)
    * Since the current blocking method (event.preventDefault()) runs in parallel with this API, if your Chrome version doesn't support this experimental API yet, ScriptNo will still block resources using the current blocking method

## Download ##

http://code.google.com/p/scriptno/downloads/list

## Known Issues ##

  * Webbugs/"invisible images" may or may not be blocked (e.g. http://www.dslreports.com/forums/all)
  * Some pages may crash ("Aw, Snap!" message) (e.g. http://www.citytv.com/toronto/citynews)