import Script from "next/script"

export default function GA({data}) {
  
    
    return (
        <>
            {/* <!-- Google tag (gtag.js) --> */}
            <Script async src={`https://www.googletagmanager.com/gtag/js?id=${data}`}></Script>
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${data}');

                    gtag('consent', 'default', {
                        'analytics_storage': 'denied'
                    });
                    
                    gtag('config', '${data}', {
                        page_path: window.location.pathname,
                    });
                `}
            </Script>
        </>
    )
}