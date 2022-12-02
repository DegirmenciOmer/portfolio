import { translationHelper } from "../../data/translationHelper";
import { GetStaticPaths, GetStaticProps } from "next";

const {
  translations: { projects },
} = translationHelper("EN");

export default function DynamicPage({ project }) {
  return (
    <div>
      <button>Back</button>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id;
  const project = id ? projects[+id] : undefined;
  console.log({ id, project });

  return {
    props: { project },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const projectIds = projects.map((prj) => prj.id);

  const paths = projectIds.map((id) => ({
    params: { id: id.toString() },
  }));

  return { paths, fallback: false };
};
