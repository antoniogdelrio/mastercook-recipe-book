import "@testing-library/jest-dom"
import { render, screen } from "../../../test-tools/test-utils"
import Loader from "./Loader"

jest.mock('next/router', () => {
    return {
      useRouter: jest.fn().mockReturnValue({
        push: jest.fn(),
      }),
    }
})

describe('<Loader />', () => {
    it('should display the Loader component', () => {
        render(<Loader />)
        screen.getByRole('progressbar')
    })
})