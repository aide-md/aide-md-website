import { ReactElement, PropsWithChildren } from "react";

declare module "react" {
  interface FCC<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  }
}
