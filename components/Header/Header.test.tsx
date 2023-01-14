import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Header from "./Header";

describe('<Header />', () => {
    it('should render Header successfully', () => {
        render(<Header />)

        screen.getByRole('img', {
          name: /mastercook logo/i
        })
    })
})