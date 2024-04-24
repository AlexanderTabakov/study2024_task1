declare module "*.png";
declare module "*.jpg";
declare module "*.png" {
  const value: any;
  export = value;
}

declare module '*.svg' {
  import type React from 'react'

  export const SVG: React.VFC<React.SVGProps<SVGSVGElement>>

}

