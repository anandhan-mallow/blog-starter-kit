import Script from 'next/script';

export function Brandwell() {
  return (
    <Script>
    (function () {
            var brandwell = window.brandwell || (window.brandwell = []);
            if (brandwell.invoked) return;
            brandwell.invoked = true;
            brandwell.load = function (bwAppId) {
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.async = true;
                script.src = "https://script.brandwell.ai/tracking.min.js";
                var n = document.getElementsByTagName("script")[0];
                n.parentNode.insertBefore(script, n);
                brandwell.appId = bwAppId;
            };
            brandwell.load("brandwell-testing");
        })();
      </Script>
  );
}

export default Brandwell;
