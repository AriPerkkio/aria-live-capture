import { i as __require, n as __esmMin, t as __commonJSMin } from "./runtime-XrdeG17s.js";
import { A as init_extends, C as _wrapNativeSuper, D as _assertThisInitialized, E as init_inheritsLoose, O as init_assertThisInitialized, T as _inheritsLoose, k as _extends, w as init_wrapNativeSuper } from "./runtime-DqOdIqaJ.js";
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
var PolishedError, cssRegex$1, pixelsto, namedColorMap, hexRegex, hexRgbaRegex, reducedHexRegex, reducedRgbaHexRegex, rgbRegex, rgbaRegex, hslRegex, hslaRegex, reduceHexValue$1, isRgb, isRgba, isHsl, isHsla, curriedDarken$1, curriedLighten$1, mix$1, curriedTransparentize$1;
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
	curry(opacify);
	curry(saturate);
	curry(setHue);
	curry(setLightness);
	curry(setSaturation);
	curry(shade);
	curry(tint);
	curriedTransparentize$1 = curry(transparentize);
}));
//#endregion
//#region ../../node_modules/memoizerific/memoizerific.js
var require_memoizerific = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(f) {
		if (typeof exports === "object" && typeof module !== "undefined") module.exports = f();
		else if (typeof define === "function" && define.amd) define([], f);
		else {
			var g;
			if (typeof window !== "undefined") g = window;
			else if (typeof global !== "undefined") g = global;
			else if (typeof self !== "undefined") g = self;
			else g = this;
			g.memoizerific = f();
		}
	})(function() {
		return (function e(t, n, r) {
			function s(o, u) {
				if (!n[o]) {
					if (!t[o]) {
						var a = typeof __require == "function" && __require;
						if (!u && a) return a(o, !0);
						if (i) return i(o, !0);
						var f = /* @__PURE__ */ new Error("Cannot find module '" + o + "'");
						throw f.code = "MODULE_NOT_FOUND", f;
					}
					var l = n[o] = { exports: {} };
					t[o][0].call(l.exports, function(e) {
						var n = t[o][1][e];
						return s(n ? n : e);
					}, l, l.exports, e, t, n, r);
				}
				return n[o].exports;
			}
			var i = typeof __require == "function" && __require;
			for (var o = 0; o < r.length; o++) s(r[o]);
			return s;
		})({
			1: [function(_dereq_, module$1, exports$1) {
				module$1.exports = function(forceSimilar) {
					if (typeof Map !== "function" || forceSimilar) return new (_dereq_("./similar"))();
					else return /* @__PURE__ */ new Map();
				};
			}, { "./similar": 2 }],
			2: [function(_dereq_, module$2, exports$2) {
				function Similar() {
					this.list = [];
					this.lastItem = void 0;
					this.size = 0;
					return this;
				}
				Similar.prototype.get = function(key) {
					var index;
					if (this.lastItem && this.isEqual(this.lastItem.key, key)) return this.lastItem.val;
					index = this.indexOf(key);
					if (index >= 0) {
						this.lastItem = this.list[index];
						return this.list[index].val;
					}
				};
				Similar.prototype.set = function(key, val) {
					var index;
					if (this.lastItem && this.isEqual(this.lastItem.key, key)) {
						this.lastItem.val = val;
						return this;
					}
					index = this.indexOf(key);
					if (index >= 0) {
						this.lastItem = this.list[index];
						this.list[index].val = val;
						return this;
					}
					this.lastItem = {
						key,
						val
					};
					this.list.push(this.lastItem);
					this.size++;
					return this;
				};
				Similar.prototype.delete = function(key) {
					var index;
					if (this.lastItem && this.isEqual(this.lastItem.key, key)) this.lastItem = void 0;
					index = this.indexOf(key);
					if (index >= 0) {
						this.size--;
						return this.list.splice(index, 1)[0];
					}
				};
				Similar.prototype.has = function(key) {
					var index;
					if (this.lastItem && this.isEqual(this.lastItem.key, key)) return true;
					index = this.indexOf(key);
					if (index >= 0) {
						this.lastItem = this.list[index];
						return true;
					}
					return false;
				};
				Similar.prototype.forEach = function(callback, thisArg) {
					var i;
					for (i = 0; i < this.size; i++) callback.call(thisArg || this, this.list[i].val, this.list[i].key, this);
				};
				Similar.prototype.indexOf = function(key) {
					var i;
					for (i = 0; i < this.size; i++) if (this.isEqual(this.list[i].key, key)) return i;
					return -1;
				};
				Similar.prototype.isEqual = function(val1, val2) {
					return val1 === val2 || val1 !== val1 && val2 !== val2;
				};
				module$2.exports = Similar;
			}, {}],
			3: [function(_dereq_, module$3, exports$3) {
				var MapOrSimilar = _dereq_("map-or-similar");
				module$3.exports = function(limit) {
					var cache = new MapOrSimilar(false), lru = [];
					return function(fn) {
						var memoizerific = function() {
							var currentCache = cache, newMap, fnResult, argsLengthMinusOne = arguments.length - 1, lruPath = Array(argsLengthMinusOne + 1), isMemoized = true, i;
							if ((memoizerific.numArgs || memoizerific.numArgs === 0) && memoizerific.numArgs !== argsLengthMinusOne + 1) throw new Error("Memoizerific functions should always be called with the same number of arguments");
							for (i = 0; i < argsLengthMinusOne; i++) {
								lruPath[i] = {
									cacheItem: currentCache,
									arg: arguments[i]
								};
								if (currentCache.has(arguments[i])) {
									currentCache = currentCache.get(arguments[i]);
									continue;
								}
								isMemoized = false;
								newMap = new MapOrSimilar(false);
								currentCache.set(arguments[i], newMap);
								currentCache = newMap;
							}
							if (isMemoized) if (currentCache.has(arguments[argsLengthMinusOne])) fnResult = currentCache.get(arguments[argsLengthMinusOne]);
							else isMemoized = false;
							if (!isMemoized) {
								fnResult = fn.apply(null, arguments);
								currentCache.set(arguments[argsLengthMinusOne], fnResult);
							}
							if (limit > 0) {
								lruPath[argsLengthMinusOne] = {
									cacheItem: currentCache,
									arg: arguments[argsLengthMinusOne]
								};
								if (isMemoized) moveToMostRecentLru(lru, lruPath);
								else lru.push(lruPath);
								if (lru.length > limit) removeCachedResult(lru.shift());
							}
							memoizerific.wasMemoized = isMemoized;
							memoizerific.numArgs = argsLengthMinusOne + 1;
							return fnResult;
						};
						memoizerific.limit = limit;
						memoizerific.wasMemoized = false;
						memoizerific.cache = cache;
						memoizerific.lru = lru;
						return memoizerific;
					};
				};
				function moveToMostRecentLru(lru, lruPath) {
					var lruLen = lru.length, lruPathLen = lruPath.length, isMatch, i, ii;
					for (i = 0; i < lruLen; i++) {
						isMatch = true;
						for (ii = 0; ii < lruPathLen; ii++) if (!isEqual(lru[i][ii].arg, lruPath[ii].arg)) {
							isMatch = false;
							break;
						}
						if (isMatch) break;
					}
					lru.push(lru.splice(i, 1)[0]);
				}
				function removeCachedResult(removedLru) {
					var removedLruLen = removedLru.length, currentLru = removedLru[removedLruLen - 1], tmp, i;
					currentLru.cacheItem.delete(currentLru.arg);
					for (i = removedLruLen - 2; i >= 0; i--) {
						currentLru = removedLru[i];
						tmp = currentLru.cacheItem.get(currentLru.arg);
						if (!tmp || !tmp.size) currentLru.cacheItem.delete(currentLru.arg);
						else break;
					}
				}
				function isEqual(val1, val2) {
					return val1 === val2 || val1 !== val1 && val2 !== val2;
				}
			}, { "map-or-similar": 1 }]
		}, {}, [3])(3);
	});
}));
//#endregion
//#region ../../node_modules/is-lite/dist/index.mjs
function getObjectType(value) {
	const objectTypeName = Object.prototype.toString.call(value).slice(8, -1);
	if (/HTML\w+Element/.test(objectTypeName)) return "HTMLElement";
	if (isObjectType(objectTypeName)) return objectTypeName;
}
function isObjectOfType(type) {
	return (value) => getObjectType(value) === type;
}
function isObjectType(name) {
	return objectTypes.includes(name);
}
function isOfType(type) {
	return (value) => typeof value === type;
}
function isPrimitiveType(name) {
	return primitiveTypes.includes(name);
}
function is(value) {
	if (value === null) return "null";
	switch (typeof value) {
		case "bigint": return "bigint";
		case "boolean": return "boolean";
		case "number": return "number";
		case "string": return "string";
		case "symbol": return "symbol";
		case "undefined": return "undefined";
		default:
	}
	if (is.array(value)) return "Array";
	if (is.plainFunction(value)) return "Function";
	const tagType = getObjectType(value);
	if (tagType) return tagType;
	return "Object";
}
var objectTypes, primitiveTypes, DOM_PROPERTIES_TO_CHECK, src_default;
var init_dist = __esmMin((() => {
	objectTypes = [
		"Array",
		"ArrayBuffer",
		"AsyncFunction",
		"AsyncGenerator",
		"AsyncGeneratorFunction",
		"Date",
		"Error",
		"Function",
		"Generator",
		"GeneratorFunction",
		"HTMLElement",
		"Map",
		"Object",
		"Promise",
		"RegExp",
		"Set",
		"WeakMap",
		"WeakSet"
	];
	primitiveTypes = [
		"bigint",
		"boolean",
		"null",
		"number",
		"string",
		"symbol",
		"undefined"
	];
	DOM_PROPERTIES_TO_CHECK = [
		"innerHTML",
		"ownerDocument",
		"style",
		"attributes",
		"nodeValue"
	];
	is.array = Array.isArray;
	is.arrayOf = (target, predicate) => {
		if (!is.array(target) && !is.function(predicate)) return false;
		return target.every((d) => predicate(d));
	};
	is.asyncGeneratorFunction = (value) => getObjectType(value) === "AsyncGeneratorFunction";
	is.asyncFunction = isObjectOfType("AsyncFunction");
	is.bigint = isOfType("bigint");
	is.boolean = (value) => {
		return value === true || value === false;
	};
	is.date = isObjectOfType("Date");
	is.defined = (value) => !is.undefined(value);
	is.domElement = (value) => {
		return is.object(value) && !is.plainObject(value) && value.nodeType === 1 && is.string(value.nodeName) && DOM_PROPERTIES_TO_CHECK.every((property) => property in value);
	};
	is.empty = (value) => {
		return is.string(value) && value.length === 0 || is.array(value) && value.length === 0 || is.object(value) && !is.map(value) && !is.set(value) && Object.keys(value).length === 0 || is.set(value) && value.size === 0 || is.map(value) && value.size === 0;
	};
	is.error = isObjectOfType("Error");
	is.function = isOfType("function");
	is.generator = (value) => {
		return is.iterable(value) && is.function(value.next) && is.function(value.throw);
	};
	is.generatorFunction = isObjectOfType("GeneratorFunction");
	is.instanceOf = (instance, class_) => {
		if (!instance || !class_) return false;
		return Object.getPrototypeOf(instance) === class_.prototype;
	};
	is.iterable = (value) => {
		return !is.nullOrUndefined(value) && is.function(value[Symbol.iterator]);
	};
	is.map = isObjectOfType("Map");
	is.nan = (value) => {
		return Number.isNaN(value);
	};
	is.null = (value) => {
		return value === null;
	};
	is.nullOrUndefined = (value) => {
		return is.null(value) || is.undefined(value);
	};
	is.number = (value) => {
		return isOfType("number")(value) && !is.nan(value);
	};
	is.numericString = (value) => {
		return is.string(value) && value.length > 0 && !Number.isNaN(Number(value));
	};
	is.object = (value) => {
		return !is.nullOrUndefined(value) && (is.function(value) || typeof value === "object");
	};
	is.oneOf = (target, value) => {
		if (!is.array(target)) return false;
		return target.indexOf(value) > -1;
	};
	is.plainFunction = isObjectOfType("Function");
	is.plainObject = (value) => {
		if (getObjectType(value) !== "Object") return false;
		const prototype = Object.getPrototypeOf(value);
		return prototype === null || prototype === Object.getPrototypeOf({});
	};
	is.primitive = (value) => is.null(value) || isPrimitiveType(typeof value);
	is.promise = isObjectOfType("Promise");
	is.propertyOf = (target, key, predicate) => {
		if (!is.object(target) || !key) return false;
		const value = target[key];
		if (is.function(predicate)) return predicate(value);
		return is.defined(value);
	};
	is.regexp = isObjectOfType("RegExp");
	is.set = isObjectOfType("Set");
	is.string = isOfType("string");
	is.symbol = isOfType("symbol");
	is.undefined = isOfType("undefined");
	is.weakMap = isObjectOfType("WeakMap");
	is.weakSet = isObjectOfType("WeakSet");
	src_default = is;
}));
//#endregion
export { curriedLighten$1 as a, curriedDarken$1 as i, src_default as n, curriedTransparentize$1 as o, require_memoizerific as r, init_polished_esm as s, init_dist as t };
