import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Pagination from "./Pagination";

describe('<Pagination />', () => {

    const data = {
        goPreviousPage: jest.fn(),
        goNextPage: jest.fn(),
        currentPage: 1,
        pageSize: 5,
        totalItems: 10
    }

    describe('"Next page" button tests', () => {
        it('should display just the "Next Page" button when is in the first page', () => {
            render(<Pagination
                currentPage={data.currentPage}
                goNextPage={data.goNextPage}
                goPreviousPage={data.goPreviousPage}
                pageSize={data.pageSize}
                totalItems={data.totalItems}
            />)

            const nextPageButton = screen.getByRole('button', {
                name: /next page >/i
            })
            const previousPageButton = screen.queryByRole('button', {
                name: /< previous page>/i
            })

            expect(nextPageButton).toBeInTheDocument()
            expect(previousPageButton).not.toBeInTheDocument()
        })

        it('should fire goNextPage on click in "Next Page" button', () => {
            render(<Pagination
                currentPage={data.currentPage}
                goNextPage={data.goNextPage}
                goPreviousPage={data.goPreviousPage}
                pageSize={data.pageSize}
                totalItems={data.totalItems}
            />)

            const nextPageButton = screen.getByRole('button', {
                name: /next page >/i
            })

            fireEvent.click(nextPageButton)

            expect(data.goNextPage).toHaveBeenCalled()
        })
    })

    describe('Intermediary pages', () => {
        const intermediaryPageData = {
            ...data,
            currentPage: 2,
            pageSize: 5,
            totalItems: 15
        }

        it('should display both "Next Page" and "Previous Page" button when is in intermediary page', () => {
            render(<Pagination
                currentPage={intermediaryPageData.currentPage}
                goNextPage={intermediaryPageData.goNextPage}
                goPreviousPage={intermediaryPageData.goPreviousPage}
                pageSize={intermediaryPageData.pageSize}
                totalItems={intermediaryPageData.totalItems}
            />)

            const nextPageButton = screen.getByRole('button', {
                name: /next page >/i
            })
            const previousPageButton = screen.getByRole('button', {
                name: /< previous page/i
            })

            expect(nextPageButton).toBeInTheDocument()
            expect(previousPageButton).toBeInTheDocument()
        })
    })

    describe('Last page', () => {
        const lastPageData = {
            ...data,
            currentPage: 3,
            pageSize: 5,
            totalItems: 15
        }

        it('should display just "Previous Page" button when is in the last page', () => {
    
            render(<Pagination
                currentPage={lastPageData.currentPage}
                goNextPage={lastPageData.goNextPage}
                goPreviousPage={lastPageData.goPreviousPage}
                pageSize={lastPageData.pageSize}
                totalItems={lastPageData.totalItems}
            />)
    
            const nextPageButton = screen.queryByRole('button', {
                name: /next page >/i
            })
            const previousPageButton = screen.getByRole('button', {
                name: /< previous page/i
            })
    
            expect(nextPageButton).not.toBeInTheDocument()
            expect(previousPageButton).toBeInTheDocument()
        })
    
        it('should fire goPreviousPage on click in "Previous Page" button', () => {
            render(<Pagination
                currentPage={lastPageData.currentPage}
                goNextPage={lastPageData.goNextPage}
                goPreviousPage={lastPageData.goPreviousPage}
                pageSize={lastPageData.pageSize}
                totalItems={lastPageData.totalItems}
            />)
    
            const previousPageButton = screen.getByRole('button', {
                name: /< previous page/i
            })
    
            fireEvent.click(previousPageButton)
    
            expect(data.goPreviousPage).toHaveBeenCalled()
        })
    })

})