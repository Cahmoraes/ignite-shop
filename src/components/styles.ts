import { styled } from '../styles'

export const ContainerSidePanel = styled('div', {
  maxWidth: 480,
  width: '100%',
  position: 'fixed',
  right: 0,
  top: 0,
  bottom: 0,
  background: '$gray800',
  padding: '72px 48px 48px',
  transition: '.2s ease-in-out',
  transform: 'translate3d(+100%, 0, 0)',
  display: 'flex',
  flexDirection: 'column',

  '&.is-open': {
    transform: 'translate3d(0, 0, 0)',
  },

  h3: {
    fontWeight: 'bold',
    fontSize: '$lg',
  },

  '.info': {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
})

export const IconX = styled('button', {
  background: 'transparent',
  fontSize: '0',
  border: 0,
  position: 'absolute',
  width: 24,
  height: 24,
  top: 24,
  right: 24,
})

export const CardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  paddingTop: 32,
  flex: 1,
})

export const CardProduct = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 20,
})

export const ImageContainer = styled('img', {
  width: '100%',
  maxWidth: 100,
  height: 100,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  objectFit: 'cover',
})

export const ButtonRemove = styled('button', {
  color: '$green500',
  fontWeight: 'bold',
  fontSize: '1rem',
  background: 'transparent',
  width: 'auto',
  display: 'flex',
  alignSelf: 'flex-start',
  border: 0,

  '&:hover': {
    filter: 'brightness(0.8)',
  },
})

export const Summary = styled('footer', {
  '&>div': {
    display: 'flex',
    justifyContent: 'space-between',
  },

  '&>div + div': {
    marginTop: 8,
  },

  '&>div:first-child': {
    'span:first-of-type': {
      fontSize: '1rem',
    },
    'span:last-of-type': {
      fontSize: '1.25rem',
    },
  },

  '&>div:nth-child(2)': {
    fontWeight: 'bold',

    'span:first-of-type': {
      fontSize: '1.25rem',
    },
    'span:last-of-type': {
      fontSize: '1.5rem',
    },
  },

  '&>:last-child': {
    marginTop: 58,
  },
})

export const ButtonConfirm = styled('button', {
  marginTop: 'auto',
  backgroundColor: '$green500',
  color: '$white',
  borderRadius: 8,
  padding: '1.25rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '$md',
  width: '100%',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$green300',
  },
})
