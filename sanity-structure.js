import S from "@sanity/desk-tool/structure-builder";
import IframePreview from './preview/IFramePreview'
import { getGlobalSlug, previewURL } from './utils/resolveProductionUrl'

export const getDefaultDocumentNode = ({ schemaType }) => S.document().views(getPreview(schemaType))

const getPreview = (schemaType) => {
  const globalSlug = getGlobalSlug(schemaType)
  if (globalSlug) {
    return [
      S.view.form(),
      S.view
        .component(IframePreview)
        .title('Web preview')
        .options({ previewURL, isMobile: false, globalSlug }),
      S.view
        .component(IframePreview)
        .title('Mobile preview')
        .options({ previewURL, isMobile: true, globalSlug })
    ]
  }
  return [S.view.form()]
}

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem().title('Home').child(S.editor().id('home').schemaType('home').documentId('singleton-home').views(getPreview('home'))),
      S.divider(),
      S.listItem().title('Early Life').child(S.editor().id('earlyLife').schemaType('earlyLife').documentId('singleton-earlyLife').views(getPreview('earlyLife'))),
      S.divider(),
      S.listItem().title('Businessman').child(S.editor().id('businessman').schemaType('businessman').documentId('singleton-businessman').views(getPreview('businessman'))),
      S.divider(),
      S.listItem().title('Philanthropist').child(S.editor().id('philanthropist').schemaType('philanthropist').documentId('singleton-philanthropist').views(getPreview('philanthropist'))),
      S.divider(),
      S.listItem().title('Public Servant').child(S.editor().id('publicServant').schemaType('publicServant').documentId('singleton-publicServant').views(getPreview('publicServant'))),
      S.divider(),
      S.listItem().title('Personal Life').child(S.editor().id('personalLife').schemaType('personalLife').documentId('singleton-personalLife').views(getPreview('personalLife'))),
      S.divider(),
      S.listItem().title('Press').child(S.documentTypeList('press').title('Press')),
      S.divider(),
      S.listItem().title('Press Categories').child(S.documentTypeList('categories').title('Press Categories')),
      S.divider(),
      S.listItem().title('Legal').child(S.documentTypeList('legal').title('Legal')),
      // S.divider(),
      // S.listItem().title('Music Videos').child(S.documentTypeList('musicVideos').title('Music Videos')).icon(FiVideo),
      // S.divider(),
      // S.listItem().title('News Articles').child(S.documentTypeList('news').title('News Articles')).icon(FiPenTool),
      S.divider(),
      S.listItem().title('Quotes').child(S.editor().id('quotes').schemaType('quotes').documentId('singleton-quotes').views(getPreview('quotes'))),
      S.divider(),
      S.listItem().title('Contact').child(S.editor().id('contact').schemaType('contact').documentId('singleton-contact')),
    ]);