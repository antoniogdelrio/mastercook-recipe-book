import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Footer from "./Footer"

describe('<Footer />', () => {
    it('should render Footer successfully', () => {
        render(<Footer />)
        
        screen.getByRole('heading', {
          name: /created by antoniogdelrio/i
        }) 
    })
})