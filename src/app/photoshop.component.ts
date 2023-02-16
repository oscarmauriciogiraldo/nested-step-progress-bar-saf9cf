import { Component, Input } from "@angular/core";

@Component({
  selector: "app-photoshop",
  template: `
    <h1>Photoshop</h1>
    <h2>Powering the creative world.</h2>
    <p>
      The world’s best imaging and graphic design software is at the core of
      just about every creative project, from photo editing and compositing to
      digital painting, animation, and graphic design. And now you can harness
      the power of Photoshop across desktop and iPad to create wherever
      inspiration strikes.
    </p>
    <h2>Everyday photography. Totally transformed.</h2>
    <h2>Design is in our DNA.</h2>
    <p>
      Posters, packaging, banners, websites — all your design projects start
      with Photoshop. Combine photos and text to create entirely new images.
      Work with unlimited layers and masks. And paint with
      <a
        disablelinktracking="false"
        href="https://www.adobe.com/products/photoshop/photoshop-brushes.html"
        >brushes</a
      >
      that you control with stylus or touch on your iPad.
    </p>
    <h2>Here. There. Everywhere.</h2>
    <p>
      Start on your iPad and finish on your desktop — your work is automatically
      saved to the cloud and your PSDs are the same, no matter where you are.
    </p>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class PhotoshopComponent {}
