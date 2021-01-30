import React, { useEffect } from 'react'
import { StripeProvider, Elements } from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'

const Checkout = ({ selectedProduct, history }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <StripeProvider apiKey="pk_test_51IEkOhBJPhJXshAoZb8uc98nKJWbc9uNQTUHfeUbiwzAVoOU3fNsjIsJVSHZtKDKOcqmsEwzm84atkB24rsNfgWF00NVDIEKNa">
      <Elements>
        <CheckoutForm selectedProduct={selectedProduct} history={history} />
      </Elements>
    </StripeProvider>
  )
}

export default Checkout