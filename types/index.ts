export interface Ingredient {
    description: string,
    quantity: number,
    unit: string
}

export interface Recipe {
    id: number,
    title: string,
    image: string,
    time: number,
    difficulty: string,
    ingredients: Ingredient[],
    steps: string[]
}

export interface RecipeSummary extends Omit<Recipe, 'ingredients' | 'steps'> {}
