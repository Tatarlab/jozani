import { DevtoolsOptions } from 'zustand/middleware/devtools'

export const getStoreOptions = (name: string): DevtoolsOptions =>({
  name,
  enabled: process.env.NODE_ENV !== 'production',
});
