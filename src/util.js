const isDev = process.env.NODE_ENV !== "production"
// judge env via reading NODE_ENV
export const debug = (...args) => {
    if (isDev) {
        console.log(...args)
    }
}
export const err = {
    invalid_rules: "invalid_rules"
}
export const isObj = function(obj) {
    for (let test in obj) {
        return true
    }
    return false
}