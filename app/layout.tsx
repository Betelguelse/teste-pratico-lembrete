import "../public/globals.css";
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="pt-br">
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link href="/public/output.css" rel="stylesheet"/>
        </head>
        <body>{children}</body>
      </html>
    )
}