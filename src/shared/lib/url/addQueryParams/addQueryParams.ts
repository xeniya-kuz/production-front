export const getQueryParams = (
    params: OptionalRecord<string, string>,
): string => {
    // можно заменить useSearchParams
    const searchParams = new URLSearchParams(window.location.search)

    Object.entries(params).forEach(([name, value]) => {
        if (value !== undefined && value !== '') {
            searchParams.set(name, value)
        }
    })

    return `?${searchParams.toString()}`
}

/**
 * Функция добавления параметров строки запроса в URL
 * @param params
 */

export const addQueryParams = (
    params: OptionalRecord<string, string>,
): void => {
    window.history.pushState(null, '', getQueryParams(params))
}
