import BaseLayout from "../../components/BaseLayout";
import GenericResultForm from "../../components/GenericResultForm";
import Hero from "../../components/Hero";
import Seo from "../../components/Seo";
import { supabase } from "../../lib/supabase";

export default function Routine({ routine }) {
  return (
    <BaseLayout>
      <Seo title={routine.title} description={routine.goal} />

      <Hero heading={routine.title}>
        <div className="group-hover:text-secondary-300" dangerouslySetInnerHTML={{ __html: routine.goal }}></div>
        <dl className="flex items-center mt-2 space-x-2 text-xs">
          <dt className="font-bold text-accent-500">Skills: </dt>
          <dd className="uppercase">
            {routine.categories.map((skill, index) => (
              <span key={`skill-${index}`}>{skill.title}</span>
            ))}
          </dd>
        </dl>
      </Hero>

      <div className="container py-8 lg:py-12">
        <div className="grid grid-cols-2 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <h2>Targets</h2>
            <div dangerouslySetInnerHTML={{ __html: routine.targets }}></div>

            <h2 className="mt-6">Instructions</h2>
            <div dangerouslySetInnerHTML={{ __html: routine.instructions }}></div>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <div className="p-4 text-center bg-gray-800 rounded">
              <GenericResultForm />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

export async function getStaticPaths() {
  const { data: routines, error } = await supabase.from("routines").select("slug");

  const paths = routines.map((routine) => {
    return { params: { slug: routine.slug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { data: routine, error } = await supabase.from("routines").select("*, categories (*)").eq("slug", params.slug).single();

  if (error) {
    console.log(error);
  }

  return {
    props: {
      routine,
    },
  };
}
