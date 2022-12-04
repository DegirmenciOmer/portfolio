import { translationHelper } from "../../data/translationHelper";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";

const {
  translations: { projects },
} = translationHelper("EN");

export default function DynamicPage({ project }) {
  const translatedProject = projects[project.id];

  return (
    <div>
      <Link href="/#projects">
        <button>Back</button>
      </Link>
      <h2>{translatedProject.name}</h2>
      <p>{translatedProject.description}</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id;
  const project = id ? projects[+id] : undefined;

  return {
    props: { project },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => {
    return {
      params: { id: project.id.toString() },
    };
  });

  return { paths, fallback: false };
};
