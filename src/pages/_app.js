import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import loadingPage from '@/components/Loading';

import Layout from '../components/Layout';
import reportWebVitals from '../reportWebVitals';
import Analytics from '@/components/analytics';
const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});

import '@/styles/globals.css';
import '@fontsource/poppins';

export default function App({ Component, pageProps }) {
  // function Loading() {
  //   const router = useRouter();
  
  //   const [loading, setLoading] = useState(false);
  
  //   useEffect(() => {
  //       const handleStart = (url) => (url !== router.asPath) && setLoading(true);
  //       const handleComplete = (url) => (url === router.asPath) && setTimeout(() =>{setLoading(false)},2000);
  
  //       router.events.on('routeChangeStart', handleStart)
  //       router.events.on('routeChangeComplete', handleComplete)
  //       router.events.on('routeChangeError',  handleComplete)
  
  //       return () => {
  //           router.events.off('routeChangeStart', handleStart)
  //           router.events.off('routeChangeComplete', handleComplete)
  //           router.events.off('routeChangeError', handleComplete)
  //       }
  //   })
  
  //   return loading && (
  //     <div>loading</div>
  //     // <loadingPage />
  //   )
  // }
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    router.events.on('routeChangeStart', () => setLoading(true));
    router.events.on('routeChangeComplete', () => setLoading(false));
    router.events.on('routeChangeError', () => setLoading(false));
    return () => {
      router.events.off('routeChangeStart', () => setLoading(true));
      router.events.off('routeChangeComplete', () => setLoading(false));
      router.events.off('routeChangeError', () => setLoading(false));
    };
  }, [router]);
  return (
    <>
     {loading && <loadingPage />}
        <Layout>
          <Analytics />
          <AnimatedCursor
            innerSize={8}
            outerSize={8}
            color="193, 11, 111"
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
            hasBlendMode={true}
            clickables={[
              'a',
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              'label[for]',
              'select',
              'textarea',
              'button',
              '.link',
            ]}
          />
          <Component {...pageProps} />
        </Layout>
    </>
  );
}

reportWebVitals();
