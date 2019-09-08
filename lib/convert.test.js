const convert = require('./convert')

test('convert quotation 4 and amount 4', () => {
    expect(convert.convert(4,4)).toBe(16)
})
test('convert quotation 0 and amount 4', () => {
    expect(convert.convert(0,4)).toBe(0)
})
test('toMoney converts float 2 to 2.00', () => {
    expect(convert.toMoney(2)).toBe('2.00')
})
test('toMoney converts string 2 to 2.00', () => {
    expect(convert.toMoney('2')).toBe('2.00')
})