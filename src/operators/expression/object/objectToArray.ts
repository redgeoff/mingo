// Object Expression Operators: https://docs.mongodb.com/manual/reference/operator/aggregation/#object-expression-operators

import { computeValue, Options } from "../../../core";
import {
  AnyVal,
  assert,
  each,
  isObject,
  RawArray,
  RawObject,
} from "../../../util";

/**
 * Converts a document to an array of documents representing key-value pairs.
 *
 * @param {*} obj The target object for this expression
 * @param {*} expr The right-hand side of the operator
 * @param {Options} options Options to use for operation
 */
export function $objectToArray(
  obj: RawObject,
  expr: AnyVal,
  options?: Options
): AnyVal {
  const val = computeValue(obj, expr, null, options) as RawObject;
  assert(isObject(val), "$objectToArray expression must resolve to an object");
  const arr: RawArray = [];
  each(val, (v, k) => arr.push({ k, v }));
  return arr;
}
