import { BuilderBlock } from '@builder.io/angular';
import { Component, Input } from '@angular/core';
import { GetContentOptions } from '@builder.io/sdk';

@BuilderBlock({
  tag: 'custom-thing',
  name: 'Custom thing',
  inputs: [
    {
      name: 'name',
      type: 'string',
    },
  ],
})
@Component({
  selector: 'custom-thing',
  template: 'Hello: {{name}}',
})
export class CustomThingComponent {
  @Input()
  name = '';
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  options: GetContentOptions;

  data = {
    property: 'hello',
    fn: (text: string) => alert(text),
  };

  load(event: any) {
    console.log('load', event);
  }

  error(event: any) {
    console.log('error', event);
  }
}



