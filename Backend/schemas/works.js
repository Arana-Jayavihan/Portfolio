export default {
  name: 'works',
  title: 'Works',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'projectLink',
      title: 'Project Link',
      type: 'string',
    },
    {
      name: 'codeLink',
      title: 'Code Link',
      type: 'string',
    },
    {
      name: 'imgUrl',
      title: 'ImageUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          name: 'tag',
          title: 'Tag',
          type: 'string',
          options: {
            list: [
              {
                title: 'React JS',
                value: 'React JS'
              },
              {
                title: 'Web App',
                value: 'Web App'
              },
              {
                title: 'Python',
                value: 'Python'
              },
              {
                title: 'Pen Test',
                value: 'Pen Test'
              },
              {
                title: 'UI/UX',
                value: 'UI/UX'
              },
              {
                title: 'All',
                value: 'All'
              },
              {
                title: 'AI',
                value: 'AI'
              },
            ]
          }
        }
      ]
    },

  ],
};