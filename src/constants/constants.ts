import {
  Education,
  Skill,
  Experience,
  Project,
  Achievement,
  Social,
  Post,
} from "../types/types";

import TRINTA_PREVIEW from "../content/TRINTA_PREVIEW.md";
import TRINTA from "../content/TRINTA.md";

import emailBlack from "../assets/icons/iconmonstr-email-4-black.svg";
import emailWhite from "../assets/icons/iconmonstr-email-4-white.svg";

import instagramBlack from "../assets/icons/iconmonstr-instagram-11-black.svg";
import instagramWhite from "../assets/icons/iconmonstr-instagram-11-white.svg";

import linkedinBlack from "../assets/icons/iconmonstr-linkedin-1-black.svg";
import linkedinWhite from "../assets/icons/iconmonstr-linkedin-1-white.svg";

import githubBlack from "../assets/icons/iconmonstr-github-1-black.svg";
import githubWhite from "../assets/icons/iconmonstr-github-1-white.svg";

import spotifyBlack from "../assets/icons/iconmonstr-spotify-1-black.svg";
import spotifyWhite from "../assets/icons/iconmonstr-spotify-1-white.svg";

export const EDUCATIONS: Array<Education> = [
  {
    START_DATE: "mar. 2023",
    END_DATE: "o momento",
    TITLE: "UTFPR",
    SUBTITLE: "Bacharelado em Engenharia de Computação",
  },
  {
    START_DATE: "abr. 2018",
    END_DATE: "set. 2021",
    TITLE: "IFPA",
    SUBTITLE: "Técnico em Meio Ambiente integrado ao Ensino Médio",
  },
];

export const SKILLS: Array<Skill> = [
  {
    TITLE: "Linguagens",
    ITEMS: [
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "SQL",
      "Python",
      "Java",
      "C++",
      "C",
    ],
  },
  {
    TITLE: "Tecnologias",
    ITEMS: [
      "React",
      "Tailwind CSS",
      "PostgreSQL",
      "Node.js",
      "npm",
    ],
  },
  {
    TITLE: "Ferramentas",
    ITEMS: [
      "Visual Studio Code",
      "Figma",
      "Git",
    ],
  },
  {
    TITLE: "Outros",
    ITEMS: [
      "Inglês",
      "Algoritmos",
      "Estruturas de Dados",
      "Automação",
      "Design",
      "Word",
      "PowerPoint",
      "Excel",
    ],
  },
];

export const EXPERIENCES: Array<Experience> = [
  {
    START_DATE: "ago. 2024",
    END_DATE: "o momento",
    TITLE: "OCCAM Engenharia",
    SUBTITLE: "Assessor de Marketing",
    BULLETS: [
      "Sou responsável por administrar as contas de redes sociais da OCCAM.",
      "Elaboro publicações pertinentes à nossa área de atuação e ao que fazemos.",
      "Procuro por eventos, cursos, e oportunidades relevantes para divulgar entre os membros da empresa.",
    ],
  },
  {
    START_DATE: "mai. 2024",
    END_DATE: "ago. 2024",
    TITLE: "OCCAM Engenharia",
    SUBTITLE: "Trainee",
    BULLETS: [
      "Atuei semanalmente em todos os setores da empresa, realizando atividades pertinentes a cada um deles.",
      "Desenvolvi, juntamente a outros trainees, um projeto front-end de website empresarial.",
      "Fui responsável por contatar o cliente, coletar e analisar os requisitos, e programar o website.",
    ],
  },
  {
    START_DATE: "set. 2023",
    END_DATE: "jul. 2024",
    TITLE: "UTFPR",
    SUBTITLE: "Monitor de Cálculo I",
    BULLETS: [
      "Atendi de forma presencial e remota os alunos da universidade para solução de dúvidas na disciplina.",
      "Preparei e corrigi materiais didáticos usados por professores (listas de exercícios, gabaritos, resoluções).",
      "Intermediei o feedback de alunos para professores acerca do conteúdo ministrado nos cursos.",
    ],
  },
];

export const PROJECTS: Array<Project> = [
  {
    HREF: "/",
    TITLE: "Portfólio",
    DESCRIPTION: "Website pessoal com o propósito principal de mostrar, de " +
    "forma completa, minhas habilidades, experiências, projetos, e conquistas. " +
    "Além disso, também serve como uma página onde guardo meus pensamentos e ideias " +
    "na forma de artigos, como um repositório da mente.",
    BULLETS: [
      "Feito com TypeScript, React, Tailwind CSS, e Node.js.",
      "Interface de usuário totalmente responsiva, com prototipagem prévia feita no Figma.",
      "Blog com suporte para escrita usando arquivos Markdown, permitindo uma melhor organização da estrutura dos posts.",
    ],
  },
  {
    HREF: "https://mcavalcantes.github.io/derivadash/",
    TITLE: "DerivaDash",
    DESCRIPTION: "Aplicação web que serve como uma ferramenta de estudos " +
    "destinada a estudantes de engenharia, visando reforçar o aprendizado das " +
    "regras de derivação na disciplina de cálculo de uma maneira ágil, em um formato " +
    "de quiz. Feito com HTML, CSS, e JavaScript puro.",
    BULLETS: [
      "Página interativa que mostra uma questão de múltipla escolha a ser respondida pelo usuário.",
      "Personalização da página com três temas distintos, com feedback visual para erros e acertos.",
      "Opção para avanço manual ou automático dos exercícios mostrados na página.",
    ],
  },
];

export const ACHIEVEMENTS: Array<Achievement> = [
  {
    DATE: "set. 2024",
    TITLE: "5ª Olimpíada Regional de Derivadas",
    SUBTITLE: "Semifinalista",
    DESCRIPTION: "Olimpíada universitária de derivadas (cálculo) ocorrida na " +
    "Unicamp, onde participaram 44 alunos das principais universidades do Brasil.",
  },
  {
    DATE: "mai. 2024",
    TITLE: "Pato'",
    SUBTITLE: "1º lugar",
    DESCRIPTION: "Torneio universitário de derivadas (cálculo) sediado anualmente na " +
    "UTFPR de Pato Branco.",
  },
];

export const SOCIALS: Array<Social> = [
  {
    ICON: {
      BLACK: emailBlack,
      WHITE: emailWhite,
    },
    HREF: "mailto:matheuscavalcantes.mc@gmail.com",
    TITLE: "Email",
  },
  {
    ICON: {
      BLACK: instagramBlack,
      WHITE: instagramWhite,
    },
    HREF: "https://www.instagram.com/mcavalcante.s/",
    TITLE: "Instagram",
  },
  {
    ICON: {
      BLACK: linkedinBlack,
      WHITE: linkedinWhite,
    },
    HREF: "https://www.linkedin.com/in/ms-cavalcante/",
    TITLE: "LinkedIn",
  },
  {
    ICON: {
      BLACK: githubBlack,
      WHITE: githubWhite,
    },
    HREF: "https://github.com/mcavalcantes",
    TITLE: "GitHub",
  },
  {
    ICON: {
      BLACK: spotifyBlack,
      WHITE: spotifyWhite,
    },
    HREF: "https://open.spotify.com/user/rbon5uxdcd2qfk7oc26ezujmm",
    TITLE: "Spotify",
  },
];

export const POSTS: Array<Post> = [
  {
    DATE: "16 out. 2024",
    HREF: "trinta",
    TITLE: "30 dias, 30 músicas",
    PREVIEW: TRINTA_PREVIEW,
    CONTENT: TRINTA,
  },
];
