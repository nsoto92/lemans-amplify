'use client';

import { useMemo } from 'react';
import dynamic from 'next/dynamic';

interface LoadedMapProps {
  center?: {
    lat: number;
    lng: number;
  };
  lockDrag?: boolean;
  showServiceArea?: boolean;
}
export default function LoadedMap({ center, lockDrag, showServiceArea }: LoadedMapProps) {
  const Map = useMemo(() => dynamic(
    () => import('@/components/Map/Map'),
    {
      loading: () => <p>A map is loading</p>,
      ssr: false,
    }
  ), []);

  return (
    <Map center={center} lockDrag={lockDrag} showServiceArea={showServiceArea} />
  );
}