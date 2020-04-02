import React, { useEffect } from "react";

function PropertyMap() {

  useEffect(() => {
    async function renderLWC() {
      const baseScriptElement = document.createElement('script');
      const baseScriptSrc = await fetch('/api/auth/propertyMapBaseScriptUrl')
        .then(res => {
          if (res.ok) {
            return res.json();
          }
        })
        .catch(err => {
          console.log(err);
        });

      if (baseScriptSrc) {
        baseScriptElement.src = `${baseScriptSrc}`;
        document.body.appendChild(baseScriptElement);
      }

      // // return () => {
      // //   document.body.removeChild(baseScript);
      // // }

      const ltnoutScriptElement = document.createElement('script');
      const ltnoutScript = await fetch('/api/auth/propertyMapLtnOutJs')
        .then(res => {
          if (res.ok) {
            return res.json();
          }
        })
        .catch(err => {
          console.log(err);
        });;
      ltnoutScriptElement.innerText = `${ltnoutScript}`;
      document.body.appendChild(ltnoutScriptElement);
    }

    renderLWC();
  });

  return (
    <div>
      <p>Below is a LWC using lightning out technique and expose to this react component.</p>
      <div id='propertyMap'></div>
    </div>
  );
}

export default PropertyMap;