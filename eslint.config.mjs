import ljharb from '@ljharb/eslint-config/flat';

export default [
	...ljharb,
	{
		rules: {
			'id-length': 'off',
			'new-cap': [
				'error', {
					capIsNewExceptions: [
						'Get',
						'LengthOfArrayLike',
						'RequireObjectCoercible',
						'ToIntegerOrInfinity',
						'ToObject',
						'ToString',
					],
				},
			],
		},
	},
];
