"use client"
import Mainheader from "@/components/Mainheader";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect } from "react";


// export const metadata={
//   title :"Mon Application",
//   viewport : "width=device-width, initial-scale=1.0"
// };

export default function RootLayout({ children }) {
  useEffect (()=>{
    import( "bootstrap/dist/js/bootstrap.bundle.min.js");
  });


  return (
    <html lang="en">
      <head>
        {/* ✅ Lien Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body >
          <Mainheader/>
        {children}
 
      </body>
    </html>
  );
}
