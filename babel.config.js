module.exports = {
    presets: [
        ['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }],
        '@babel/preset-react'
    ],
    plugins: [
        '@babel/plugin-transform-modules-commonjs',
        '@babel/plugin-transform-react-jsx'
    ]
}