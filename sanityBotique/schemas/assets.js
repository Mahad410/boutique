export default {
    name: 'asset',
    title: 'Asset',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },{
        name:'image',
        title:'Image',
        type:'image',
        options:{
            hotspot:true,
        }
        }
        ]
}