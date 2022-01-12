import BaseLayout from "../../components/BaseLayout";
import Seo from "../../components/Seo";
import Hero from "../../components/Hero";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { supabase } from "../../lib/supabase";

export default function Skill({ skill }) {
  return (
    <BaseLayout>
      <Seo title={skill.title} />
      <Hero heading={skill.title}></Hero>
      <div className="container">
        <ul className="mt-8 divide-y divide-gray-700">
          {skill.routines.map((routine) => (
            <li key={routine.slug}>
              <a href={`/routines/${routine.slug}`} className="flex items-center py-3 reset-link group">
                <span className="flex-1 block">
                  <h2 className="inline-block text-gray-300 group-hover:text-secondary-500">{routine.title}</h2>
                  <div className="text-sm group-hover:text-secondary-300" dangerouslySetInnerHTML={{ __html: routine.goal }}></div>
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

export async function getStaticPaths() {
  const { data: skills, error } = await supabase.from("categories").select("slug");

  const paths = skills.map((skill) => {
    return { params: { slug: skill.slug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { data: skill, error } = await supabase.from("categories").select("id, title, routines (*)").eq("slug", params.slug).single();

  if (error) {
    console.log(error);
  }

  return {
    props: {
      skill: skill,
    },
  };
}
