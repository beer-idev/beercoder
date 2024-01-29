import Head from 'next/head'
import { useRouter } from 'next/router'
import metaData from '@/data/siteMetadata'

const CommonSEO = ({ title, description, ogType, ogImage, twImage, canonicalUrl }) => {
  const router = useRouter()
  return (
    <Head data-theme="dim">
      <title>{title}</title>
      <meta name="viewport" content="viewport-fit=cover"></meta>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta property="og:url" content={`${metaData.siteUrl}${router.asPath}`} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={metaData.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      {ogImage.constructor.name === 'Array' ? (
        ogImage.map(({ url }) => <meta property="og:image" content={url} key={url} />)
      ) : (
        <meta property="og:image" content={ogImage} key={ogImage} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={metaData.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twImage} />
      <link
        rel="canonical"
        href={canonicalUrl ? canonicalUrl : `${metaData.siteUrl}${router.asPath}`}
      />
    </Head>
  )
}

export const PageSEO = ({ title, description }) => {
  const ogImageUrl = metaData.siteUrl + metaData.socialBanner
  const twImageUrl = metaData.siteUrl + metaData.socialBanner
  return (
    <CommonSEO
      title={title}
      description={description}
      ogType="website"
      ogImage={ogImageUrl}
      twImage={twImageUrl}
    />
  )
}