import { motion } from "framer-motion";
import { FaLink, FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { Client, sanityImageUrl } from "../../lib/sanity";
import { DetailProjectType, Image } from "../Types";
//  imageSlider: {
//    _type: "image";
//    _key: string;
//    asset: {
//      _ref: string;
//      _type: "reference";
//    }
//  }
//  [];
interface DetailPro extends DetailProjectType {
  imageSlider: Image[];
}
const DetailProject = () => {
  const [isHover, setIsHover] = useState(false);
  const [currentImage, setCurrentImage] = useState(1);
  const { slug } = useParams();
  const [project, setProject] = useState<DetailPro | null>(null);
  const [loading, setLoading] = useState(false);

  const handleClickLeft = () => {
    if (project?.imageSlider?.length) {
      if (currentImage <= 1) {
        setCurrentImage(project?.imageSlider?.length + 1);
      }
      setCurrentImage((prev) => prev - 1);
    }
  };
  const handleClickRight = () => {
    if (project?.imageSlider?.length) {
      if (currentImage >= project?.imageSlider?.length) {
        setCurrentImage(0);
      }
      setCurrentImage((prev) => prev + 1);
    }
  };
  useEffect(() => {
    const detailProject = async (slug: string | undefined) => {
      setLoading(true);
      try {
        const query = `*[_type == 'projects' && slug.current == '${slug}'][0]{
            _id,
            title,
            slug,
            subtitle,
            mainImage,
            imageSlider,
            description,
            client,
            technologiesUsed,
            githubLink,
            githubLink,
            liveUrl

          }`;
        const data = await Client.fetch(query);
        setProject(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    detailProject(slug);
  }, [slug]);
  // console.log(project);
  return (
    <Fragment>
      <div>
        {loading ? (
          <div className="w-full h-[50vh] flex items-center justify-center">
            {" "}
            <div className="font-bold text-2xl text-white">Loading...</div>
          </div>
        ) : (
          <div className="w-[95%] md:w-[80%] lg:w-[90%] xl:w-[75%] mx-auto pt-[5rem] flex flex-col lg:flex-row gap-[1.5rem]">
            <aside
              onMouseOver={() => setIsHover(true)}
              onMouseOut={() => setIsHover(false)}
              className="w-full lg:w-[65%] h-[60%] md:h-[65vh] relative overflow-hidden border-[1px] border-slate-300">
              {project?.imageSlider.map((image: Image, index: number) => {
                return (
                  <Fragment key={index}>
                    <div
                      className={`absolute transition-all duration-500 ease-linear ${
                        index + 1 === currentImage
                          ? "translate-x-0"
                          : index + 1 > currentImage
                          ? " translate-x-[120%]"
                          : " -translate-x-[120%]"
                      }`}>
                      <img
                        src={sanityImageUrl(image).width(800).height(550).url()}
                        className="w-[100%] h-[100%] object-cover "
                      />
                    </div>
                  </Fragment>
                );
              })}
              <div>
                <FaAngleLeft
                  onClick={handleClickLeft}
                  className="hover:text-[#14e8c8] transition-all duration-200"
                  style={{
                    fontSize: "4rem",
                    left: `${isHover ? 1 : -10}rem`,
                    position: "absolute",
                    top: "50%",
                    transition: "left 0.5s",
                    cursor: "pointer",
                  }}
                />
                <FaAngleRight
                  onClick={handleClickRight}
                  className="hover:text-[#14e8c8] transition-all"
                  style={{
                    fontSize: "3.5rem",
                    right: `${isHover ? 1 : -10}rem`,
                    position: "absolute",
                    top: "50%",
                    transition: "right 0.5s",
                    cursor: "pointer",
                  }}
                />
              </div>
            </aside>
            <aside className="w-full md:w-[70%] lg:w-[30%] text-white">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}>
                <h1 className="font-bold text-xl pb-3 text-[#14e8c8]">PROJECT INFO.</h1>
                <div>{project?.description}</div>
              </motion.div>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}>
                <h1 className="font-bold text-xl py-3 text-[#14e8c8]">CLIENT</h1>
                <p>{project?.client}</p>
              </motion.div>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}>
                <h1 className="font-bold text-xl py-3 text-[#14e8c8]">TECHNOLOGY USED</h1>
                <div className="flex gap-3">
                  {project?.technologiesUsed.map((tech: string, i: number) => (
                    <p key={i} className=" capitalize">
                      {tech}
                    </p>
                  ))}
                </div>
              </motion.div>
              <a
                href={project?.liveUrl}
                target="_blank"
                className="flex items-center justify-center gap-3 bg-[#14e8c8] rounded py-3 px-5 shadow mt-[1rem] font-bold w-full  lg:w-[50%]">
                <span>
                  <FaLink />
                </span>
                Go Live
              </a>
            </aside>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default DetailProject;
