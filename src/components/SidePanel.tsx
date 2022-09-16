import {
  CardContainer,
  CardProduct,
  ContainerSidePanel,
  IconX,
  ImageContainer,
  ButtonRemove,
  Summary,
  ButtonConfirm,
} from './styles'

import camisaImg from '../assets/camiseta/1.png'

interface SidePanelProps {
  isSidePanelOpen: boolean
  handleToggleSidePanel: () => void
}

export function SidePanel({
  handleToggleSidePanel,
  isSidePanelOpen,
}: SidePanelProps) {
  return (
    <ContainerSidePanel className={`${isSidePanelOpen ? 'is-open' : ''}`}>
      <IconX onClick={handleToggleSidePanel}>
        <img src="/assets/axis-icon.svg" alt="" />
      </IconX>
      <h3>Sacolas de compras</h3>
      <CardContainer>
        <CardProduct>
          <div>
            <ImageContainer
              src={camisaImg.src}
              width={100}
              height={100}
              alt=""
            />
          </div>
          <div className="info">
            <span className="name">Camiseta Beyond the Limits</span>
            <span className="price">R$ 79,90</span>
            <ButtonRemove>Remover</ButtonRemove>
          </div>
        </CardProduct>

        <CardProduct>
          <div>
            <ImageContainer
              src={camisaImg.src}
              width={100}
              height={100}
              alt=""
            />
          </div>
          <div className="info">
            <span className="name">Camiseta Beyond the Limits</span>
            <span className="price">R$ 79,90</span>
            <ButtonRemove>Remover</ButtonRemove>
          </div>
        </CardProduct>

        <CardProduct>
          <div>
            <ImageContainer
              src={camisaImg.src}
              width={100}
              height={100}
              alt=""
            />
          </div>
          <div className="info">
            <span className="name">Camiseta Beyond the Limits</span>
            <span className="price">R$ 79,90</span>
            <ButtonRemove>Remover</ButtonRemove>
          </div>
        </CardProduct>
      </CardContainer>

      <Summary>
        <div>
          <span>Quantidade</span>
          <span>3 itens</span>
        </div>

        <div>
          <span>Valor total</span>
          <span>R$ 270,00</span>
        </div>

        <ButtonConfirm>Finalizar compra</ButtonConfirm>
      </Summary>
    </ContainerSidePanel>
  )
}
