
//we create an interface acording to the json structure, if will be more easier to use for us
//we export the interface to use it in the index.ts
// we assigned the type to every single data recieved from the fetch
export interface ListInfo {
        length: number | string
        timeframes: {
            daily: {
            current: number,
            previous: number
            }[],
            weekly: {
                current: number,
                previous: number
            }[],
            monthly: {
                current: number,
                previous: number
            }[],
        }[]
}[]
