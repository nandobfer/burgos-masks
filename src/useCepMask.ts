export const useCepMask = () => {
    const mask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]

    return mask
}