export default {
	name: 'school',
	title: 'School',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'School name',
			type: 'string'
		},
		{
			name: 'owner',
			title: 'Owner full name',
			type: 'string'
		},
		{
			title: 'Owner Data',
			name: 'owner_data',
			type: 'schoolOwner'
		},
		/* {
			title: '',
			name: 'variants',
			type: 'array',
			of: [
				{
					title: 'School owner',
					type: 'schoolOwner'
				}
			]
		}, */
		{
			title: 'Tags',
			name: 'tags',
			type: 'array',
			of: [
				{
					type: 'string'
				}
			],
			options: {
				layout: 'tags'
			}
		},
		{
			name: 'vendor',
			title: 'Vendor',
			type: 'reference',
			to: { type: 'vendor' }
		},
		{
			name: 'blurb',
			title: 'Blurb',
			type: 'localeString'
		},
		{
			name: 'categories',
			title: 'Categories',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: { type: 'category' }
				}
			]
		},
		{
			name: 'body',
			title: 'Body',
			type: 'localeBlockContent'
		}
	],

	preview: {
		select: {
			title: 'title',
			manufactor: 'manufactor.title',
			media: 'defaultProductVariant.images[0]'
		}
	}
};
