import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import SkeletonCards from "./SkeletonCards";

describe("<SkeletonCards />", () => {
    const data ={
        quantity: 12
    }

    it("should render the Skeleton Cards successfully", () => {
        render(<SkeletonCards
            quantity={data.quantity}
        />)

        const skeletonCards = screen.getByRole('progressbar')
        expect(skeletonCards.children.length).toBe(data.quantity)
    })
})