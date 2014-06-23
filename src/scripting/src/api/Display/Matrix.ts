/**
 * Matrix Polyfill for AS3.
 * Author: Jim Chen
 * Part of the CCLScripter
 */

module Display {
	export class Matrix {
		private _data:Array<number>;

		constructor(a:number = 1, b:number = 0, c:number = 0, d:number = 1, tx:number = 0, ty:number = 0) {
			this._data = [a, c, tx, b, d, ty, 0, 0, 1];
		}

		public setTo(a:number = 1, b:number = 0, c:number = 0, d:number = 1, tx:number = 0, ty:number = 0):void {
			this._data = [a, c, tx, b, d, ty, 0, 0, 1];
		}

		public identity():void {
			this.setTo(1, 0, 0, 1, 0, 0);
		}

		public clone():Matrix {
			var a:number = this._data[0],
				b:number = this._data[3],
				c:number = this._data[1],
				d:number = this._data[4],
				tx:number = this._data[2],
				ty:number = this._data[5];
			return new Matrix(a, b, c, d, tx, ty);
		}
	}

	export class Matrix3D {
		private _data:Array<number>;

		constructor(iv:Array<number> = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]) {
			if (iv.length == 16) {
				this._data = iv;
			} else {
				__trace("Matrix3D initialization vector invalid", "warn");
				this.identity();
			}
		}

		public identity():void {
			this._data = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
		}

		public clone():Matrix3D {
			return new Matrix3D(this._data);
		}
	}

	export function createMatrix():any {
		return new Matrix();
	}

	export function createMatrix3D():any {
		return new Matrix3D();
	}

	export function createColorTransform():any {
		return null;
	}

	export function createGradientBox():any {
		return null;
	}

	/**
	 * Transforms a JS Array into an AS3 Vector<int>.
	 *   Nothing is actually done since the methods are very
	 *   similar across both.
	 * @param array - Array
	 * @returns {Array<number>} - AS3 Integer Vector
	 */
	export function toIntVector(array:Array<number>):Array<number> {
		Object.defineProperty(array, 'as3Type', {
			get: function () {
				return "Vector<int>";
			},
			set: function (value) {
			}
		});
		return array;
	}

	/**
	 * Transforms a JS Array into an AS3 Vector<number>.
	 *   Nothing is actually done since the methods are very
	 *   similar across both.
	 * @param array - Array
	 * @returns {Array<number>} - AS3 Number Vector
	 */
	export function toNumberVector(array:Array<number>):Array<number> {
		Object.defineProperty(array, 'as3Type', {
			get: function () {
				return "Vector<number>";
			},
			set: function (value) {
			}
		});
		return array;
	}
}