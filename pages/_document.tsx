import { Html, Head, Main, NextScript } from "next/document";
import type { DocumentProps } from "next/document";
import { jetbrainsMono } from "@/lib/fonts";

export default function Document(props: DocumentProps) {
  return (
    <Html lang={props.locale} className={jetbrainsMono.variable}>
      <Head />
      <body className={jetbrainsMono.className}>
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
