import vue from '@vitejs/plugin-vue'

export default {
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: tag => {
          return tag === 'marquee'
        }
      }
    }
  })]
}