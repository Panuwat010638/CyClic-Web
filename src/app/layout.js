import "./globals.css";
import groq from "groq";
import { Inter } from "next/font/google";
import client from "../../client";
import BGnavbar from "@/components/Navbar/BGnavbar";

import GA from "./ga";
import Menu from "@/components/Navbar/Menu";
import Footer from "@/components/Footer/Footer";

  export const revalidate = 100;
  export const dynamicParams = true;
  const inter =  Inter(
    { 
      weight: ['100','200','300','400','500','600', '700','800', '900'],
      style: ['normal'],
      subsets: ['latin'],
      display: 'swap',
    });
  

async function getPosts() {
  
  
  const queryF = groq`*[_type == "footer" ] | order(_createdAt desc)`
  const footer = await client.fetch(queryF, {
    next: { revalidate: 10 },
  })
  const queryNavbar = groq`*[_type == "navbar"] | order(_createdAt desc)`
    const navbar = await client.fetch(queryNavbar, {
    next: { revalidate: 10 },
      })

  const gtag = await client.fetch(groq`*[_type == "gaTag"][0]`, {
    next: { revalidate: 10 },
  });
  const facebook = await client.fetch(groq`*[_type == "FacebookPixel" ][0]`, {
    next: { revalidate: 10 },
  });

  
  return {
      props: { footer,gtag,facebook,navbar }
  }
}

/////METADATA
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export async function generateMetadata({ params, searchParams }, parent) {
const gsc = await client.fetch(groq`*[_type == "gsc" ][0]`, {
  next: { revalidate: 10 },
});



return {
  title: 'Cy-Click Business Solution' ,
  description: 'Cy-Click Business Solution',
  keywords:'Cy-Click Business Solution',
  metadataBase: new URL('https://www.cy-click.com/'),
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [{ name: 'Cy-Click Business Solution', url: 'https://www.cy-click.com/' }],
  creator: 'C',
  publisher: 'Cy-Click Business Solution',
  verification: {
    google: gsc?.title,
  },
}
}

export default async function RootLayout({ children }) {
  const posts = await getPosts();
  const footer = posts.props.footer;
  const navbar = posts.props.navbar;
  const gtag = posts.props.gtag;
  return (
    <html lang="th">
      <body className={inter.className}>
      <GA data={gtag?.title}/>
        <BGnavbar/>
        <Menu data={navbar[0]}/>
          {children}
        <Footer data={footer[0]}/>
      </body>
    </html>
  );
}
