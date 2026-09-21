import "./globals.css";
export const metadata = {
  title: "My Adventure",
  description: "Cerita Pendakian Gunung Butak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}