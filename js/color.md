### 16 进制颜色转 rgba 颜色

```
const colorRgb = (colorHex, alpha = 1) => {
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
    let color = colorHex.toLowerCase()
    if (reg.test(color)) {
        // 如果只有三位的值，需变成六位，如：#fff => #ffffff
        if (color.length === 4) {
            let colorNew = '#'
            for (let i = 1; i < 4; i += 1) {
                colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1))
            }
            color = colorNew
        }
        // 处理六位的颜色值，转为RGB
        const colorChange = []
        for (let i = 1; i < 7; i += 2) {
            colorChange.push(parseInt('0x' + color.slice(i, i + 2)))
        }
        return `RGB(${colorChange.join(',')}, ${alpha})`
    } else {
        return color
    }
}
```

### rgba 颜色转 16 进制颜色

```
const colorHex = (color) => {
    const values = color
        .replace(/rgba?\(/i, '')
        .replace(/\)/, '')
        .replace(/[\s+]/g, '')
        .split(',')
    const a = parseFloat(values[3] || 1)
    const r = Math.floor(a * parseInt(values[0]) + (1 - a) * 255)
    const g = Math.floor(a * parseInt(values[1]) + (1 - a) * 255)
    const b = Math.floor(a * parseInt(values[2]) + (1 - a) * 255)
    return (
        '#' +
        ('0' + r.toString(16)).slice(-2) +
        ('0' + g.toString(16)).slice(-2) +
        ('0' + b.toString(16)).slice(-2)
    )
}
```
