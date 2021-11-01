import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactImageGallery from "react-image-gallery";
import { Box, Flex, Heading, Img, Link } from "@quaantum/components";
import { Link as RouterLink } from "react-router-dom";

import Background from "../components/Background";

import { hasntErrors, State } from "../redux/reducer";
import { exampleImage } from "../components/ProjectItem";

const ProjectPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const projects = useSelector((state: State) =>
    hasntErrors(state) ? state.projects : undefined
  );

  const project = projects?.find((project) => project._id == id);

  if (!project) return <>Not Found</>;

  const { name, service, description, mainImage, video, demo, repo, images } =
    project;

  const carouselItems = images.map((url) => ({
    thumbnail: url,
    original: url,
  }));

  return (
    <>
      <Background />
      <Box m="100px 0">
        <Link
          // @ts-ignore
          as={RouterLink}
          to="/"
          position="absolute"
          top="50px"
          left="17%"
          customCss={`@media (max-width: 768px) {
              & {
                left: 7%;
              }}`}
        >
          ← Go back
        </Link>
        <Heading as="h1">{name}</Heading>
        <Heading as="h4" m="15px 0px">
          {service}
        </Heading>
        <Flex w="100%" direction="column" alignItems="flex-end">
          <Img
            src={exampleImage || mainImage}
            alt={name}
            br="30px"
            w="100%"
            objectFit="cover"
            objectPosition="center center"
          />
          <Flex
            position="relative"
            top="-60px"
            left="-10px"
            customCss={`
        @media (max-width: 768px) {
          & {
                margin: 10px 0;
                position: initial;
                justify-content: space-between;
                flex-wrap: wrap;
                width: 100%;
                button {
                  margin: 7px 0;
                }
              }
            
          }
        `}
          >
            {repo && (
              <Link
                href={repo}
                styleAs="Button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </Link>
            )}
            {demo && (
              <Link
                href={demo}
                styleAs="Button"
                target="_blank"
                rel="noopener noreferrer"
                ml="19px"
                bgColor="blue"
              >
                Demo
              </Link>
            )}
          </Flex>
        </Flex>
        <Box mt="15px" fontWeight="100" fontSize="20px">
          {description.split("\n").map((para, i) => (
            <React.Fragment key={i}>
              <p>{para}</p>
              <br />
            </React.Fragment>
          ))}
        </Box>
        {false && (images.length || video) ? (
          <>
            <Heading textDecoration="underline">Media</Heading>
            <br />
            {video ? (
              <>
                <Heading>Video</Heading>
                <Box
                  as="video"
                  // @ts-ignore
                  src={video}
                  controls
                  br="20px"
                  w="100%"
                  m="20px 0"
                />
              </>
            ) : null}
            <br />
            {images.length ? (
              <>
                <Heading as="h2" mb="10px">
                  Images
                </Heading>
                <ReactImageGallery items={carouselItems} />
              </>
            ) : null}
          </>
        ) : null}
      </Box>
    </>
  );
};

export default ProjectPage;
