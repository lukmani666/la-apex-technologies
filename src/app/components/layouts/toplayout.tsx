"use client"

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";


NProgress.configure({ showSpinner: false, trickleSpeed: 100 });

const TopLoader = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.start();
    const timer = setTimeout(() => {
      NProgress.done();
    }, 500)

    return () => {
      clearTimeout(timer);
      NProgress.done();
    }
  }, [pathname, searchParams]);

  return null;
  
}

export default TopLoader;