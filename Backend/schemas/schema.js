import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'
import works from './works'
import Feedback from './Feedback'
import brands from './brands'
import abouts from './abouts'
import experiences from './experiences'
import skills from './skills'
import workExperience from './workExperience'
import contact from './contact'
import profile from './profile'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    profile,
    works, 
    Feedback, 
    brands, 
    abouts, 
    skills, 
    workExperience, 
    experiences, 
    contact
  ]),
})
