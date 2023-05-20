import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lato-font/3.0.0/css/lato-font.min.css" integrity="sha512-rSWTr6dChYCbhpHaT1hg2tf4re2jUxBWTuZbujxKg96+T87KQJriMzBzW5aqcb8jmzBhhNSx4XYGA6/Y+ok1vQ==" crossorigin="anonymous" referrerpolicy="no-referrer" /> */}


        {/* <link href="https://cdn.jsdelivr.net/npm/@fontsource/poppins@5.9.0/css/all.css" rel="stylesheet" type="text/css" /> */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />




        <link href="https://cdn.jsdelivr.net/npm/@fontsource/lato@4.4.0/css/all.css" rel="stylesheet" type="text/css" />
        <link href="https://rsms.me/inter/inter.css" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css2?family=Sora&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@200&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" />




      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
