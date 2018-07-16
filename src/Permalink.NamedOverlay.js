//#include "Permalink.js

L.Control.Permalink.include({

    initialize_overlay: function () {
        this.on('update', this._set_overlays, this);
        this.on('add', this._onadd_overlay, this);
    },

    _onadd_overlay: function () {
        this._map.on('overlayadd', this._update_overlay, this);
        this._map.on('overlayremove', this._update_overlay, this);
        this._update_overlay();
    },

    _update_overlay: function () {
        if (!this.options.layers) return;
        var overlayflags = this.options.layers.overlayFlags();
        this._update({overlays: overlayflags});
    },

    _set_overlays: function (e) {
        var p = e.params;
        if (!this.options.layers || !p.overlays) return;
        this.options.layers.setOverlays(p.overlays);
    }
});

L.Control.Layers.include({
    setOverlays: function (overlayflags) {
        var idxx = overlayflags.split(',');
        for(var i in idxx) {
            idxx[i] = decodeURIComponent(idxx[i]);
        }
        var obj;
        for (var i in this._layers) {
            if (!this._layers.hasOwnProperty(i)) continue;
            obj = this._layers[i];
            if (obj.overlay) {
                // visible if flag is present in flags
                var visible = idxx.indexOf(obj.name) >= 0 ? true:false;
                if (!visible && this._map.hasLayer(obj.layer)) {
                    this._map.removeLayer(obj.layer);
                } else if (visible && !this._map.hasLayer(obj.layer)) {
                    this._map.addLayer(obj.layer);
                }
            }
        }
    },

    overlayFlags: function () {
        var flags = [];
        for (var i in this._layers) {
            if (!this._layers.hasOwnProperty(i))
                continue;
            var obj = this._layers[i];
            if (!obj.overlay) continue;
            if (obj.overlay) {
                if (this._map.hasLayer(obj.layer)) {
                    flags.push(encodeURIComponent(obj.name));
                }
            }
        }
        return flags.join(',');
    }
});