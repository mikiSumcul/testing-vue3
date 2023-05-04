import type { StorybookConfig } from "@storybook/vue3-webpack5";
const config: StorybookConfig = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: {
    name: "@storybook/vue3-webpack5",
    options: {},
  },
};
export default config;
