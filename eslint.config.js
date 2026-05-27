import nextConfig from "eslint-config-next";

const config = [
  {
    ignores: [".next/**", "node_modules/**", "storybook-static/**"],
  },
  ...nextConfig,
];

export default config;
