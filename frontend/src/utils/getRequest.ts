import { KeyTypeIsStringObject } from "@/constants"

export const getRequestItems = async (
  endpoint: string,
  searchInput: URLSearchParams,
  currentPage: number,
  cookie: string = "",
) => {
  const newSearchInput = new URLSearchParams(searchInput)
  newSearchInput.set("currentPage", currentPage.toString())
  const requestUrl = `${ endpoint }?${ newSearchInput }`
  const response = cookie === "" ?
    // request-from-client
    await fetch(`/api/${ requestUrl }`) :
    // request-from-server
    await fetch(`${ process.env.NEXT_API_BASE_URL }${ requestUrl }`, { headers: { cookie: cookie } })
  return response.status !== 200 ? null : response.json()
}
      
export const getRequestItemsCreate = async (
  endpoint: string,
  choiced?: string,
): Promise<KeyTypeIsStringObject | null> => {
  const onlyCharacterParameter = choiced ? `&seriesId=${ choiced }` : ""
  const requestUrl = `/api/items/create?endpoint=${ endpoint }${ onlyCharacterParameter }`

  const response = await fetch(requestUrl)

  return response.status !== 200 ? null : response.json()
}