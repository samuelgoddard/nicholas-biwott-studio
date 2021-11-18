import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Singletons
import singletonHome from './singletonHome'
// import singletonContact from './singletonContact'

// Documents
// import news from './news'
// import music from './music'
// import musicVideos from './musicVideos'

// Blocks
// import contentFull from './blocks/content-full'

// Common
import seo from './common/seo'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  types: schemaTypes.concat([
    singletonHome,
    seo
  ]),
})
