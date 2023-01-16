import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"
import SearchBar from "./SearchBar";
import { debug } from "console";

describe('<SearchBar />', () => {
    const data = {
        onSearch: jest.fn()
    }

    it('should fire de onSearch function on click in the "Search" button', async () => {
        render(<SearchBar
            onSearch={data.onSearch}
        />)

        const searchTextBox = screen.getByRole('textbox')

        userEvent.type(searchTextBox, "Chicken")

        const searchButton = screen.getByRole('button', {
            name: /search/i
        })

        fireEvent.click(searchButton)

        expect(data.onSearch).toHaveBeenCalled()
    })
})