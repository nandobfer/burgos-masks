import createNumberMask from "text-mask-addons/dist/createNumberMask"

interface params {
    prefix?: string
    suffix?: string
    thousandsSeparatorSymbol?: string
    decimalSymbol?: string
    allowDecimal?: boolean
    decimalLimit?: number
    requireDecimal?: boolean
}

export const useCurrencyMask = (options?: params) => {
    // Create number mask with variable thousands separator and decimal point
    const currencyMask = createNumberMask({
        prefix: options?.prefix || "R$ ",
        suffix: options?.suffix || "",
        thousandsSeparatorSymbol: options?.thousandsSeparatorSymbol || ".",
        decimalSymbol: options?.decimalSymbol || ",",
        allowDecimal: options?.allowDecimal || true,
        decimalLimit: options?.decimalLimit || 2,
        requireDecimal: options?.requireDecimal || false,
    })

    return currencyMask
}
