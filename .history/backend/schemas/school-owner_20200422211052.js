export default {
	name: 'school_owner',
	title: 'School owner',
	type: 'object',
	fields: [
		{
			name: 'first_name',
			title: 'First name',
			type: 'string'
		},
		{
			name: 'first_name',
			title: 'First name',
			type: 'string'
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
