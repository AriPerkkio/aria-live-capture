import { n as __esmMin } from "./globals-runtime-XrdeG17s.js";
import { Ot as _extends, at as _wrapNativeSuper, ct as init_inheritsLoose, kt as init_extends, lt as _assertThisInitialized, ot as init_wrapNativeSuper, st as _inheritsLoose, ut as init_assertThisInitialized } from "./globals-runtime-C8r9nrt8.js";
//#region ../../node_modules/polished/dist/polished.esm.js
/**
* Check if a string ends with something
* @private
*/
function endsWith(string, suffix) {
	return string.substr(-suffix.length) === suffix;
}
/**
* Returns a given CSS value minus its unit of measure.
*
* @example
* // Styles as object usage
* const styles = {
*   '--dimension': stripUnit('100px')
* }
*
* // styled-components usage
* const div = styled.div`
*   --dimension: ${stripUnit('100px')};
* `
*
* // CSS in JS Output
*
* element {
*   '--dimension': 100
* }
*/
function stripUnit(value) {
	if (typeof value !== "string") return value;
	return value.match(cssRegex$1) ? parseFloat(value) : value;
}
function colorToInt(color) {
	return Math.round(color * 255);
}
function convertToInt(red, green, blue) {
	return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}
function hslToRgb(hue, saturation, lightness, convert) {
	if (convert === void 0) convert = convertToInt;
	if (saturation === 0) return convert(lightness, lightness, lightness);
	var huePrime = (hue % 360 + 360) % 360 / 60;
	var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
	var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
	var red = 0;
	var green = 0;
	var blue = 0;
	if (huePrime >= 0 && huePrime < 1) {
		red = chroma;
		green = secondComponent;
	} else if (huePrime >= 1 && huePrime < 2) {
		red = secondComponent;
		green = chroma;
	} else if (huePrime >= 2 && huePrime < 3) {
		green = chroma;
		blue = secondComponent;
	} else if (huePrime >= 3 && huePrime < 4) {
		green = secondComponent;
		blue = chroma;
	} else if (huePrime >= 4 && huePrime < 5) {
		red = secondComponent;
		blue = chroma;
	} else if (huePrime >= 5 && huePrime < 6) {
		red = chroma;
		blue = secondComponent;
	}
	var lightnessModification = lightness - chroma / 2;
	var finalRed = red + lightnessModification;
	var finalGreen = green + lightnessModification;
	var finalBlue = blue + lightnessModification;
	return convert(finalRed, finalGreen, finalBlue);
}
/**
* Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
* @private
*/
function nameToHex(color) {
	if (typeof color !== "string") return color;
	var normalizedColorName = color.toLowerCase();
	return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
}
/**
* Returns an RgbColor or RgbaColor object. This utility function is only useful
* if want to extract a color component. With the color util `toColorString` you
* can convert a RgbColor or RgbaColor object back to a string.
*
* @example
* // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
* const color1 = parseToRgb('rgb(255, 0, 0)');
* // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
* const color2 = parseToRgb('hsla(210, 10%, 40%, 0.75)');
*/
function parseToRgb(color) {
	if (typeof color !== "string") throw new PolishedError(3);
	var normalizedColor = nameToHex(color);
	if (normalizedColor.match(hexRegex)) return {
		red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
		green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
		blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
	};
	if (normalizedColor.match(hexRgbaRegex)) {
		var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
		return {
			red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
			green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
			blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
			alpha
		};
	}
	if (normalizedColor.match(reducedHexRegex)) return {
		red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
		green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
		blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
	};
	if (normalizedColor.match(reducedRgbaHexRegex)) {
		var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));
		return {
			red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
			green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
			blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
			alpha: _alpha
		};
	}
	var rgbMatched = rgbRegex.exec(normalizedColor);
	if (rgbMatched) return {
		red: parseInt("" + rgbMatched[1], 10),
		green: parseInt("" + rgbMatched[2], 10),
		blue: parseInt("" + rgbMatched[3], 10)
	};
	var rgbaMatched = rgbaRegex.exec(normalizedColor.substring(0, 50));
	if (rgbaMatched) return {
		red: parseInt("" + rgbaMatched[1], 10),
		green: parseInt("" + rgbaMatched[2], 10),
		blue: parseInt("" + rgbaMatched[3], 10),
		alpha: parseFloat("" + rgbaMatched[4]) > 1 ? parseFloat("" + rgbaMatched[4]) / 100 : parseFloat("" + rgbaMatched[4])
	};
	var hslMatched = hslRegex.exec(normalizedColor);
	if (hslMatched) {
		var rgbColorString = "rgb(" + hslToRgb(parseInt("" + hslMatched[1], 10), parseInt("" + hslMatched[2], 10) / 100, parseInt("" + hslMatched[3], 10) / 100) + ")";
		var hslRgbMatched = rgbRegex.exec(rgbColorString);
		if (!hslRgbMatched) throw new PolishedError(4, normalizedColor, rgbColorString);
		return {
			red: parseInt("" + hslRgbMatched[1], 10),
			green: parseInt("" + hslRgbMatched[2], 10),
			blue: parseInt("" + hslRgbMatched[3], 10)
		};
	}
	var hslaMatched = hslaRegex.exec(normalizedColor.substring(0, 50));
	if (hslaMatched) {
		var _rgbColorString = "rgb(" + hslToRgb(parseInt("" + hslaMatched[1], 10), parseInt("" + hslaMatched[2], 10) / 100, parseInt("" + hslaMatched[3], 10) / 100) + ")";
		var _hslRgbMatched = rgbRegex.exec(_rgbColorString);
		if (!_hslRgbMatched) throw new PolishedError(4, normalizedColor, _rgbColorString);
		return {
			red: parseInt("" + _hslRgbMatched[1], 10),
			green: parseInt("" + _hslRgbMatched[2], 10),
			blue: parseInt("" + _hslRgbMatched[3], 10),
			alpha: parseFloat("" + hslaMatched[4]) > 1 ? parseFloat("" + hslaMatched[4]) / 100 : parseFloat("" + hslaMatched[4])
		};
	}
	throw new PolishedError(5);
}
function rgbToHsl(color) {
	var red = color.red / 255;
	var green = color.green / 255;
	var blue = color.blue / 255;
	var max = Math.max(red, green, blue);
	var min = Math.min(red, green, blue);
	var lightness = (max + min) / 2;
	if (max === min) if (color.alpha !== void 0) return {
		hue: 0,
		saturation: 0,
		lightness,
		alpha: color.alpha
	};
	else return {
		hue: 0,
		saturation: 0,
		lightness
	};
	var hue;
	var delta = max - min;
	var saturation = lightness > .5 ? delta / (2 - max - min) : delta / (max + min);
	switch (max) {
		case red:
			hue = (green - blue) / delta + (green < blue ? 6 : 0);
			break;
		case green:
			hue = (blue - red) / delta + 2;
			break;
		default:
			hue = (red - green) / delta + 4;
			break;
	}
	hue *= 60;
	if (color.alpha !== void 0) return {
		hue,
		saturation,
		lightness,
		alpha: color.alpha
	};
	return {
		hue,
		saturation,
		lightness
	};
}
/**
* Returns an HslColor or HslaColor object. This utility function is only useful
* if want to extract a color component. With the color util `toColorString` you
* can convert a HslColor or HslaColor object back to a string.
*
* @example
* // Assigns `{ hue: 0, saturation: 1, lightness: 0.5 }` to color1
* const color1 = parseToHsl('rgb(255, 0, 0)');
* // Assigns `{ hue: 128, saturation: 1, lightness: 0.5, alpha: 0.75 }` to color2
* const color2 = parseToHsl('hsla(128, 100%, 50%, 0.75)');
*/
function parseToHsl(color) {
	return rgbToHsl(parseToRgb(color));
}
function numberToHex(value) {
	var hex = value.toString(16);
	return hex.length === 1 ? "0" + hex : hex;
}
function colorToHex(color) {
	return numberToHex(Math.round(color * 255));
}
function convertToHex(red, green, blue) {
	return reduceHexValue$1("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}
function hslToHex(hue, saturation, lightness) {
	return hslToRgb(hue, saturation, lightness, convertToHex);
}
/**
* Returns a string value for the color. The returned result is the smallest possible hex notation.
*
* @example
* // Styles as object usage
* const styles = {
*   background: hsl(359, 0.75, 0.4),
*   background: hsl({ hue: 360, saturation: 0.75, lightness: 0.4 }),
* }
*
* // styled-components usage
* const div = styled.div`
*   background: ${hsl(359, 0.75, 0.4)};
*   background: ${hsl({ hue: 360, saturation: 0.75, lightness: 0.4 })};
* `
*
* // CSS in JS Output
*
* element {
*   background: "#b3191c";
*   background: "#b3191c";
* }
*/
function hsl(value, saturation, lightness) {
	if (typeof value === "number" && typeof saturation === "number" && typeof lightness === "number") return hslToHex(value, saturation, lightness);
	else if (typeof value === "object" && saturation === void 0 && lightness === void 0) return hslToHex(value.hue, value.saturation, value.lightness);
	throw new PolishedError(1);
}
/**
* Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
*
* @example
* // Styles as object usage
* const styles = {
*   background: hsla(359, 0.75, 0.4, 0.7),
*   background: hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 }),
*   background: hsla(359, 0.75, 0.4, 1),
* }
*
* // styled-components usage
* const div = styled.div`
*   background: ${hsla(359, 0.75, 0.4, 0.7)};
*   background: ${hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 })};
*   background: ${hsla(359, 0.75, 0.4, 1)};
* `
*
* // CSS in JS Output
*
* element {
*   background: "rgba(179,25,28,0.7)";
*   background: "rgba(179,25,28,0.7)";
*   background: "#b3191c";
* }
*/
function hsla(value, saturation, lightness, alpha) {
	if (typeof value === "number" && typeof saturation === "number" && typeof lightness === "number" && typeof alpha === "number") return alpha >= 1 ? hslToHex(value, saturation, lightness) : "rgba(" + hslToRgb(value, saturation, lightness) + "," + alpha + ")";
	else if (typeof value === "object" && saturation === void 0 && lightness === void 0 && alpha === void 0) return value.alpha >= 1 ? hslToHex(value.hue, value.saturation, value.lightness) : "rgba(" + hslToRgb(value.hue, value.saturation, value.lightness) + "," + value.alpha + ")";
	throw new PolishedError(2);
}
/**
* Returns a string value for the color. The returned result is the smallest possible hex notation.
*
* @example
* // Styles as object usage
* const styles = {
*   background: rgb(255, 205, 100),
*   background: rgb({ red: 255, green: 205, blue: 100 }),
* }
*
* // styled-components usage
* const div = styled.div`
*   background: ${rgb(255, 205, 100)};
*   background: ${rgb({ red: 255, green: 205, blue: 100 })};
* `
*
* // CSS in JS Output
*
* element {
*   background: "#ffcd64";
*   background: "#ffcd64";
* }
*/
function rgb(value, green, blue) {
	if (typeof value === "number" && typeof green === "number" && typeof blue === "number") return reduceHexValue$1("#" + numberToHex(value) + numberToHex(green) + numberToHex(blue));
	else if (typeof value === "object" && green === void 0 && blue === void 0) return reduceHexValue$1("#" + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
	throw new PolishedError(6);
}
/**
* Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
*
* Can also be used to fade a color by passing a hex value or named CSS color along with an alpha value.
*
* @example
* // Styles as object usage
* const styles = {
*   background: rgba(255, 205, 100, 0.7),
*   background: rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 }),
*   background: rgba(255, 205, 100, 1),
*   background: rgba('#ffffff', 0.4),
*   background: rgba('black', 0.7),
* }
*
* // styled-components usage
* const div = styled.div`
*   background: ${rgba(255, 205, 100, 0.7)};
*   background: ${rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 })};
*   background: ${rgba(255, 205, 100, 1)};
*   background: ${rgba('#ffffff', 0.4)};
*   background: ${rgba('black', 0.7)};
* `
*
* // CSS in JS Output
*
* element {
*   background: "rgba(255,205,100,0.7)";
*   background: "rgba(255,205,100,0.7)";
*   background: "#ffcd64";
*   background: "rgba(255,255,255,0.4)";
*   background: "rgba(0,0,0,0.7)";
* }
*/
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
	if (typeof firstValue === "string" && typeof secondValue === "number") {
		var rgbValue = parseToRgb(firstValue);
		return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
	} else if (typeof firstValue === "number" && typeof secondValue === "number" && typeof thirdValue === "number" && typeof fourthValue === "number") return fourthValue >= 1 ? rgb(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
	else if (typeof firstValue === "object" && secondValue === void 0 && thirdValue === void 0 && fourthValue === void 0) return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
	throw new PolishedError(7);
}
/**
* Converts a RgbColor, RgbaColor, HslColor or HslaColor object to a color string.
* This util is useful in case you only know on runtime which color object is
* used. Otherwise we recommend to rely on `rgb`, `rgba`, `hsl` or `hsla`.
*
* @example
* // Styles as object usage
* const styles = {
*   background: toColorString({ red: 255, green: 205, blue: 100 }),
*   background: toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
*   background: toColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
*   background: toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
* }
*
* // styled-components usage
* const div = styled.div`
*   background: ${toColorString({ red: 255, green: 205, blue: 100 })};
*   background: ${toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
*   background: ${toColorString({ hue: 240, saturation: 1, lightness: 0.5 })};
*   background: ${toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 })};
* `
*
* // CSS in JS Output
* element {
*   background: "#ffcd64";
*   background: "rgba(255,205,100,0.72)";
*   background: "#00f";
*   background: "rgba(179,25,25,0.72)";
* }
*/
function toColorString(color) {
	if (typeof color !== "object") throw new PolishedError(8);
	if (isRgba(color)) return rgba(color);
	if (isRgb(color)) return rgb(color);
	if (isHsla(color)) return hsla(color);
	if (isHsl(color)) return hsl(color);
	throw new PolishedError(8);
}
function curried(f, length, acc) {
	return function fn() {
		var combined = acc.concat(Array.prototype.slice.call(arguments));
		return combined.length >= length ? f.apply(this, combined) : curried(f, length, combined);
	};
}
function curry(f) {
	return curried(f, f.length, []);
}
/**
* Changes the hue of the color. Hue is a number between 0 to 360. The first
* argument for adjustHue is the amount of degrees the color is rotated around
* the color wheel, always producing a positive hue value.
*
* @example
* // Styles as object usage
* const styles = {
*   background: adjustHue(180, '#448'),
*   background: adjustHue('180', 'rgba(101,100,205,0.7)'),
* }
*
* // styled-components usage
* const div = styled.div`
*   background: ${adjustHue(180, '#448')};
*   background: ${adjustHue('180', 'rgba(101,100,205,0.7)')};
* `
*
* // CSS in JS Output
* element {
*   background: "#888844";
*   background: "rgba(136,136,68,0.7)";
* }
*/
function adjustHue(degree, color) {
	if (color === "transparent") return color;
	var hslColor = parseToHsl(color);
	return toColorString(_extends({}, hslColor, { hue: hslColor.hue + parseFloat(degree) }));
}
function guard(lowerBoundary, upperBoundary, value) {
	return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}
/**
* Returns a string value for the darkened color.
*
* @example
* // Styles as object usage
* const styles = {
*   background: darken(0.2, '#FFCD64'),
*   background: darken('0.2', 'rgba(255,205,100,0.7)'),
* }
*
* // styled-components usage
* const div = styled.div`
*   background: ${darken(0.2, '#FFCD64')};
*   background: ${darken('0.2', 'rgba(255,205,100,0.7)')};
* `
*
* // CSS in JS Output
*
* element {
*   background: "#ffbd31";
*   background: "rgba(255,189,49,0.7)";
* }
*/
function darken(amount, color) {
	if (color === "transparent") return color;
	var hslColor = parseToHsl(color);
	return toColorString(_extends({}, hslColor, { lightness: guard(0, 1, hslColor.lightness - parseFloat(amount)) }));
}
/**
* Decreases the intensity of a color. Its range is between 0 to 1. The first
* argument of the desaturate function is the amount by how much the color
* intensity should be decreased.
*
* @example
* // Styles as object usage
* const styles = {
*   background: desaturate(0.2, '#CCCD64'),
*   background: desaturate('0.2', 'rgba(204,205,100,0.7)'),
* }
*
* // styled-components usage
* const div = styled.div`
*   background: ${desaturate(0.2, '#CCCD64')};
*   background: ${desaturate('0.2', 'rgba(204,205,100,0.7)')};
* `
*
* // CSS in JS Output
* element {
*   background: "#b8b979";
*   background: "rgba(184,185,121,0.7)";
* }
*/
function desaturate(amount, color) {
	if (color === "transparent") return color;
	var hslColor = parseToHsl(color);
	return toColorString(_extends({}, hslColor, { saturation: guard(0, 1, hslColor.saturation - parseFloat(amount)) }));
}
/**
* Returns a string value for the lightened color.
*
* @example
* // Styles as object usage
* const styles = {
*   background: lighten(0.2, '#CCCD64'),
*   background: lighten('0.2', 'rgba(204,205,100,0.7)'),
* }
*
* // styled-components usage
* const div = styled.div`
*   background: ${lighten(0.2, '#FFCD64')};
*   background: ${lighten('0.2', 'rgba(204,205,100,0.7)')};
* `
*
* // CSS in JS Output
*
* element {
*   background: "#e5e6b1";
*   background: "rgba(229,230,177,0.7)";
* }
*/
function lighten(amount, color) {
	if (color === "transparent") return color;
	var hslColor = parseToHsl(color);
	return toColorString(_extends({}, hslColor, { lightness: guard(0, 1, hslColor.lightness + parseFloat(amount)) }));
}
/**
* Mixes the two provided colors together by calculating the average of each of the RGB components weighted to the first color by the provided weight.
*
* @example
* // Styles as object usage
* const styles = {
*   background: mix(0.5, '#f00', '#00f')
*   background: mix(0.25, '#f00', '#00f')
*   background: mix('0.5', 'rgba(255, 0, 0, 0.5)', '#00f')
* }
*
* // styled-components usage
* const div = styled.div`
*   background: ${mix(0.5, '#f00', '#00f')};
*   background: ${mix(0.25, '#f00', '#00f')};
*   background: ${mix('0.5', 'rgba(255, 0, 0, 0.5)', '#00f')};
* `
*
* // CSS in JS Output
*
* element {
*   background: "#7f007f";
*   background: "#3f00bf";
*   background: "rgba(63, 0, 191, 0.75)";
* }
*/
function mix(weight, color, otherColor) {
	if (color === "transparent") return otherColor;
	if (otherColor === "transparent") return color;
	if (weight === 0) return otherColor;
	var parsedColor1 = parseToRgb(color);
	var color1 = _extends({}, parsedColor1, { alpha: typeof parsedColor1.alpha === "number" ? parsedColor1.alpha : 1 });
	var parsedColor2 = parseToRgb(otherColor);
	var color2 = _extends({}, parsedColor2, { alpha: typeof parsedColor2.alpha === "number" ? parsedColor2.alpha : 1 });
	var alphaDelta = color1.alpha - color2.alpha;
	var x = parseFloat(weight) * 2 - 1;
	var weight1 = ((x * alphaDelta === -1 ? x : x + alphaDelta) / (1 + x * alphaDelta) + 1) / 2;
	var weight2 = 1 - weight1;
	return rgba({
		red: Math.floor(color1.red * weight1 + color2.red * weight2),
		green: Math.floor(color1.green * weight1 + color2.green * weight2),
		blue: Math.floor(color1.blue * weight1 + color2.blue * weight2),
		alpha: color1.alpha * parseFloat(weight) + color2.alpha * (1 - parseFloat(weight))
	});
}
/**
* Increases the opacity of a color. Its range for the amount is between 0 to 1.
*
*
* @example
* // Styles as object usage
* const styles = {
*   background: opacify(0.1, 'rgba(255, 255, 255, 0.9)');
*   background: opacify(0.2, 'hsla(0, 0%, 100%, 0.5)'),
*   background: opacify('0.5', 'rgba(255, 0, 0, 0.2)'),
* }
*
* // styled-components usage
* const div = styled.div`
*   background: ${opacify(0.1, 'rgba(255, 255, 255, 0.9)')};
*   background: ${opacify(0.2, 'hsla(0, 0%, 100%, 0.5)')},
*   background: ${opacify('0.5', 'rgba(255, 0, 0, 0.2)')},
* `
*
* // CSS in JS Output
*
* element {
*   background: "#fff";
*   background: "rgba(255,255,255,0.7)";
*   background: "rgba(255,0,0,0.7)";
* }
*/
function opacify(amount, color) {
	if (color === "transparent") return color;
	var parsedColor = parseToRgb(color);
	return rgba(_extends({}, parsedColor, { alpha: guard(0, 1, ((typeof parsedColor.alpha === "number" ? parsedColor.alpha : 1) * 100 + parseFloat(amount) * 100) / 100) }));
}
/**
* Increases the intensity of a color. Its range is between 0 to 1. The first
* argument of the saturate function is the amount by how much the color
* intensity should be increased.
*
* @example
* // Styles as object usage
* const styles = {
*   background: saturate(0.2, '#CCCD64'),
*   background: saturate('0.2', 'rgba(204,205,100,0.7)'),
* }
*
* // styled-components usage
* const div = styled.div`
*   background: ${saturate(0.2, '#FFCD64')};
*   background: ${saturate('0.2', 'rgba(204,205,100,0.7)')};
* `
*
* // CSS in JS Output
*
* element {
*   background: "#e0e250";
*   background: "rgba(224,226,80,0.7)";
* }
*/
function saturate(amount, color) {
	if (color === "transparent") return color;
	var hslColor = parseToHsl(color);
	return toColorString(_extends({}, hslColor, { saturation: guard(0, 1, hslColor.saturation + parseFloat(amount)) }));
}
/**
* Sets the hue of a color to the provided value. The hue range can be
* from 0 and 359.
*
* @example
* // Styles as object usage
* const styles = {
*   background: setHue(42, '#CCCD64'),
*   background: setHue('244', 'rgba(204,205,100,0.7)'),
* }
*
* // styled-components usage
* const div = styled.div`
*   background: ${setHue(42, '#CCCD64')};
*   background: ${setHue('244', 'rgba(204,205,100,0.7)')};
* `
*
* // CSS in JS Output
* element {
*   background: "#cdae64";
*   background: "rgba(107,100,205,0.7)";
* }
*/
function setHue(hue, color) {
	if (color === "transparent") return color;
	return toColorString(_extends({}, parseToHsl(color), { hue: parseFloat(hue) }));
}
/**
* Sets the lightness of a color to the provided value. The lightness range can be
* from 0 and 1.
*
* @example
* // Styles as object usage
* const styles = {
*   background: setLightness(0.2, '#CCCD64'),
*   background: setLightness('0.75', 'rgba(204,205,100,0.7)'),
* }
*
* // styled-components usage
* const div = styled.div`
*   background: ${setLightness(0.2, '#CCCD64')};
*   background: ${setLightness('0.75', 'rgba(204,205,100,0.7)')};
* `
*
* // CSS in JS Output
* element {
*   background: "#4d4d19";
*   background: "rgba(223,224,159,0.7)";
* }
*/
function setLightness(lightness, color) {
	if (color === "transparent") return color;
	return toColorString(_extends({}, parseToHsl(color), { lightness: parseFloat(lightness) }));
}
/**
* Sets the saturation of a color to the provided value. The saturation range can be
* from 0 and 1.
*
* @example
* // Styles as object usage
* const styles = {
*   background: setSaturation(0.2, '#CCCD64'),
*   background: setSaturation('0.75', 'rgba(204,205,100,0.7)'),
* }
*
* // styled-components usage
* const div = styled.div`
*   background: ${setSaturation(0.2, '#CCCD64')};
*   background: ${setSaturation('0.75', 'rgba(204,205,100,0.7)')};
* `
*
* // CSS in JS Output
* element {
*   background: "#adad84";
*   background: "rgba(228,229,76,0.7)";
* }
*/
function setSaturation(saturation, color) {
	if (color === "transparent") return color;
	return toColorString(_extends({}, parseToHsl(color), { saturation: parseFloat(saturation) }));
}
/**
* Shades a color by mixing it with black. `shade` can produce
* hue shifts, where as `darken` manipulates the luminance channel and therefore
* doesn't produce hue shifts.
*
* @example
* // Styles as object usage
* const styles = {
*   background: shade(0.25, '#00f')
* }
*
* // styled-components usage
* const div = styled.div`
*   background: ${shade(0.25, '#00f')};
* `
*
* // CSS in JS Output
*
* element {
*   background: "#00003f";
* }
*/
function shade(percentage, color) {
	if (color === "transparent") return color;
	return mix$1(parseFloat(percentage), "rgb(0, 0, 0)", color);
}
/**
* Tints a color by mixing it with white. `tint` can produce
* hue shifts, where as `lighten` manipulates the luminance channel and therefore
* doesn't produce hue shifts.
*
* @example
* // Styles as object usage
* const styles = {
*   background: tint(0.25, '#00f')
* }
*
* // styled-components usage
* const div = styled.div`
*   background: ${tint(0.25, '#00f')};
* `
*
* // CSS in JS Output
*
* element {
*   background: "#bfbfff";
* }
*/
function tint(percentage, color) {
	if (color === "transparent") return color;
	return mix$1(parseFloat(percentage), "rgb(255, 255, 255)", color);
}
/**
* Decreases the opacity of a color. Its range for the amount is between 0 to 1.
*
*
* @example
* // Styles as object usage
* const styles = {
*   background: transparentize(0.1, '#fff'),
*   background: transparentize(0.2, 'hsl(0, 0%, 100%)'),
*   background: transparentize('0.5', 'rgba(255, 0, 0, 0.8)'),
* }
*
* // styled-components usage
* const div = styled.div`
*   background: ${transparentize(0.1, '#fff')};
*   background: ${transparentize(0.2, 'hsl(0, 0%, 100%)')};
*   background: ${transparentize('0.5', 'rgba(255, 0, 0, 0.8)')};
* `
*
* // CSS in JS Output
*
* element {
*   background: "rgba(255,255,255,0.9)";
*   background: "rgba(255,255,255,0.8)";
*   background: "rgba(255,0,0,0.3)";
* }
*/
function transparentize(amount, color) {
	if (color === "transparent") return color;
	var parsedColor = parseToRgb(color);
	return rgba(_extends({}, parsedColor, { alpha: guard(0, 1, +((typeof parsedColor.alpha === "number" ? parsedColor.alpha : 1) * 100 - parseFloat(amount) * 100).toFixed(2) / 100) }));
}
var PolishedError, cssRegex$1, pixelsto, namedColorMap, hexRegex, hexRgbaRegex, reducedHexRegex, reducedRgbaHexRegex, rgbRegex, rgbaRegex, hslRegex, hslaRegex, reduceHexValue$1, isRgb, isRgba, isHsl, isHsla, curriedDarken$1, curriedLighten$1, mix$1, curriedOpacify$1, curriedTransparentize$1;
var init_polished_esm = __esmMin((() => {
	init_extends();
	init_assertThisInitialized();
	init_inheritsLoose();
	init_wrapNativeSuper();
	PolishedError = /*#__PURE__*/ function(_Error) {
		_inheritsLoose(PolishedError, _Error);
		function PolishedError(code) {
			return _assertThisInitialized(_Error.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + code + " for more information.") || this);
		}
		return PolishedError;
	}(/*#__PURE__*/ _wrapNativeSuper(Error));
	cssRegex$1 = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
	pixelsto = function pxtoFactory(to) {
		return function(pxval, base) {
			if (base === void 0) base = "16px";
			var newPxval = pxval;
			var newBase = base;
			if (typeof pxval === "string") {
				if (!endsWith(pxval, "px")) throw new PolishedError(69, to, pxval);
				newPxval = stripUnit(pxval);
			}
			if (typeof base === "string") {
				if (!endsWith(base, "px")) throw new PolishedError(70, to, base);
				newBase = stripUnit(base);
			}
			if (typeof newPxval === "string") throw new PolishedError(71, pxval, to);
			if (typeof newBase === "string") throw new PolishedError(72, base, to);
			return "" + newPxval / newBase + to;
		};
	};
	pixelsto("em");
	pixelsto("rem");
	namedColorMap = {
		aliceblue: "f0f8ff",
		antiquewhite: "faebd7",
		aqua: "00ffff",
		aquamarine: "7fffd4",
		azure: "f0ffff",
		beige: "f5f5dc",
		bisque: "ffe4c4",
		black: "000",
		blanchedalmond: "ffebcd",
		blue: "0000ff",
		blueviolet: "8a2be2",
		brown: "a52a2a",
		burlywood: "deb887",
		cadetblue: "5f9ea0",
		chartreuse: "7fff00",
		chocolate: "d2691e",
		coral: "ff7f50",
		cornflowerblue: "6495ed",
		cornsilk: "fff8dc",
		crimson: "dc143c",
		cyan: "00ffff",
		darkblue: "00008b",
		darkcyan: "008b8b",
		darkgoldenrod: "b8860b",
		darkgray: "a9a9a9",
		darkgreen: "006400",
		darkgrey: "a9a9a9",
		darkkhaki: "bdb76b",
		darkmagenta: "8b008b",
		darkolivegreen: "556b2f",
		darkorange: "ff8c00",
		darkorchid: "9932cc",
		darkred: "8b0000",
		darksalmon: "e9967a",
		darkseagreen: "8fbc8f",
		darkslateblue: "483d8b",
		darkslategray: "2f4f4f",
		darkslategrey: "2f4f4f",
		darkturquoise: "00ced1",
		darkviolet: "9400d3",
		deeppink: "ff1493",
		deepskyblue: "00bfff",
		dimgray: "696969",
		dimgrey: "696969",
		dodgerblue: "1e90ff",
		firebrick: "b22222",
		floralwhite: "fffaf0",
		forestgreen: "228b22",
		fuchsia: "ff00ff",
		gainsboro: "dcdcdc",
		ghostwhite: "f8f8ff",
		gold: "ffd700",
		goldenrod: "daa520",
		gray: "808080",
		green: "008000",
		greenyellow: "adff2f",
		grey: "808080",
		honeydew: "f0fff0",
		hotpink: "ff69b4",
		indianred: "cd5c5c",
		indigo: "4b0082",
		ivory: "fffff0",
		khaki: "f0e68c",
		lavender: "e6e6fa",
		lavenderblush: "fff0f5",
		lawngreen: "7cfc00",
		lemonchiffon: "fffacd",
		lightblue: "add8e6",
		lightcoral: "f08080",
		lightcyan: "e0ffff",
		lightgoldenrodyellow: "fafad2",
		lightgray: "d3d3d3",
		lightgreen: "90ee90",
		lightgrey: "d3d3d3",
		lightpink: "ffb6c1",
		lightsalmon: "ffa07a",
		lightseagreen: "20b2aa",
		lightskyblue: "87cefa",
		lightslategray: "789",
		lightslategrey: "789",
		lightsteelblue: "b0c4de",
		lightyellow: "ffffe0",
		lime: "0f0",
		limegreen: "32cd32",
		linen: "faf0e6",
		magenta: "f0f",
		maroon: "800000",
		mediumaquamarine: "66cdaa",
		mediumblue: "0000cd",
		mediumorchid: "ba55d3",
		mediumpurple: "9370db",
		mediumseagreen: "3cb371",
		mediumslateblue: "7b68ee",
		mediumspringgreen: "00fa9a",
		mediumturquoise: "48d1cc",
		mediumvioletred: "c71585",
		midnightblue: "191970",
		mintcream: "f5fffa",
		mistyrose: "ffe4e1",
		moccasin: "ffe4b5",
		navajowhite: "ffdead",
		navy: "000080",
		oldlace: "fdf5e6",
		olive: "808000",
		olivedrab: "6b8e23",
		orange: "ffa500",
		orangered: "ff4500",
		orchid: "da70d6",
		palegoldenrod: "eee8aa",
		palegreen: "98fb98",
		paleturquoise: "afeeee",
		palevioletred: "db7093",
		papayawhip: "ffefd5",
		peachpuff: "ffdab9",
		peru: "cd853f",
		pink: "ffc0cb",
		plum: "dda0dd",
		powderblue: "b0e0e6",
		purple: "800080",
		rebeccapurple: "639",
		red: "f00",
		rosybrown: "bc8f8f",
		royalblue: "4169e1",
		saddlebrown: "8b4513",
		salmon: "fa8072",
		sandybrown: "f4a460",
		seagreen: "2e8b57",
		seashell: "fff5ee",
		sienna: "a0522d",
		silver: "c0c0c0",
		skyblue: "87ceeb",
		slateblue: "6a5acd",
		slategray: "708090",
		slategrey: "708090",
		snow: "fffafa",
		springgreen: "00ff7f",
		steelblue: "4682b4",
		tan: "d2b48c",
		teal: "008080",
		thistle: "d8bfd8",
		tomato: "ff6347",
		turquoise: "40e0d0",
		violet: "ee82ee",
		wheat: "f5deb3",
		white: "fff",
		whitesmoke: "f5f5f5",
		yellow: "ff0",
		yellowgreen: "9acd32"
	};
	hexRegex = /^#[a-fA-F0-9]{6}$/;
	hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
	reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
	reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
	rgbRegex = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i;
	rgbaRegex = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
	hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
	hslaRegex = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
	reduceHexValue$1 = function reduceHexValue(value) {
		if (value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) return "#" + value[1] + value[3] + value[5];
		return value;
	};
	isRgb = function isRgb(color) {
		return typeof color.red === "number" && typeof color.green === "number" && typeof color.blue === "number" && (typeof color.alpha !== "number" || typeof color.alpha === "undefined");
	};
	isRgba = function isRgba(color) {
		return typeof color.red === "number" && typeof color.green === "number" && typeof color.blue === "number" && typeof color.alpha === "number";
	};
	isHsl = function isHsl(color) {
		return typeof color.hue === "number" && typeof color.saturation === "number" && typeof color.lightness === "number" && (typeof color.alpha !== "number" || typeof color.alpha === "undefined");
	};
	isHsla = function isHsla(color) {
		return typeof color.hue === "number" && typeof color.saturation === "number" && typeof color.lightness === "number" && typeof color.alpha === "number";
	};
	curry(adjustHue);
	curriedDarken$1 = curry(darken);
	curry(desaturate);
	curriedLighten$1 = curry(lighten);
	mix$1 = curry(mix);
	curriedOpacify$1 = curry(opacify);
	curry(saturate);
	curry(setHue);
	curry(setLightness);
	curry(setSaturation);
	curry(shade);
	curry(tint);
	curriedTransparentize$1 = curry(transparentize);
}));
//#endregion
//#region ../../node_modules/picoquery/lib/string-util.js
/**
* @param {string} str
* @returns {string}
*/
function encodeString(str) {
	const len = str.length;
	if (len === 0) return "";
	let out = "";
	let lastPos = 0;
	let i = 0;
	outer: for (; i < len; i++) {
		let c = str.charCodeAt(i);
		while (c < 128) {
			if (noEscape[c] !== 1) {
				if (lastPos < i) out += str.slice(lastPos, i);
				lastPos = i + 1;
				out += hexTable[c];
			}
			if (++i === len) break outer;
			c = str.charCodeAt(i);
		}
		if (lastPos < i) out += str.slice(lastPos, i);
		if (c < 2048) {
			lastPos = i + 1;
			out += hexTable[192 | c >> 6] + hexTable[128 | c & 63];
			continue;
		}
		if (c < 55296 || c >= 57344) {
			lastPos = i + 1;
			out += hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
			continue;
		}
		++i;
		if (i >= len) throw new Error("URI malformed");
		const c2 = str.charCodeAt(i) & 1023;
		lastPos = i + 1;
		c = 65536 + ((c & 1023) << 10 | c2);
		out += hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
	}
	if (lastPos === 0) return str;
	if (lastPos < len) return out + str.slice(lastPos);
	return out;
}
var hexTable, noEscape;
var init_string_util = __esmMin((() => {
	hexTable = Array.from({ length: 256 }, (_, i) => "%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
	noEscape = new Int8Array([
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		1,
		1,
		0,
		0,
		1,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		0,
		0,
		0,
		1,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		0,
		0,
		0,
		1,
		0
	]);
}));
//#endregion
//#region ../../node_modules/picoquery/lib/shared.js
var defaultValueSerializer, defaultShouldSerializeObject, identityFunc, defaultOptions;
var init_shared = __esmMin((() => {
	init_string_util();
	defaultValueSerializer = (value) => {
		switch (typeof value) {
			case "string": return encodeString(value);
			case "bigint":
			case "boolean": return "" + value;
			case "number":
				if (Number.isFinite(value)) return value < 1e21 ? "" + value : encodeString("" + value);
				break;
		}
		if (value instanceof Date) return encodeString(value.toISOString());
		return "";
	};
	defaultShouldSerializeObject = (val) => {
		return val instanceof Date;
	};
	identityFunc = (v) => v;
	defaultOptions = {
		nesting: true,
		nestingSyntax: "dot",
		arrayRepeat: false,
		arrayRepeatSyntax: "repeat",
		delimiter: 38,
		valueDeserializer: identityFunc,
		valueSerializer: defaultValueSerializer,
		keyDeserializer: identityFunc,
		shouldSerializeObject: defaultShouldSerializeObject
	};
}));
//#endregion
//#region ../../node_modules/picoquery/lib/object-util.js
function isPrototypeKey(value) {
	return value === "__proto__" || value === "constructor" || value === "prototype";
}
function getDeepObject(obj, key, nextKey, forceObject, forceArray) {
	if (isPrototypeKey(key)) return obj;
	const currObj = obj[key];
	if (typeof currObj === "object" && currObj !== null) return currObj;
	if (!forceObject && (forceArray || typeof nextKey === "number" || typeof nextKey === "string" && nextKey * 0 === 0 && nextKey.indexOf(".") === -1)) return obj[key] = [];
	return obj[key] = {};
}
function stringifyObject(obj, options, depth = 0, parentKey, isProbableArray) {
	const { nestingSyntax = defaultOptions.nestingSyntax, arrayRepeat = defaultOptions.arrayRepeat, arrayRepeatSyntax = defaultOptions.arrayRepeatSyntax, nesting = defaultOptions.nesting, delimiter = defaultOptions.delimiter, valueSerializer = defaultOptions.valueSerializer, shouldSerializeObject = defaultOptions.shouldSerializeObject } = options;
	const strDelimiter = typeof delimiter === "number" ? String.fromCharCode(delimiter) : delimiter;
	const useArrayRepeatKey = isProbableArray === true && arrayRepeat;
	const shouldUseDot = nestingSyntax === "dot" || nestingSyntax === "js" && !isProbableArray;
	if (depth > MAX_DEPTH) return "";
	let result = "";
	let firstKey = true;
	let valueIsProbableArray = false;
	for (const key in obj) {
		const value = obj[key];
		if (value === void 0) continue;
		let path;
		if (parentKey) {
			path = parentKey;
			if (useArrayRepeatKey) {
				if (arrayRepeatSyntax === "bracket") path += strBracketPair;
			} else if (shouldUseDot) {
				path += strDot;
				path += key;
			} else {
				path += strBracketLeft;
				path += key;
				path += strBracketRight;
			}
		} else path = key;
		if (!firstKey) result += strDelimiter;
		if (typeof value === "object" && value !== null && !shouldSerializeObject(value)) {
			valueIsProbableArray = value.pop !== void 0;
			if (nesting || arrayRepeat && valueIsProbableArray) result += stringifyObject(value, options, depth + 1, path, valueIsProbableArray);
		} else {
			result += encodeString(path);
			result += "=";
			result += valueSerializer(value, key);
		}
		if (firstKey) firstKey = false;
	}
	return result;
}
var MAX_DEPTH, strBracketPair, strBracketLeft, strBracketRight, strDot;
var init_object_util = __esmMin((() => {
	init_shared();
	init_string_util();
	MAX_DEPTH = 20;
	strBracketPair = "[]";
	strBracketLeft = "[";
	strBracketRight = "]";
	strDot = ".";
}));
//#endregion
//#region ../../node_modules/picoquery/lib/decode-uri-component.js
function decodeURIComponent(uri) {
	let percentPosition = uri.indexOf("%");
	if (percentPosition === -1) return uri;
	const length = uri.length;
	let decoded = "";
	let last = 0;
	let codepoint = 0;
	let startOfOctets = percentPosition;
	let state = UTF8_ACCEPT;
	while (percentPosition > -1 && percentPosition < length) {
		const byte = hexCodeToInt(uri[percentPosition + 1], 4) | hexCodeToInt(uri[percentPosition + 2], 0);
		const type = UTF8_DATA[byte];
		state = UTF8_DATA[256 + state + type];
		codepoint = codepoint << 6 | byte & UTF8_DATA[364 + type];
		if (state === UTF8_ACCEPT) {
			decoded += uri.slice(last, startOfOctets);
			decoded += codepoint <= 65535 ? String.fromCharCode(codepoint) : String.fromCharCode(55232 + (codepoint >> 10), 56320 + (codepoint & 1023));
			codepoint = 0;
			last = percentPosition + 3;
			percentPosition = startOfOctets = uri.indexOf("%", last);
		} else if (state === UTF8_REJECT) return null;
		else {
			percentPosition += 3;
			if (percentPosition < length && uri.charCodeAt(percentPosition) === 37) continue;
			return null;
		}
	}
	return decoded + uri.slice(last);
}
function hexCodeToInt(c, shift) {
	const i = HEX[c];
	return i === void 0 ? 255 : i << shift;
}
var UTF8_ACCEPT, UTF8_REJECT, UTF8_DATA, HEX;
var init_decode_uri_component = __esmMin((() => {
	UTF8_ACCEPT = 12;
	UTF8_REJECT = 0;
	UTF8_DATA = [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		1,
		2,
		2,
		2,
		2,
		2,
		2,
		2,
		2,
		2,
		2,
		2,
		2,
		2,
		2,
		2,
		2,
		3,
		3,
		3,
		3,
		3,
		3,
		3,
		3,
		3,
		3,
		3,
		3,
		3,
		3,
		3,
		3,
		3,
		3,
		3,
		3,
		3,
		3,
		3,
		3,
		3,
		3,
		3,
		3,
		3,
		3,
		3,
		3,
		4,
		4,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		5,
		6,
		7,
		7,
		7,
		7,
		7,
		7,
		7,
		7,
		7,
		7,
		7,
		7,
		8,
		7,
		7,
		10,
		9,
		9,
		9,
		11,
		4,
		4,
		4,
		4,
		4,
		4,
		4,
		4,
		4,
		4,
		4,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		12,
		0,
		0,
		0,
		0,
		24,
		36,
		48,
		60,
		72,
		84,
		96,
		0,
		12,
		12,
		12,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		24,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		24,
		24,
		24,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		24,
		24,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		48,
		48,
		48,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		48,
		48,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		48,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		127,
		63,
		63,
		63,
		0,
		31,
		15,
		15,
		15,
		7,
		7,
		7
	];
	HEX = {
		"0": 0,
		"1": 1,
		"2": 2,
		"3": 3,
		"4": 4,
		"5": 5,
		"6": 6,
		"7": 7,
		"8": 8,
		"9": 9,
		a: 10,
		A: 10,
		b: 11,
		B: 11,
		c: 12,
		C: 12,
		d: 13,
		D: 13,
		e: 14,
		E: 14,
		f: 15,
		F: 15
	};
}));
//#endregion
//#region ../../node_modules/picoquery/lib/parse.js
function computeKeySlice(input, startIndex, endIndex, keyHasPlus, shouldDecodeKey) {
	let chunk = input.substring(startIndex, endIndex);
	if (keyHasPlus) chunk = chunk.replace(regexPlus, " ");
	if (shouldDecodeKey) chunk = decodeURIComponent(chunk) || chunk;
	return chunk;
}
/**
* Parses a query string into an object
* @param {string} input
* @param {ParseOptions=} options
*/
function parse(input, options) {
	const { valueDeserializer = defaultOptions.valueDeserializer, keyDeserializer = defaultOptions.keyDeserializer, arrayRepeatSyntax = defaultOptions.arrayRepeatSyntax, nesting = defaultOptions.nesting, arrayRepeat = defaultOptions.arrayRepeat, nestingSyntax = defaultOptions.nestingSyntax, delimiter = defaultOptions.delimiter } = options ?? {};
	const charDelimiter = typeof delimiter === "string" ? delimiter.charCodeAt(0) : delimiter;
	const isJsNestingSyntax = nestingSyntax === "js";
	const result = new Empty();
	if (typeof input !== "string") return result;
	const inputLength = input.length;
	let value = "";
	let startingIndex = -1;
	let equalityIndex = -1;
	let keySeparatorIndex = -1;
	let currentObj = result;
	let lastKey = void 0;
	let currentKey = "";
	let keyChunk = "";
	let shouldDecodeKey = false;
	let shouldDecodeValue = false;
	let keyHasPlus = false;
	let valueHasPlus = false;
	let keyIsDot = false;
	let hasBothKeyValuePair = false;
	let c = 0;
	let arrayRepeatBracketIndex = -1;
	let prevIndex = -1;
	let prevChar = -1;
	for (let i = 0; i < inputLength + 1; i++) {
		c = i !== inputLength ? input.charCodeAt(i) : charDelimiter;
		if (c === charDelimiter) {
			hasBothKeyValuePair = equalityIndex > startingIndex;
			if (!hasBothKeyValuePair) equalityIndex = i;
			if (keySeparatorIndex !== equalityIndex - 1) {
				keyChunk = computeKeySlice(input, keySeparatorIndex + 1, arrayRepeatBracketIndex > -1 ? arrayRepeatBracketIndex : equalityIndex, keyHasPlus, shouldDecodeKey);
				currentKey = keyDeserializer(keyChunk);
				if (lastKey !== void 0) currentObj = getDeepObject(currentObj, lastKey, currentKey, isJsNestingSyntax && keyIsDot, void 0);
			}
			if (hasBothKeyValuePair || currentKey !== "") {
				if (hasBothKeyValuePair) {
					value = input.slice(equalityIndex + 1, i);
					if (valueHasPlus) value = value.replace(regexPlus, " ");
					if (shouldDecodeValue) value = decodeURIComponent(value) || value;
				}
				const newValue = valueDeserializer(value, currentKey);
				if (arrayRepeat) {
					const currentValue = currentObj[currentKey];
					if (currentValue === void 0) if (arrayRepeatBracketIndex > -1) currentObj[currentKey] = [newValue];
					else currentObj[currentKey] = newValue;
					else if (currentValue.pop) currentValue.push(newValue);
					else currentObj[currentKey] = [currentValue, newValue];
				} else currentObj[currentKey] = newValue;
			}
			value = "";
			startingIndex = i;
			equalityIndex = i;
			shouldDecodeKey = false;
			shouldDecodeValue = false;
			keyHasPlus = false;
			valueHasPlus = false;
			keyIsDot = false;
			arrayRepeatBracketIndex = -1;
			keySeparatorIndex = i;
			currentObj = result;
			lastKey = void 0;
			currentKey = "";
		} else if (c === 93) {
			if (arrayRepeat && arrayRepeatSyntax === "bracket") {
				if (prevChar === 91) arrayRepeatBracketIndex = prevIndex;
			}
			if (nesting && (nestingSyntax === "index" || isJsNestingSyntax) && equalityIndex <= startingIndex) {
				if (keySeparatorIndex !== prevIndex) {
					keyChunk = computeKeySlice(input, keySeparatorIndex + 1, i, keyHasPlus, shouldDecodeKey);
					currentKey = keyDeserializer(keyChunk);
					if (lastKey !== void 0) currentObj = getDeepObject(currentObj, lastKey, currentKey, void 0, void 0);
					lastKey = currentKey;
					keyHasPlus = false;
					shouldDecodeKey = false;
				}
				keySeparatorIndex = i;
				keyIsDot = false;
			}
		} else if (c === 46) {
			if (nesting && (nestingSyntax === "dot" || isJsNestingSyntax) && equalityIndex <= startingIndex) {
				if (keySeparatorIndex !== prevIndex) {
					keyChunk = computeKeySlice(input, keySeparatorIndex + 1, i, keyHasPlus, shouldDecodeKey);
					currentKey = keyDeserializer(keyChunk);
					if (lastKey !== void 0) currentObj = getDeepObject(currentObj, lastKey, currentKey, isJsNestingSyntax);
					lastKey = currentKey;
					keyHasPlus = false;
					shouldDecodeKey = false;
				}
				keyIsDot = true;
				keySeparatorIndex = i;
			}
		} else if (c === 91) {
			if (nesting && (nestingSyntax === "index" || isJsNestingSyntax) && equalityIndex <= startingIndex) {
				if (keySeparatorIndex !== prevIndex) {
					keyChunk = computeKeySlice(input, keySeparatorIndex + 1, i, keyHasPlus, shouldDecodeKey);
					currentKey = keyDeserializer(keyChunk);
					if (isJsNestingSyntax && lastKey !== void 0) currentObj = getDeepObject(currentObj, lastKey, currentKey, isJsNestingSyntax);
					lastKey = currentKey;
					keyHasPlus = false;
					shouldDecodeKey = false;
					keyIsDot = false;
				}
				keySeparatorIndex = i;
			}
		} else if (c === 61) if (equalityIndex <= startingIndex) equalityIndex = i;
		else shouldDecodeValue = true;
		else if (c === 43) if (equalityIndex > startingIndex) valueHasPlus = true;
		else keyHasPlus = true;
		else if (c === 37) if (equalityIndex > startingIndex) shouldDecodeValue = true;
		else shouldDecodeKey = true;
		prevIndex = i;
		prevChar = c;
	}
	return result;
}
var regexPlus, Empty;
var init_parse = __esmMin((() => {
	init_object_util();
	init_shared();
	init_decode_uri_component();
	regexPlus = /\+/g;
	Empty = function() {};
	Empty.prototype = Object.create(null);
}));
//#endregion
//#region ../../node_modules/picoquery/lib/stringify.js
/**
* @param {unknown} input Object to stringify
* @param {StringifyOptions=} options Stringify options
* @returns {string}
*/
function stringify(input, options) {
	if (input === null || typeof input !== "object") return "";
	return stringifyObject(input, options ?? {});
}
var init_stringify = __esmMin((() => {
	init_object_util();
}));
//#endregion
//#region ../../node_modules/picoquery/lib/main.js
var init_main = __esmMin((() => {
	init_parse();
	init_stringify();
	init_shared();
}));
//#endregion
export { parse as a, curriedOpacify$1 as c, rgba as d, init_parse as i, curriedTransparentize$1 as l, init_stringify as n, curriedDarken$1 as o, stringify as r, curriedLighten$1 as s, init_main as t, init_polished_esm as u };
