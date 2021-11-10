module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
        '@babel/preset-typescript'
    ],
    plugins: [
        [
            'module-resolver', 
            {
                alias: {
                    '@web': './src/web',
                    '@domain': './src/app/domain',
                    '@services': './src/app/services',
                    '@repository': './src/app/repository',
                    '@database': './src/database'
                }
            }
        ]
    ],
    // ignore: [
    //     'aws',
    //     'test'
    // ]
}