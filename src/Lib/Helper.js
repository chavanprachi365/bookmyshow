export function redirectValidPath(pathname) {
    return pathname?.toLowerCase()?.split(" ")?.join("-")
}