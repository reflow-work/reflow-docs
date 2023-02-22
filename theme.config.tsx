import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <img src="/logo.svg" alt="Nextra Logo" width={120} />,
  docsRepositoryBase: 'https://github.com/reflow-work/reflow-docs/tree/main',
  footer: {
    text: <span>
      {new Date().getFullYear()} © <a href="https://reflow.work" target="_blank">reflow</a>.
    </span>
  },
  darkMode: false
}

export default config
