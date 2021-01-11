module.exports = {
  plugin: ["stylelint-scss"],
  extends: ["stylelint-config-recommended-scss", "stylelint-prettier/recommended"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["function", "if", "for", "each", "include", "mixin", "content"],
      },
    ],
  },
};
