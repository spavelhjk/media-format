# media-format

Get media time in the specified format

## Usage
`mediaFormat(media, format);`
params:
* `media` - **HTMLMediaElement**, the element from which data will be taken.
* `format` - **String**, template for time format.

## Examples

```html
<video id="vid">
 <source src="URL">
</video>
```

```javascript
let vid = document.getElementById( 'vid' );
mediaFormat( vid, '|h|:|i|:|s| - |pc|' ); // 0:0:0 - 0%
mediaFormat( vid, 'Minutes: |m|, seconds: |s|' ); // Minutes: 0, seconds:0 
```


`
