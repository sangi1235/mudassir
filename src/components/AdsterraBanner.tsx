'use client';

import { useEffect, useRef } from 'react';

export default function AdsterraBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bannerRef.current && !bannerRef.current.firstChild) {
      const conf = document.createElement('script');
      const script = document.createElement('script');
      const atOptions = {
        key: '10d888f2e5843d081768747352c65cdc',
        format: 'iframe',
        height: 90,
        width: 728,
        params: {},
      };
      script.type = 'text/javascript';
      script.src = '//www.highperformanceformat.com/10d888f2e5843d081768747352c65cdc/invoke.js';
      script.async = true;
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)};`;
      bannerRef.current.append(conf);
      bannerRef.current.append(script);

      return () => {
        if (bannerRef.current) {
          bannerRef.current.innerHTML = '';
        }
      };
    }
  }, []);

  return (
    <div className="flex items-center justify-center my-8 overflow-x-auto md:overflow-visible">
      <div ref={bannerRef} style={{ minWidth: '728px', height: '90px' }} />
    </div>
  );
}