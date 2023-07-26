/*!
	autosize 4.0.2
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['module', 'exports'], factory);
	} else if (typeof exports !== "undefined") {
		factory(module, exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod, mod.exports);
		global.autosize = mod.exports;
	}
})(this, function (module, exports) {
	'use strict';

	var map = typeof Map === "function" ? new Map() : function () {
		var keys = [];
		var values = [];

		return {
			has: function has(key) {
				return keys.indexOf(key) > -1;
			},
			get: function get(key) {
				return values[keys.indexOf(key)];
			},
			set: function set(key, value) {
				if (keys.indexOf(key) === -1) {
					keys.push(key);
					values.push(value);
				}
			},
			delete: function _delete(key) {
				var index = keys.indexOf(key);
				if (index > -1) {
					keys.splice(index, 1);
					values.splice(index, 1);
				}
			}
		};
	}();

	var createEvent = function createEvent(name) {
		return new Event(name, { bubbles: true });
	};
	try {
		new Event('test');
	} catch (e) {
		// IE does not support `new Event()`
		createEvent = function createEvent(name) {
			var evt = document.createEvent('Event');
			evt.initEvent(name, true, false);
			return evt;
		};
	}

	function assign(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

		var heightOffset = null;
		var clientWidth = null;
		var cachedHeight = null;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
			}
			// Fix when a textarea is not on document body and heightOffset is Not a Number
			if (isNaN(heightOffset)) {
				heightOffset = 0;
			}

			update();
		}

		function changeOverflow(value) {
			{
				// Chrome/Safari-specific fix:
				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
				// made available by removing the scrollbar. The following forces the necessary text reflow.
				var width = ta.style.width;
				ta.style.width = '0px';
				// Force reflow:
				/* jshint ignore:start */
				ta.offsetWidth;
				/* jshint ignore:end */
				ta.style.width = width;
			}

			ta.style.overflowY = value;
		}

		function getParentOverflows(el) {
			var arr = [];

			while (el && el.parentNode && el.parentNode instanceof Element) {
				if (el.parentNode.scrollTop) {
					arr.push({
						node: el.parentNode,
						scrollTop: el.parentNode.scrollTop
					});
				}
				el = el.parentNode;
			}

			return arr;
		}

		function resize() {
			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				return;
			}

			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = '';
			ta.style.height = ta.scrollHeight + heightOffset + 'px';

			// used to check if an update is actually necessary on window.resize
			clientWidth = ta.clientWidth;

			// prevents scroll-position jumping
			overflows.forEach(function (el) {
				el.node.scrollTop = el.scrollTop;
			});

			if (docTop) {
				document.documentElement.scrollTop = docTop;
			}
		}

		function update() {
			resize();

			var styleHeight = Math.round(parseFloat(ta.style.height));
			var computed = window.getComputedStyle(ta, null);

			// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
			var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;

			// The actual height not matching the style height (set via the resize method) indicates that 
			// the max-height has been exceeded, in which case the overflow should be allowed.
			if (actualHeight < styleHeight) {
				if (computed.overflowY === 'hidden') {
					changeOverflow('scroll');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			}

			if (cachedHeight !== actualHeight) {
				cachedHeight = actualHeight;
				var evt = createEvent('autosize:resized');
				try {
					ta.dispatchEvent(evt);
				} catch (err) {
					// Firefox will throw an error on dispatchEvent for a detached element
					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
				}
			}
		}

		var pageResize = function pageResize() {
			if (ta.clientWidth !== clientWidth) {
				update();
			}
		};

		var destroy = function (style) {
			window.removeEventListener('resize', pageResize, false);
			ta.removeEventListener('input', update, false);
			ta.removeEventListener('keyup', update, false);
			ta.removeEventListener('autosize:destroy', destroy, false);
			ta.removeEventListener('autosize:update', update, false);

			Object.keys(style).forEach(function (key) {
				ta.style[key] = style[key];
			});

			map.delete(ta);
		}.bind(ta, {
			height: ta.style.height,
			resize: ta.style.resize,
			overflowY: ta.style.overflowY,
			overflowX: ta.style.overflowX,
			wordWrap: ta.style.wordWrap
		});

		ta.addEventListener('autosize:destroy', destroy, false);

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', update, false);
		}

		window.addEventListener('resize', pageResize, false);
		ta.addEventListener('input', update, false);
		ta.addEventListener('autosize:update', update, false);
		ta.style.overflowX = 'hidden';
		ta.style.wordWrap = 'break-word';

		map.set(ta, {
			destroy: destroy,
			update: update
		});

		init();
	}

	function destroy(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.destroy();
		}
	}

	function update(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.update();
		}
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
		autosize = function autosize(el) {
			return el;
		};
		autosize.destroy = function (el) {
			return el;
		};
		autosize.update = function (el) {
			return el;
		};
	} else {
		autosize = function autosize(el, options) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], function (x) {
					return assign(x, options);
				});
			}
			return el;
		};
		autosize.destroy = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], destroy);
			}
			return el;
		};
		autosize.update = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], update);
			}
			return el;
		};
	}

	exports.default = autosize;
	module.exports = exports['default'];
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhdXRvc2l6ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcblx0YXV0b3NpemUgNC4wLjJcblx0bGljZW5zZTogTUlUXG5cdGh0dHA6Ly93d3cuamFja2xtb29yZS5jb20vYXV0b3NpemVcbiovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHRkZWZpbmUoWydtb2R1bGUnLCAnZXhwb3J0cyddLCBmYWN0b3J5KTtcblx0fSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdGZhY3RvcnkobW9kdWxlLCBleHBvcnRzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgbW9kID0ge1xuXHRcdFx0ZXhwb3J0czoge31cblx0XHR9O1xuXHRcdGZhY3RvcnkobW9kLCBtb2QuZXhwb3J0cyk7XG5cdFx0Z2xvYmFsLmF1dG9zaXplID0gbW9kLmV4cG9ydHM7XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBtYXAgPSB0eXBlb2YgTWFwID09PSBcImZ1bmN0aW9uXCIgPyBuZXcgTWFwKCkgOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGtleXMgPSBbXTtcblx0XHR2YXIgdmFsdWVzID0gW107XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0aGFzOiBmdW5jdGlvbiBoYXMoa2V5KSB7XG5cdFx0XHRcdHJldHVybiBrZXlzLmluZGV4T2Yoa2V5KSA+IC0xO1xuXHRcdFx0fSxcblx0XHRcdGdldDogZnVuY3Rpb24gZ2V0KGtleSkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWVzW2tleXMuaW5kZXhPZihrZXkpXTtcblx0XHRcdH0sXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG5cdFx0XHRcdGlmIChrZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcblx0XHRcdFx0XHRrZXlzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR2YWx1ZXMucHVzaCh2YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRkZWxldGU6IGZ1bmN0aW9uIF9kZWxldGUoa2V5KSB7XG5cdFx0XHRcdHZhciBpbmRleCA9IGtleXMuaW5kZXhPZihrZXkpO1xuXHRcdFx0XHRpZiAoaW5kZXggPiAtMSkge1xuXHRcdFx0XHRcdGtleXMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0XHR2YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdH0oKTtcblxuXHR2YXIgY3JlYXRlRXZlbnQgPSBmdW5jdGlvbiBjcmVhdGVFdmVudChuYW1lKSB7XG5cdFx0cmV0dXJuIG5ldyBFdmVudChuYW1lLCB7IGJ1YmJsZXM6IHRydWUgfSk7XG5cdH07XG5cdHRyeSB7XG5cdFx0bmV3IEV2ZW50KCd0ZXN0Jyk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHQvLyBJRSBkb2VzIG5vdCBzdXBwb3J0IGBuZXcgRXZlbnQoKWBcblx0XHRjcmVhdGVFdmVudCA9IGZ1bmN0aW9uIGNyZWF0ZUV2ZW50KG5hbWUpIHtcblx0XHRcdHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcblx0XHRcdGV2dC5pbml0RXZlbnQobmFtZSwgdHJ1ZSwgZmFsc2UpO1xuXHRcdFx0cmV0dXJuIGV2dDtcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gYXNzaWduKHRhKSB7XG5cdFx0aWYgKCF0YSB8fCAhdGEubm9kZU5hbWUgfHwgdGEubm9kZU5hbWUgIT09ICdURVhUQVJFQScgfHwgbWFwLmhhcyh0YSkpIHJldHVybjtcblxuXHRcdHZhciBoZWlnaHRPZmZzZXQgPSBudWxsO1xuXHRcdHZhciBjbGllbnRXaWR0aCA9IG51bGw7XG5cdFx0dmFyIGNhY2hlZEhlaWdodCA9IG51bGw7XG5cblx0XHRmdW5jdGlvbiBpbml0KCkge1xuXHRcdFx0dmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGEsIG51bGwpO1xuXG5cdFx0XHRpZiAoc3R5bGUucmVzaXplID09PSAndmVydGljYWwnKSB7XG5cdFx0XHRcdHRhLnN0eWxlLnJlc2l6ZSA9ICdub25lJztcblx0XHRcdH0gZWxzZSBpZiAoc3R5bGUucmVzaXplID09PSAnYm90aCcpIHtcblx0XHRcdFx0dGEuc3R5bGUucmVzaXplID0gJ2hvcml6b250YWwnO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc3R5bGUuYm94U2l6aW5nID09PSAnY29udGVudC1ib3gnKSB7XG5cdFx0XHRcdGhlaWdodE9mZnNldCA9IC0ocGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nVG9wKSArIHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ0JvdHRvbSkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aGVpZ2h0T2Zmc2V0ID0gcGFyc2VGbG9hdChzdHlsZS5ib3JkZXJUb3BXaWR0aCkgKyBwYXJzZUZsb2F0KHN0eWxlLmJvcmRlckJvdHRvbVdpZHRoKTtcblx0XHRcdH1cblx0XHRcdC8vIEZpeCB3aGVuIGEgdGV4dGFyZWEgaXMgbm90IG9uIGRvY3VtZW50IGJvZHkgYW5kIGhlaWdodE9mZnNldCBpcyBOb3QgYSBOdW1iZXJcblx0XHRcdGlmIChpc05hTihoZWlnaHRPZmZzZXQpKSB7XG5cdFx0XHRcdGhlaWdodE9mZnNldCA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZSgpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGNoYW5nZU92ZXJmbG93KHZhbHVlKSB7XG5cdFx0XHR7XG5cdFx0XHRcdC8vIENocm9tZS9TYWZhcmktc3BlY2lmaWMgZml4OlxuXHRcdFx0XHQvLyBXaGVuIHRoZSB0ZXh0YXJlYSB5LW92ZXJmbG93IGlzIGhpZGRlbiwgQ2hyb21lL1NhZmFyaSBkbyBub3QgcmVmbG93IHRoZSB0ZXh0IHRvIGFjY291bnQgZm9yIHRoZSBzcGFjZVxuXHRcdFx0XHQvLyBtYWRlIGF2YWlsYWJsZSBieSByZW1vdmluZyB0aGUgc2Nyb2xsYmFyLiBUaGUgZm9sbG93aW5nIGZvcmNlcyB0aGUgbmVjZXNzYXJ5IHRleHQgcmVmbG93LlxuXHRcdFx0XHR2YXIgd2lkdGggPSB0YS5zdHlsZS53aWR0aDtcblx0XHRcdFx0dGEuc3R5bGUud2lkdGggPSAnMHB4Jztcblx0XHRcdFx0Ly8gRm9yY2UgcmVmbG93OlxuXHRcdFx0XHQvKiBqc2hpbnQgaWdub3JlOnN0YXJ0ICovXG5cdFx0XHRcdHRhLm9mZnNldFdpZHRoO1xuXHRcdFx0XHQvKiBqc2hpbnQgaWdub3JlOmVuZCAqL1xuXHRcdFx0XHR0YS5zdHlsZS53aWR0aCA9IHdpZHRoO1xuXHRcdFx0fVxuXG5cdFx0XHR0YS5zdHlsZS5vdmVyZmxvd1kgPSB2YWx1ZTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBnZXRQYXJlbnRPdmVyZmxvd3MoZWwpIHtcblx0XHRcdHZhciBhcnIgPSBbXTtcblxuXHRcdFx0d2hpbGUgKGVsICYmIGVsLnBhcmVudE5vZGUgJiYgZWwucGFyZW50Tm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcblx0XHRcdFx0aWYgKGVsLnBhcmVudE5vZGUuc2Nyb2xsVG9wKSB7XG5cdFx0XHRcdFx0YXJyLnB1c2goe1xuXHRcdFx0XHRcdFx0bm9kZTogZWwucGFyZW50Tm9kZSxcblx0XHRcdFx0XHRcdHNjcm9sbFRvcDogZWwucGFyZW50Tm9kZS5zY3JvbGxUb3Bcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbCA9IGVsLnBhcmVudE5vZGU7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBhcnI7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gcmVzaXplKCkge1xuXHRcdFx0aWYgKHRhLnNjcm9sbEhlaWdodCA9PT0gMCkge1xuXHRcdFx0XHQvLyBJZiB0aGUgc2Nyb2xsSGVpZ2h0IGlzIDAsIHRoZW4gdGhlIGVsZW1lbnQgcHJvYmFibHkgaGFzIGRpc3BsYXk6bm9uZSBvciBpcyBkZXRhY2hlZCBmcm9tIHRoZSBET00uXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIG92ZXJmbG93cyA9IGdldFBhcmVudE92ZXJmbG93cyh0YSk7XG5cdFx0XHR2YXIgZG9jVG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7IC8vIE5lZWRlZCBmb3IgTW9iaWxlIElFICh0aWNrZXQgIzI0MClcblxuXHRcdFx0dGEuc3R5bGUuaGVpZ2h0ID0gJyc7XG5cdFx0XHR0YS5zdHlsZS5oZWlnaHQgPSB0YS5zY3JvbGxIZWlnaHQgKyBoZWlnaHRPZmZzZXQgKyAncHgnO1xuXG5cdFx0XHQvLyB1c2VkIHRvIGNoZWNrIGlmIGFuIHVwZGF0ZSBpcyBhY3R1YWxseSBuZWNlc3Nhcnkgb24gd2luZG93LnJlc2l6ZVxuXHRcdFx0Y2xpZW50V2lkdGggPSB0YS5jbGllbnRXaWR0aDtcblxuXHRcdFx0Ly8gcHJldmVudHMgc2Nyb2xsLXBvc2l0aW9uIGp1bXBpbmdcblx0XHRcdG92ZXJmbG93cy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuXHRcdFx0XHRlbC5ub2RlLnNjcm9sbFRvcCA9IGVsLnNjcm9sbFRvcDtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoZG9jVG9wKSB7XG5cdFx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSBkb2NUb3A7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdXBkYXRlKCkge1xuXHRcdFx0cmVzaXplKCk7XG5cblx0XHRcdHZhciBzdHlsZUhlaWdodCA9IE1hdGgucm91bmQocGFyc2VGbG9hdCh0YS5zdHlsZS5oZWlnaHQpKTtcblx0XHRcdHZhciBjb21wdXRlZCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRhLCBudWxsKTtcblxuXHRcdFx0Ly8gVXNpbmcgb2Zmc2V0SGVpZ2h0IGFzIGEgcmVwbGFjZW1lbnQgZm9yIGNvbXB1dGVkLmhlaWdodCBpbiBJRSwgYmVjYXVzZSBJRSBkb2VzIG5vdCBhY2NvdW50IHVzZSBvZiBib3JkZXItYm94XG5cdFx0XHR2YXIgYWN0dWFsSGVpZ2h0ID0gY29tcHV0ZWQuYm94U2l6aW5nID09PSAnY29udGVudC1ib3gnID8gTWF0aC5yb3VuZChwYXJzZUZsb2F0KGNvbXB1dGVkLmhlaWdodCkpIDogdGEub2Zmc2V0SGVpZ2h0O1xuXG5cdFx0XHQvLyBUaGUgYWN0dWFsIGhlaWdodCBub3QgbWF0Y2hpbmcgdGhlIHN0eWxlIGhlaWdodCAoc2V0IHZpYSB0aGUgcmVzaXplIG1ldGhvZCkgaW5kaWNhdGVzIHRoYXQgXG5cdFx0XHQvLyB0aGUgbWF4LWhlaWdodCBoYXMgYmVlbiBleGNlZWRlZCwgaW4gd2hpY2ggY2FzZSB0aGUgb3ZlcmZsb3cgc2hvdWxkIGJlIGFsbG93ZWQuXG5cdFx0XHRpZiAoYWN0dWFsSGVpZ2h0IDwgc3R5bGVIZWlnaHQpIHtcblx0XHRcdFx0aWYgKGNvbXB1dGVkLm92ZXJmbG93WSA9PT0gJ2hpZGRlbicpIHtcblx0XHRcdFx0XHRjaGFuZ2VPdmVyZmxvdygnc2Nyb2xsJyk7XG5cdFx0XHRcdFx0cmVzaXplKCk7XG5cdFx0XHRcdFx0YWN0dWFsSGVpZ2h0ID0gY29tcHV0ZWQuYm94U2l6aW5nID09PSAnY29udGVudC1ib3gnID8gTWF0aC5yb3VuZChwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRhLCBudWxsKS5oZWlnaHQpKSA6IHRhLm9mZnNldEhlaWdodDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gTm9ybWFsbHkga2VlcCBvdmVyZmxvdyBzZXQgdG8gaGlkZGVuLCB0byBhdm9pZCBmbGFzaCBvZiBzY3JvbGxiYXIgYXMgdGhlIHRleHRhcmVhIGV4cGFuZHMuXG5cdFx0XHRcdGlmIChjb21wdXRlZC5vdmVyZmxvd1kgIT09ICdoaWRkZW4nKSB7XG5cdFx0XHRcdFx0Y2hhbmdlT3ZlcmZsb3coJ2hpZGRlbicpO1xuXHRcdFx0XHRcdHJlc2l6ZSgpO1xuXHRcdFx0XHRcdGFjdHVhbEhlaWdodCA9IGNvbXB1dGVkLmJveFNpemluZyA9PT0gJ2NvbnRlbnQtYm94JyA/IE1hdGgucm91bmQocGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YSwgbnVsbCkuaGVpZ2h0KSkgOiB0YS5vZmZzZXRIZWlnaHQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKGNhY2hlZEhlaWdodCAhPT0gYWN0dWFsSGVpZ2h0KSB7XG5cdFx0XHRcdGNhY2hlZEhlaWdodCA9IGFjdHVhbEhlaWdodDtcblx0XHRcdFx0dmFyIGV2dCA9IGNyZWF0ZUV2ZW50KCdhdXRvc2l6ZTpyZXNpemVkJyk7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dGEuZGlzcGF0Y2hFdmVudChldnQpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHQvLyBGaXJlZm94IHdpbGwgdGhyb3cgYW4gZXJyb3Igb24gZGlzcGF0Y2hFdmVudCBmb3IgYSBkZXRhY2hlZCBlbGVtZW50XG5cdFx0XHRcdFx0Ly8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODg5Mzc2XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHR2YXIgcGFnZVJlc2l6ZSA9IGZ1bmN0aW9uIHBhZ2VSZXNpemUoKSB7XG5cdFx0XHRpZiAodGEuY2xpZW50V2lkdGggIT09IGNsaWVudFdpZHRoKSB7XG5cdFx0XHRcdHVwZGF0ZSgpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHR2YXIgZGVzdHJveSA9IGZ1bmN0aW9uIChzdHlsZSkge1xuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHBhZ2VSZXNpemUsIGZhbHNlKTtcblx0XHRcdHRhLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdXBkYXRlLCBmYWxzZSk7XG5cdFx0XHR0YS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwZGF0ZSwgZmFsc2UpO1xuXHRcdFx0dGEucmVtb3ZlRXZlbnRMaXN0ZW5lcignYXV0b3NpemU6ZGVzdHJveScsIGRlc3Ryb3ksIGZhbHNlKTtcblx0XHRcdHRhLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2F1dG9zaXplOnVwZGF0ZScsIHVwZGF0ZSwgZmFsc2UpO1xuXG5cdFx0XHRPYmplY3Qua2V5cyhzdHlsZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdHRhLnN0eWxlW2tleV0gPSBzdHlsZVtrZXldO1xuXHRcdFx0fSk7XG5cblx0XHRcdG1hcC5kZWxldGUodGEpO1xuXHRcdH0uYmluZCh0YSwge1xuXHRcdFx0aGVpZ2h0OiB0YS5zdHlsZS5oZWlnaHQsXG5cdFx0XHRyZXNpemU6IHRhLnN0eWxlLnJlc2l6ZSxcblx0XHRcdG92ZXJmbG93WTogdGEuc3R5bGUub3ZlcmZsb3dZLFxuXHRcdFx0b3ZlcmZsb3dYOiB0YS5zdHlsZS5vdmVyZmxvd1gsXG5cdFx0XHR3b3JkV3JhcDogdGEuc3R5bGUud29yZFdyYXBcblx0XHR9KTtcblxuXHRcdHRhLmFkZEV2ZW50TGlzdGVuZXIoJ2F1dG9zaXplOmRlc3Ryb3knLCBkZXN0cm95LCBmYWxzZSk7XG5cblx0XHQvLyBJRTkgZG9lcyBub3QgZmlyZSBvbnByb3BlcnR5Y2hhbmdlIG9yIG9uaW5wdXQgZm9yIGRlbGV0aW9ucyxcblx0XHQvLyBzbyBiaW5kaW5nIHRvIG9ua2V5dXAgdG8gY2F0Y2ggbW9zdCBvZiB0aG9zZSBldmVudHMuXG5cdFx0Ly8gVGhlcmUgaXMgbm8gd2F5IHRoYXQgSSBrbm93IG9mIHRvIGRldGVjdCBzb21ldGhpbmcgbGlrZSAnY3V0JyBpbiBJRTkuXG5cdFx0aWYgKCdvbnByb3BlcnR5Y2hhbmdlJyBpbiB0YSAmJiAnb25pbnB1dCcgaW4gdGEpIHtcblx0XHRcdHRhLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdXBkYXRlLCBmYWxzZSk7XG5cdFx0fVxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHBhZ2VSZXNpemUsIGZhbHNlKTtcblx0XHR0YS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHVwZGF0ZSwgZmFsc2UpO1xuXHRcdHRhLmFkZEV2ZW50TGlzdGVuZXIoJ2F1dG9zaXplOnVwZGF0ZScsIHVwZGF0ZSwgZmFsc2UpO1xuXHRcdHRhLnN0eWxlLm92ZXJmbG93WCA9ICdoaWRkZW4nO1xuXHRcdHRhLnN0eWxlLndvcmRXcmFwID0gJ2JyZWFrLXdvcmQnO1xuXG5cdFx0bWFwLnNldCh0YSwge1xuXHRcdFx0ZGVzdHJveTogZGVzdHJveSxcblx0XHRcdHVwZGF0ZTogdXBkYXRlXG5cdFx0fSk7XG5cblx0XHRpbml0KCk7XG5cdH1cblxuXHRmdW5jdGlvbiBkZXN0cm95KHRhKSB7XG5cdFx0dmFyIG1ldGhvZHMgPSBtYXAuZ2V0KHRhKTtcblx0XHRpZiAobWV0aG9kcykge1xuXHRcdFx0bWV0aG9kcy5kZXN0cm95KCk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gdXBkYXRlKHRhKSB7XG5cdFx0dmFyIG1ldGhvZHMgPSBtYXAuZ2V0KHRhKTtcblx0XHRpZiAobWV0aG9kcykge1xuXHRcdFx0bWV0aG9kcy51cGRhdGUoKTtcblx0XHR9XG5cdH1cblxuXHR2YXIgYXV0b3NpemUgPSBudWxsO1xuXG5cdC8vIERvIG5vdGhpbmcgaW4gTm9kZS5qcyBlbnZpcm9ubWVudCBhbmQgSUU4IChvciBsb3dlcilcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdGF1dG9zaXplID0gZnVuY3Rpb24gYXV0b3NpemUoZWwpIHtcblx0XHRcdHJldHVybiBlbDtcblx0XHR9O1xuXHRcdGF1dG9zaXplLmRlc3Ryb3kgPSBmdW5jdGlvbiAoZWwpIHtcblx0XHRcdHJldHVybiBlbDtcblx0XHR9O1xuXHRcdGF1dG9zaXplLnVwZGF0ZSA9IGZ1bmN0aW9uIChlbCkge1xuXHRcdFx0cmV0dXJuIGVsO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0YXV0b3NpemUgPSBmdW5jdGlvbiBhdXRvc2l6ZShlbCwgb3B0aW9ucykge1xuXHRcdFx0aWYgKGVsKSB7XG5cdFx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZWwubGVuZ3RoID8gZWwgOiBbZWxdLCBmdW5jdGlvbiAoeCkge1xuXHRcdFx0XHRcdHJldHVybiBhc3NpZ24oeCwgb3B0aW9ucyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGVsO1xuXHRcdH07XG5cdFx0YXV0b3NpemUuZGVzdHJveSA9IGZ1bmN0aW9uIChlbCkge1xuXHRcdFx0aWYgKGVsKSB7XG5cdFx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZWwubGVuZ3RoID8gZWwgOiBbZWxdLCBkZXN0cm95KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBlbDtcblx0XHR9O1xuXHRcdGF1dG9zaXplLnVwZGF0ZSA9IGZ1bmN0aW9uIChlbCkge1xuXHRcdFx0aWYgKGVsKSB7XG5cdFx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZWwubGVuZ3RoID8gZWwgOiBbZWxdLCB1cGRhdGUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGVsO1xuXHRcdH07XG5cdH1cblxuXHRleHBvcnRzLmRlZmF1bHQgPSBhdXRvc2l6ZTtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG59KTsiXSwiZmlsZSI6ImF1dG9zaXplLmpzIn0=
