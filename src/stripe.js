// change key -->
const stripe = require('stripe')('sk_test_51IEkOhBJPhJXshAo48wHFaL5I90oAlk915ShET9GIai6Nw4ZIkwLaouB1sWnviT5ij9x1u3cjAMOQ1IjFuavKE0R00vwXD4SkL')

async function postCharge(req, res) {
  try {
    const { amount, source, receipt_email } = req.body

    const charge = await stripe.charges.create({
      amount,
      currency: 'usd',
      source,
      receipt_email
    })

    if (!charge) throw new Error('charge unsuccessful')

    res.status(200).json({
      message: 'charge posted successfully',
      charge
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

module.exports = postCharge