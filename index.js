module.exports = function (elem, autoSize) {
	if (typeof autoSize === 'undefined') autoSize = true
	
	var ret =
		{ setSize: function(width, height) {
				this.width = this.canvas.width = width;
				this.height = this.canvas.height = height;
			},

			/**
			* Clears the canvas by filling it with the color specified, or erasing all
			* pixels if no color is specified.
			*/
			clear: function(color) {
				if(color) {
					this.context.fillStyle = color;
					this.context.fillRect(0, 0, this.width, this.height);
				}
				else {
					this.context.clearRect(0, 0, this.width, this.height);
				}
			},

			/**
			* Pops up a bitmap image representation of the canvas in a new window.
			*/
			popImage: function() {
					var win = window.open("", "Canvas Image"),
						src = this.canvas.toDataURL("image/png");

					win.document.write("<img src='" + src
						+ "' width='" + this.width
						+ "' height='" + this.height + "'/>");
			}
		}

	/**
	* Initializes chaos by finding the canvas on the page and resizing it to the
	* full size of the browser.
	*/

	/** Adapted from the original to work with multiple canvases **/

	if (!elem) ret.canvas = document.getElementById("canvas")
	else if (typeof elem === 'string') ret.canvas = document.getElementById("canvas")
	else ret.canvas = elem

	ret.context = ret.canvas.getContext("2d")
	if (autoSize) ret.setSize(window.innerWidth, window.innerHeight)

	return ret
}
