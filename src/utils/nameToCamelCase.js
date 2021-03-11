export default function nameToCamelCase(name) {
    // Full name
    let names = name.toLowerCase().split(' ')
    name = names[0]
    if (names.length > 1) {
        for (let i = 1; i < names.length; i++) {
            name += names[i].charAt(0).toUpperCase() + names[i].slice(1)
        }
    }
    return name
}