'use strict';

module.exports = function (item, t) {
	t.test('item', function (st) {
		var arr = [1, [2], [3, 4]];

		st.equal(item(arr, 0), arr[0]);
		st.equal(item(arr, -3), arr[0]);

		st.deepEqual(item(arr, 1), arr[1]);
		st.deepEqual(item(arr, -2), arr[1]);

		st.deepEqual(item(arr, 2), arr[2]);
		st.deepEqual(item(arr, -1), arr[2]);

		st.equal(item(arr, 3), undefined);
		st.equal(item(arr, -4), undefined);

		st.equal(item([], 0), undefined);
		st.equal(item([], -1), undefined);

		st.end();
	});

	t.test('sparse arrays', function (st) {
		// eslint-disable-next-line no-sparse-arrays
		var arr = [, [1]];
		st.equal(item(arr, 0), undefined);
		st.equal(item(arr, -2), undefined);

		st.deepEqual(item(arr, 1), [1]);
		st.deepEqual(item(arr, -1), [1]);

		st.end();
	});
};
