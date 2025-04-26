'use client';

import { useMemo } from 'react';
import dynamic from 'next/dynamic';

export default function LoadedMap() {
  const Map = useMemo(() => dynamic(
    () => import('@/components/Map/Map'),
    {
      loading: () => <p>A map is loading</p>,
      ssr: false,
    }
  ), []);

  return (
    <Map />
  );
}