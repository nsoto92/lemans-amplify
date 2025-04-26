import type { Metadata } from "next";
import ConfigureAmplifyClientSide from "@/components/ConfigureAmplify";
import '@aws-amplify/ui-react/styles.css';
import ResponsiveAppBar from "@/components/AppBar/AppBar";

export const metadata: Metadata = {
  title: "Leman's Auto Detailing",
  description: "Leman's Auto Detailing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <head>
         <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
          crossOrigin=""
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <ConfigureAmplifyClientSide />
        <ResponsiveAppBar />
        {children}
      </body>
    </html>
  );
}
