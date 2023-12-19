export default {
    name: 'profile',
    title: 'Profile',
    type: 'document',
    fields: [
        {
            name: 'fullName',
            title: 'Full Name',
            type: 'string'
        },
        {
            name: 'profileImg',
            title: 'Profile Pic',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        },
        {
            name: 'from',
            title: 'From',
            type: 'string'
        },
        {
            name: 'contact',
            title: 'Contact',
            type: 'string'
        },
        {
            name: 'age',
            title: 'Age',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'instagram',
            title: 'Instagram',
            type: 'string'
        },
        {
            name: 'linkedin',
            title: 'LinkedIn',
            type: 'string'
        },
        {
            name: 'github',
            title: 'Github',
            type: 'string'
        },
        {
            name: 'twitter',
            title: 'Twitter',
            type: 'string'
        },
        {
            name: 'resume',
            title: 'Resume',
            type: 'file',
            fields: [
                {
                    name: 'author',
                    title: 'Author',
                    type: 'string'
                }
            ]
        },
        {
            name: 'roles',
            title: 'Roles',
            type: 'array',
            of: [
                {
                    name: 'role',
                    title: 'Role',
                    type: 'string'
                }
            ]
        },
        {
            name: 'copyright',
            title: 'Copy Right',
            type: 'string'
        }

        // {
        //     name: 'typeanimation',
        //     title: 'Type Animation',
        //     type: 'array',
        //     of: [
        //         {
        //             name: 'title',
        //             title: 'Title',
        //             type: 'document',
        //             fields: [
        //                 {
        //                     name: 'title',
        //                     title: 'Title',
        //                     type: 'string'
        //                 },
        //                 {
        //                     name: 'time',
        //                     title: 'Time',
        //                     type: 'string'
        //                 }
        //             ]
        //         }
        //     ]
        // },
        
    ]
}