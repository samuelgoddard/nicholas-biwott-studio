import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Singletons
import singletonHome from './singletonHome'
import singletonEarlyLife from './singletonEarlyLife'
import singletonBusinessman from './singletonBusinessman'
import singletonPublicServant from './singletonPublicServant'
import singletonPhilanthropist from './singletonPhilanthropist'
import singletonPersonalLife from './singletonPersonalLife'
import singletonQuotes from './singletonQuotes'
import singletonContact from './singletonContact'
import singletonTimeline from './singletonTimeline'

// Documents
import press from './press'
import categories from './categories'
import legal from './legal'
// import music from './music'
// import musicVideos from './musicVideos'

// Blocks
// import contentFull from './blocks/content-full'

// Common
import seo from './common/seo'
import image from './common/image'
import blockQuote from './common/blockQuote'
import hero from './common/hero'
import timelineItem from './common/timelineItem'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  types: schemaTypes.concat([
    singletonHome,
    singletonEarlyLife,
    singletonBusinessman,
    singletonPublicServant,
    singletonPhilanthropist,
    singletonPersonalLife,
    singletonQuotes,
    singletonContact,
    singletonTimeline,
    press,
    categories,
    legal,
    seo,
    image,
    timelineItem,
    blockQuote,
    hero
  ]),
})
