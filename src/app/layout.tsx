import "@/styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full bg-bg text-text antialiased">
        <div className="page-bg min-h-full">{children}</div>
      </body>
    </html>
  );
}
