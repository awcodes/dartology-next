import BaseLayout from "../../components/BaseLayout";
import Hero from "../../components/Hero";
import Seo from "../../components/Seo";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { supabase } from "../../lib/supabase";

export default function AllRoutines({ routines }) {
  return (
    <BaseLayout>
      <Seo title="All Practice Routines" description="Dartology has a plethora of practice routines to help you achieve your darting goals, even if your goal is as simple as beating your friends in your local pub on a Tuesday night." />

      <Hero heading="All Practice Routines">
        <p>We have a plethora of practice routines to help you achieve your darting goals, even if your goal is as simple as beating your friends in your local pub on a Tuesday night.</p>
      </Hero>

      <div className="container">
        <ul className="mt-8 divide-y divide-gray-700">
          {routines.map((routine) => (
            <li key={routine.slug}>
              <a href={`/routines/${routine.slug}`} className="flex items-center py-3 reset-link group">
                <span className="flex-1 block">
                  <h2 className="inline-block text-gray-300 group-hover:text-secondary-500">{routine.title}</h2>
                  <div className="text-sm group-hover:text-secondary-300" dangerouslySetInnerHTML={{ __html: routine.goal }}></div>
                  <dl className="flex items-center mt-2 space-x-2 text-sm">
                    <dt className="text-sm font-bold text-accent-500">Skills: </dt>
                    <dd className="uppercase">
                      {routine.categories.map((skill, index) => (
                        <span key={`skill-${index}`}>{skill.title}</span>
                      ))}
                    </dd>
                  </dl>
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
  const { data: routines, error } = await supabase.from("routines").select("*, categories (title)").order("title");

  if (error) {
    console.log(error);
  }

  return {
    props: {
      routines,
    },
  };
}
