type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Static File Serving',
    Svg: require('@site/static/icons/folders.svg').default,
    description: (
      <>
        Serve static files from a directory.
      </>
    ),
  },
  {
    title: 'Configurable',
    Svg: require('@site/static/icons/gear.svg').default,
    description: (
      <>
        Setup your server using a configuration file or command line arguments.
      </>
    ),
  },
  {
    title: 'Secure',
    Svg: require('@site/static/icons/lock.svg').default,
    description: (
      <>
        Use HTTPS to serve your files securely.
      </>
    ),
  },
  {
    title: 'Protected Access',
    Svg: require('@site/static/icons/key.svg').default,
    description: (
      <>
        Use authentication to protect access to your files.
      </>
    ),
  },
  {
    title: 'Proxy Requests',
    Svg: require('@site/static/icons/tower.svg').default,
    description: (
      <>
        Use the configuration file to proxy requests to another server.
      </>
    ),
  },
  {
    title: 'Performant',
    Svg: require('@site/static/icons/performance.svg').default,
    description: (
      <>
        Written in Rust, the HTTP Server is fast and memory efficient.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div
      className="h-full relative flex flex-col items-center p-6 bg-white rounded shadow-xl w-80 "
    >
      <figure
        className="bg-blue-600 rounded-full flex justify-center items-center w-16 h-16 mb-4"
      >
        <Svg className='text-white w-8' role="img" />
      </figure>
      <h4 className="text-xl font-semibold mb-1">
        {title}
      </h4>
      <p className="text-gray-600 text-center">
        {description}
      </p>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className='relative'>
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-zinc-900 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2
              className="text-3xl font-extrabold leading-tighter tracking-tighter mb-4"
            >
              Features
            </h2>
            <p className="text-xl text-gray-600">
              The HTTP Server comes with a set of features available out of the box.
            </p>
          </div>

          <div
            className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none"
          >
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section >
  );
}
