// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Identidade em Deus";
export const SITE_DESCRIPTION = "Fé, identidade e propósito à luz das raízes hebraicas.";

// Categorias do blog — mesmas chaves usadas em content.config.ts e no CMS (public/admin/config.yml).
export const CATEGORIES: Record<string, { label: string; color: string }> = {
	"identidade-em-deus": { label: "Identidade em Deus", color: "var(--portal-secondary)" },
	"sinal-x-identidade": { label: "Sinal x Identidade", color: "var(--accent)" },
};
