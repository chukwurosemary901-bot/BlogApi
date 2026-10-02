sequelize cli:
* Needs to create its own separate connection separately i.e it doesnt need the app running before it can work:
* In charge of creating migrations

sequelize:
is what connects your database to your app
.iso: allows you to use this format; 1990_11_3
in validating using joi dont ever use arrow functions e.g .max({-==>{

}})
in joi .
What does .base mean?
In Joi, .base refers to the basic data type validation.

It is the error that Joi throws when the value you send does not match the expected data type.

'string.base' → Means “This field should be a string, but it’s not.”
'number.base' → Means “This field should be a number, but it’s not.”
'date.base' → Means “This field should be a date, but it’s not.”
'any.only': .valid().

If Joi used string.required, number.required, date.required, etc., it would:

❌ Duplicate the exact same logic across every type

const schema = Joi.object({
  gender: Joi.string().valid('male', 'female').required()
});

const { error } = schema.validate({ gender: 123 });
console.log(error.details[0].type); 
// → "string.base"  ← This is the EXACT key to use in .messages()

.min() → This rule is type-specific.
It behaves differently depending on the type:

On string: .min(2) means “minimum 2 characters”
On number: .min(18) means “minimum value 18”
On array: .min(3) means “minimum 3 items”
If two users choose the same password (e.g. "123456"), without a salt, they would have the same hash.
🔍 What .validate() Actually Returns
JavaScript

{
  value: { /* validated & coerced data */ },
  error: null,          // or a ValidationError object
  warning: undefined    // or warning object (rarely used)
}
