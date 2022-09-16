import { useCallback, useState } from 'react'
import Image from 'next/image'
import { CartButton, Header as HeaderContainer } from '../../styles/pages/app'
import { SidePanel } from '../SidePanel'

import logoImg from '../../assets/logo.svg'

export function Header() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(true)

  const handleToggleSidePanel = useCallback(() => {
    setIsSidePanelOpen((state) => !state)
  }, [])

  return (
    <HeaderContainer>
      <Image src={logoImg} alt="" />
      <CartButton onClick={handleToggleSidePanel}>
        <img src="/assets/bag-icon.svg" alt="Cart shop" />
      </CartButton>
      <SidePanel
        isSidePanelOpen={isSidePanelOpen}
        handleToggleSidePanel={handleToggleSidePanel}
      />
    </HeaderContainer>
  )
}
