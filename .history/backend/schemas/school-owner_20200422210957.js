export default {
	name: 'school_owner',
	title: 'School owner',
	type: 'object',
	fields: [
		{
			name: 'First name',
			title: 'School Name',
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
