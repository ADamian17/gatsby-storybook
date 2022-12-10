import { useEffect, useState } from 'react';

type PageOffsetType = {
  y: number;
  x: number;
};

export default function usePageOffset(): PageOffsetType {
  const [pageOffset, setPageOffset] = useState<PageOffsetType>({
    y: 0,
    x: 0,
  });

  useEffect(() => {
    const handleSetPageOffset = (prevState: PageOffsetType) => ({
      ...prevState,
      x: window.scrollX,
      y: window.scrollY,
    });

    function handleScroll() {
      setPageOffset(handleSetPageOffset);
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    setPageOffset(handleSetPageOffset);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return pageOffset;
}
