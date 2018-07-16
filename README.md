# Permalink.NamedOverlay

This option for the [Permalink](https://github.com/shramov/leaflet-plugins) control
uses overlay names instead of one-letter flags as [Permalink.Overlay](https://github.com/shramov/leaflet-plugins) does. It is mostly a copy of the original code with changes necessary to use overlay names instead of flags.

Just include the source file **instead** of the Permalink.Overlay like:
```html
...
<script src="//cdnjs.cloudflare.com/ajax/libs/leaflet-plugins/3.0.3/control/Permalink.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/leaflet-plugins/3.0.3/control/Permalink.Layer.min.js"></script>
<!--
<script src="//cdnjs.cloudflare.com/ajax/libs/leaflet-plugins/3.0.3/control/Permalink.Overlay.js"></script>
-->
<script src="/static/map/js/Permalink.NamedOverlay.js"></script>
...
```

The following script demonstrates using the Permalink control. There is no any difference between using Overlay or NamedOverlay in the Javascript code:

```javascript
        var map = L.map('mapview');
        ...
        var layers = L.control.layers(...).addTo(map);
        ...
        var permalink = new L.Control.Permalink({text: 'Permalink', layers: layers, useLocation: true });
        map.addControl(permalink);
 ```
 
