/** @type {import('@storybook/core-common').StorybookConfig} */
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/preset-create-react-app"],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
