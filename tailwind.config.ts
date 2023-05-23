import type { Config } from 'tailwindcss';
import tailwindTypography from '@tailwindcss/typography';
import tailwindForms from '@tailwindcss/forms';

export default <Partial<Config>>{
  theme: {
    extend: {},
  },
  plugins: [tailwindForms, tailwindTypography],
};
