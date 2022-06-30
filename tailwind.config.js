/** @type {import('tailwindcss').Config} */
module.exports = {
  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
  
    urlImports: ['https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap','https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css'],
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  settings: {
    'import/resolver': {
      'node': {
        'extensions': ['.js','.jsx','.ts','.tsx']
      }
    }
  }
}
