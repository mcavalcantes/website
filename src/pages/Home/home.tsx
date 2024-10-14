import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Layout } from "../../components/layout/Layout";

import { Card } from "../../components/ui/Card";
import { Pill } from "../../components/ui/Pill";
import { SocialCard } from "../../components/ui/SocialCard";

import {
  EDUCATIONS,
  SKILLS,
  EXPERIENCES,
  PROJECTS,
  ACHIEVEMENTS,
  SOCIALS,
} from "../../constants/constants";

export const Home = () => {
  let userTheme: string | null = localStorage.getItem("theme");

  if (userTheme === null) {
    userTheme = "light";
    localStorage.setItem("theme", "light");
  } else if (userTheme === "dark") {
    document.documentElement.classList.add("dark");
  }

  const [theme, setTheme] = useState(userTheme);

  return (
    <Layout theme={theme} setTheme={setTheme}>
      <section className="items-center gap-2 md:gap-4 md:flex-row md:items-start">
        <img src="/src/assets/images/profile-picture.jpg" className="h-36 w-36 rounded-full" />
        <div className="flex flex-col gap-2">
          <h1 className="w-full text-center md:text-left">Olá, sou o Matheus!</h1>
          <p className="w-full">
            Estudante do 4º período de Engenharia de Computação na UTFPR. Curioso e dedicado,
            tenho interesse em aprender tecnologias novas e me desenvolver na área.
            Conto com uma alta capacidade analítica que, combinada com minha abordagem versátil
            aos problemas, me torna um profissional extremamente competente.
          </p>
        </div>
      </section>
      <section>
        <h2>Educação</h2>
        <ul>
          {EDUCATIONS.map(item =>
            <li key={uuidv4()}>
              <Card
                START_DATE={item.START_DATE}
                END_DATE={item.END_DATE}
                DATE={null}
                HREF={null}
                TITLE={item.TITLE}
                SUBTITLE={item.SUBTITLE}
                DESCRIPTION={null}
                BULLETS={null}
              />
            </li>
          )}
        </ul>
      </section>
      <section>
        <h2>Habilidades</h2>
        <ul className="gap-4">
          {SKILLS.map(item =>
            <li key={uuidv4()}>
              <div className="flex">
                <h3 className="w-28 flex shrink-0">{item.TITLE}</h3>
                <ul className="w-full py-0.5 flex flex-row flex-wrap items-center">
                  {item.ITEMS.map(item =>
                    <li key={uuidv4()}>
                      <Pill title={item} />
                    </li>
                  )}
                </ul>
              </div>
            </li>
          )}
        </ul>
      </section>
      <section>
        <h2>Experiência</h2>
        <ul>
          {EXPERIENCES.map(item =>
            <li key={uuidv4()}>
              <Card
                START_DATE={item.START_DATE}
                END_DATE={item.END_DATE}
                DATE={null}
                HREF={null}
                TITLE={item.TITLE}
                SUBTITLE={item.SUBTITLE}
                DESCRIPTION={null}
                BULLETS={item.BULLETS}
              />
            </li>
          )}
        </ul>
      </section>
      <section>
        <h2>Projetos</h2>
        <ul>
          {PROJECTS.map(item =>
            <li key={uuidv4()}>
              <Card
                START_DATE={null}
                END_DATE={null}
                DATE={null}
                HREF={item.HREF}
                TITLE={item.TITLE}
                SUBTITLE={null}
                DESCRIPTION={item.DESCRIPTION}
                BULLETS={item.BULLETS}
              />
            </li>
          )}
        </ul>
      </section>
      <section>
        <h2>Conquistas</h2>
        <ul>
          {ACHIEVEMENTS.map(item =>
            <li key={uuidv4()}>
              <Card
                START_DATE={null}
                END_DATE={null}
                DATE={item.DATE}
                HREF={null}
                TITLE={item.TITLE}
                SUBTITLE={item.SUBTITLE}
                DESCRIPTION={item.DESCRIPTION}
                BULLETS={null}
              />
            </li>
          )}
        </ul>
      </section>
      <section>
        <h2>Social</h2>
        <ul className="md:flex-row">
          {SOCIALS.map(item =>
            <li key={uuidv4()} className="w-full">
              <SocialCard
                ICON={item.ICON}
                HREF={item.HREF}
                TITLE={item.TITLE}
              />
            </li>
          )}
        </ul>
      </section>
    </Layout>
  );
}
