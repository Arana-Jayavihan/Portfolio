export default {
    name: 'feedback',
    title: 'Feedback',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'string'
        },
        {
            name: 'imageUrl',
            title: 'ImageURL',
            type: 'image',
            options: {
                hotspot: true
            }
        }
    ]
}