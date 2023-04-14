export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'Name of the product'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true,
                storeOriginalFilename: false,
            }
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',

        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Description of the product'
        },
        {
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
            description: 'Featured product'
        },
        {
            name: 'stuff',
            title: 'Stuff',
            type: 'array',
            of: [{type: 'string'}],
            options: {
                layout: 'tags',
            }
        }
    ]
}