export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Nested Layout Example</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
