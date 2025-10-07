import { type RuleSetRule,  } from "webpack";

export function buildSvgLoader (): RuleSetRule {
  return {
    test: /\.svg$/,
    use: [{
      loader:'@svgr/webpack' ,
      options: {
        icon: true,
        svgoConfig:
        {
          plugins: [
            {
              name:'convertColors',
              params: {
               currentColor: true
              }
            }
          ]
        }
      }
    }]
  }
}
