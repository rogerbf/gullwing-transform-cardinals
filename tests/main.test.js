import cardinal from "../src/main"

describe(`cardinal`, () => {
  it(`is a function`, () => expect(typeof cardinal).toBe(`function`))

  it(`wanders the happy path`, () => {
    const options = {
      total: {
        one: `{{ total }} message`,
        other: `{{ total }} messages`,
      },
      rules: {
        "pluralRule-count-one": `i = 1 and v = 0 @integer 1`,
        "pluralRule-count-other": ` @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …`,
      },
    }

    const parameter = `total`

    expect(cardinal({ options, parameter, parameters: { total: 1 } })).toBe(
      `1 message`
    )
    expect(cardinal({ options, parameter, parameters: { total: 12 } })).toBe(
      `12 messages`
    )
  })
})
