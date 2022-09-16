import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  position: 'relative',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const CartButton = styled('button', {
  background: '$gray800',
  borderRadius: 6,
  fontSize: 0,
  padding: 12,
  display: 'grid',
  placeItems: 'center',
  transition: '.2s ease-in',

  '&:hover': {
    filter: 'brightness(0.9)',
  },
})
