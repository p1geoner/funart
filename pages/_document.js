import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";

export default function Document() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      (function (m, e, t, r, i, k, a) {
        m[i] =
          m[i] ||
          function () {
            (m[i].a = m[i].a || []).push(arguments);
          };
        m[i].l = 1 * new Date();
        for (var j = 0; j < document.scripts.length; j++) {
          if (document.scripts[j].src === r) {
            return;
          }
        }
        (k = e.createElement(t)),
          (a = e.getElementsByTagName(t)[0]),
          (k.async = 1),
          (k.src = r),
          a.parentNode.insertBefore(k, a);
      })(
        window,
        document,
        "script",
        "https://mc.yandex.ru/metrika/tag.js",
        "ym",
      );

      ym(95299741, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
      });
    }
  }, []);
  return (
    <Html lang="ru">
      <Head></Head>
      <body>
        <Main />
        <NextScript />
        <script type="text/javascript"></script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/95299741"
              style={{ position: "absolute", left: "-999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </Html>
  );
}
