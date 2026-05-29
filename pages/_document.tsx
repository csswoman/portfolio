import { Html, Head, Main, NextScript } from "next/document";
import type { DocumentProps } from "next/document";
import { inter, jetbrainsMono } from "@/lib/fonts";

export default function Document(props: DocumentProps) {
  return (
    <Html
      lang={props.locale}
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <Head />
      <body>
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
      </body>
    </Html>
  );
}
