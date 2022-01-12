import BaseLayout from "../components/BaseLayout";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { supabase } from "../lib/supabase";

export default function Skills({ skills }) {
  return (
    <BaseLayout>
      <Seo title="All Skills" description="" />
      <Hero heading="All Skills"></Hero>

      <div className="container">
        <ul className="mt-8 divide-y divide-gray-700">
          {skills.map((skill) => (
            <li key={skill.slug}>
              <a href={`/skills/${skill.slug}`} className="flex items-center py-3 reset-link group">
                <span className="flex-1 block">
                  <h2 className="inline-block text-gray-300 group-hover:text-secondary-500">{skill.title}</h2>
                </span>
                <ChevronRightIcon className="flex-shrink-0 w-6 h-6 ml-3 fill-current group-hover:text-secondary-500" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </BaseLayout>
  );
}

export async function getStaticProps() {
  const { data: skills, error } = await supabase.from("categories").select("*").order("title");

  if (error) {
    console.log(error);
  }

  return {
    props: {
      skills,
    },
  };
}
