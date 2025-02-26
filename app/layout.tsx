import type { Metadata } from "next";
import ConfigureAmplifyClientSide from "@/components/ConfigureAmplify";
import ResponsiveAppBar from "@/components/AppBar";
import '@aws-amplify/ui-react/styles.css';


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
      <body>
        <ConfigureAmplifyClientSide />
        <ResponsiveAppBar />
        {children}
      </body>
    </html>
  );
}
