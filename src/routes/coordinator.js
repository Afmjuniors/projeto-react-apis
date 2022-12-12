export const goToHomePage = (navigate)=>navigate(`/`)
export const goToHomeTurnPage = (navigate,page)=>navigate(`/page/${page}`)
export const goToPokedex = (navigate)=>navigate("/pokedex")
export const goToDeatails = (navigate, pokemonName)=>navigate(`/pokemon/${pokemonName}`)