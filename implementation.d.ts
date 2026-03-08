/**
 * Returns the element at the given index.
 *
 * @param this - The array-like object.
 * @param index - The integer index. Negative integers count back from the last element.
 * @returns The element at the given index, or `undefined` if the index is out of range.
 */
declare function at<T>(this: ArrayLike<T>, index: number): T | undefined;

export = at;
