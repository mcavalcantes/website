import {
  Education,
  Skill,
  Experience,
  Project,
  Achievement,
  Social,
} from "../types/types";

export const EDUCATIONS: Array<Education> = [
  {
    START_DATE: "mar. 2023",
    END_DATE: "o momento",
    TITLE: "Universidade Tecnológica Federal do Paraná",
    SUBTITLE: "Engenharia de Computação",
  },
  {
    START_DATE: "abr. 2018",
    END_DATE: "set. 2021",
    TITLE: "Instituto Federal do Pará",
    SUBTITLE: "Técnico em Meio Ambiente integrado ao Ensino Médio",
  },
];

export const SKILLS: Array<Skill> = [
  {
    TITLE: "Linguagens",
    ITEMS: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
    ],
  },
  {
    TITLE: "Tecnologias",
    ITEMS: [
      "React",
      "Tailwind CSS",
    ],
  },
  {
    TITLE: "Ferramentas",
    ITEMS: [
      "Git",
      "Figma",
    ],
  },
  {
    TITLE: "Outros",
    ITEMS: [
      "Inglês",
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
    HREF: "https://mcavalcantes.github.io/derivadash/",
    TITLE: "DerivaDash",
    DESCRIPTION: "Aplicação web que serve como uma ferramenta de estudos " +
    "destinada a estudantes de engenharia, visando reforçar o aprendizado das " +
    "regras de derivação na disciplina de cálculo de uma maneira ágil, em um formato " +
    "de quiz. Feito com HTML, CSS, e JavaScript.",
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
      BLACK: "/src/assets/iconmonstr-email-4-black.svg",
      WHITE: "/src/assets/iconmonstr-email-4-white.svg",
    },
    HREF: "mailto:matheuscavalcantes.mc@gmail.com",
    TITLE: "Email",
  },
  {
    ICON: {
      BLACK: "/src/assets/iconmonstr-instagram-11-black.svg",
      WHITE: "/src/assets/iconmonstr-instagram-11-white.svg",
    },
    HREF: "https://www.instagram.com/mcavalcante.s/",
    TITLE: "Instagram",
  },
  {
    ICON: {
      BLACK: "/src/assets/iconmonstr-linkedin-1-black.svg",
      WHITE: "/src/assets/iconmonstr-linkedin-1-white.svg",
    },
    HREF: "https://www.linkedin.com/in/ms-cavalcante/",
    TITLE: "LinkedIn",
  },
  {
    ICON: {
      BLACK: "/src/assets/iconmonstr-github-1-black.svg",
      WHITE: "/src/assets/iconmonstr-github-1-white.svg",
    },
    HREF: "https://github.com/mcavalcantes",
    TITLE: "GitHub",
  },
  {
    ICON: {
      BLACK: "/src/assets/iconmonstr-spotify-1-black.svg",
      WHITE: "/src/assets/iconmonstr-spotify-1-white.svg",
    },
    HREF: "https://open.spotify.com/user/rbon5uxdcd2qfk7oc26ezujmm",
    TITLE: "Spotify",
  },
];
