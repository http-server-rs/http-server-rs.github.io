import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Features from '@site/src/components/Features';

import styles from './index.module.css';
import clsx from 'clsx';

const ADJECTIVES = ['safe', 'fast', 'light', 'open', 'rusty'];
function Hero() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-20 md:pb-20">
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 flex justify-center gap-4"
            >A <span
              className={clsx("bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400", styles.animation)}
            >
                <ul className={styles.adjectives}>
                  {ADJECTIVES.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </span> HTTP Server Solution
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8">
                Serve static files or proxy requests to other servers with a single
                command.
              </p>
              <div
                className="max-w-xs mx-auto flex flex-col justify-center md:space-x-4 md:flex-row"
              >
                <a
                  className="w-full bg-blue-600 mb-4 text-white sm:w-auto sm:mb-0 inline-flex items-center justify-center rounded-md py-2 px-6"
                  href="https://github.com/http-server-rs/http-server/releases/latest"
                >Download</a>
                <a
                  className="w-full bg-gray-900 mb-4 text-white sm:w-auto sm:mb-0 inline-flex items-center justify-center rounded-md py-2 px-6"
                  href="https://docs.httpserver.rs/"
                >Documentation</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-zinc-900">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2
              className="text-3xl text-zinc-200 font-extrabold leading-tighter tracking-tighter mb-4"
            >
              Featured On
            </h2>
          </div>

          <div className="flex justify-center items-center">
            <a
              target="_blank"
              href="https://korben.info/decouvrez-serveur-http-polyvalent-tls-cors.html"
            >
              <figure className="h-[256px]">
                <img
                  className="h-full"
                  src="/img/korben.png"
                  alt="Korben.info Logo"
                />
              </figure>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <div className='flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip'>
        <Hero />
        <Features />
        <Testimonials />
      </div>
    </Layout>
  );
}