# gullwing-transform-cardinals

```javascript
import gullwing from "gullwing"
import cardinal from "gullwing-transform-cardinals"

const strings = gullwing({
  template: {
    headline: `Meddelanden`,
    messageCount: {
      template: `Du har {{ incoming | cardinal }} av totalt {{ total }}.`,
      options: {
        cardinal: {
          incoming: {
            one: `{{ incoming }} nytt meddelande`,
            other: `{{ incoming }} nya meddelanden`,
          },
          rules: {
            'pluralRule-count-one': 'i = 1 and v = 0 @integer 1',
            'pluralRule-count-other':
              ' @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …',
          },
        },
      },
    },
  },
  transformers: { cardinal }
})

strings.headline
// Meddelanden

strings.messageCount({ incoming: 1, total: 42 })
// Du har 1 nytt meddelande av totalt 42.

strings.messageCount({ incoming: 2, total: 42 })
// Du har 2 nya meddelanden av totalt 42.
```