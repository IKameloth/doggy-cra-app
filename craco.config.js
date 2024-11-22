const path = require("path");

module.exports = {
  babel: {
    plugins: [
      // Enable the new JSX transform for React 17+
      ["@babel/plugin-transform-react-jsx", { runtime: "automatic" }],

      // Optimize Material-UI imports
      [
        "babel-plugin-transform-imports",
        {
          "@mui/material": {
            // Import only the used components from Material-UI
            transform: "@mui/material/${member}",
            preventFullImport: true,
          },
          "@mui/icons-material": {
            // Import only the used icons
            transform: "@mui/icons-material/${member}",
            preventFullImport: true,
          },
        },
      ],
    ],
  },
  webpack: {
    alias: {
      // Example alias
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
};
