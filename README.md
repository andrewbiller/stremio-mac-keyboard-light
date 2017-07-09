# Mac Keyboard Light for Strem.io
## It's an add-on that turn off backlight from mac keyboards when playing content

Works only on macs (*obvious*)

It uses the `src/keyboard-brightness.c` code

You can use the `bin/kbrightness` from the repo or compile yourself using:


`gcc -std=c99 -o kbrightness keyboard-brightness.c -framework IOKit -framework ApplicationServices`

`./kbrightness 0.8`
