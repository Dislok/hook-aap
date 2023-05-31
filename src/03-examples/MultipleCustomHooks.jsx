import { useFetchs } from "../hooks/useFetchs"


export const MultipleCustomHooks = () => {
    const {} = useFetchs("https://api.breakingbadquotes.xyz/v1/quotes");
  return (
    <>
    <h1>BreakingBad Quotes </h1>
    <hr/>

    </>
  )
}
