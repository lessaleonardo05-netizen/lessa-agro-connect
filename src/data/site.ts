/**
 * ===============================================================
 * CONFIGURAÇÃO CENTRAL — LESSA AGROPECUÁRIA
 * ---------------------------------------------------------------
 * Todas as informações editáveis do site ficam neste arquivo.
 * Para atualizar WhatsApp, endereço, horários, produtos, categorias
 * ou depoimentos, altere apenas aqui.
 * ===============================================================
 */

import racaoCaes from "@/assets/prod-racao-caes.jpg";
import areiaGatos from "@/assets/prod-areia-gatos.jpg";
import racaoAves from "@/assets/prod-racao-aves.jpg";
import veterinario from "@/assets/prod-veterinario.jpg";
import agropecuaria from "@/assets/prod-agropecuaria.jpg";
import utilidades from "@/assets/prod-utilidades.jpg";

/** --------- EMPRESA --------- */
export const company = {
  name: "Lessa Agropecuária",
  shortName: "Lessa",
  tagline:
    "Qualidade, variedade e confiança para cuidar dos seus animais e da sua propriedade.",
  /** WhatsApp em formato internacional, apenas números: 55 + DDD + número */
  whatsapp: "5522997367655",
  /** Mensagem automática enviada ao abrir o WhatsApp */
  whatsappMessage:
    "Olá! Vim pelo site da Lessa Agropecuária e gostaria de saber mais sobre os produtos.",
  /** Telefone exibido na tela (edite junto com o WhatsApp acima) */
  phoneDisplay: "(22) 99736-7655",
  address: {
    street: "Rua Maria Gorete, 713 — Cidade Nova",
    city: "Iguaba Grande",
    state: "RJ",
    zip: "28960-000",
  },
  /** Consulta do endereço no Google Maps (embed e rotas) */
  mapsQuery: "Lessa Agropecuária, Iguaba Grande - RJ",
  hours: [
    { days: "Segunda a sexta", time: "08:00 às 18:00" },
    { days: "Sábado", time: "08:00 às 13:00" },
    { days: "Domingo", time: "Fechado" },
  ],
  social: {
    instagram: "https://instagram.com/",
    facebook: "",
  },
} as const;

/** Link do WhatsApp com mensagem opcional personalizada */
export function whatsappLink(message: string = company.whatsappMessage) {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  `${company.address.street}, ${company.address.city} - ${company.address.state}`,
)}&output=embed`;

export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${company.address.street}, ${company.address.city} - ${company.address.state}`,
)}`;

/** --------- NAVEGAÇÃO --------- */
export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
] as const;

/** --------- CATEGORIAS --------- */
export type Category = {
  id: string;
  name: string;
  description: string;
  icon: "dog" | "cat" | "bird" | "sprout" | "pill" | "broom";
};

export const categories: Category[] = [
  {
    id: "caes",
    name: "Cães",
    description: "Rações, petiscos, medicamentos e produtos para seu cachorro.",
    icon: "dog",
  },
  {
    id: "gatos",
    name: "Gatos",
    description: "Rações, areia, petiscos e cuidados para felinos.",
    icon: "cat",
  },
  {
    id: "criacao",
    name: "Animais e criação",
    description:
      "Produtos para diferentes tipos de criação e cuidados com animais.",
    icon: "bird",
  },
  {
    id: "agro",
    name: "Produtos agropecuários",
    description: "Itens para sua propriedade, criação e rotina no campo.",
    icon: "sprout",
  },
  {
    id: "veterinarios",
    name: "Medicamentos veterinários",
    description: "Produtos para auxiliar nos cuidados e na saúde dos animais.",
    icon: "pill",
  },
  {
    id: "utilidades",
    name: "Utilidades",
    description: "Produtos diversos para facilitar o dia a dia.",
    icon: "broom",
  },
];

/**
 * --------- PRODUTOS EM DESTAQUE ---------
 * Itens demonstrativos: substitua nome, categoria, descrição e imagem
 * pelos produtos reais da loja. Não há preços — a consulta é feita
 * pelo WhatsApp.
 */
export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  alt: string;
};

export const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Ração para cães adultos",
    category: "Cães",
    description: "Opções de ração para o dia a dia do seu cachorro.",
    image: racaoCaes,
    alt: "Saco de ração para cães adultos disponível na Lessa Agropecuária",
  },
  {
    id: "2",
    name: "Areia higiênica para gatos",
    category: "Gatos",
    description: "Areia sanitária para manter a caixa do seu gato limpa.",
    image: areiaGatos,
    alt: "Embalagem de areia higiênica para gatos na Lessa Agropecuária",
  },
  {
    id: "3",
    name: "Ração para aves e criação",
    category: "Animais e criação",
    description: "Alimentação para aves e outros animais de criação.",
    image: racaoAves,
    alt: "Ração em grãos para aves e animais de criação",
  },
  {
    id: "4",
    name: "Medicamento veterinário",
    category: "Medicamentos veterinários",
    description: "Produtos para auxiliar nos cuidados com a saúde animal.",
    image: veterinario,
    alt: "Frasco de medicamento veterinário e seringa dosadora",
  },
  {
    id: "5",
    name: "Itens para a propriedade",
    category: "Produtos agropecuários",
    description: "Ferramentas e itens para a rotina no campo.",
    image: agropecuaria,
    alt: "Ferramentas agropecuárias e regador para uso na propriedade",
  },
  {
    id: "6",
    name: "Utilidades e limpeza",
    category: "Utilidades",
    description: "Produtos práticos para o dia a dia e a higiene dos animais.",
    image: utilidades,
    alt: "Balde, escovas e produto de limpeza para higiene de animais",
  },
];

/** --------- DIFERENCIAIS --------- */
export const benefits = [
  {
    title: "Atendimento próximo",
    description:
      "Atendimento pensado para entender o que você realmente precisa.",
    icon: "handshake" as const,
  },
  {
    title: "Produtos selecionados",
    description:
      "Trabalhamos com produtos escolhidos para oferecer qualidade e boas opções aos nossos clientes.",
    icon: "badge" as const,
  },
  {
    title: "Variedade",
    description:
      "Diversas categorias para facilitar suas compras em um só lugar.",
    icon: "layers" as const,
  },
  {
    title: "Confiança",
    description:
      "Uma empresa presente no dia a dia dos clientes e comprometida com um atendimento de qualidade.",
    icon: "shield" as const,
  },
];

/**
 * --------- DEPOIMENTOS ---------
 * Estrutura pronta para receber avaliações reais de clientes.
 * Substitua "quote" e "author" pelos depoimentos recebidos.
 */
export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Espaço reservado para a avaliação de um cliente da loja.",
    author: "Cliente Lessa Agropecuária",
    rating: 5,
  },
  {
    id: "2",
    quote: "Espaço reservado para a avaliação de um cliente da loja.",
    author: "Cliente Lessa Agropecuária",
    rating: 5,
  },
  {
    id: "3",
    quote: "Espaço reservado para a avaliação de um cliente da loja.",
    author: "Cliente Lessa Agropecuária",
    rating: 5,
  },
];
