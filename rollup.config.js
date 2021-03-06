import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import babel from "rollup-plugin-babel"
import pkg from "./package.json"

export default [
  {
    input: `src/main.js`,
    output: {
      file: pkg.browser,
      format: `umd`,
      name: `gullwing.transformers.cardinals`,
      globals: {
        "make-plural/make-plural": `makePlural`,
      },
    },
    plugins: [
      resolve({
        only: [ `make-plural` ],
      }),
      commonjs(),
      babel({
        exclude: [ `node_modules/**` ],
      }),
    ],
  },
  {
    input: `src/main.js`,
    output: [
      { file: pkg.main, format: `cjs` },
      { file: pkg.module, format: `es` },
    ],
    plugins: [
      babel({
        exclude: [ `node_modules/**` ],
      }),
    ],
    external: [ `make-plural/make-plural` ],
  },
]
