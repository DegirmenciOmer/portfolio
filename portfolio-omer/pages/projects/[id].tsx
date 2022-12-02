import { translationHelper } from "../../data/translationHelper";
import { GetStaticProps } from "next";

const {
  translations: { projects },
} = translationHelper("EN");

export default function DynamicPage({ project }) {
  console.log(project);

  return (
    <div>
      <p>dynamic page</p>
      <p>{project.name}</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  console.log({ context });
  const id = context?.params?.id;
  const project = id ? projects[+id] : undefined;
  return {
    props: { project },
  };
};

export async function getStaticPaths() {
  const projectIds = projects.map((prj) => prj.id);
  const paths = projectIds.map((id) => ({
    params: { id: id.toString() },
  }));

  return { paths, fallback: false };
}
