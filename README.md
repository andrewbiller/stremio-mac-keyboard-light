# Mac Keyboard Light addon for Strem.io
## Turn off backlight keyboard when playing content at Macs

* Only works on macs (*obvious*)
* It uses the `src/keyboard-brightness.c` code

You can use the `bin/kbrightness` from the repo or compile yourself using:

`gcc -std=c99 -o kbrightness keyboard-brightness.c -framework IOKit -framework ApplicationServices`

`./kbrightness 0.8`

## Testing and User

To test this project standalone:

* Install http://strem.io *or* download or use the https://github.com/Ivshti/stremio-addons-client
* `git clone https://github.com/andrewbiller/stremio-mac-keyboard-light.git`
* `cd stremio-mac-keyboard-light`
* `npm install`
* `npm start`
* Open the url `http://localhost:7099/stremio/v1` and click install addon
* Play any movie and see keyboard light turning off
