const aliases = (prefix = 'src') => ({
    '@': `${prefix}`,
    '@components': `${prefix}/components`,
    '@pages': `${prefix}/pages`,
    '@styles': `${prefix}/styles`,
    '@store': `${prefix}/store`
})

module.exports = aliases
