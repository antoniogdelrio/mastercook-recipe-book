import Header from "../components/Header/Header";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import RecipeList from "../components/RecipeList/RecipeList";

export default function Home() {
  const mock = [
    {
      difficulty: "Hard",
      image: "/temaki.jpg",
      title: "Temaki",
      time: 120,
    },
    {
      difficulty: "Hard",
      image: "/temaki.jpg",
      title: "Temaki",
      time: 120,
    },
    {
      difficulty: "Hard",
      image: "/temaki.jpg",
      title: "Temaki",
      time: 120,
    },
    {
      difficulty: "Hard",
      image: "/temaki.jpg",
      title: "Temaki",
      time: 120,
    },
  ]

  return (
    <>
      <Header/>
      <RecipeList cards={mock} />
    </>
  )
}
