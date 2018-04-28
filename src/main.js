import makePlural from "make-plural/make-plural"

const cardinals = ({ options, parameters, parameter }) => {
  const MakePlural = makePlural.load({
    supplemental: {
      "plurals-type-cardinal": { rules: options.rules },
    },
  })

  const cardinals = new MakePlural(`rules`)

  return options[parameter][cardinals(parameters[parameter])].replace(
    `{{ ${ parameter } }}`,
    parameters[parameter]
  )
}

export default cardinals
