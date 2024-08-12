import "./globals.scss";

export const metadata = {
  title: "Rubick's Algo",
  description: "To help you learn algs faster...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
