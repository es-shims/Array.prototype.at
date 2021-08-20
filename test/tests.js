'use strict';

module.exports = function (at, t) {
	t.test('at', function (st) {
		var arr = [1, [2], [3, 4]];

		st.equal(at(arr, 0), arr[0]);
		st.equal(at(arr, -3), arr[0]);

		st.deepEqual(at(arr, 1), arr[1]);
		st.deepEqual(at(arr, -2), arr[1]);

		st.deepEqual(at(arr, 2), arr[2]);
		st.deepEqual(at(arr, -1), arr[2]);

		st.equal(at(arr, 3), undefined);
		st.equal(at(arr, -4), undefined);

		st.equal(at(arr, Infinity), undefined);
		st.equal(at(arr, -Infinity), undefined);

		st.equal(at([], 0), undefined);
		st.equal(at([], -1), undefined);

		st.end();
	});

	t.test('sparse arrays', function (st) {
		// eslint-disable-next-line no-sparse-arrays
		var arr = [, [1]];
		st.equal(at(arr, 0), undefined);
		st.equal(at(arr, -2), undefined);

		st.deepEqual(at(arr, 1), [1]);
		st.deepEqual(at(arr, -1), [1]);

		st.end();
	});
};
