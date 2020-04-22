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
			title: 'Owner Data',
			name: 'owner_data',
			type: 'schoolOwner'
		},
		{
			title: 'Plan',
			name: 'plan',
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
