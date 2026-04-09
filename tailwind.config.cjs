module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      colors: {
        "bg-deep": "var(--bg-deep)",
        "bg-primary": "var(--bg-primary)",
        "bg-card": "var(--bg-card)",
        "bg-elevated": "var(--bg-elevated)",
        "bg-hover": "var(--bg-hover)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        "text-dim": "var(--text-dim)",
        "accent": "var(--accent)",
        "accent-light": "var(--accent-light)",
        "accent-dim": "var(--accent-dim)",
        "accent-border": "var(--accent-border)",
        "accent-gold": "var(--accent-gold)",
        "accent-gold-dim": "var(--accent-gold-dim)",
        "aqua": "var(--aqua)",
        "aqua-dim": "var(--aqua-dim)",
        "border-subtle": "var(--border-subtle)",
        "border-light": "var(--border-light)",
        "border-medium": "var(--border-medium)",
      },
    },
  },
  plugins: [],
};
