import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-black text-white text-center text-3xl"
      >
        {children}
      </body>
    </html>
  );
}
