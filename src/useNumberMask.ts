import { createNumberMask } from "text-mask-addons"

export interface Options {
    limit?: number
    allowDecimal?: boolean
    allowLeadingZeroes?: boolean
    prefix?: string
    suffix?: string
    allowNegative?: boolean
    decimalLimit?: number
}

export const useNumberMask = (options:Options) => {
    const numberMask = createNumberMask({
        prefix: options.prefix || "",
        suffix: options.suffix || "",
        thousandsSeparatorSymbol: ".",
        decimalSymbol: ",",
        allowDecimal: options.allowDecimal || false,
        decimalLimit: options.decimalLimit || 2,
        integerLimit: options.limit || 0,
        allowNegative: options.allowNegative || false,
        allowLeadingZeroes: options.allowLeadingZeroes || false,
    })

    return numberMask
}
