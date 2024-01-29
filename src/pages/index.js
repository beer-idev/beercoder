import { Suspense } from "react";
import { PageSEO } from "@/components/SEO";
import dynamic from "next/dynamic";
import metaData from "@/data/siteMetadata";
import { Lora } from "next/font/google";
import styles from "@/styles/Home.module.css";
const Hero = dynamic(() => import("@/components/Hero"), {
  loading: () => <p>Loading...</p>,
});
import View from "@/components/View";
import MobileNav from "@/components/MobileNav";
const Skill = dynamic(() => import("@/components/Skill"), {
  loading: () => <p>Loading...</p>,
});
const Experiences = dynamic(() => import("@/components/Experiences"), {
  loading: () => <p>Loading...</p>,
});
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <p>Loading...</p>,
});

import BackToTop from "@/components/ScrollToTop";

import { motion, useScroll } from "framer-motion";

const lora = Lora({ subsets: ["latin"] });

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <PageSEO title={metaData.title} description={metaData.description} />
      <BackToTop />
      <Suspense fallback={<p>Loading feed...</p>}>
        <Hero />
      </Suspense>
      {/* <View /> */}
      <Suspense fallback={<p>Loading feed...</p>}>
        <Skill />
      </Suspense>
      <Suspense fallback={<p>Loading feed...</p>}>
        <Experiences />
      </Suspense>
      <Suspense fallback={<p>Loading feed...</p>}>
        <Projects />
      </Suspense>
      <MobileNav />
    </>
  );
}
