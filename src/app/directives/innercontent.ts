import {
  Component,
  ViewContainerRef,
  Injector,
  ComponentResolver,
  Directive,
  Input,
  ApplicationRef
} from "@angular/core";

/**
  This component renders an HTML code with inner directives on it.
  The @Input innerContent receives an array argument, the first array element
  is the code to be parsed. The second index is an array of Components that
  contains the directives present in the code.
  Example:
  <div [innerContent]="[
    'Go to <a [routerLink]="[Home]">Home page</a>',
    [RouterLink]
  ]">
**/
@Directive({
  selector: "[innerContent]",
})
export class InnerContent {

  @Input()
  set innerContent(content) {
    this.renderTemplate(
      content[0],
      content[1]
    );
  }

  constructor(
    private elementRef: ViewContainerRef,
    private injector: Injector,
    private app: ApplicationRef,
    private resolver: ComponentResolver) {
  }

  public renderTemplate(template, directives) {
    const dynComponent = this.toComponent(template, directives);
    this.resolver.resolveComponent(
      dynComponent
    ).then(factory => {
      const component = factory.create(
        this.injector, null, this.elementRef.element.nativeElement
      );

      (<any>this.app)._loadComponent(component);
      component.onDestroy(() => {
        (<any>this.app)._unloadComponent(component);
      });
      return component;
    });
  }

  private toComponent(template, directives = []) {
    @Component({
      selector: "gen-node",
      template: template,
      directives: directives
    })
    class DynComponent { }
    return DynComponent;
  }
}