import makePlural from "make-plural/make-plural"

const cardinal = ({ options, parameters, parameter }) => {
  const MakePlural = makePlural.load({
    supplemental: {
      "plurals-type-cardinal": { rules: options.rules },
    },
  })

  const cardinal = new MakePlural(`rules`)

  return options[parameter][cardinal(parameters[parameter])].replace(
    `{{ ${ parameter } }}`,
    parameters[parameter]
  )
}

export default cardinal
