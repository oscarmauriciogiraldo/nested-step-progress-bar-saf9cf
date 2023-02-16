import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { StepProgressBarComponent } from "./step-progress-bar/step-progress-bar.component";
import { StartComponent } from "./start.component";
import { SemanticElementsComponent } from "./semantic-elements.component";
import { FormComponent } from "./form.component";
import { SVGComponent } from "./svg.component";
import { CanvasComponent } from "./canvas.component";
import { SelectorComponent } from "./selector.component";
import { ResponsiveDesignComponent } from "./responsive-design.component";
import { SCSSComponent } from "./scss.component";
import { AnimationComponent } from "./animation.component";
import { JQueryComponent } from "./jquery.component";
import { ES6Component } from "./es6.component";
import { NodejsComponent } from "./nodejs.component";
import { PhotoshopComponent } from "./photoshop.component";
import { SketchComponent } from "./sketch.component";
import { InvisionComponent } from "./invision.component";
import { EndComponent } from "./end.component";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    StepProgressBarComponent,
    StartComponent,
    SemanticElementsComponent,
    FormComponent,
    SVGComponent,
    CanvasComponent,
    SelectorComponent,
    ResponsiveDesignComponent,
    SCSSComponent,
    AnimationComponent,
    JQueryComponent,
    ES6Component,
    NodejsComponent,
    PhotoshopComponent,
    SketchComponent,
    InvisionComponent,
    EndComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
