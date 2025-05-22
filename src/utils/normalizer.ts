export function normalize(str: string) {
    return str.trim().toUpperCase().replace(/\s+/g, ' ');
}
