import Script from 'next/script'

function Analytics() {
  return (
    <div className="container">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-BKMWFDV3F4"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-BKMWFDV3F4');
        `}
      </Script>
    </div>
  )
}