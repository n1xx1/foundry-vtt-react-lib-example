declare module "react-foundry" {
  import { ComponentType } from "react";

  export type ApplicationReactOptions<P> = P &
    Application.Options & {
      component: ComponentType<{ data: any; application: Application }>;
    };

  export class ApplicationReact<
    T extends ApplicationReactOptions<{}> = ApplicationReactOptions<{}>
  > extends Application<T> {}
}
