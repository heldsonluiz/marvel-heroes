import { Outlet } from 'react-router-dom'
import { Footer } from '../../components/Footer'
import { ContentContainer, LayoutContainer } from './styles'

export function DefaultLayout () {
  return (
    <LayoutContainer>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
      <Footer />
    </LayoutContainer>
  )
}
