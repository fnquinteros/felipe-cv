import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Felipe Quinteros - Software Engineer",
  description:
    "Felipe Quinteros' Resume for a Software Engineer position. 3+ years of full stack development experience.",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout(props: Props) {
  const { children } = props;
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
