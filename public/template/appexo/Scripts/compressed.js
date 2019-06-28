"use strict";
if (function (t, e) {
    "object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd ? define(["jquery", "googlemaps!compressed"], e) : t.GMaps = e()
}(this, function () {
    var t, i, s, o, n = function (t, e) {
        var i;
        if (t === e) return t;
        for (i in e) void 0 !== e[i] && (t[i] = e[i]);
        return t
    }, r = function (t, e) {
        var i, s = Array.prototype.slice.call(arguments, 2), o = [], n = t.length;
        if (Array.prototype.map && t.map === Array.prototype.map) o = Array.prototype.map.call(t, function (t) {
            var i = s.slice(0);
            return i.splice(0, 0, t), e.apply(this, i)
        }); else for (i = 0; i < n; i++) callback_params = s, callback_params.splice(0, 0, t[i]), o.push(e.apply(this, callback_params));
        return o
    }, a = function (t) {
        var e, i = [];
        for (e = 0; e < t.length; e++) i = i.concat(t[e]);
        return i
    }, l = function (t, e) {
        var i, s, o, n, r;
        for (i = 0; i < t.length; i++) t[i] instanceof google.maps.LatLng || (t[i].length > 0 && "object" == typeof t[i][0] ? t[i] = l(t[i], e) : t[i] = (s = t[i], o = e, n = void 0, r = void 0, n = s[0], r = s[1], o && (n = s[1], r = s[0]), new google.maps.LatLng(n, r)));
        return t
    }, h = function (t, e) {
        t = t.replace("#", "");
        return "jQuery" in window && e ? $("#" + t, e)[0] : document.getElementById(t)
    }, c = (t = document, i = function (e) {
        if ("object" != typeof window.google || !window.google.maps) return "object" == typeof window.console && window.console.error && console.error("Google Maps API is required. Please register the following JavaScript library https://maps.googleapis.com/maps/api/js."), function () {
        };
        if (!this) return new i(e);
        e.zoom = e.zoom || 15, e.mapType = e.mapType || "roadmap";
        var s, o = function (t, e) {
                return void 0 === t ? e : t
            }, r = this,
            a = ["bounds_changed", "center_changed", "click", "dblclick", "drag", "dragend", "dragstart", "idle", "maptypeid_changed", "projection_changed", "resize", "tilesloaded", "zoom_changed"],
            l = ["mousemove", "mouseout", "mouseover"],
            c = ["el", "lat", "lng", "mapType", "width", "height", "markerClusterer", "enableNewStyle"],
            p = e.el || e.div, d = e.markerClusterer, u = google.maps.MapTypeId[e.mapType.toUpperCase()],
            g = new google.maps.LatLng(e.lat, e.lng), f = o(e.zoomControl, !0),
            m = e.zoomControlOpt || {style: "DEFAULT", position: "TOP_LEFT"}, v = m.style || "DEFAULT",
            y = m.position || "TOP_LEFT", w = o(e.panControl, !0), b = o(e.mapTypeControl, !0),
            _ = o(e.scaleControl, !0), C = o(e.streetViewControl, !0), x = o(x, !0), k = {},
            T = {zoom: this.zoom, center: g, mapTypeId: u}, E = {
                panControl: w,
                zoomControl: f,
                zoomControlOptions: {style: google.maps.ZoomControlStyle[v], position: google.maps.ControlPosition[y]},
                mapTypeControl: b,
                scaleControl: _,
                streetViewControl: C,
                overviewMapControl: x
            };
        if ("string" == typeof e.el || "string" == typeof e.div ? p.indexOf("#") > -1 ? this.el = h(p, e.context) : this.el = function (t, e) {
            var i = t.replace(".", "");
            return "jQuery" in this && e ? $("." + i, e)[0] : document.getElementsByClassName(i)[0]
        }.apply(this, [p, e.context]) : this.el = p, void 0 === this.el || null === this.el) throw"No element defined.";
        for (window.context_menu = window.context_menu || {}, window.context_menu[r.el.id] = {}, this.controls = [], this.overlays = [], this.layers = [], this.singleLayers = {}, this.markers = [], this.polylines = [], this.routes = [], this.polygons = [], this.infoWindow = null, this.overlay_el = null, this.zoom = e.zoom, this.registered_events = {}, this.el.style.width = e.width || this.el.scrollWidth || this.el.offsetWidth, this.el.style.height = e.height || this.el.scrollHeight || this.el.offsetHeight, google.maps.visualRefresh = e.enableNewStyle, s = 0; s < c.length; s++) delete e[c[s]];
        for (1 != e.disableDefaultUI && (T = n(T, E)), k = n(T, e), s = 0; s < a.length; s++) delete k[a[s]];
        for (s = 0; s < l.length; s++) delete k[l[s]];
        this.map = new google.maps.Map(this.el, k), d && (this.markerClusterer = d.apply(this, [this.map]));
        var S = function (t, e) {
            var i = "", s = window.context_menu[r.el.id][t];
            for (var o in s) if (s.hasOwnProperty(o)) {
                var n = s[o];
                i += '<li><a id="' + t + "_" + o + '" href="#">' + n.title + "</a></li>"
            }
            if (h("gmaps_context_menu")) {
                var a = h("gmaps_context_menu");
                a.innerHTML = i;
                var l = a.getElementsByTagName("a"), c = l.length;
                for (o = 0; o < c; o++) {
                    var p = l[o];
                    google.maps.event.clearListeners(p, "click"), google.maps.event.addDomListenerOnce(p, "click", function (i) {
                        i.preventDefault(), s[this.id.replace(t + "_", "")].action.apply(r, [e]), r.hideContextMenu()
                    }, !1)
                }
                var d = function (t) {
                    var e = 0, i = 0;
                    if (t.offsetParent) do {
                        e += t.offsetLeft, i += t.offsetTop
                    } while (t = t.offsetParent);
                    return [e, i]
                }.apply(this, [r.el]), u = d[0] + e.pixel.x - 15, g = d[1] + e.pixel.y - 15;
                a.style.left = u + "px", a.style.top = g + "px"
            }
        };
        this.buildContextMenu = function (t, e) {
            if ("marker" === t) {
                e.pixel = {};
                var i = new google.maps.OverlayView;
                i.setMap(r.map), i.draw = function () {
                    var s = i.getProjection(), o = e.marker.getPosition();
                    e.pixel = s.fromLatLngToContainerPixel(o), S(t, e)
                }
            } else S(t, e);
            var s = h("gmaps_context_menu");
            setTimeout(function () {
                s.style.display = "block"
            }, 0)
        }, this.setContextMenu = function (e) {
            window.context_menu[r.el.id][e.control] = {};
            var i, s = t.createElement("ul");
            for (i in e.options) if (e.options.hasOwnProperty(i)) {
                var o = e.options[i];
                window.context_menu[r.el.id][e.control][o.name] = {title: o.title, action: o.action}
            }
            s.id = "gmaps_context_menu", s.style.display = "none", s.style.position = "absolute", s.style.minWidth = "100px", s.style.background = "white", s.style.listStyle = "none", s.style.padding = "8px", s.style.boxShadow = "2px 2px 6px #ccc", h("gmaps_context_menu") || t.body.appendChild(s);
            var n = h("gmaps_context_menu");
            google.maps.event.addDomListener(n, "mouseout", function (t) {
                t.relatedTarget && this.contains(t.relatedTarget) || window.setTimeout(function () {
                    n.style.display = "none"
                }, 400)
            }, !1)
        }, this.hideContextMenu = function () {
            var t = h("gmaps_context_menu");
            t && (t.style.display = "none")
        };
        var L = function (t, i) {
            google.maps.event.addListener(t, i, function (t) {
                null == t && (t = this), e[i].apply(this, [t]), r.hideContextMenu()
            })
        };
        google.maps.event.addListener(this.map, "zoom_changed", this.hideContextMenu);
        for (var O = 0; O < a.length; O++) {
            (P = a[O]) in e && L(this.map, P)
        }
        for (O = 0; O < l.length; O++) {
            var P;
            (P = l[O]) in e && L(this.map, P)
        }
        google.maps.event.addListener(this.map, "rightclick", function (t) {
            e.rightclick && e.rightclick.apply(this, [t]), null != window.context_menu[r.el.id].map && r.buildContextMenu("map", t)
        }), this.refresh = function () {
            google.maps.event.trigger(this.map, "resize")
        }, this.fitZoom = function () {
            var t, e = [], i = this.markers.length;
            for (t = 0; t < i; t++) "boolean" == typeof this.markers[t].visible && this.markers[t].visible && e.push(this.markers[t].getPosition());
            this.fitLatLngBounds(e)
        }, this.fitLatLngBounds = function (t) {
            var e, i = t.length, s = new google.maps.LatLngBounds;
            for (e = 0; e < i; e++) s.extend(t[e]);
            this.map.fitBounds(s)
        }, this.setCenter = function (t, e, i) {
            this.map.panTo(new google.maps.LatLng(t, e)), i && i()
        }, this.getElement = function () {
            return this.el
        }, this.zoomIn = function (t) {
            t = t || 1, this.zoom = this.map.getZoom() + t, this.map.setZoom(this.zoom)
        }, this.zoomOut = function (t) {
            t = t || 1, this.zoom = this.map.getZoom() - t, this.map.setZoom(this.zoom)
        };
        var D, M = [];
        for (D in this.map) "function" != typeof this.map[D] || this[D] || M.push(D);
        for (s = 0; s < M.length; s++) !function (t, e, i) {
            t[i] = function () {
                return e[i].apply(e, arguments)
            }
        }(this, this.map, M[s])
    });
    return c.prototype.createControl = function (t) {
        var e = document.createElement("div");
        for (var i in e.style.cursor = "pointer", !0 !== t.disableDefaultStyles && (e.style.fontFamily = "Roboto, Arial, sans-serif", e.style.fontSize = "11px", e.style.boxShadow = "rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px"), t.style) e.style[i] = t.style[i];
        for (var s in t.id && (e.id = t.id), t.title && (e.title = t.title), t.classes && (e.className = t.classes), t.content && ("string" == typeof t.content ? e.innerHTML = t.content : t.content instanceof HTMLElement && e.appendChild(t.content)), t.position && (e.position = google.maps.ControlPosition[t.position.toUpperCase()]), t.events) !function (e, i) {
            google.maps.event.addDomListener(e, i, function () {
                t.events[i].apply(this, [this])
            })
        }(e, s);
        return e.index = 1, e
    }, c.prototype.addControl = function (t) {
        var e = this.createControl(t);
        return this.controls.push(e), this.map.controls[e.position].push(e), e
    }, c.prototype.removeControl = function (t) {
        var e, i = null;
        for (e = 0; e < this.controls.length; e++) this.controls[e] == t && (i = this.controls[e].position, this.controls.splice(e, 1));
        if (i) for (e = 0; e < this.map.controls.length; e++) {
            var s = this.map.controls[t.position];
            if (s.getAt(e) == t) {
                s.removeAt(e);
                break
            }
        }
        return t
    }, c.prototype.createMarker = function (t) {
        if (null == t.lat && null == t.lng && null == t.position) throw"No latitude or longitude defined.";
        var e = this, i = t.details, s = t.fences, o = t.outside,
            r = {position: new google.maps.LatLng(t.lat, t.lng), map: null}, a = n(r, t);
        delete a.lat, delete a.lng, delete a.fences, delete a.outside;
        var l = new google.maps.Marker(a);
        if (l.fences = s, t.infoWindow) {
            l.infoWindow = new google.maps.InfoWindow(t.infoWindow);
            for (var h = ["closeclick", "content_changed", "domready", "position_changed", "zindex_changed"], c = 0; c < h.length; c++) !function (e, i) {
                t.infoWindow[i] && google.maps.event.addListener(e, i, function (e) {
                    t.infoWindow[i].apply(this, [e])
                })
            }(l.infoWindow, h[c])
        }
        var p = ["animation_changed", "clickable_changed", "cursor_changed", "draggable_changed", "flat_changed", "icon_changed", "position_changed", "shadow_changed", "shape_changed", "title_changed", "visible_changed", "zindex_changed"],
            d = ["dblclick", "drag", "dragend", "dragstart", "mousedown", "mouseout", "mouseover", "mouseup"];
        for (c = 0; c < p.length; c++) !function (e, i) {
            t[i] && google.maps.event.addListener(e, i, function () {
                t[i].apply(this, [this])
            })
        }(l, p[c]);
        for (c = 0; c < d.length; c++) !function (e, i, s) {
            t[s] && google.maps.event.addListener(i, s, function (i) {
                i.pixel || (i.pixel = e.getProjection().fromLatLngToPoint(i.latLng)), t[s].apply(this, [i])
            })
        }(this.map, l, d[c]);
        return google.maps.event.addListener(l, "click", function () {
            this.details = i, t.click && t.click.apply(this, [this]), l.infoWindow && (e.hideInfoWindows(), l.infoWindow.open(e.map, l))
        }), google.maps.event.addListener(l, "rightclick", function (i) {
            i.marker = this, t.rightclick && t.rightclick.apply(this, [i]), null != window.context_menu[e.el.id].marker && e.buildContextMenu("marker", i)
        }), l.fences && google.maps.event.addListener(l, "dragend", function () {
            e.checkMarkerGeofence(l, function (t, e) {
                o(t, e)
            })
        }), l
    }, c.prototype.addMarker = function (t) {
        var e;
        if (t.hasOwnProperty("gm_accessors_")) e = t; else {
            if (!(t.hasOwnProperty("lat") && t.hasOwnProperty("lng") || t.position)) throw"No latitude or longitude defined.";
            e = this.createMarker(t)
        }
        return e.setMap(this.map), this.markerClusterer && this.markerClusterer.addMarker(e), this.markers.push(e), c.fire("marker_added", e, this), e
    }, c.prototype.addMarkers = function (t) {
        for (var e, i = 0; e = t[i]; i++) this.addMarker(e);
        return this.markers
    }, c.prototype.hideInfoWindows = function () {
        for (var t, e = 0; t = this.markers[e]; e++) t.infoWindow && t.infoWindow.close()
    }, c.prototype.removeMarker = function (t) {
        for (var e = 0; e < this.markers.length; e++) if (this.markers[e] === t) {
            this.markers[e].setMap(null), this.markers.splice(e, 1), this.markerClusterer && this.markerClusterer.removeMarker(t), c.fire("marker_removed", t, this);
            break
        }
        return t
    }, c.prototype.removeMarkers = function (t) {
        var e = [];
        if (void 0 === t) {
            for (var i = 0; i < this.markers.length; i++) {
                (o = this.markers[i]).setMap(null), c.fire("marker_removed", o, this)
            }
            this.markerClusterer && this.markerClusterer.clearMarkers && this.markerClusterer.clearMarkers(), this.markers = e
        } else {
            for (i = 0; i < t.length; i++) {
                var s = this.markers.indexOf(t[i]);
                if (s > -1) (o = this.markers[s]).setMap(null), this.markerClusterer && this.markerClusterer.removeMarker(o), c.fire("marker_removed", o, this)
            }
            for (i = 0; i < this.markers.length; i++) {
                var o;
                null != (o = this.markers[i]).getMap() && e.push(o)
            }
            this.markers = e
        }
    }, c.prototype.drawOverlay = function (t) {
        var e = new google.maps.OverlayView, i = !0;
        return e.setMap(this.map), null != t.auto_show && (i = t.auto_show), e.onAdd = function () {
            var i = document.createElement("div");
            i.style.borderStyle = "none", i.style.borderWidth = "0px", i.style.position = "absolute", i.style.zIndex = 100, i.innerHTML = t.content, e.el = i, t.layer || (t.layer = "overlayLayer");
            var s, o, n = this.getPanes(), r = ["contextmenu", "DOMMouseScroll", "dblclick", "mousedown"];
            n[t.layer].appendChild(i);
            for (var a = 0; a < r.length; a++) s = i, o = r[a], google.maps.event.addDomListener(s, o, function (t) {
                -1 != navigator.userAgent.toLowerCase().indexOf("msie") && document.all ? (t.cancelBubble = !0, t.returnValue = !1) : t.stopPropagation()
            });
            t.click && (n.overlayMouseTarget.appendChild(e.el), google.maps.event.addDomListener(e.el, "click", function () {
                t.click.apply(e, [e])
            })), google.maps.event.trigger(this, "ready")
        }, e.draw = function () {
            var s = this.getProjection().fromLatLngToDivPixel(new google.maps.LatLng(t.lat, t.lng));
            t.horizontalOffset = t.horizontalOffset || 0, t.verticalOffset = t.verticalOffset || 0;
            var o = e.el, n = o.children[0], r = n.clientHeight, a = n.clientWidth;
            switch (t.verticalAlign) {
                case"top":
                    o.style.top = s.y - r + t.verticalOffset + "px";
                    break;
                default:
                case"middle":
                    o.style.top = s.y - r / 2 + t.verticalOffset + "px";
                    break;
                case"bottom":
                    o.style.top = s.y + t.verticalOffset + "px"
            }
            switch (t.horizontalAlign) {
                case"left":
                    o.style.left = s.x - a + t.horizontalOffset + "px";
                    break;
                default:
                case"center":
                    o.style.left = s.x - a / 2 + t.horizontalOffset + "px";
                    break;
                case"right":
                    o.style.left = s.x + t.horizontalOffset + "px"
            }
            o.style.display = i ? "block" : "none", i || t.show.apply(this, [o])
        }, e.onRemove = function () {
            var i = e.el;
            t.remove ? t.remove.apply(this, [i]) : (e.el.parentNode.removeChild(e.el), e.el = null)
        }, this.overlays.push(e), e
    }, c.prototype.removeOverlay = function (t) {
        for (var e = 0; e < this.overlays.length; e++) if (this.overlays[e] === t) {
            this.overlays[e].setMap(null), this.overlays.splice(e, 1);
            break
        }
    }, c.prototype.removeOverlays = function () {
        for (var t, e = 0; t = this.overlays[e]; e++) t.setMap(null);
        this.overlays = []
    }, c.prototype.drawPolyline = function (t) {
        var e = [], i = t.path;
        if (i.length) if (void 0 === i[0][0]) e = i; else for (var s, o = 0; s = i[o]; o++) e.push(new google.maps.LatLng(s[0], s[1]));
        var n = {
            map: this.map,
            path: e,
            strokeColor: t.strokeColor,
            strokeOpacity: t.strokeOpacity,
            strokeWeight: t.strokeWeight,
            geodesic: t.geodesic,
            clickable: !0,
            editable: !1,
            visible: !0
        };
        t.hasOwnProperty("clickable") && (n.clickable = t.clickable), t.hasOwnProperty("editable") && (n.editable = t.editable), t.hasOwnProperty("icons") && (n.icons = t.icons), t.hasOwnProperty("zIndex") && (n.zIndex = t.zIndex);
        for (var r = new google.maps.Polyline(n), a = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], l = 0; l < a.length; l++) !function (e, i) {
            t[i] && google.maps.event.addListener(e, i, function (e) {
                t[i].apply(this, [e])
            })
        }(r, a[l]);
        return this.polylines.push(r), c.fire("polyline_added", r, this), r
    }, c.prototype.removePolyline = function (t) {
        for (var e = 0; e < this.polylines.length; e++) if (this.polylines[e] === t) {
            this.polylines[e].setMap(null), this.polylines.splice(e, 1), c.fire("polyline_removed", t, this);
            break
        }
    }, c.prototype.removePolylines = function () {
        for (var t, e = 0; t = this.polylines[e]; e++) t.setMap(null);
        this.polylines = []
    }, c.prototype.drawCircle = function (t) {
        delete(t = n({map: this.map, center: new google.maps.LatLng(t.lat, t.lng)}, t)).lat, delete t.lng;
        for (var e = new google.maps.Circle(t), i = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], s = 0; s < i.length; s++) !function (e, i) {
            t[i] && google.maps.event.addListener(e, i, function (e) {
                t[i].apply(this, [e])
            })
        }(e, i[s]);
        return this.polygons.push(e), e
    }, c.prototype.drawRectangle = function (t) {
        t = n({map: this.map}, t);
        var e = new google.maps.LatLngBounds(new google.maps.LatLng(t.bounds[0][0], t.bounds[0][1]), new google.maps.LatLng(t.bounds[1][0], t.bounds[1][1]));
        t.bounds = e;
        for (var i = new google.maps.Rectangle(t), s = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], o = 0; o < s.length; o++) !function (e, i) {
            t[i] && google.maps.event.addListener(e, i, function (e) {
                t[i].apply(this, [e])
            })
        }(i, s[o]);
        return this.polygons.push(i), i
    }, c.prototype.drawPolygon = function (t) {
        var e = !1;
        t.hasOwnProperty("useGeoJSON") && (e = t.useGeoJSON), delete t.useGeoJSON, t = n({map: this.map}, t), 0 == e && (t.paths = [t.paths.slice(0)]), t.paths.length > 0 && t.paths[0].length > 0 && (t.paths = a(r(t.paths, l, e)));
        for (var i = new google.maps.Polygon(t), s = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], o = 0; o < s.length; o++) !function (e, i) {
            t[i] && google.maps.event.addListener(e, i, function (e) {
                t[i].apply(this, [e])
            })
        }(i, s[o]);
        return this.polygons.push(i), c.fire("polygon_added", i, this), i
    }, c.prototype.removePolygon = function (t) {
        for (var e = 0; e < this.polygons.length; e++) if (this.polygons[e] === t) {
            this.polygons[e].setMap(null), this.polygons.splice(e, 1), c.fire("polygon_removed", t, this);
            break
        }
    }, c.prototype.removePolygons = function () {
        for (var t, e = 0; t = this.polygons[e]; e++) t.setMap(null);
        this.polygons = []
    }, c.prototype.getFromFusionTables = function (t) {
        var e = t.events;
        delete t.events;
        var i = t, s = new google.maps.FusionTablesLayer(i);
        for (var o in e) !function (t, i) {
            google.maps.event.addListener(t, i, function (t) {
                e[i].apply(this, [t])
            })
        }(s, o);
        return this.layers.push(s), s
    }, c.prototype.loadFromFusionTables = function (t) {
        var e = this.getFromFusionTables(t);
        return e.setMap(this.map), e
    }, c.prototype.getFromKML = function (t) {
        var e = t.url, i = t.events;
        delete t.url, delete t.events;
        var s = t, o = new google.maps.KmlLayer(e, s);
        for (var n in i) !function (t, e) {
            google.maps.event.addListener(t, e, function (t) {
                i[e].apply(this, [t])
            })
        }(o, n);
        return this.layers.push(o), o
    }, c.prototype.loadFromKML = function (t) {
        var e = this.getFromKML(t);
        return e.setMap(this.map), e
    }, c.prototype.addLayer = function (t, e) {
        var i;
        switch (e = e || {}, t) {
            case"weather":
                this.singleLayers.weather = i = new google.maps.weather.WeatherLayer;
                break;
            case"clouds":
                this.singleLayers.clouds = i = new google.maps.weather.CloudLayer;
                break;
            case"traffic":
                this.singleLayers.traffic = i = new google.maps.TrafficLayer;
                break;
            case"transit":
                this.singleLayers.transit = i = new google.maps.TransitLayer;
                break;
            case"bicycling":
                this.singleLayers.bicycling = i = new google.maps.BicyclingLayer;
                break;
            case"panoramio":
                this.singleLayers.panoramio = i = new google.maps.panoramio.PanoramioLayer, i.setTag(e.filter), delete e.filter, e.click && google.maps.event.addListener(i, "click", function (t) {
                    e.click(t), delete e.click
                });
                break;
            case"places":
                if (this.singleLayers.places = i = new google.maps.places.PlacesService(this.map), e.search || e.nearbySearch || e.radarSearch) {
                    var s = {
                        bounds: e.bounds || null,
                        keyword: e.keyword || null,
                        location: e.location || null,
                        name: e.name || null,
                        radius: e.radius || null,
                        rankBy: e.rankBy || null,
                        types: e.types || null
                    };
                    e.radarSearch && i.radarSearch(s, e.radarSearch), e.search && i.search(s, e.search), e.nearbySearch && i.nearbySearch(s, e.nearbySearch)
                }
                if (e.textSearch) {
                    var o = {
                        bounds: e.bounds || null,
                        location: e.location || null,
                        query: e.query || null,
                        radius: e.radius || null
                    };
                    i.textSearch(o, e.textSearch)
                }
        }
        if (void 0 !== i) return "function" == typeof i.setOptions && i.setOptions(e), "function" == typeof i.setMap && i.setMap(this.map), i
    }, c.prototype.removeLayer = function (t) {
        if ("string" == typeof t && void 0 !== this.singleLayers[t]) this.singleLayers[t].setMap(null), delete this.singleLayers[t]; else for (var e = 0; e < this.layers.length; e++) if (this.layers[e] === t) {
            this.layers[e].setMap(null), this.layers.splice(e, 1);
            break
        }
    }, c.prototype.getRoutes = function (t) {
        switch (t.travelMode) {
            case"bicycling":
                s = google.maps.TravelMode.BICYCLING;
                break;
            case"transit":
                s = google.maps.TravelMode.TRANSIT;
                break;
            case"driving":
                s = google.maps.TravelMode.DRIVING;
                break;
            default:
                s = google.maps.TravelMode.WALKING
        }
        o = "imperial" === t.unitSystem ? google.maps.UnitSystem.IMPERIAL : google.maps.UnitSystem.METRIC;
        var e = n({avoidHighways: !1, avoidTolls: !1, optimizeWaypoints: !1, waypoints: []}, t);
        e.origin = /string/.test(typeof t.origin) ? t.origin : new google.maps.LatLng(t.origin[0], t.origin[1]), e.destination = /string/.test(typeof t.destination) ? t.destination : new google.maps.LatLng(t.destination[0], t.destination[1]), e.travelMode = s, e.unitSystem = o, delete e.callback, delete e.error;
        var i = [];
        (new google.maps.DirectionsService).route(e, function (e, s) {
            if (s === google.maps.DirectionsStatus.OK) {
                for (var o in e.routes) e.routes.hasOwnProperty(o) && i.push(e.routes[o]);
                t.callback && t.callback(i, e, s)
            } else t.error && t.error(e, s)
        })
    }, c.prototype.removeRoutes = function () {
        this.routes.length = 0
    }, c.prototype.getElevations = function (t) {
        (t = n({
            locations: [],
            path: !1,
            samples: 256
        }, t)).locations.length > 0 && t.locations[0].length > 0 && (t.locations = a(r([t.locations], l, !1)));
        var e = t.callback;
        delete t.callback;
        var i = new google.maps.ElevationService;
        if (t.path) {
            var s = {path: t.locations, samples: t.samples};
            i.getElevationAlongPath(s, function (t, i) {
                e && "function" == typeof e && e(t, i)
            })
        } else delete t.path, delete t.samples, i.getElevationForLocations(t, function (t, i) {
            e && "function" == typeof e && e(t, i)
        })
    }, c.prototype.cleanRoute = c.prototype.removePolylines, c.prototype.renderRoute = function (t, e) {
        var i, s = "string" == typeof e.panel ? document.getElementById(e.panel.replace("#", "")) : e.panel;
        e.panel = s, e = n({map: this.map}, e), i = new google.maps.DirectionsRenderer(e), this.getRoutes({
            origin: t.origin,
            destination: t.destination,
            travelMode: t.travelMode,
            waypoints: t.waypoints,
            unitSystem: t.unitSystem,
            error: t.error,
            avoidHighways: t.avoidHighways,
            avoidTolls: t.avoidTolls,
            optimizeWaypoints: t.optimizeWaypoints,
            callback: function (t, e, s) {
                s === google.maps.DirectionsStatus.OK && i.setDirections(e)
            }
        })
    }, c.prototype.drawRoute = function (t) {
        var e = this;
        this.getRoutes({
            origin: t.origin,
            destination: t.destination,
            travelMode: t.travelMode,
            waypoints: t.waypoints,
            unitSystem: t.unitSystem,
            error: t.error,
            avoidHighways: t.avoidHighways,
            avoidTolls: t.avoidTolls,
            optimizeWaypoints: t.optimizeWaypoints,
            callback: function (i) {
                if (i.length > 0) {
                    var s = {
                        path: i[i.length - 1].overview_path,
                        strokeColor: t.strokeColor,
                        strokeOpacity: t.strokeOpacity,
                        strokeWeight: t.strokeWeight
                    };
                    t.hasOwnProperty("icons") && (s.icons = t.icons), e.drawPolyline(s), t.callback && t.callback(i[i.length - 1])
                }
            }
        })
    }, c.prototype.travelRoute = function (t) {
        if (t.origin && t.destination) this.getRoutes({
            origin: t.origin,
            destination: t.destination,
            travelMode: t.travelMode,
            waypoints: t.waypoints,
            unitSystem: t.unitSystem,
            error: t.error,
            callback: function (e) {
                if (e.length > 0 && t.start && t.start(e[e.length - 1]), e.length > 0 && t.step) {
                    var i = e[e.length - 1];
                    if (i.legs.length > 0) for (var s, o = i.legs[0].steps, n = 0; s = o[n]; n++) s.step_number = n, t.step(s, i.legs[0].steps.length - 1)
                }
                e.length > 0 && t.end && t.end(e[e.length - 1])
            }
        }); else if (t.route && t.route.legs.length > 0) for (var e, i = t.route.legs[0].steps, s = 0; e = i[s]; s++) e.step_number = s, t.step(e)
    }, c.prototype.drawSteppedRoute = function (t) {
        var e = this;
        if (t.origin && t.destination) this.getRoutes({
            origin: t.origin,
            destination: t.destination,
            travelMode: t.travelMode,
            waypoints: t.waypoints,
            error: t.error,
            callback: function (i) {
                if (i.length > 0 && t.start && t.start(i[i.length - 1]), i.length > 0 && t.step) {
                    var s = i[i.length - 1];
                    if (s.legs.length > 0) for (var o, n = s.legs[0].steps, r = 0; o = n[r]; r++) {
                        o.step_number = r;
                        var a = {
                            path: o.path,
                            strokeColor: t.strokeColor,
                            strokeOpacity: t.strokeOpacity,
                            strokeWeight: t.strokeWeight
                        };
                        t.hasOwnProperty("icons") && (a.icons = t.icons), e.drawPolyline(a), t.step(o, s.legs[0].steps.length - 1)
                    }
                }
                i.length > 0 && t.end && t.end(i[i.length - 1])
            }
        }); else if (t.route && t.route.legs.length > 0) for (var i, s = t.route.legs[0].steps, o = 0; i = s[o]; o++) {
            i.step_number = o;
            var n = {
                path: i.path,
                strokeColor: t.strokeColor,
                strokeOpacity: t.strokeOpacity,
                strokeWeight: t.strokeWeight
            };
            t.hasOwnProperty("icons") && (n.icons = t.icons), e.drawPolyline(n), t.step(i)
        }
    }, c.Route = function (t) {
        this.origin = t.origin, this.destination = t.destination, this.waypoints = t.waypoints, this.map = t.map, this.route = t.route, this.step_count = 0, this.steps = this.route.legs[0].steps, this.steps_length = this.steps.length;
        var e = {
            path: new google.maps.MVCArray,
            strokeColor: t.strokeColor,
            strokeOpacity: t.strokeOpacity,
            strokeWeight: t.strokeWeight
        };
        t.hasOwnProperty("icons") && (e.icons = t.icons), this.polyline = this.map.drawPolyline(e).getPath()
    }, c.Route.prototype.getRoute = function (t) {
        var i = this;
        this.map.getRoutes({
            origin: this.origin,
            destination: this.destination,
            travelMode: t.travelMode,
            waypoints: this.waypoints || [],
            error: t.error,
            callback: function () {
                i.route = e[0], t.callback && t.callback.call(i)
            }
        })
    }, c.Route.prototype.back = function () {
        if (this.step_count > 0) {
            this.step_count--;
            var t = this.route.legs[0].steps[this.step_count].path;
            for (var e in t) t.hasOwnProperty(e) && this.polyline.pop()
        }
    }, c.Route.prototype.forward = function () {
        if (this.step_count < this.steps_length) {
            var t = this.route.legs[0].steps[this.step_count].path;
            for (var e in t) t.hasOwnProperty(e) && this.polyline.push(t[e]);
            this.step_count++
        }
    }, c.prototype.checkGeofence = function (t, e, i) {
        return i.containsLatLng(new google.maps.LatLng(t, e))
    }, c.prototype.checkMarkerGeofence = function (t, e) {
        if (t.fences) for (var i, s = 0; i = t.fences[s]; s++) {
            var o = t.getPosition();
            this.checkGeofence(o.lat(), o.lng(), i) || e(t, i)
        }
    }, c.prototype.toImage = function (t) {
        t = t || {};
        var e = {};
        if (e.size = t.size || [this.el.clientWidth, this.el.clientHeight], e.lat = this.getCenter().lat(), e.lng = this.getCenter().lng(), this.markers.length > 0) {
            e.markers = [];
            for (var i = 0; i < this.markers.length; i++) e.markers.push({
                lat: this.markers[i].getPosition().lat(),
                lng: this.markers[i].getPosition().lng()
            })
        }
        if (this.polylines.length > 0) {
            var s = this.polylines[0];
            e.polyline = {}, e.polyline.path = google.maps.geometry.encoding.encodePath(s.getPath()), e.polyline.strokeColor = s.strokeColor, e.polyline.strokeOpacity = s.strokeOpacity, e.polyline.strokeWeight = s.strokeWeight
        }
        return c.staticMapURL(e)
    }, c.staticMapURL = function (t) {
        var e, i = [],
            s = ("file:" === location.protocol ? "http:" : location.protocol) + "//maps.googleapis.com/maps/api/staticmap";
        t.url && (s = t.url, delete t.url), s += "?";
        var o = t.markers;
        delete t.markers, !o && t.marker && (o = [t.marker], delete t.marker);
        var n = t.styles;
        delete t.styles;
        var r = t.polyline;
        if (delete t.polyline, t.center) i.push("center=" + t.center), delete t.center; else if (t.address) i.push("center=" + t.address), delete t.address; else if (t.lat) i.push(["center=", t.lat, ",", t.lng].join("")), delete t.lat, delete t.lng; else if (t.visible) {
            var a = encodeURI(t.visible.join("|"));
            i.push("visible=" + a)
        }
        var l = t.size;
        l ? (l.join && (l = l.join("x")), delete t.size) : l = "630x300", i.push("size=" + l), t.zoom || !1 === t.zoom || (t.zoom = 15);
        var h = !t.hasOwnProperty("sensor") || !!t.sensor;
        for (var c in delete t.sensor, i.push("sensor=" + h), t) t.hasOwnProperty(c) && i.push(c + "=" + t[c]);
        if (o) for (var p, d, u = 0; e = o[u]; u++) {
            for (var c in p = [], e.size && "normal" !== e.size ? (p.push("size:" + e.size), delete e.size) : e.icon && (p.push("icon:" + encodeURI(e.icon)), delete e.icon), e.color && (p.push("color:" + e.color.replace("#", "0x")), delete e.color), e.label && (p.push("label:" + e.label[0].toUpperCase()), delete e.label), d = e.address ? e.address : e.lat + "," + e.lng, delete e.address, delete e.lat, delete e.lng, e) e.hasOwnProperty(c) && p.push(c + ":" + e[c]);
            p.length || 0 === u ? (p.push(d), p = p.join("|"), i.push("markers=" + encodeURI(p))) : (p = i.pop() + encodeURI("|" + d), i.push(p))
        }
        if (n) for (u = 0; u < n.length; u++) {
            var g = [];
            n[u].featureType && g.push("feature:" + n[u].featureType.toLowerCase()), n[u].elementType && g.push("element:" + n[u].elementType.toLowerCase());
            for (var f = 0; f < n[u].stylers.length; f++) for (var m in n[u].stylers[f]) {
                var v = n[u].stylers[f][m];
                "hue" != m && "color" != m || (v = "0x" + v.substring(1)), g.push(m + ":" + v)
            }
            var y = g.join("|");
            "" != y && i.push("style=" + y)
        }

        function w(t, e) {
            if ("#" === t[0] && (t = t.replace("#", "0x"), e)) {
                if (e = parseFloat(e), 0 === (e = Math.min(1, Math.max(e, 0)))) return "0x00000000";
                1 === (e = (255 * e).toString(16)).length && (e += e), t = t.slice(0, 8) + e
            }
            return t
        }

        if (r) {
            if (e = r, r = [], e.strokeWeight && r.push("weight:" + parseInt(e.strokeWeight, 10)), e.strokeColor) {
                var b = w(e.strokeColor, e.strokeOpacity);
                r.push("color:" + b)
            }
            if (e.fillColor) {
                var _ = w(e.fillColor, e.fillOpacity);
                r.push("fillcolor:" + _)
            }
            var C = e.path;
            if (C.join) {
                var x;
                for (f = 0; x = C[f]; f++) r.push(x.join(","))
            } else r.push("enc:" + C);
            r = r.join("|"), i.push("path=" + encodeURI(r))
        }
        var k = window.devicePixelRatio || 1;
        return i.push("scale=" + k), s + (i = i.join("&"))
    }, c.prototype.addMapType = function (t, e) {
        if (!e.hasOwnProperty("getTileUrl") || "function" != typeof e.getTileUrl) throw"'getTileUrl' function required.";
        e.tileSize = e.tileSize || new google.maps.Size(256, 256);
        var i = new google.maps.ImageMapType(e);
        this.map.mapTypes.set(t, i)
    }, c.prototype.addOverlayMapType = function (t) {
        if (!t.hasOwnProperty("getTile") || "function" != typeof t.getTile) throw"'getTile' function required.";
        var e = t.index;
        delete t.index, this.map.overlayMapTypes.insertAt(e, t)
    }, c.prototype.removeOverlayMapType = function (t) {
        this.map.overlayMapTypes.removeAt(t)
    }, c.prototype.addStyle = function (t) {
        var e = new google.maps.StyledMapType(t.styles, {name: t.styledMapName});
        this.map.mapTypes.set(t.mapTypeId, e)
    }, c.prototype.setStyle = function (t) {
        this.map.setMapTypeId(t)
    }, c.prototype.createPanorama = function (t) {
        return t.hasOwnProperty("lat") && t.hasOwnProperty("lng") || (t.lat = this.getCenter().lat(), t.lng = this.getCenter().lng()), this.panorama = c.createPanorama(t), this.map.setStreetView(this.panorama), this.panorama
    }, c.createPanorama = function (t) {
        var e = h(t.el, t.context);
        t.position = new google.maps.LatLng(t.lat, t.lng), delete t.el, delete t.context, delete t.lat, delete t.lng;
        for (var i = ["closeclick", "links_changed", "pano_changed", "position_changed", "pov_changed", "resize", "visible_changed"], s = n({visible: !0}, t), o = 0; o < i.length; o++) delete s[i[o]];
        var r = new google.maps.StreetViewPanorama(e, s);
        for (o = 0; o < i.length; o++) !function (e, i) {
            t[i] && google.maps.event.addListener(e, i, function () {
                t[i].apply(this)
            })
        }(r, i[o]);
        return r
    }, c.prototype.on = function (t, e) {
        return c.on(t, this, e)
    }, c.prototype.off = function (t) {
        c.off(t, this)
    }, c.prototype.once = function (t, e) {
        return c.once(t, this, e)
    }, c.custom_events = ["marker_added", "marker_removed", "polyline_added", "polyline_removed", "polygon_added", "polygon_removed", "geolocated", "geolocation_failed"], c.on = function (t, e, i) {
        if (-1 == c.custom_events.indexOf(t)) return e instanceof c && (e = e.map), google.maps.event.addListener(e, t, i);
        var s = {handler: i, eventName: t};
        return e.registered_events[t] = e.registered_events[t] || [], e.registered_events[t].push(s), s
    }, c.off = function (t, e) {
        -1 == c.custom_events.indexOf(t) ? (e instanceof c && (e = e.map), google.maps.event.clearListeners(e, t)) : e.registered_events[t] = []
    }, c.once = function (t, e, i) {
        if (-1 == c.custom_events.indexOf(t)) return e instanceof c && (e = e.map), google.maps.event.addListenerOnce(e, t, i)
    }, c.fire = function (t, e, i) {
        if (-1 == c.custom_events.indexOf(t)) google.maps.event.trigger(e, t, Array.prototype.slice.apply(arguments).slice(2)); else if (t in i.registered_events) for (var s = i.registered_events[t], o = 0; o < s.length; o++) n = s[o].handler, r = i, a = e, n.apply(r, [a]);
        var n, r, a
    }, c.geolocate = function (t) {
        var e = t.always || t.complete;
        navigator.geolocation ? navigator.geolocation.getCurrentPosition(function (i) {
            t.success(i), e && e()
        }, function (i) {
            t.error(i), e && e()
        }, t.options) : (t.not_supported(), e && e())
    }, c.geocode = function (t) {
        this.geocoder = new google.maps.Geocoder;
        var e = t.callback;
        t.hasOwnProperty("lat") && t.hasOwnProperty("lng") && (t.latLng = new google.maps.LatLng(t.lat, t.lng)), delete t.lat, delete t.lng, delete t.callback, this.geocoder.geocode(t, function (t, i) {
            e(t, i)
        })
    }, "object" == typeof window.google && window.google.maps && (google.maps.Polygon.prototype.getBounds || (google.maps.Polygon.prototype.getBounds = function (t) {
        for (var e, i = new google.maps.LatLngBounds, s = this.getPaths(), o = 0; o < s.getLength(); o++) {
            e = s.getAt(o);
            for (var n = 0; n < e.getLength(); n++) i.extend(e.getAt(n))
        }
        return i
    }), google.maps.Polygon.prototype.containsLatLng || (google.maps.Polygon.prototype.containsLatLng = function (t) {
        var e = this.getBounds();
        if (null !== e && !e.contains(t)) return !1;
        for (var i = !1, s = this.getPaths().getLength(), o = 0; o < s; o++) for (var n = this.getPaths().getAt(o), r = n.getLength(), a = r - 1, l = 0; l < r; l++) {
            var h = n.getAt(l), c = n.getAt(a);
            (h.lng() < t.lng() && c.lng() >= t.lng() || c.lng() < t.lng() && h.lng() >= t.lng()) && h.lat() + (t.lng() - h.lng()) / (c.lng() - h.lng()) * (c.lat() - h.lat()) < t.lat() && (i = !i), a = l
        }
        return i
    }), google.maps.Circle.prototype.containsLatLng || (google.maps.Circle.prototype.containsLatLng = function (t) {
        return !google.maps.geometry || google.maps.geometry.spherical.computeDistanceBetween(this.getCenter(), t) <= this.getRadius()
    }), google.maps.Rectangle.prototype.containsLatLng = function (t) {
        return this.getBounds().contains(t)
    }, google.maps.LatLngBounds.prototype.containsLatLng = function (t) {
        return this.contains(t)
    }, google.maps.Marker.prototype.setFences = function (t) {
        this.fences = t
    }, google.maps.Marker.prototype.addFence = function (t) {
        this.fences.push(t)
    }, google.maps.Marker.prototype.getId = function () {
        return this.__gm_id
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function (t) {
        if (null == this) throw new TypeError;
        var e = Object(this), i = e.length >>> 0;
        if (0 === i) return -1;
        var s = 0;
        if (arguments.length > 1 && ((s = Number(arguments[1])) != s ? s = 0 : 0 != s && s != 1 / 0 && s != -1 / 0 && (s = (s > 0 || -1) * Math.floor(Math.abs(s)))), s >= i) return -1;
        for (var o = s >= 0 ? s : Math.max(i - Math.abs(s), 0); o < i; o++) if (o in e && e[o] === t) return o;
        return -1
    }), c
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
!function (t) {
    var e = jQuery.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(), function (t) {
    t.fn.emulateTransitionEnd = function (e) {
        var i = !1, s = this;
        t(this).one("bsTransitionEnd", function () {
            i = !0
        });
        return setTimeout(function () {
            i || t(s).trigger(t.support.transition.end)
        }, e), this
    }, t(function () {
        t.support.transition = function () {
            var t = document.createElement("bootstrap"), e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
            for (var i in e) if (void 0 !== t.style[i]) return {end: e[i]};
            return !1
        }(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function (e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), function (t) {
    var e = '[data-dismiss="alert"]', i = function (i) {
        t(i).on("click", e, this.close)
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.close = function (e) {
        function s() {
            r.detach().trigger("closed.bs.alert").remove()
        }

        var o = t(this), n = o.attr("data-target");
        n || (n = (n = o.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var r = t(n);
        e && e.preventDefault(), r.length || (r = o.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s())
    };
    var s = t.fn.alert;
    t.fn.alert = function (e) {
        return this.each(function () {
            var s = t(this), o = s.data("bs.alert");
            o || s.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(s)
        })
    }, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function () {
        return t.fn.alert = s, this
    }, t(document).on("click.bs.alert.data-api", e, i.prototype.close)
}(jQuery), function (t) {
    function e(e) {
        return this.each(function () {
            var s = t(this), o = s.data("bs.button"), n = "object" == typeof e && e;
            o || s.data("bs.button", o = new i(this, n)), "toggle" == e ? o.toggle() : e && o.setState(e)
        })
    }

    var i = function (e, s) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, s), this.isLoading = !1
    };
    i.VERSION = "3.3.5", i.DEFAULTS = {loadingText: "loading..."}, i.prototype.setState = function (e) {
        var i = "disabled", s = this.$element, o = s.is("input") ? "val" : "html", n = s.data();
        e += "Text", null == n.resetText && s.data("resetText", s[o]()), setTimeout(t.proxy(function () {
            s[o](null == n[e] ? this.options[e] : n[e]), "loadingText" == e ? (this.isLoading = !0, s.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, s.removeClass(i).removeAttr(i))
        }, this), 0)
    }, i.prototype.toggle = function () {
        var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var s = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function () {
        return t.fn.button = s, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (i) {
        var s = t(i.target);
        s.hasClass("btn") || (s = s.closest(".btn")), e.call(s, "toggle"), t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), function (t) {
    function e(e) {
        return this.each(function () {
            var s = t(this), o = s.data("bs.carousel"),
                n = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e),
                r = "string" == typeof e ? e : n.slide;
            o || s.data("bs.carousel", o = new i(this, n)), "number" == typeof e ? o.to(e) : r ? o[r]() : n.interval && o.pause().cycle()
        })
    }

    var i = function (e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function (t, e) {
        var i = this.getItemIndex(e);
        if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
        var s = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
        return this.$items.eq(s)
    }, i.prototype.to = function (t) {
        var e = this, i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, i.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, i.prototype.slide = function (e, s) {
        var o = this.$element.find(".item.active"), n = s || this.getItemForDirection(e, o), r = this.interval,
            a = "next" == e ? "right" : "left", l = this;
        if (n.hasClass("active")) return this.sliding = !1;
        var h = n[0], c = t.Event("slide.bs.carousel", {relatedTarget: h, direction: a});
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var p = t(this.$indicators.children()[this.getItemIndex(n)]);
                p && p.addClass("active")
            }
            var d = t.Event("slid.bs.carousel", {relatedTarget: h, direction: a});
            return t.support.transition && this.$element.hasClass("slide") ? (n.addClass(e), n[0].offsetWidth, o.addClass(a), n.addClass(a), o.one("bsTransitionEnd", function () {
                n.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function () {
                    l.$element.trigger(d)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (o.removeClass("active"), n.addClass("active"), this.sliding = !1, this.$element.trigger(d)), r && this.cycle(), this
        }
    };
    var s = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = s, this
    };
    var o = function (i) {
        var s, o = t(this), n = t(o.attr("data-target") || (s = o.attr("href")) && s.replace(/.*(?=#[^\s]+$)/, ""));
        if (n.hasClass("carousel")) {
            var r = t.extend({}, n.data(), o.data()), a = o.attr("data-slide-to");
            a && (r.interval = !1), e.call(n, r), a && n.data("bs.carousel").to(a), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery), function (t) {
    function e(e) {
        var i, s = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(s)
    }

    function i(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.collapse"),
                n = t.extend({}, s.DEFAULTS, i.data(), "object" == typeof e && e);
            !o && n.toggle && /show|hide/.test(e) && (n.toggle = !1), o || i.data("bs.collapse", o = new s(this, n)), "string" == typeof e && o[e]()
        })
    }

    var s = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, s.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    s.VERSION = "3.3.5", s.TRANSITION_DURATION = 350, s.DEFAULTS = {toggle: !0}, s.prototype.dimension = function () {
        return this.$element.hasClass("width") ? "width" : "height"
    }, s.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (e = o.data("bs.collapse"), e && e.transitioning))) {
                var n = t.Event("show.bs.collapse");
                if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                    o && o.length && (i.call(o, "hide"), e || o.data("bs.collapse", null));
                    var r = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", r].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(s.TRANSITION_DURATION)[r](this.$element[0][l])
                }
            }
        }
    }, s.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(s.TRANSITION_DURATION) : o.call(this)
            }
        }
    }, s.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, s.prototype.getParent = function () {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (i, s) {
            var o = t(s);
            this.addAriaAndCollapsedClass(e(o), o)
        }, this)).end()
    }, s.prototype.addAriaAndCollapsedClass = function (t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var o = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = s, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = o, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (s) {
        var o = t(this);
        o.attr("data-target") || s.preventDefault();
        var n = e(o), r = n.data("bs.collapse") ? "toggle" : o.data();
        i.call(n, r)
    })
}(jQuery), function (t) {
    function e(e) {
        var i = e.attr("data-target");
        i || (i = (i = e.attr("href")) && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var s = i && t(i);
        return s && s.length ? s : e.parent()
    }

    function i(i) {
        i && 3 === i.which || (t(s).remove(), t(o).each(function () {
            var s = t(this), o = e(s), n = {relatedTarget: this};
            o.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(o[0], i.target) || (o.trigger(i = t.Event("hide.bs.dropdown", n)), i.isDefaultPrevented() || (s.attr("aria-expanded", "false"), o.removeClass("open").trigger("hidden.bs.dropdown", n))))
        }))
    }

    var s = ".dropdown-backdrop", o = '[data-toggle="dropdown"]', n = function (e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    n.VERSION = "3.3.5", n.prototype.toggle = function (s) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var n = e(o), r = n.hasClass("open");
            if (i(), !r) {
                "ontouchstart" in document.documentElement && !n.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var a = {relatedTarget: this};
                if (n.trigger(s = t.Event("show.bs.dropdown", a)), s.isDefaultPrevented()) return;
                o.trigger("focus").attr("aria-expanded", "true"), n.toggleClass("open").trigger("shown.bs.dropdown", a)
            }
            return !1
        }
    }, n.prototype.keydown = function (i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var s = t(this);
            if (i.preventDefault(), i.stopPropagation(), !s.is(".disabled, :disabled")) {
                var n = e(s), r = n.hasClass("open");
                if (!r && 27 != i.which || r && 27 == i.which) return 27 == i.which && n.find(o).trigger("focus"), s.trigger("click");
                var a = n.find(".dropdown-menu li:not(.disabled):visible a");
                if (a.length) {
                    var l = a.index(i.target);
                    38 == i.which && l > 0 && l--, 40 == i.which && l < a.length - 1 && l++, ~l || (l = 0), a.eq(l).trigger("focus")
                }
            }
        }
    };
    var r = t.fn.dropdown;
    t.fn.dropdown = function (e) {
        return this.each(function () {
            var i = t(this), s = i.data("bs.dropdown");
            s || i.data("bs.dropdown", s = new n(this)), "string" == typeof e && s[e].call(i)
        })
    }, t.fn.dropdown.Constructor = n, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = r, this
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, n.prototype.toggle).on("keydown.bs.dropdown.data-api", o, n.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", n.prototype.keydown)
}(jQuery), function (t) {
    function e(e, s) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.modal"), r = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e);
            n || o.data("bs.modal", n = new i(this, r)), "string" == typeof e ? n[e](s) : r.show && n.show(s)
        })
    }

    var i = function (e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function (e) {
        var s = this, o = t.Event("show.bs.modal", {relatedTarget: e});
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            s.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(s.$element) && (s.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var o = t.support.transition && s.$element.hasClass("fade");
            s.$element.parent().length || s.$element.appendTo(s.$body), s.$element.show().scrollTop(0), s.adjustDialog(), o && s.$element[0].offsetWidth, s.$element.addClass("in"), s.enforceFocus();
            var n = t.Event("shown.bs.modal", {relatedTarget: e});
            o ? s.$dialog.one("bsTransitionEnd", function () {
                s.$element.trigger("focus").trigger(n)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : s.$element.trigger("focus").trigger(n)
        }))
    }, i.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function (e) {
        var s = this, o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var n = t.support.transition && o;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            n ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var r = function () {
                s.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : r()
        } else e && e()
    }, i.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingRight: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingLeft: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function () {
        this.$element.css({paddingRight: "", paddingLeft: ""})
    }, i.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.left - Math.abs(e.right)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-left") || 0, 10);
        this.originalBodyPad = document.body.style.paddingLeft || "", this.bodyIsOverflowing && this.$body.css("padding-left", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function () {
        this.$body.css("padding-left", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var s = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function () {
        return t.fn.modal = s, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
        var s = t(this), o = s.attr("href"), n = t(s.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            r = n.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(o) && o}, n.data(), s.data());
        s.is("a") && i.preventDefault(), n.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || n.one("hidden.bs.modal", function () {
                s.is(":visible") && s.trigger("focus")
            })
        }), e.call(n, r, this)
    })
}(jQuery), function (t) {
    var e = function (t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    e.VERSION = "3.3.5", e.TRANSITION_DURATION = 150, e.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    }, e.prototype.init = function (e, i, s) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(s), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), n = o.length; n--;) {
            var r = o[n];
            if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != r) {
                var a = "hover" == r ? "mouseenter" : "focusin", l = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, e.prototype.getDefaults = function () {
        return e.DEFAULTS
    }, e.prototype.getOptions = function (e) {
        return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, e.prototype.getDelegateOptions = function () {
        var e = {}, i = this.getDefaults();
        return this._options && t.each(this._options, function (t, s) {
            i[t] != s && (e[t] = s)
        }), e
    }, e.prototype.enter = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function () {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, e.prototype.isInStateTrue = function () {
        for (var t in this.inState) if (this.inState[t]) return !0;
        return !1
    }, e.prototype.leave = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function () {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide())
    }, e.prototype.show = function () {
        var i = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(i);
            var s = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (i.isDefaultPrevented() || !s) return;
            var o = this, n = this.tip(), r = this.getUID(this.type);
            this.setContent(), n.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && n.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i, h = l.test(a);
            h && (a = a.replace(l, "") || "top"), n.detach().css({
                top: 0,
                right: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var c = this.getPosition(), p = n[0].offsetWidth, d = n[0].offsetHeight;
            if (h) {
                var u = a, g = this.getPosition(this.$viewport);
                a = "bottom" == a && c.bottom + d > g.bottom ? "top" : "top" == a && c.top - d < g.top ? "bottom" : "left" == a && c.left + p > g.width ? "right" : "right" == a && c.right - p < g.right ? "left" : a, n.removeClass(u).addClass(a)
            }
            var f = this.getCalculatedOffset(a, c, p, d);
            this.applyPlacement(f, a);
            var m = function () {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
            };
            t.support.transition && this.$tip.hasClass("fade") ? n.one("bsTransitionEnd", m).emulateTransitionEnd(e.TRANSITION_DURATION) : m()
        }
    }, e.prototype.applyPlacement = function (e, i) {
        var s = this.tip(), o = s[0].offsetWidth, n = s[0].offsetHeight, r = parseInt(s.css("margin-top"), 10),
            a = parseInt(s.css("margin-right"), 10);
        isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top += r, e.right += a, t.offset.setOffset(s[0], t.extend({
            using: function (t) {
                s.css({top: Math.round(t.top), right: Math.round(t.right)})
            }
        }, e), 0), s.addClass("in");
        var l = s[0].offsetWidth, h = s[0].offsetHeight;
        "top" == i && h != n && (e.top = e.top + n - h);
        var c = this.getViewportAdjustedDelta(i, e, l, h);
        c.right ? e.right += c.right : e.top += c.top;
        var p = /top|bottom/.test(i), d = p ? 2 * c.right - o + l : 2 * c.top - n + h,
            u = p ? "offsetWidth" : "offsetHeight";
        s.offset(e), this.replaceArrow(d, s[0][u], p)
    }, e.prototype.replaceArrow = function (t, e, i) {
        this.arrow().css(i ? "right" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "right", "")
    }, e.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom right left")
    }, e.prototype.hide = function (i) {
        function s() {
            "in" != o.hoverState && n.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), i && i()
        }

        var o = this, n = t(this.$tip), r = t.Event("hide.bs." + this.type);
        return this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (n.removeClass("in"), t.support.transition && n.hasClass("fade") ? n.one("bsTransitionEnd", s).emulateTransitionEnd(e.TRANSITION_DURATION) : s(), this.hoverState = null, this)
    }, e.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, e.prototype.hasContent = function () {
        return this.getTitle()
    }, e.prototype.getPosition = function (e) {
        var i = (e = e || this.$element)[0], s = "BODY" == i.tagName, o = i.getBoundingClientRect();
        null == o.width && (o = t.extend({}, o, {width: o.left - o.right, height: o.bottom - o.top}));
        var n = s ? {top: 0, right: 0} : e.offset(),
            r = {scroll: s ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()},
            a = s ? {width: t(window).width(), height: t(window).height()} : null;
        return t.extend({}, o, r, a, n)
    }, e.prototype.getCalculatedOffset = function (t, e, i, s) {
        return "bottom" == t ? {
            top: e.top + e.height,
            right: e.right + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - s,
            right: e.right + e.width / 2 - i / 2
        } : "right" == t ? {top: e.top + e.height / 2 - s / 2, right: e.right - i} : {
            top: e.top + e.height / 2 - s / 2,
            right: e.right + e.width
        }
    }, e.prototype.getViewportAdjustedDelta = function (t, e, i, s) {
        var o = {top: 0, right: 0};
        if (!this.$viewport) return o;
        var n = this.options.viewport && this.options.viewport.padding || 0, r = this.getPosition(this.$viewport);
        if (/left|right/.test(t)) {
            var a = e.top - n - r.scroll, l = e.top + n - r.scroll + s;
            a < r.top ? o.top = r.top - a : l > r.top + r.height && (o.top = r.top + r.height - l)
        } else {
            var h = e.right - n, c = e.right + n + i;
            h < r.right ? o.right = r.right - h : c > r.left && (o.right = r.right + r.width - c)
        }
        return o
    }, e.prototype.getTitle = function () {
        var t = this.$element, e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, e.prototype.getUID = function (t) {
        do {
            t += ~~(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
    }, e.prototype.tip = function () {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, e.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, e.prototype.enable = function () {
        this.enabled = !0
    }, e.prototype.disable = function () {
        this.enabled = !1
    }, e.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, e.prototype.toggle = function (e) {
        var i = this;
        e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, e.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = function (i) {
        return this.each(function () {
            var s = t(this), o = s.data("bs.tooltip"), n = "object" == typeof i && i;
            (o || !/destroy|hide/.test(i)) && (o || s.data("bs.tooltip", o = new e(this, n)), "string" == typeof i && o[i]())
        })
    }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = i, this
    }
}(jQuery), function (t) {
    var e = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    e.VERSION = "3.3.5", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "left",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function () {
        return e.DEFAULTS
    }, e.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle(), i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom right left in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, e.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, e.prototype.getContent = function () {
        var t = this.$element, e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, e.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = t.fn.popover;
    t.fn.popover = function (i) {
        return this.each(function () {
            var s = t(this), o = s.data("bs.popover"), n = "object" == typeof i && i;
            (o || !/destroy|hide/.test(i)) && (o || s.data("bs.popover", o = new e(this, n)), "string" == typeof i && o[i]())
        })
    }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function () {
        return t.fn.popover = i, this
    }
}(jQuery), function (t) {
    function e(i, s) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, s), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function () {
            var s = t(this), o = s.data("bs.scrollspy"), n = "object" == typeof i && i;
            o || s.data("bs.scrollspy", o = new e(this, n)), "string" == typeof i && o[i]()
        })
    }

    e.VERSION = "3.3.5", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var e = this, i = "offset", s = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", s = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var e = t(this), o = e.data("target") || e.attr("href"), n = /^#./.test(o) && t(o);
            return n && n.length && n.is(":visible") && [[n[i]().top + s, o]] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, i = this.getScrollHeight(),
            s = this.options.offset + i - this.$scrollElement.height(), o = this.offsets, n = this.targets,
            r = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= s) return r != (t = n[n.length - 1]) && this.activate(t);
        if (r && e < o[0]) return this.activeTarget = null, this.clear();
        for (t = o.length; t--;) r != n[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(n[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            s = t(i).parents("li").addClass("active");
        s.parent(".dropdown-menu").length && (s = s.closest("li.dropdown").addClass("active")), s.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var s = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = s, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery), function (t) {
    function e(e) {
        return this.each(function () {
            var s = t(this), o = s.data("bs.tab");
            o || s.data("bs.tab", o = new i(this)), "string" == typeof e && o[e]()
        })
    }

    var i = function (e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.show = function () {
        var e = this.element, i = e.closest("ul:not(.dropdown-menu)"), s = e.data("target");
        if (s || (s = (s = e.attr("href")) && s.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = i.find(".active:last a"), n = t.Event("hide.bs.tab", {relatedTarget: e[0]}),
                r = t.Event("show.bs.tab", {relatedTarget: o[0]});
            if (o.trigger(n), e.trigger(r), !r.isDefaultPrevented() && !n.isDefaultPrevented()) {
                var a = t(s);
                this.activate(e.closest("li"), i), this.activate(a, a.parent(), function () {
                    o.trigger({type: "hidden.bs.tab", relatedTarget: e[0]}), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function (e, s, o) {
        function n() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }

        var r = s.find("> .active"),
            a = o && t.support.transition && (r.length && r.hasClass("fade") || !!s.find("> .fade").length);
        r.length && a ? r.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), r.removeClass("in")
    };
    var s = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function () {
        return t.fn.tab = s, this
    };
    var o = function (i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery), function (t) {
    function e(e) {
        return this.each(function () {
            var s = t(this), o = s.data("bs.affix"), n = "object" == typeof e && e;
            o || s.data("bs.affix", o = new i(this, n)), "string" == typeof e && o[e]()
        })
    }

    var i = function (e, s) {
        this.options = t.extend({}, i.DEFAULTS, s), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.5", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function (t, e, i, s) {
        var o = this.$target.scrollTop(), n = this.$element.offset(), r = this.$target.height();
        if (null != i && "top" == this.affixed) return i > o && "top";
        if ("bottom" == this.affixed) return null != i ? !(o + this.unpin <= n.top) && "bottom" : !(t - s >= o + r) && "bottom";
        var a = null == this.affixed, l = a ? o : n.top;
        return null != i && i >= o ? "top" : null != s && l + (a ? r : e) >= t - s && "bottom"
    }, i.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(), e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(), s = this.options.offset, o = s.top, n = s.bottom,
                r = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof s && (n = o = s), "function" == typeof o && (o = s.top(this.$element)), "function" == typeof n && (n = s.bottom(this.$element));
            var a = this.getState(r, e, o, n);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""), h = t.Event(l + ".bs.affix");
                if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({top: r - e - n})
        }
    };
    var s = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function () {
        return t.fn.affix = s, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var i = t(this), s = i.data();
            s.offset = s.offset || {}, null != s.offsetBottom && (s.offset.bottom = s.offsetBottom), null != s.offsetTop && (s.offset.top = s.offsetTop), e.call(i, s)
        })
    })
}(jQuery), function (t, e, i, s) {
    function o(e, i) {
        this.settings = null, this.options = t.extend({}, o.Defaults, i), this.$element = t(e), this.drag = t.extend({}, a), this.state = t.extend({}, l), this.e = t.extend({}, h), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], t.each(o.Plugins, t.proxy(function (t, e) {
            this._plugins[t[0].toLowerCase() + t.slice(1)] = new e(this)
        }, this)), t.each(o.Pipe, t.proxy(function (e, i) {
            this._pipe.push({filter: i.filter, run: t.proxy(i.run, this)})
        }, this)), this.setup(), this.initialize()
    }

    function n(t) {
        if (t.touches !== s) return {x: t.touches[0].pageX, y: t.touches[0].pageY};
        if (t.touches === s) {
            if (t.pageX !== s) return {x: t.pageX, y: t.pageY};
            if (t.pageX === s) return {x: t.clientX, y: t.clientY}
        }
    }

    function r(t) {
        var e, s, o = i.createElement("div"), n = t;
        for (e in n) if (s = n[e], void 0 !== o.style[s]) return o = null, [s, e];
        return [!1]
    }

    var a, l, h;
    a = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    }, l = {isTouch: !1, isScrolling: !1, isSwiping: !1, direction: !1, inMotion: !1}, h = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    }, o.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        responsiveClass: !1,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
    }, o.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, o.Plugins = {}, o.Pipe = [{
        filter: ["width", "items", "settings"], run: function (t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"], run: function () {
            var t = this._clones;
            (this.$stage.children(".cloned").length !== t.length || !this.settings.loop && t.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
        }
    }, {
        filter: ["items", "settings"], run: function () {
            var t, e, i = this._clones, s = this._items,
                o = this.settings.loop ? i.length - Math.max(2 * this.settings.items, 4) : 0;
            for (t = 0, e = Math.abs(o / 2); e > t; t++) o > 0 ? (this.$stage.children().eq(s.length + i.length - 1).remove(), i.pop(), this.$stage.children().eq(0).remove(), i.pop()) : (i.push(i.length / 2), this.$stage.append(s[i[i.length - 1]].clone().addClass("cloned")), i.push(s.length - 1 - (i.length - 1) / 2), this.$stage.prepend(s[i[i.length - 1]].clone().addClass("cloned")))
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            var t, e, i, s = this.settings.rtl ? 1 : -1, o = (this.width() / this.settings.items).toFixed(3), n = 0;
            for (this._coordinates = [], e = 0, i = this._clones.length + this._items.length; i > e; e++) t = this._mergers[this.relative(e)], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, n += (this.settings.autoWidth ? this._items[this.relative(e)].width() + this.settings.margin : o * t) * s, this._coordinates.push(n)
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            var e, i, s = (this.width() / this.settings.items).toFixed(3), o = {
                width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                "padding-left": this.settings.stagePadding || "",
                "padding-right": this.settings.stagePadding || ""
            };
            if (this.$stage.css(o), (o = {width: this.settings.autoWidth ? "auto" : s - this.settings.margin})[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && t.grep(this._mergers, function (t) {
                return t > 1
            }).length > 0) for (e = 0, i = this._coordinates.length; i > e; e++) o.width = Math.abs(this._coordinates[e]) - Math.abs(this._coordinates[e - 1] || 0) - this.settings.margin, this.$stage.children().eq(e).css(o); else this.$stage.children().css(o)
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            t.current && this.reset(this.$stage.children().index(t.current))
        }
    }, {
        filter: ["position"], run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"], run: function () {
            var t, e, i, s, o = this.settings.rtl ? 1 : -1, n = 2 * this.settings.stagePadding,
                r = this.coordinates(this.current()) + n, a = r + this.width() * o, l = [];
            for (i = 0, s = this._coordinates.length; s > i; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + n * o, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && l.push(i);
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
        }
    }], o.prototype.initialize = function () {
        var e, i, o;
        if ((this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && !0 !== this.state.imagesLoaded) && (e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : s, o = this.$element.children(i).width(), e.length && 0 >= o)) return this.preloadAutoWidthImages(e), !1;
        this.$element.addClass("owl-loading"), this.$stage = t("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
    }, o.prototype.setup = function () {
        var e = this.viewport(), i = this.options.responsive, s = -1, o = null;
        i ? (t.each(i, function (t) {
            e >= t && t > s && (s = Number(t))
        }), delete(o = t.extend({}, this.options, i[s])).responsive, o.responsiveClass && this.$element.attr("class", function (t, e) {
            return e.replace(/\b owl-responsive-\S+/g, "")
        }).addClass("owl-responsive-" + s)) : o = t.extend({}, this.options), (null === this.settings || this._breakpoint !== s) && (this.trigger("change", {
            property: {
                name: "settings",
                value: o
            }
        }), this._breakpoint = s, this.settings = o, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        }))
    }, o.prototype.optionsLogic = function () {
        this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, o.prototype.prepare = function (e) {
        var i = this.trigger("prepare", {content: e});
        return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(e)), this.trigger("prepared", {content: i.data}), i.data
    }, o.prototype.update = function () {
        for (var e = 0, i = this._pipe.length, s = t.proxy(function (t) {
            return this[t]
        }, this._invalidated), o = {}; i > e;) (this._invalidated.all || t.grep(this._pipe[e].filter, s).length > 0) && this._pipe[e].run(o), e++;
        this._invalidated = {}
    }, o.prototype.width = function (t) {
        switch (t = t || o.Width.Default) {
            case o.Width.Inner:
            case o.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, o.prototype.refresh = function () {
        if (0 === this._items.length) return !1;
        (new Date).getTime(), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = e.orientation, this.watchVisibility(), this.trigger("refreshed")
    }, o.prototype.eventsCall = function () {
        this.e._onDragStart = t.proxy(function (t) {
            this.onDragStart(t)
        }, this), this.e._onDragMove = t.proxy(function (t) {
            this.onDragMove(t)
        }, this), this.e._onDragEnd = t.proxy(function (t) {
            this.onDragEnd(t)
        }, this), this.e._onResize = t.proxy(function (t) {
            this.onResize(t)
        }, this), this.e._transitionEnd = t.proxy(function (t) {
            this.transitionEnd(t)
        }, this), this.e._preventClick = t.proxy(function (t) {
            this.preventClick(t)
        }, this)
    }, o.prototype.onThrottledResize = function () {
        e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
    }, o.prototype.onResize = function () {
        return !!this._items.length && (this._width !== this.$element.width() && (!this.trigger("resize").isDefaultPrevented() && (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized"))))
    }, o.prototype.eventsRouter = function (t) {
        var e = t.type;
        "mousedown" === e || "touchstart" === e ? this.onDragStart(t) : "mousemove" === e || "touchmove" === e ? this.onDragMove(t) : "mouseup" === e || "touchend" === e ? this.onDragEnd(t) : "touchcancel" === e && this.onDragEnd(t)
    }, o.prototype.internalEvents = function () {
        var i = ("ontouchstart" in e || navigator.msMaxTouchPoints, e.navigator.msPointerEnabled);
        this.settings.mouseDrag ? (this.$stage.on("mousedown", t.proxy(function (t) {
            this.eventsRouter(t)
        }, this)), this.$stage.on("dragstart", function () {
            return !1
        }), this.$stage.get(0).onselectstart = function () {
            return !1
        }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !i && this.$stage.on("touchstart touchcancel", t.proxy(function (t) {
            this.eventsRouter(t)
        }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), !1 !== this.settings.responsive && this.on(e, "resize", t.proxy(this.onThrottledResize, this))
    }, o.prototype.onDragStart = function (s) {
        var o, r, a, l;
        if (3 === (o = s.originalEvent || s || e.event).which || this.state.isTouch) return !1;
        if ("mousedown" === o.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, r = n(o).x, a = n(o).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) l = this.getTransformProperty(), this.drag.offsetX = l, this.animate(l), this.state.inMotion = !0; else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
        this.drag.startX = r - this.drag.offsetX, this.drag.startY = a - this.drag.offsetY, this.drag.start = r - this.drag.startX, this.drag.targetEl = o.target || o.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), t(i).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", t.proxy(function (t) {
            this.eventsRouter(t)
        }, this))
    }, o.prototype.onDragMove = function (t) {
        var i, o, r, a, l, h;
        this.state.isTouch && (this.state.isScrolling || (o = n(i = t.originalEvent || t || e.event).x, r = n(i).y, this.drag.currentX = o - this.drag.startX, this.drag.currentY = r - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (a = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), l = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), h = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, a + h), l + h)), (this.drag.distance > 8 || this.drag.distance < -8) && (i.preventDefault !== s ? i.preventDefault() : i.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && !1 === this.state.isSwiping && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
    }, o.prototype.onDragEnd = function (e) {
        var s, o;
        if (this.state.isTouch) {
            if ("mouseup" === e.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && !0 !== this.state.inMotion) return this.state.inMotion = !1, !1;
            this.drag.endTime = (new Date).getTime(), s = this.drag.endTime - this.drag.startTime, (Math.abs(this.drag.distance) > 3 || s > 300) && this.removeClick(this.drag.targetEl), o = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(o), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(o) || this.transitionEnd(), this.drag.distance = 0, t(i).off(".owl.dragEvents")
        }
    }, o.prototype.removeClick = function (i) {
        this.drag.targetEl = i, t(i).on("click.preventClick", this.e._preventClick), e.setTimeout(function () {
            t(i).off("click.preventClick")
        }, 300)
    }, o.prototype.preventClick = function (e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), t(e.target).off("click.preventClick")
    }, o.prototype.getTransformProperty = function () {
        var t;
        return !0 !== (16 === (t = (t = e.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform")).replace(/matrix(3d)?\(|\)/g, "").split(",")).length) ? t[4] : t[12]
    }, o.prototype.closest = function (e) {
        var i = -1, s = this.width(), o = this.coordinates();
        return this.settings.freeDrag || t.each(o, t.proxy(function (t, n) {
            return e > n - 30 && n + 30 > e ? i = t : this.op(e, "<", n) && this.op(e, ">", o[t + 1] || n - s) && (i = "left" === this.state.direction ? t + 1 : t), -1 === i
        }, this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (i = e = this.maximum())), i
    }, o.prototype.animate = function (e) {
        this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px, 0px)",
            transition: this.speed() / 1e3 + "s"
        }) : this.state.isTouch ? this.$stage.css({left: e + "px"}) : this.$stage.animate({left: e}, this.speed() / 1e3, this.settings.fallbackEasing, t.proxy(function () {
            this.state.inMotion && this.transitionEnd()
        }, this))
    }, o.prototype.current = function (t) {
        if (t === s) return this._current;
        if (0 === this._items.length) return s;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {property: {name: "position", value: t}});
            e.data !== s && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, o.prototype.invalidate = function (t) {
        this._invalidated[t] = !0
    }, o.prototype.reset = function (t) {
        (t = this.normalize(t)) !== s && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, o.prototype.normalize = function (e, i) {
        var o = i ? this._items.length : this._items.length + this._clones.length;
        return !t.isNumeric(e) || 1 > o ? s : e = this._clones.length ? (e % o + o) % o : Math.max(this.minimum(i), Math.min(this.maximum(i), e))
    }, o.prototype.relative = function (t) {
        return t = this.normalize(t), t -= this._clones.length / 2, this.normalize(t, !0)
    }, o.prototype.maximum = function (t) {
        var e, i, s, o = 0, n = this.settings;
        if (t) return this._items.length - 1;
        if (!n.loop && n.center) e = this._items.length - 1; else if (n.loop || n.center) if (n.loop || n.center) e = this._items.length + n.items; else {
            if (!n.autoWidth && !n.merge) throw"Can not detect maximum absolute position.";
            for (revert = n.rtl ? 1 : -1, i = this.$stage.width() - this.$element.width(); (s = this.coordinates(o)) && !(s * revert >= i);) e = ++o
        } else e = this._items.length - n.items;
        return e
    }, o.prototype.minimum = function (t) {
        return t ? 0 : this._clones.length / 2
    }, o.prototype.items = function (t) {
        return t === s ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, o.prototype.mergers = function (t) {
        return t === s ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, o.prototype.clones = function (e) {
        var i = this._clones.length / 2, o = i + this._items.length, n = function (t) {
            return t % 2 == 0 ? o + t / 2 : i - (t + 1) / 2
        };
        return e === s ? t.map(this._clones, function (t, e) {
            return n(e)
        }) : t.map(this._clones, function (t, i) {
            return t === e ? n(i) : null
        })
    }, o.prototype.speed = function (t) {
        return t !== s && (this._speed = t), this._speed
    }, o.prototype.coordinates = function (e) {
        var i = null;
        return e === s ? t.map(this._coordinates, t.proxy(function (t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (i = this._coordinates[e], i += (this.width() - i + (this._coordinates[e - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : i = this._coordinates[e - 1] || 0, i)
    }, o.prototype.duration = function (t, e, i) {
        return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, o.prototype.to = function (i, s) {
        if (this.settings.loop) {
            var o = i - this.relative(this.current()), n = this.current(), r = this.current(), a = this.current() + o,
                l = 0 > r - a, h = this._clones.length + this._items.length;
            a < this.settings.items && !1 === l ? (n = r + this._items.length, this.reset(n)) : a >= h - this.settings.items && !0 === l && (n = r - this._items.length, this.reset(n)), e.clearTimeout(this.e._goToLoop), this.e._goToLoop = e.setTimeout(t.proxy(function () {
                this.speed(this.duration(this.current(), n + o, s)), this.current(n + o), this.update()
            }, this), 30)
        } else this.speed(this.duration(this.current(), i, s)), this.current(i), this.update()
    }, o.prototype.next = function (t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, o.prototype.prev = function (t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, o.prototype.transitionEnd = function (t) {
        return (t === s || (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) === this.$stage.get(0))) && (this.state.inMotion = !1, void this.trigger("translated"))
    }, o.prototype.viewport = function () {
        var s;
        if (this.options.responsiveBaseElement !== e) s = t(this.options.responsiveBaseElement).width(); else if (e.innerWidth) s = e.innerWidth; else {
            if (!i.documentElement || !i.documentElement.clientWidth) throw"Can not detect viewport width.";
            s = i.documentElement.clientWidth
        }
        return s
    }, o.prototype.replace = function (e) {
        this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function () {
            return 1 === this.nodeType
        }).each(t.proxy(function (t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(t.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, o.prototype.add = function (t, e) {
        e = e === s ? this._items.length : this.normalize(e, !0), this.trigger("add", {
            content: t,
            position: e
        }), 0 === this._items.length || e === this._items.length ? (this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
            content: t,
            position: e
        })
    }, o.prototype.remove = function (t) {
        (t = this.normalize(t, !0)) !== s && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, o.prototype.addTriggerableEvents = function () {
        var e = t.proxy(function (e, i) {
            return t.proxy(function (t) {
                t.relatedTarget !== this && (this.suppress([i]), e.apply(this, [].slice.call(arguments, 1)), this.release([i]))
            }, this)
        }, this);
        t.each({
            next: this.next,
            prev: this.prev,
            to: this.to,
            destroy: this.destroy,
            refresh: this.refresh,
            replace: this.replace,
            add: this.add,
            remove: this.remove
        }, t.proxy(function (t, i) {
            this.$element.on(t + ".owl.carousel", e(i, t + ".owl.carousel"))
        }, this))
    }, o.prototype.watchVisibility = function () {
        function i(t) {
            return t.offsetWidth > 0 && t.offsetHeight > 0
        }

        i(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), e.clearInterval(this.e._checkVisibile), this.e._checkVisibile = e.setInterval(t.proxy(function () {
            i(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), e.clearInterval(this.e._checkVisibile))
        }, this), 500))
    }, o.prototype.preloadAutoWidthImages = function (e) {
        var i, s, o, n;
        i = 0, s = this, e.each(function (r, a) {
            o = t(a), (n = new Image).onload = function () {
                i++, o.attr("src", n.src), o.css("opacity", 1), i >= e.length && (s.state.imagesLoaded = !0, s.initialize())
            }, n.src = o.attr("src") || o.attr("data-src") || o.attr("data-src-retina")
        })
    }, o.prototype.destroy = function () {
        for (var s in this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), !1 !== this.settings.responsive && t(e).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd), this._plugins) this._plugins[s].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), t(i).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function () {
        }, this.$stage.off("dragstart", function () {
            return !1
        })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
    }, o.prototype.op = function (t, e, i) {
        var s = this.settings.rtl;
        switch (e) {
            case"<":
                return s ? t > i : i > t;
            case">":
                return s ? i > t : t > i;
            case">=":
                return s ? i >= t : t >= i;
            case"<=":
                return s ? t >= i : i >= t
        }
    }, o.prototype.on = function (t, e, i, s) {
        t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i)
    }, o.prototype.off = function (t, e, i, s) {
        t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i)
    }, o.prototype.trigger = function (e, i, s) {
        var o = {item: {count: this._items.length, index: this.current()}},
            n = t.camelCase(t.grep(["on", e, s], function (t) {
                return t
            }).join("-").toLowerCase()),
            r = t.Event([e, "owl", s || "carousel"].join(".").toLowerCase(), t.extend({relatedTarget: this}, o, i));
        return this._supress[e] || (t.each(this._plugins, function (t, e) {
            e.onTrigger && e.onTrigger(r)
        }), this.$element.trigger(r), this.settings && "function" == typeof this.settings[n] && this.settings[n].apply(this, r)), r
    }, o.prototype.suppress = function (e) {
        t.each(e, t.proxy(function (t, e) {
            this._supress[e] = !0
        }, this))
    }, o.prototype.release = function (e) {
        t.each(e, t.proxy(function (t, e) {
            delete this._supress[e]
        }, this))
    }, o.prototype.browserSupport = function () {
        if (this.support3d = r(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0], this.support3d) {
            this.transformVendor = r(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0];
            this.transitionEndVendor = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"][r(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = e.orientation
    }, t.fn.owlCarousel = function (e) {
        return this.each(function () {
            t(this).data("owlCarousel") || t(this).data("owlCarousel", new o(this, e))
        })
    }, t.fn.owlCarousel.Constructor = o
}(window.Zepto || window.jQuery, window, document), function (t, e) {
    var i = function (e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel": t.proxy(function (e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) for (var i = this._core.settings, s = i.center && Math.ceil(i.items / 2) || i.items, o = i.center && -1 * s || 0, n = (e.property && e.property.value || this._core.current()) + o, r = this._core.clones().length, a = t.proxy(function (t, e) {
                    this.load(e)
                }, this); o++ < s;) this.load(r / 2 + this._core.relative(n)), r && t.each(this._core.clones(this._core.relative(n++)), a)
            }, this)
        }, this._core.options = t.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    i.Defaults = {lazyLoad: !1}, i.prototype.load = function (i) {
        var s = this._core.$stage.children().eq(i), o = s && s.find(".owl-lazy");
        !o || t.inArray(s.get(0), this._loaded) > -1 || (o.each(t.proxy(function (i, s) {
            var o, n = t(s), r = e.devicePixelRatio > 1 && n.attr("data-src-retina") || n.attr("data-src");
            this._core.trigger("load", {
                element: n,
                url: r
            }, "lazy"), n.is("img") ? n.one("load.owl.lazy", t.proxy(function () {
                n.css("opacity", 1), this._core.trigger("loaded", {element: n, url: r}, "lazy")
            }, this)).attr("src", r) : ((o = new Image).onload = t.proxy(function () {
                n.css({"background-image": "url(" + r + ")", opacity: "1"}), this._core.trigger("loaded", {
                    element: n,
                    url: r
                }, "lazy")
            }, this), o.src = r)
        }, this)), this._loaded.push(s.get(0)))
    }, i.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = i
}(window.Zepto || window.jQuery, window, document), function (t) {
    var e = function (i) {
        this._core = i, this._handlers = {
            "initialized.owl.carousel": t.proxy(function () {
                this._core.settings.autoHeight && this.update()
            }, this), "changed.owl.carousel": t.proxy(function (t) {
                this._core.settings.autoHeight && "position" == t.property.name && this.update()
            }, this), "loaded.owl.lazy": t.proxy(function (t) {
                this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
            }, this)
        }, this._core.options = t.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, e.prototype.update = function () {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
    }, e.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document), function (t, e, i) {
    var s = function (e) {
        this._core = e, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
            "resize.owl.carousel": t.proxy(function (t) {
                this._core.settings.video && !this.isInFullScreen() && t.preventDefault()
            }, this), "refresh.owl.carousel changed.owl.carousel": t.proxy(function () {
                this._playing && this.stop()
            }, this), "prepared.owl.carousel": t.proxy(function (e) {
                var i = t(e.content).find(".owl-video");
                i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
            }, this)
        }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function (t) {
            this.play(t)
        }, this))
    };
    s.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, s.prototype.fetch = function (t, e) {
        var i = t.attr("data-vimeo-id") ? "vimeo" : "youtube", s = t.attr("data-vimeo-id") || t.attr("data-youtube-id"),
            o = t.attr("data-width") || this._core.settings.videoWidth,
            n = t.attr("data-height") || this._core.settings.videoHeight, r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if ((s = r.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) i = "youtube"; else {
            if (!(s[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
            i = "vimeo"
        }
        s = s[6], this._videos[r] = {
            type: i,
            id: s,
            width: o,
            height: n
        }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
    }, s.prototype.thumbnail = function (e, i) {
        var s, o, n = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
            r = e.find("img"), a = "src", l = "", h = this._core.settings, c = function (t) {
                '<div class="owl-video-play-icon"></div>', s = h.lazyLoad ? '<div class="owl-video-tn ' + l + '" ' + a + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(s), e.after('<div class="owl-video-play-icon"></div>')
            };
        return e.wrap('<div class="owl-video-wrapper"' + n + "></div>"), this._core.settings.lazyLoad && (a = "data-src", l = "owl-lazy"), r.length ? (c(r.attr(a)), r.remove(), !1) : void("youtube" === i.type ? (o = "http://img.youtube.com/vi/" + i.id + "/hqdefault.jpg", c(o)) : "vimeo" === i.type && t.ajax({
            type: "GET",
            url: "http://vimeo.com/api/v2/video/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (t) {
                o = t[0].thumbnail_large, c(o)
            }
        }))
    }, s.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
    }, s.prototype.play = function (e) {
        this._core.trigger("play", null, "video"), this._playing && this.stop();
        var i, s, o = t(e.target || e.srcElement), n = o.closest("." + this._core.settings.itemClass),
            r = this._videos[n.attr("data-video")], a = r.width || "100%", l = r.height || this._core.$stage.height();
        "youtube" === r.type ? i = '<iframe width="' + a + '" height="' + l + '" src="http://www.youtube.com/embed/' + r.id + "?autoplay=1&v=" + r.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === r.type && (i = '<iframe src="http://player.vimeo.com/video/' + r.id + '?autoplay=1" width="' + a + '" height="' + l + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), n.addClass("owl-video-playing"), this._playing = n, s = t('<div style="height:' + l + "px; width:" + a + 'px" class="owl-video-frame">' + i + "</div>"), o.after(s)
    }, s.prototype.isInFullScreen = function () {
        var s = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return s && t(s).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), !(s && this._fullscreen && this._playing) && (this._fullscreen ? (this._fullscreen = !1, !1) : !this._playing || this._core.state.orientation === e.orientation || (this._core.state.orientation = e.orientation, !1))
    }, s.prototype.destroy = function () {
        var t, e;
        for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = s
}(window.Zepto || window.jQuery, window, document), function (t, e, i, s) {
    var o = function (e) {
        this.core = e, this.core.options = t.extend({}, o.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
            "change.owl.carousel": t.proxy(function (t) {
                "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function (t) {
                this.swapping = "translated" == t.type
            }, this), "translate.owl.carousel": t.proxy(function () {
                this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    o.Defaults = {animateOut: !1, animateIn: !1}, o.prototype.swap = function () {
        if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);
            var e, i = t.proxy(this.clear, this), s = this.core.$stage.children().eq(this.previous),
                o = this.core.$stage.children().eq(this.next), n = this.core.settings.animateIn,
                r = this.core.settings.animateOut;
            this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), s.css({left: e + "px"}).addClass("animated owl-animated-out").addClass(r).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i)), n && o.addClass("animated owl-animated-in").addClass(n).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i))
        }
    }, o.prototype.clear = function (e) {
        t(e.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
    }, o.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = o
}(window.Zepto || window.jQuery, window, document), function (t, e, i) {
    var s = function (e) {
        this.core = e, this.core.options = t.extend({}, s.Defaults, this.core.options), this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": t.proxy(function () {
                this.autoplay()
            }, this), "play.owl.autoplay": t.proxy(function (t, e, i) {
                this.play(e, i)
            }, this), "stop.owl.autoplay": t.proxy(function () {
                this.stop()
            }, this), "mouseover.owl.autoplay": t.proxy(function () {
                this.core.settings.autoplayHoverPause && this.pause()
            }, this), "mouseleave.owl.autoplay": t.proxy(function () {
                this.core.settings.autoplayHoverPause && this.autoplay()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    s.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, s.prototype.autoplay = function () {
        this.core.settings.autoplay && !this.core.state.videoPlay ? (e.clearInterval(this.interval), this.interval = e.setInterval(t.proxy(function () {
            this.play()
        }, this), this.core.settings.autoplayTimeout)) : e.clearInterval(this.interval)
    }, s.prototype.play = function () {
        return !0 === i.hidden || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : !1 === this.core.settings.autoplay ? void e.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
    }, s.prototype.stop = function () {
        e.clearInterval(this.interval)
    }, s.prototype.pause = function () {
        e.clearInterval(this.interval)
    }, s.prototype.destroy = function () {
        var t, i;
        for (t in e.clearInterval(this.interval), this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = s
}(window.Zepto || window.jQuery, window, document), function (t) {
    var e = function (i) {
        this._core = i, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": t.proxy(function (e) {
                this._core.settings.dotsData && this._templates.push(t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this), "add.owl.carousel": t.proxy(function (e) {
                this._core.settings.dotsData && this._templates.splice(e.position, 0, t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this), "remove.owl.carousel prepared.owl.carousel": t.proxy(function (t) {
                this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this), "change.owl.carousel": t.proxy(function (t) {
                if ("position" == t.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                    var e = this._core.current(), i = this._core.maximum(), s = this._core.minimum();
                    t.data = t.property.value > i ? e >= i ? s : i : t.property.value < s ? i : t.property.value
                }
            }, this), "changed.owl.carousel": t.proxy(function (t) {
                "position" == t.property.name && this.draw()
            }, this), "refreshed.owl.carousel": t.proxy(function () {
                this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
            }, this)
        }, this._core.options = t.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    e.Defaults = {
        nav: !1,
        navRewind: !0,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
        controlsClass: "owl-controls"
    }, e.prototype.initialize = function () {
        var e, i, s = this._core.settings;
        for (i in s.dotsData || (this._templates = [t("<div>").addClass(s.dotClass).append(t("<span>")).prop("outerHTML")]), s.navContainer && s.dotsContainer || (this._controls.$container = t("<div>").addClass(s.controlsClass).appendTo(this.$element)), this._controls.$indicators = s.dotsContainer ? t(s.dotsContainer) : t("<div>").hide().addClass(s.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", t.proxy(function (e) {
            var i = t(e.target).parent().is(this._controls.$indicators) ? t(e.target).index() : t(e.target).parent().index();
            e.preventDefault(), this.to(i, s.dotsSpeed)
        }, this)), e = s.navContainer ? t(s.navContainer) : t("<div>").addClass(s.navContainerClass).prependTo(this._controls.$container), this._controls.$next = t("<" + s.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(s.navClass[0]).html(s.navText[0]).hide().prependTo(e).on("click", t.proxy(function () {
            this.prev(s.navSpeed)
        }, this)), this._controls.$next.addClass(s.navClass[1]).html(s.navText[1]).hide().appendTo(e).on("click", t.proxy(function () {
            this.next(s.navSpeed)
        }, this)), this._overrides) this._core[i] = t.proxy(this[i], this)
    }, e.prototype.destroy = function () {
        var t, e, i, s;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) this._controls[e].remove();
        for (s in this.overides) this._core[s] = this._overrides[s];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, e.prototype.update = function () {
        var t, e, i = this._core.settings, s = this._core.clones().length / 2, o = s + this._core.items().length,
            n = i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items;
        if ("page" !== i.slideBy && (i.slideBy = Math.min(i.slideBy, i.items)), i.dots || "page" == i.slideBy) for (this._pages = [], t = s, e = 0, 0; o > t; t++) (e >= n || 0 === e) && (this._pages.push({
            start: t - s,
            end: t - s + n - 1
        }), e = 0, 0), e += this._core.mergers(this._core.relative(t))
    }, e.prototype.draw = function () {
        var e, i, s = "", o = this._core.settings,
            n = (this._core.$stage.children(), this._core.relative(this._core.current()));
        if (!o.nav || o.loop || o.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= n), this._controls.$next.toggleClass("disabled", n >= this._core.maximum())), this._controls.$previous.toggle(o.nav), this._controls.$next.toggle(o.nav), o.dots) {
            if (e = this._pages.length - this._controls.$indicators.children().length, o.dotData && 0 !== e) {
                for (i = 0; i < this._controls.$indicators.children().length; i++) s += this._templates[this._core.relative(i)];
                this._controls.$indicators.html(s)
            } else e > 0 ? (s = new Array(e + 1).join(this._templates[0]), this._controls.$indicators.append(s)) : 0 > e && this._controls.$indicators.children().slice(e).remove();
            this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(t.inArray(this.current(), this._pages)).addClass("active")
        }
        this._controls.$indicators.toggle(o.dots)
    }, e.prototype.onTrigger = function (e) {
        var i = this._core.settings;
        e.page = {
            index: t.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: i && (i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items)
        }
    }, e.prototype.current = function () {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, function (t) {
            return t.start <= e && t.end >= e
        }).pop()
    }, e.prototype.getPosition = function (e) {
        var i, s, o = this._core.settings;
        return "page" == o.slideBy ? (i = t.inArray(this.current(), this._pages), s = this._pages.length, e ? ++i : --i, i = this._pages[(i % s + s) % s].start) : (i = this._core.relative(this._core.current()), s = this._core.items().length, e ? i += o.slideBy : i -= o.slideBy), i
    }, e.prototype.next = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, e.prototype.prev = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, e.prototype.to = function (e, i, s) {
        var o;
        s ? t.proxy(this._overrides.to, this._core)(e, i) : (o = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % o + o) % o].start, i))
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document), function (t, e) {
    var i = function (s) {
        this._core = s, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": t.proxy(function () {
                "URLHash" == this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
            }, this), "prepared.owl.carousel": t.proxy(function (e) {
                var i = t(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                this._hashes[i] = e.content
            }, this)
        }, this._core.options = t.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function () {
            var t = e.location.hash.substring(1), i = this._core.$stage.children(),
                s = this._hashes[t] && i.index(this._hashes[t]) || 0;
            return !!t && void this._core.to(s, !1, !0)
        }, this))
    };
    i.Defaults = {URLhashListener: !1}, i.prototype.destroy = function () {
        var i, s;
        for (i in t(e).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (s in Object.getOwnPropertyNames(this)) "function" != typeof this[s] && (this[s] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = i
}(window.Zepto || window.jQuery, window, document), function () {
    var t, e, i, s, o, n = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }, r = [].indexOf || function (t) {
        for (var e = 0, i = this.length; e < i; e++) if (e in this && this[e] === t) return e;
        return -1
    };
    e = function () {
        function t() {
        }

        return t.prototype.extend = function (t, e) {
            var i, s;
            for (i in e) s = e[i], null == t[i] && (t[i] = s);
            return t
        }, t.prototype.isMobile = function (t) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
        }, t.prototype.createEvent = function (t, e, i, s) {
            var o;
            return null == e && (e = !1), null == i && (i = !1), null == s && (s = null), null != document.createEvent ? (o = document.createEvent("CustomEvent")).initCustomEvent(t, e, i, s) : null != document.createEventObject ? (o = document.createEventObject()).eventType = t : o.eventName = t, o
        }, t.prototype.emitEvent = function (t, e) {
            return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
        }, t.prototype.addEvent = function (t, e, i) {
            return null != t.addEventListener ? t.addEventListener(e, i, !1) : null != t.attachEvent ? t.attachEvent("on" + e, i) : t[e] = i
        }, t.prototype.removeEvent = function (t, e, i) {
            return null != t.removeEventListener ? t.removeEventListener(e, i, !1) : null != t.detachEvent ? t.detachEvent("on" + e, i) : delete t[e]
        }, t.prototype.innerHeight = function () {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, t
    }(), i = this.WeakMap || this.MozWeakMap || (i = function () {
        function t() {
            this.keys = [], this.values = []
        }

        return t.prototype.get = function (t) {
            var e, i, s, o;
            for (e = i = 0, s = (o = this.keys).length; i < s; e = ++i) if (o[e] === t) return this.values[e]
        }, t.prototype.set = function (t, e) {
            var i, s, o, n;
            for (i = s = 0, o = (n = this.keys).length; s < o; i = ++s) if (n[i] === t) return void(this.values[i] = e);
            return this.keys.push(t), this.values.push(e)
        }, t
    }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function () {
        function t() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }

        return t.notSupported = !0, t.prototype.observe = function () {
        }, t
    }()), s = this.getComputedStyle || function (t, e) {
        return this.getPropertyValue = function (e) {
            var i;
            return "float" === e && (e = "styleFloat"), o.test(e) && e.replace(o, function (t, e) {
                return e.toUpperCase()
            }), (null != (i = t.currentStyle) ? i[e] : void 0) || null
        }, this
    }, o = /(\-([a-z]){1})/g, this.WOW = function () {
        function o(t) {
            null == t && (t = {}), this.scrollCallback = n(this.scrollCallback, this), this.scrollHandler = n(this.scrollHandler, this), this.resetAnimation = n(this.resetAnimation, this), this.start = n(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)), this.animationNameCache = new i, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }

        return o.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        }, o.prototype.init = function () {
            var t;
            return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, o.prototype.start = function () {
            var e, i, s, o, n;
            if (this.stopped = !1, this.boxes = function () {
                var t, i, s, o;
                for (o = [], t = 0, i = (s = this.element.querySelectorAll("." + this.config.boxClass)).length; t < i; t++) e = s[t], o.push(e);
                return o
            }.call(this), this.all = function () {
                var t, i, s, o;
                for (o = [], t = 0, i = (s = this.boxes).length; t < i; t++) e = s[t], o.push(e);
                return o
            }.call(this), this.boxes.length) if (this.disabled()) this.resetStyle(); else for (i = 0, s = (o = this.boxes).length; i < s; i++) e = o[i], this.applyStyle(e, !0);
            if (this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) return new t((n = this, function (t) {
                var e, i, s, o, r;
                for (r = [], e = 0, i = t.length; e < i; e++) o = t[e], r.push(function () {
                    var t, e, i, n;
                    for (n = [], t = 0, e = (i = o.addedNodes || []).length; t < e; t++) s = i[t], n.push(this.doSync(s));
                    return n
                }.call(n));
                return r
            })).observe(document.body, {childList: !0, subtree: !0})
        }, o.prototype.stop = function () {
            if (this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval) return clearInterval(this.interval)
        }, o.prototype.sync = function (e) {
            if (t.notSupported) return this.doSync(this.element)
        }, o.prototype.doSync = function (t) {
            var e, i, s, o, n;
            if (null == t && (t = this.element), 1 === t.nodeType) {
                for (n = [], i = 0, s = (o = (t = t.parentNode || t).querySelectorAll("." + this.config.boxClass)).length; i < s; i++) e = o[i], r.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), n.push(this.scrolled = !0)) : n.push(void 0);
                return n
            }
        }, o.prototype.show = function (t) {
            return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
        }, o.prototype.applyStyle = function (t, e) {
            var i, s, o, n;
            return s = t.getAttribute("data-wow-duration"), i = t.getAttribute("data-wow-delay"), o = t.getAttribute("data-wow-iteration"), this.animate((n = this, function () {
                return n.customStyle(t, e, s, i, o)
            }))
        }, o.prototype.animate = "requestAnimationFrame" in window ? function (t) {
            return window.requestAnimationFrame(t)
        } : function (t) {
            return t()
        }, o.prototype.resetStyle = function () {
            var t, e, i, s, o;
            for (o = [], e = 0, i = (s = this.boxes).length; e < i; e++) t = s[e], o.push(t.style.visibility = "visible");
            return o
        }, o.prototype.resetAnimation = function (t) {
            var e;
            if (t.type.toLowerCase().indexOf("animationend") >= 0) return (e = t.target || t.srcElement).className = e.className.replace(this.config.animateClass, "").trim()
        }, o.prototype.customStyle = function (t, e, i, s, o) {
            return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", i && this.vendorSet(t.style, {animationDuration: i}), s && this.vendorSet(t.style, {animationDelay: s}), o && this.vendorSet(t.style, {animationIterationCount: o}), this.vendorSet(t.style, {animationName: e ? "none" : this.cachedAnimationName(t)}), t
        }, o.prototype.vendors = ["moz", "webkit"], o.prototype.vendorSet = function (t, e) {
            var i, s, o, n;
            for (i in s = [], e) o = e[i], t["" + i] = o, s.push(function () {
                var e, s, r, a;
                for (a = [], e = 0, s = (r = this.vendors).length; e < s; e++) n = r[e], a.push(t["" + n + i.charAt(0).toUpperCase() + i.substr(1)] = o);
                return a
            }.call(this));
            return s
        }, o.prototype.vendorCSS = function (t, e) {
            var i, o, n, r, a, l;
            for (r = (a = s(t)).getPropertyCSSValue(e), i = 0, o = (n = this.vendors).length; i < o; i++) l = n[i], r = r || a.getPropertyCSSValue("-" + l + "-" + e);
            return r
        }, o.prototype.animationName = function (t) {
            var e;
            try {
                e = this.vendorCSS(t, "animation-name").cssText
            } catch (i) {
                e = s(t).getPropertyValue("animation-name")
            }
            return "none" === e ? "" : e
        }, o.prototype.cacheAnimationName = function (t) {
            return this.animationNameCache.set(t, this.animationName(t))
        }, o.prototype.cachedAnimationName = function (t) {
            return this.animationNameCache.get(t)
        }, o.prototype.scrollHandler = function () {
            return this.scrolled = !0
        }, o.prototype.scrollCallback = function () {
            var t;
            if (this.scrolled && (this.scrolled = !1, this.boxes = function () {
                var e, i, s, o;
                for (o = [], e = 0, i = (s = this.boxes).length; e < i; e++) (t = s[e]) && (this.isVisible(t) ? this.show(t) : o.push(t));
                return o
            }.call(this), !this.boxes.length && !this.config.live)) return this.stop()
        }, o.prototype.offsetTop = function (t) {
            for (var e; void 0 === t.offsetTop;) t = t.parentNode;
            for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
            return e
        }, o.prototype.isVisible = function (t) {
            var e, i, s, o, n;
            return i = t.getAttribute("data-wow-offset") || this.config.offset, o = (n = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset) + Math.min(this.element.clientHeight, this.util().innerHeight()) - i, e = (s = this.offsetTop(t)) + t.clientHeight, s <= o && e >= n
        }, o.prototype.util = function () {
            return null != this._util ? this._util : this._util = new e
        }, o.prototype.disabled = function () {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, o
    }()
}.call(this), function (t) {
    t(window).on("load", function () {
        t("#status").fadeOut(), t("#preloader").delay(350).fadeOut("slow"), t("body").delay(350).css({overflow: "visible"})
    });
    var e = t(".loop");
    e.length > 0 && e.owlCarousel({
        center: !0,
        loop: !0,
        autoplay: !0,
        autoplayTimeout: 2e3,
        margin: 5,
        responsive: {300: {items: 2}, 768: {items: 3}, 1170: {items: 5}}
    });
    var i = t(".loop-testi");

    function s(e) {
        t(e.target).prev(".panel-heading").find(".more-less").toggleClass("glyphicon-plus glyphicon-minus")
    }

    i.length > 0 && i.owlCarousel({
        center: !0,
        loop: !0,
        smartSpeed: 600,
        responsive: {300: {items: 1}, 1170: {items: 3}}
    }), (new WOW).init(), t(".panel-group").on("hidden.bs.collapse", s), t(".panel-group").on("shown.bs.collapse", s);
    var o = t(".map-holder");
    if (o.length > 0) {
        new GMaps({div: "#gmap", lat: -12.043333, lng: -77.028333});
        o.on("click", function () {
            t(this).children().css("pointer-events", "auto")
        }), o.on("mouseleave", function () {
            t(this).children().css("pointer-events", "none")
        })
    }
}(jQuery), function () {
    function t(t) {
        var e = $(document).scrollTop();
        $(".menu a").each(function () {
            var t = $(this), i = $(t.attr("href"));
            i.position().top <= e && i.position().top + i.height() > e ? ($(".menu li a").removeClass("active"), t.addClass("active")) : t.removeClass("active")
        })
    }


}();