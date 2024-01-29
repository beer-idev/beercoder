import Script from 'next/script'

import metaData from '@/data/siteMetadata'

const UmamiScript = () => {
  return (
    <>
    {/* <script async src="https://analytics.umami.is/script.js" data-website-id="5b7ef0ca-1596-4a1b-be3a-fbd18f650b3b"></script> */}
      <Script
        async
        defer
        data-website-id={metaData.analytics.umamiWebsiteId}
        src="https://analytics.umami.is/script.js" // Replace with your umami instance
      />
    </>
  )
}

export default UmamiScript
