module.exports = {
    trailingComma: 'all',
    plugins: ['prettier-plugin-tailwindcss'],
    importOrder: [
        'react', // React
        '^react-.*$', // React-related imports
        '^next', // Next-related imports
        '^next-.*$', // Next-related imports
        '^next/.*$', // Next-related imports
        '^.*/hooks/.*$', // Hooks
        '^.*/services/.*$', // Services
        '^.*/utils/.*$', // Utils
        '^.*/types/.*$', // Types
        '^.*/pages/.*$', // Components
        '^.*/components/.*$', // Components
        '^[./]', // Other imports
        '.*', // Any uncaught imports
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    tabWidth: 4,
    useTabs: false,
    semi: false,
    singleQuote: true,
    printWidth: 100,
    arrowParens: 'always',
    endOfLine: 'auto',
}
