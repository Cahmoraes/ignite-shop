import { ReactNode } from 'react'
import { CartProvider as CartProviderStripe } from 'use-shopping-cart/react'

const STRIPE_PUBLIC_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY
const SUCCESS_URL = `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`
const CANCEL_URL = `${process.env.NEXT_PUBLIC_URL}/`

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  return (
    <CartProviderStripe
      mode="payment"
      cartMode="client-only"
      stripe={STRIPE_PUBLIC_KEY}
      successUrl={SUCCESS_URL}
      cancelUrl={CANCEL_URL}
      currency="USD"
      allowedCountries={['BR']}
      billingAddressCollection={true}
    >
      {children}
    </CartProviderStripe>
  )
}
