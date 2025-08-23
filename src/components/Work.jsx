import { motion } from "framer-motion";
import {
  FaSearch,
  FaChartLine,
  FaGoogle,
  FaFacebookF,
  FaInstagram,
  FaShareAlt,
  FaPenNib,
  FaBullhorn,
  FaVideo,
  FaShoppingCart,
  FaLaptopCode,
  FaHandshake,
} from "react-icons/fa";

const services = [
  {
    id: "01",
    title: "SEO",
    icon: <FaSearch />,
    description:
      "We don’t just improve rankings — we create lasting visibility. Our SEO strategies are built on ethical, white-hat practices that strengthen your brand’s authority. From in-depth keyword research to on-page optimization and quality backlinks, we focus on driving organic traffic that actually converts into customers.",
    points: [
      "Keyword Search & Strategy Creation",
      "Extensive Industry & Website Analysis",
      "Content Creation",
      "Indexing & Link Building",
      "Blogging",
    ],
  },
  {
    id: "02",
    title: "Search Engine Marketing",
    icon: <FaChartLine />,
    description:
      "SEM is the fast track to visibility. With precise targeting, strategic bidding, and Google-certified expertise, we help your business dominate search results instantly. Our campaigns are designed not just for clicks, but for meaningful leads, sales, and sustainable growth.",
    points: [
      "Bid Management",
      "Fraud Activity Monitoring",
      "Conversion Analysis Reporting",
      "Consultations with Experts",
    ],
  },
  {
    id: "03",
    title: "Google Ads / PPC",
    icon: <FaGoogle />,
    description:
      "Turn searches into sales with our data-driven PPC campaigns. We combine smart keyword targeting, persuasive ad copy, and continuous optimization to maximize ROI. Our goal is simple: lower your ad spend while boosting conversions and long-term customer value.",
    points: [
      "Keyword & Industry Analysis",
      "Ad Copy Creation",
      "Detailed Reporting",
      "Weekly Meetings with Experts",
    ],
  },
  {
    id: "04",
    title: "Facebook Ads",
    icon: <FaFacebookF />,
    description:
      "Facebook is more than a platform — it’s a marketplace of billions. We create scroll-stopping ad campaigns that build awareness, engage communities, and drive measurable sales. From account setup to advanced growth strategies, we manage it all so you can focus on scaling.",
    points: [
      "Audience Targeting & Segmentation",
      "Creative Ad Design & Copywriting",
      "Campaign Optimization",
      "Monthly Reporting & Insights",
    ],
  },
  {
    id: "05",
    title: "Instagram Ads",
    icon: <FaInstagram />,
    description:
      "Instagram is where visuals create impact. We design eye-catching creatives and craft strategies that spark engagement and drive ROI. Whether it’s Reels, Stories, or Carousel Ads, we ensure your brand stands out in one of the most competitive spaces online.",
    points: [
      "Creative Visuals for Ads",
      "Targeting & Re-targeting",
      "Dedicated Lead Strategist",
      "Custom Audience Ads",
      "Real-Time Analytics",
    ],
  },

  // ✨ Enhanced New services
  {
    id: "06",
    title: "Social Media Management",
    icon: <FaShareAlt />,
    description:
      "We transform your social media into a powerful growth channel. From strategy to execution, we craft engaging, platform-native content and foster real conversations that build trust, loyalty, and long-term community growth.",
    points: [
      "Channel Strategy & Content Calendar",
      "Community Management & Engagement",
      "Trend Research & Real-time Content",
      "Monthly Insights & Growth Reports",
    ],
  },
  {
    id: "07",
    title: "Content Creation & Copywriting",
    icon: <FaPenNib />,
    description:
      "Great content is the heartbeat of digital marketing. Our writers craft blogs, landing pages, and ad copies that not only grab attention but inspire action. With SEO-driven strategies and a strong brand voice, we make sure your message resonates everywhere.",
    points: [
      "Brand Tone & Messaging Guides",
      "SEO-Optimized Blogs & Articles",
      "High-converting Ad & Web Copy",
      "Content Repurposing Frameworks",
    ],
  },
  {
    id: "08",
    title: "Digital Marketing",
    icon: <FaBullhorn />,
    description:
      "We build complete digital marketing ecosystems that scale. From multi-channel ad campaigns to automated emails and branding strategies, our approach ensures consistent growth across every digital touchpoint.",
    points: [
      "Funnel Strategy & Audience Mapping",
      "Email Automation & Lead Nurturing",
      "A/B Testing & Conversion Optimization",
      "Performance Dashboards & KPIs",
    ],
  },
  {
    id: "09",
    title: "Video Production & Editing",
    icon: <FaVideo />,
    description:
      "In today’s world, video isn’t optional — it’s essential. Our team produces professional, creative videos designed to tell your story, spark emotion, and hold attention. From short-form Reels to full-scale brand films, we create visuals that connect and convert.",
    points: [
      "Scripts, Storyboards & Shot Lists",
      "Short-form Reels, Ads & UGC",
      "Motion Graphics & Subtitles",
      "Platform-Optimized Deliverables",
    ],
  },
  {
    id: "10",
    title: "E-commerce Solutions",
    icon: <FaShoppingCart />,
    description:
      "We design and develop e-commerce stores that don’t just look good but sell better. With a focus on seamless navigation, conversion-driven layouts, and secure integrations, we ensure your customers enjoy a smooth shopping experience every time.",
    points: [
      "Store Setup (Shopify / Custom)",
      "Product Pages & AOV Boosters",
      "Payment, Shipping & Tax Setup",
      "Analytics & Conversion Tracking",
    ],
  },
  {
    id: "11",
    title: "Web Development",
    icon: <FaLaptopCode />,
    description:
      "Your website is your digital home. We create fast, responsive, and SEO-friendly websites that reflect your brand identity while providing users with a flawless experience. Every line of code is written with growth and performance in mind.",
    points: [
      "UX/UI Planning & Wireframes",
      "Next.js/React Frontend Builds",
      "CMS & API Integrations",
      "Technical SEO & Performance",
    ],
  },
  {
    id: "12",
    title: "Influencer Partnerships",
    icon: <FaHandshake />,
    description:
      "People trust people. That’s why we connect your brand with the right influencers who can authentically share your story. From micro to macro creators, we manage everything from outreach to reporting, ensuring impactful collaborations that boost reach and trust.",
    points: [
      "Creator Sourcing & Vetting",
      "Briefs, Contracts & Coordination",
      "Content Guidelines & Review",
      "Performance Tracking & ROI",
    ],
  },
];


export default function Services() {
  return (
    <div className="my-20 px-6 lg:px-20" id="services">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Our <span className="text-[#dec827]">Services</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow p-6 flex flex-col gap-4"
          >
            {/* Icon + Title */}
            <div className="flex items-center gap-3">
              <span className="text-4xl text-[#dec827]">{service.icon}</span>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.description}
            </p>

            {/* Bullet Points */}
            {service.points.length > 0 && (
              <ul className="list-disc list-inside text-gray-500 text-sm space-y-1">
                {service.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
