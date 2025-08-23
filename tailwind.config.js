import { defineConfig } from "tailwindcss";

export default defineConfig({
    theme: {
        extend: {
            colors: {
                primary: "#1d4ed8", // Blue-700
                primaryDark: "#1e40af", // Blue-800
                accent: "#e94560",
                newPrimary: "#dec827",
                newPrimaryFooter: "#B8E0EF",
            },
            screens: {
                sm: "640px",
                md: "768px",
                lg: "900px", // 👈 custom breakpoint
                xl: "1280px",
                "2xl": "1536px",
            },
        },
    },
});
