import mesa from "@/assets/mesa.asset.json";
import mesaCentro from "@/assets/mesa_centro.asset.json";
import balanco from "@/assets/balanco.asset.json";
import namoradeira from "@/assets/namoradeira.asset.json";
import poltrona from "@/assets/poltrona.asset.json";
import espreguicadeira from "@/assets/espreguicadeira-madeira.asset.json";
import aparador from "@/assets/aparador.asset.json";
import buffet from "@/assets/buffet.asset.json";
import fruteira from "@/assets/fruteira.asset.json";

import pergolado from "@/assets/pergoladoserradoservicos.asset.json";
import deck from "@/assets/deckservicos.asset.json";
import quiosque from "@/assets/quiosqueservicos.asset.json";
import quiosqueTelha from "@/assets/quiosquetelhaservicos.asset.json";
import assoalho from "@/assets/assoalhoservicos.asset.json";
import brise from "@/assets/briseservicos.asset.json";
import cobertura from "@/assets/coberturaservicos.asset.json";
import playground from "@/assets/playgroundservicos.asset.json";

/** Contato comercial — trocar aqui para replicar o modelo. */
export const WHATSAPP_NUMBER = "5511942948290";
export const PHONE_DISPLAY = "(11) 94294-8290";

export const whatsappLink = (mensagem: string) =>
  `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(mensagem)}`;

export type CardItem = {
  titulo: string;
  descricao: string;
  imagem: string;
};

export const moveis: CardItem[] = [
  {
    titulo: "Mesas de Jantar",
    descricao: "Imponência, nobreza e design único para reunir quem você ama.",
    imagem: mesa.url,
  },
  {
    titulo: "Pranchas Orgânicas",
    descricao: "Peças exclusivas com veios naturais para ambientes com personalidade.",
    imagem: mesaCentro.url,
  },
  {
    titulo: "Conjuntos de Varanda",
    descricao: "Soluções completas para dar vida ao seu espaço de lazer.",
    imagem: balanco.url,
  },
  {
    titulo: "Namoradeiras",
    descricao: "O charme e o aconchego ideal para jardins e varandas.",
    imagem: namoradeira.url,
  },
  {
    titulo: "Poltronas",
    descricao: "Ergonomia, estilo e presença marcante para áreas internas e externas.",
    imagem: poltrona.url,
  },
  {
    titulo: "Espreguiçadeiras",
    descricao: "Conforto e resistência para a beira da piscina e áreas abertas.",
    imagem: espreguicadeira.url,
  },
  {
    titulo: "Aparadores",
    descricao: "Funcionalidade e design nobre para halls, salas e varandas.",
    imagem: aparador.url,
  },
  {
    titulo: "Buffets",
    descricao: "Organização e acabamento fino para a sua área de jantar.",
    imagem: buffet.url,
  },
  {
    titulo: "Peças Decorativas",
    descricao: "Detalhes torneados à mão que completam a mesa e o ambiente.",
    imagem: fruteira.url,
  },
];

export const estruturas: CardItem[] = [
  {
    titulo: "Pergolados",
    descricao: "Estruturas sob medida em madeira nobre para valorizar a sua área externa.",
    imagem: pergolado.url,
  },
  {
    titulo: "Quiosques",
    descricao: "Cobertura em palha natural e estrutura maciça para receber o ano inteiro.",
    imagem: quiosque.url,
  },
  {
    titulo: "Decks",
    descricao: "Piso externo em madeira de alta densidade, pronto para sol e chuva.",
    imagem: deck.url,
  },
  {
    titulo: "Quiosque com Telha",
    descricao: "Estrutura fechada com telhado cerâmico para uso em qualquer estação.",
    imagem: quiosqueTelha.url,
  },
  {
    titulo: "Assoalhos",
    descricao: "Réguas maciças assentadas com precisão para ambientes internos e varandas.",
    imagem: assoalho.url,
  },
  {
    titulo: "Brises",
    descricao: "Controle de luz e privacidade com ripado de madeira sob medida.",
    imagem: brise.url,
  },
  {
    titulo: "Coberturas e Forros",
    descricao: "Vãos amplos executados com engenharia de madeira e acabamento fino.",
    imagem: cobertura.url,
  },
  {
    titulo: "Playgrounds",
    descricao: "Estruturas seguras e duráveis em madeira tratada para as crianças.",
    imagem: playground.url,
  },
];

export const faq = [
  {
    pergunta: "Como faço para ver as peças e projetos pessoalmente?",
    resposta:
      "Possuímos um showroom completo para você testar e escolher seus móveis na Rodovia Presidente Castello Branco, Km 65 (Mairinque/SP), a apenas 2 minutos do Catarina Fashion Outlet.",
  },
  {
    pergunta: "Os móveis e pergolados podem tomar sol e chuva?",
    resposta:
      "Sim! Trabalhamos com madeiras maciças nobres de alta densidade e acabamentos protetores adequados para exposição a áreas externas.",
  },
  {
    pergunta: "Vocês entregam e montam na minha cidade?",
    resposta:
      "Entregamos e instalamos em todo o estado de São Paulo utilizando frota e equipe de montadores próprios, garantindo total segurança.",
  },
  {
    pergunta: "É possível fazer móveis ou pergolados sob medida?",
    resposta:
      "Com certeza. Além das centenas de opções a pronta-entrega no showroom, desenvolvemos projetos 100% personalizados conforme a sua necessidade.",
  },
];
