# intrinsicsize-polyfill
This is a polyfill for the proposed intrinsicsize-attribute. (https://github.com/ojanvafai/intrinsicsize-attribute)
- Supports dynamicly added HTML
- 1kb gzip-compressed
- Works with images, not videos at the moment
- Supports all latest browsers

## Demo at
https://codepen.io/tobias_buschor/pen/jpjdrz 

## Ussage
Just add the script

```html
<script src="https://rawgit.com/nuxodin/intrinsicsize-polyfill/master/min.js"></script>  
```

and write HTML like this  
```html
<img src="https://imageshack.com/a/img923/1476/HFfqqe.jpg" intrinsicsize="1920x1281" style="width:100%">  
```

## How it works
The script observes new elements with MutationObserver. 
If its a image with the attribute "intrinsicsize", the source is replaced with a data-url-SVG using the same size. 
When the original Image loads, its source will change to it. 

## Browsers implementation status
Behind a flag in chrome  
https://www.chromestatus.com/feature/4704436815396864  
Firefox is playing with it  
https://bugzilla.mozilla.org/show_bug.cgi?id=1487247  
https://bugzilla.mozilla.org/show_bug.cgi?id=1487250  

## Improvements welcome!
