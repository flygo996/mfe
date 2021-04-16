declare module '*.css'
declare module '*.less'
declare module '*.png'
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement
  const url: string
  export default url
}

type mfeApp = {
  name: string
  entry: string
  container: string
  activeRule: string
}
declare const mfeApps: mfeApp[]
