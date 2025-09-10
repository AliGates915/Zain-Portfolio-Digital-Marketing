import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

// You don’t need to import images if they are in /public
// Just call them with src="/your-image.jpg"

const fadeIn = (direction, type, delay, duration) => {
    return {
        hidden: { opacity: 0, y: direction === "up" ? 40 : -40 },
        show: {
            opacity: 1,
            y: 0,
            transition: { type, delay, duration }
        }
    };
};

const textVariant = () => {
    return {
        hidden: { opacity: 0, y: -30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", duration: 1 }
        }
    };
};

// Example projects (4 images from public folder)
const projects = [
    {
        name: "Data Analysis",
        description: "Unlock the power of your data with our expert analysis services. From data cleaning and structuring to visualization and detailed reporting, we turn raw information into meaningful insights. Our recommendations empower you to make smart, data-driven decisions that fuel business growth.",
        tags: [{ name: "DataCleaning", color: "text-blue-400" }, { name: "DataVisualization", color: "text-green-500" }, { name: "Insights", color: "text-[#34e8eb]" }],
        image: "/assests/data.png",
        source_code_link: "https://github.com/your-repo-1"
    },
    {
        name: "E-Commerce Store",
        description: "Take your online store to the next level with our end-to-end e-commerce services. We handle everything from store setup and product design to engaging ad animations and complete shop management. New brand or scaling an existing business, we create smooth and profitable shopping experiences.",
        tags: [{ name: "OnlineStore", color: "text-yellow-500" }, { name: "ProductDesign", color: "text-[#ed74d3]" }, { name: "ShopSetup", color: "text-[#dee352]" }, { name: "UIUX", color: "text-green-500" }],
        image: "/assests/ecommerce.png",
        source_code_link: "https://github.com/your-repo-2"
    },
    {
        name: "Marketing ",
        description: "Boost your brand visibility with our results-driven digital marketing strategies. We specialize in ad campaign setup, audience targeting, and performance optimization to ensure maximum ROI. Your business won’t just compete—it will lead. From strategy to execution, we deliver measurable results that drive real growth.",
        tags: [{ name: "CampaignSetup", color: "text-[#ed74d3]" }, { name: "AdsStrategy", color: "text-blue-400" }, { name: "SEO", color: "text-[#edc072]" }, { name: "BrandGrowth", color: "text-green-500" }],
        image: "/assests/market.png",
        source_code_link: "https://github.com/your-repo-3"
    },
    {
        name: "Project Four",
        description: "Build a strong online presence with our creative social media management services. We offer post designing, content creation, video editing, ad strategy, and daily posting to keep your brand active and engaging. From awareness to conversions, we manage it all to grow your community and customer base.",
        tags: [{ name: "ContentCreation", color: "text-[#dee352]" }, { name: "PostDesign", color: "text-[#ed74d3]" }, { name: "VideoEditing", color: "text-green-500" }],
        image: "/assests/social.png",
        source_code_link: "https://github.com/your-repo-4"
    }
];

const ProjectCard = ({ index, name, description, tags, image }) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{ max: 45, scale: 1, speed: 450 }}
                className="bg-gray-800 p-5 rounded-2xl sm:w-[400px] w-full"
            >
                <div className="relative w-full h-[230px]">
                    <img
                        src={image}
                        alt="project"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-gray-400 text-[14px]">{description}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

const Project = () => {
    return (
        <div id="project" className="px-5 py-10">
            <motion.div variants={textVariant()} initial="hidden" animate="show">

                <h2 className="text-3xl font-bold text-[#dec827] text-center">Our Projects.</h2>
            </motion.div>

            <div className="w-full flex justify-center">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    initial="hidden"
                    animate="show"
                    className="mt-3 text-gray-400 text-[17px] max-w-4xl leading-[30px] text-center"
                >
                    The following projects highlight my expertise through real-world examples of my work. Each project includes a clear description, source code links, and demonstrates my ability to solve complex problems, deliver high-quality solutions, and manage projects effectively.
                </motion.p>
            </div>

            <div className="mt-10 flex flex-wrap gap-7">
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Project;
