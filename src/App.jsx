import quantiumImg from "./assets/quantium.png";
import websiteImg from './assets/website.png';
import customerPurchasingImg from './assets/customerPurchasing.png';
import ecommerceImg from './assets/ecommerce.png';
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import {
MdDashboard,
MdAnalytics,
MdInsights,
} from "react-icons/md";

import {
FaPython,
FaDatabase,
FaFileExcel,
} from "react-icons/fa";


import {
  HiBuildingOffice2,
} from "react-icons/hi2";

import { useEffect, useState } from "react";

export default function Portfolio() {

  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const projects = [
    {
  title: "Retail Sales & Store Performance Analytics",

  desc:
    "Analyzed 264K+ retail transactions using Python to identify sales trends, customer segments, brand performance, and store-level insights. Performed data cleaning, feature engineering, exploratory data analysis (EDA), and visualization to uncover business opportunities and support data-driven retail decision-making.",

  tech: [
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Excel",
    "EDA",
    "Data Analytics"
  ],

  github: "https://github.com/harshithaadicherla10/quantium-retail-analytics",

  image: quantiumImg,
},

{
  title: "Customer Purchasing Behavior Analysis",

  desc:
    "Analyzed the UCI Online Retail dataset using Python and SQL to uncover customer purchasing patterns, revenue trends, and product performance. Performed RFM analysis, customer segmentation, exploratory data analysis (EDA), and data visualization to generate actionable business insights and support data-driven decision-making.",

  tech: [
    "Python",
    "SQL",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "SQLite",
    "RFM Analysis"
  ],

  github:
    "https://github.com/harshithaadicherla10/customer-purchasing-behavior",

  image: customerPurchasingImg,
},

{
  title: "Website Traffic & Conversion Analytics Dashboard",

  desc:
    "Developed an interactive Power BI dashboard to analyze website traffic, user engagement, conversion rates, and business performance metrics. Created KPI reports, visualizations, and DAX measures for actionable insights.",

  tech: [
    "Power BI",
    "DAX",
    "Power Query",
    "Excel",
    "Data Visualization",
    "Dashboard Development"
  ],

  github: "https://github.com/harshithaadicherla10/website-analytics-conversion-dashboard",

  image: websiteImg,
},

{
    title: "E-Commerce Sales & Customer Insights Analysis",

    desc:
      "Analyzed e-commerce sales and customer data using SQL to identify revenue trends, customer behavior, top-performing products, and key business KPIs through joins, aggregations, and advanced queries.",

    tech: [
      "SQL",
      "MySQL",
      "Database Design",
      "Joins",
      "Aggregations",
      "Data Analysis",
    ],

    github:
      "https://github.com/harshithaadicherla10/Ecommerce-SQL-Analysis",

    image: ecommerceImg,
  },

];

  const skills = {
  'Programming Languages': [
    'Python',
    'SQL',
  ],

  'Data Analytics & Business Intelligence':  [
    'Power BI',
  'Microsoft Excel',
  'DAX',
  'Power Query',
  'Dashboard Development',
  'Data Visualization',
  'KPI Reporting',
  'Business Intelligence',
  ],

  'Python Libraries': [
    'Pandas',
  'NumPy',
  'Matplotlib',
  'Seaborn',
  ],

  Databases: [
    'MySQL',
    'PostgreSQL',
    'SQLite3',
  ],

  'Analytics Concepts': [
  'Data Cleaning',
  'Data Validation',
  'Data Transformation',
  'Exploratory Data Analysis',
  'KPI Analysis',
  'Statistical Analysis',
  'Business Insights',
  'Requirements Analysis',
],

'Infrastructure & Cloud Fundamentals': [
  'Linux Fundamentals',
  'Networking Fundamentals',
  'TCP/IP',
  'DNS',
  'DHCP',
  'Virtualization',
  'Cloud Fundamentals',
],

  'Tools & Platforms': [
    'Git',
    'GitHub',
    'Jupyter Notebook',
    'VS Code',
    'Jira',
    'GitHub Copilot'
  ]
};

const certifications = [
  {
    icon: <MdDashboard />,
    provider: "Office Master",
    title: "Power BI Workshop",
    description:
      "Power BI, DAX, Power Query, Dashboard Development, KPI Reporting, and Business Intelligence.",
    link: "https://certx.in/certificate/4d173e82-3861-47b4-ab33-09d1da812849255690",
    color: "text-yellow-300",
    bg: "bg-yellow-500/10 border-yellow-400/20",
  },

  {
    icon: <MdAnalytics />,
    provider: "Deloitte",
    title: "Data Analytics Job Simulation",
    description:
      "Data Cleaning, Dashboard Reporting, Data Visualization, and Business Insights.",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_pqguAcG55mwmo4KLi_1741590164412_completion_certificate.pdf",
    color: "text-green-300",
    bg: "bg-green-500/10 border-green-400/20",
  },

  {
    icon: <MdInsights />,
    provider: "Quantium",
    title: "Data Analytics Job Simulation",
    description:
      "Retail Analytics, Customer Segmentation, Purchasing Behavior Analysis, and Business Recommendations.",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/32A6DqtsbF7LbKdcq/NkaC7knWtjSbi6aYv_32A6DqtsbF7LbKdcq_pqguAcG55mwmo4KLi_1745939138395_completion_certificate.pdf",
    color: "text-purple-300",
    bg: "bg-purple-500/10 border-purple-400/20",
  },

  {
    icon: <FaPython />,
    provider: "freeCodeCamp",
    title: "Data Analysis with Python",
    description:
      "Data Cleaning, EDA, Statistical Analysis, Pandas, NumPy, and Data Visualization.",
    link:
      "https://www.freecodecamp.org/certification/aharshitha1001/data-analysis-with-python-v7",
    color: "text-blue-300",
    bg: "bg-blue-500/10 border-blue-400/20",
  },

  {
    icon: <FaDatabase />,
    provider: "LetsUpgrade",
    title: "MySQL Bootcamp",
    description:
      "SQL Queries, Joins, Aggregations, Filtering, and Relational Database Fundamentals.",
    link: "https://drive.google.com/file/d/16tJg8d7YnqppZA6Dwh1NHhzx1AOXNm6I/view?usp=drive_link",
    color: "text-sky-300",
    bg: "bg-sky-500/10 border-sky-400/20",
  },

  {
    icon: <FaFileExcel />,
    provider: "LetsUpgrade",
    title: "Excel Bootcamp",
    description:
      "Pivot Tables, Lookup Functions, Reporting, Data Cleaning, and Spreadsheet Analytics.",
    link: "https://drive.google.com/file/d/1qMu3eMq5O8aWUdEpchS7qj-WHP8xHIIN/view?usp=drive_link",
    color: "text-emerald-300",
    bg: "bg-emerald-500/10 border-emerald-400/20",
  },
];


  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen font-sans scroll-smooth">
      {/* Navbar */}
<nav
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    scrolled
      ? "bg-black/10 backdrop-blur-md"
      : "bg-slate-950/95 backdrop-blur-xl border-b border-white/10 shadow-lg"
  }`}
>

  <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

    {/* Logo */}
    <a
      href="#home"
      className="text-2xl md:text-3xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition duration-300"
    >
      Harshitha A.
    </a>

    {/* Nav Links */}
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">

      <a
        href="#home"
        className="relative hover:text-cyan-300 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
      >
        Home
      </a>

      <a
        href="#about"
        className="relative hover:text-cyan-300 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
      >
        About
      </a>

      <a
        href="#skills"
        className="relative hover:text-cyan-300 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
      >
        Skills
      </a>

      <a
        href="#projects"
        className="relative hover:text-cyan-300 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
      >
        Projects
      </a>

      <a
        href="#education"
        className="relative hover:text-cyan-300 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
      >
        Education
      </a>

      <a
        href="#certifications"
        className="relative hover:text-cyan-300 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
      >
        Certifications
      </a>

      <a
        href="#contact"
        className="relative hover:text-cyan-300 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all after:duration-300 hover:after:w-full"
      >
        Contact
      </a>

    </div>

  </div>

</nav>

 {/* Hero Section */}
<section
  id="home"
  className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24 bg-gradient-to-br from-slate-950 via-[#07152d] to-slate-950"
>

  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden">

    <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

    <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

  </div>

  <div className="relative z-10 max-w-5xl mx-auto w-full text-center">

    {/* Intro */}
    <p className="text-cyan-400 text-lg md:text-xl font-medium mb-6 tracking-wide">
      Hello, I'm
    </p>

    {/* Name */}
    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white">

      Harshitha{" "}

      <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
        Adicherla
      </span>

    </h1>

    {/* Role */}
    <h2 className="text-4xl md:text-6xl font-semibold text-gray-300 mb-8">
      Data Analyst 
    </h2>

    {/* Tags */}
   <div className="flex flex-wrap justify-center gap-4 mb-10">

<span className="animate-float bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-cyan-500/10">
  Data Analyst
</span>

<span className="animate-float-delay bg-blue-500/10 border border-blue-400/20 text-blue-300 px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-blue-500/10">
  SQL Developer
</span>

<span className="animate-float-slow bg-purple-500/10 border border-purple-400/20 text-purple-300 px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-purple-500/10">
  Power BI Developer
</span>

<span className="animate-float bg-green-500/10 border border-green-400/20 text-green-300 px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-green-500/10">
  Business Intelligence
</span>

</div>

    {/* Description */}
 <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-12">
Data Analyst with hands-on internship experience in SQL, Python, Power BI, and Excel. Skilled in data cleaning, exploratory data analysis, dashboard development, KPI reporting, and transforming complex datasets into actionable business insights that support data-driven decision-making.
</p>

    {/* Buttons */}
    <div className="flex flex-wrap justify-center gap-5">

      {/* Projects */}
      <a
        href="#projects"
        className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-105 text-black px-8 py-4 rounded-2xl font-bold transition duration-300 shadow-lg shadow-cyan-500/20"
      >
        View Projects
      </a>

      {/* Resume */}
      <a
        href="/resume/Harshitha_Resume.pdf"
        download
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 text-white px-8 py-4 rounded-2xl font-bold transition duration-300 shadow-lg shadow-pink-500/20"
      >
        Download Resume
      </a>

    </div>

  </div>

</section>

      {/* About Section */}
<section
  id="about"
  className="min-h-screen flex items-center justify-center border-t border-white/10 py-24 px-6 bg-gradient-to-b from-[#071029] to-[#0f172a]"
>
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">

      <p className="text-cyan-400 font-semibold tracking-[0.25em] uppercase mb-4">
        Get To Know Me
      </p>

      <h2 className="text-5xl md:text-6xl font-extrabold text-white">
        About Me
      </h2>

    </div>

    {/* Main Card */}
    <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-14 shadow-2xl hover:border-cyan-400/30 hover:shadow-cyan-500/10 transition duration-500 overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative grid md:grid-cols-2 gap-14 items-center">

        {/* Left Side */}
        <div>

          <h3 className="text-4xl md:text-5xl font-bold leading-snug text-white mb-6">

            Turning Complex Data Into

            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {" "}Actionable Decisions
            </span>

          </h3>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            I’m a Data Analyst with hands-on internship experience in SQL,
Python, Power BI, and Excel. I enjoy transforming raw data into
meaningful insights through dashboard development, KPI reporting,
data validation, and exploratory data analysis that support
business decision-making.
          </p>

          {/* Roles */}
          <div className="flex flex-wrap gap-4 mb-8">

  <span className="animate-float bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-cyan-500/10 hover:scale-105 hover:bg-cyan-500/20 transition duration-300">
    Data Analyst
  </span>

  <span className="animate-float-slow bg-purple-500/10 border border-purple-400/20 text-purple-300 px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-purple-500/10 hover:scale-105 hover:bg-purple-500/20 transition duration-300">
    Power BI Developer
  </span>

  <span className="animate-float-delay bg-blue-500/10 border border-blue-400/20 text-blue-300 px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-blue-500/10 hover:scale-105 hover:bg-blue-500/20 transition duration-300">
    SQL Developer
  </span>

  <span className="animate-float-fast bg-pink-500/10 border border-pink-400/20 text-pink-300 px-5 py-2 rounded-full text-sm font-semibold shadow-lg shadow-pink-500/10 hover:scale-105 hover:bg-pink-500/20 transition duration-300">
    Business Intelligence
  </span>

  

</div>

          <p className="text-gray-400 leading-relaxed text-base md:text-lg">
            Skilled in SQL, Python, Power BI, Excel, DAX, Power Query,
data cleaning, exploratory data analysis (EDA), KPI reporting,
and dashboard development. Passionate about using data to uncover
patterns, solve business problems, and drive informed decisions.
          </p>

        </div>

        {/* Right Side Stats */}
        <div className="grid grid-cols-2 gap-5">

          {/* Card 1 */}
          <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-7 text-center hover:border-cyan-400/30 hover:-translate-y-1 transition duration-300">

            <h4 className="text-3xl font-bold text-cyan-300 mb-2">
              Data Analyst Intern
            </h4>

            <p className="text-gray-400 text-sm">
              NXTDC
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-7 text-center hover:border-cyan-400/30 hover:-translate-y-1 transition duration-300">

            <h4 className="text-3xl font-bold text-cyan-300 mb-2">
              Data Analytics
            </h4>

            <p className="text-gray-400 text-sm">
              SQL • Python • Power BI • Excel
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-7 text-center hover:border-cyan-400/30 hover:-translate-y-1 transition duration-300">

            <h4 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-2">
              3+
            </h4>

            <p className="text-gray-400 text-sm">
              Analytics Projects
            </p>

          </div>

          {/* Card 4 */}
          <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-7 text-center hover:border-cyan-400/30 hover:-translate-y-1 transition duration-300">

            <h4 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-2">
              4+
            </h4>

            <p className="text-gray-400 text-sm">
              Certifications
            </p>

          </div>


        </div>

      </div>

    </div>

  </div>
</section>

      {/* Skills Section */}
<section
  id="skills"
  className="relative border-t border-white/10 py-24 px-6 bg-gradient-to-br from-slate-950 via-[#07152d] to-slate-950 overflow-hidden"
>

  {/* Background Glow */}
  <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

  <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">

      <p className="text-cyan-400 font-semibold tracking-[0.25em] uppercase mb-4">
        Data Analytics Toolkit
      </p>

      <h2 className="text-5xl md:text-6xl font-extrabold text-white">
        Skills
      </h2>

    </div>

    {/* Skills Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {Object.entries(skills).map(([category, items]) => (

        <div
          key={category}
          className="group relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-[32px] p-8 overflow-hidden shadow-2xl hover:-translate-y-3 hover:border-cyan-400/40 hover:shadow-cyan-500/10 transition-all duration-500"
        >

          {/* Top Glow Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-70"></div>

          {/* Card Glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

          {/* Category */}
          <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            {category}
          </h3>

          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-3">

            {items.map((skill) => (

              <span
                key={skill}
                className="bg-slate-900/70 border border-white/10 text-gray-200 px-4 py-2 rounded-full text-sm font-medium hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-200 hover:scale-105 transition-all duration-300 shadow-lg shadow-black/20"
              >
                {skill}
              </span>

            ))}

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

{/* Projects Section */}
<section
  id="projects"
  className="relative border-t border-white/10 py-24 px-6 bg-gradient-to-b from-[#071029] to-[#0f172a] overflow-hidden"
>

  {/* Background Glow */}
  <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

  <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">

      <p className="text-cyan-400 font-semibold tracking-[0.25em] uppercase mb-4">
        Analytics Projects
      </p>

      <h2 className="text-5xl md:text-6xl font-extrabold text-white">
        Projects
      </h2>

    </div>

    {/* Projects Grid */}
    <div className="grid md:grid-cols-2 gap-10">

      {projects.map((project) => (

        <div
          key={project.title}
          className="group relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden shadow-2xl hover:-translate-y-3 hover:border-cyan-400/40 hover:shadow-cyan-500/10 transition-all duration-500"
        >

          {/* Top Gradient Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-80"></div>

          {/* Hover Glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

          {/* Project Image */}
          <div className="relative h-72 overflow-hidden bg-slate-950 flex items-center justify-center">

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top bg-slate-950 group-hover:scale-105 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          </div>

          {/* Content */}
          <div className="relative p-8">

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed mb-7 text-center">
              {project.desc}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">

              {project.tech.map((tech) => (

                <span
                  key={tech}
                  className="bg-slate-900/70 border border-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium hover:border-cyan-400 hover:bg-cyan-500/10 hover:scale-105 transition-all duration-300"
                >
                  {tech}
                </span>

              ))}

            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4 flex-wrap">

              {/* GitHub Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-105 text-slate-950 px-6 py-3 rounded-2xl font-bold transition duration-300 shadow-lg shadow-cyan-500/20"
              >
                View Project
              </a>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>


     {/* Education Section */}
<section
  id="education"
  className="relative border-t border-white/10 py-24 px-6 bg-gradient-to-b from-[#071029] to-[#0f172a] overflow-hidden"
>

  {/* Background Glow */}
  <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

  <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

  <div className="relative max-w-5xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">

      <p className="text-cyan-400 font-semibold tracking-[0.25em] uppercase mb-4">
        Academic Background
      </p>

      <h2 className="text-5xl md:text-6xl font-extrabold text-white">
        Education
      </h2>

    </div>

    {/* Education Card */}
    <div className="group relative bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 hover:shadow-cyan-500/10 rounded-[36px] p-8 md:p-10 shadow-2xl transition-all duration-500 overflow-hidden">

      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-80"></div>

      {/* Glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

      <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">

        {/* Left Side */}
        <div>

          <p className="text-cyan-300 font-semibold tracking-wide uppercase mb-3">
            Bachelor of Technology (B.Tech)
          </p>

          <h3 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-4">
            Electronics & Communication Engineering
          </h3>

          <p className="text-gray-400 text-lg">
            JNTUH College of Engineering
          </p>

        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-4 md:text-right">

          <div className="bg-slate-900/60 border border-white/10 rounded-2xl px-6 py-4">

            <p className="text-gray-400 text-sm mb-1">
              Duration
            </p>

            <p className="text-white font-semibold text-lg">
              2021 - 2025
            </p>

          </div>

          <div className="bg-slate-900/60 border border-white/10 rounded-2xl px-6 py-4">

            <p className="text-gray-400 text-sm mb-1">
              CGPA
            </p>

            <p className="text-cyan-300 font-bold text-xl">
              7.97 / 10
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

{/* Certifications Section */}

<section
  id="certifications"
  className="relative border-t border-white/10 py-24 px-6 bg-gradient-to-br from-slate-950 via-[#07152d] to-slate-950 overflow-hidden"
>

  <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto">

<div className="text-center mb-16">

  <p className="text-cyan-400 font-semibold tracking-[0.25em] uppercase mb-4">
  Professional Learning
</p>

<h2 className="text-5xl md:text-6xl font-extrabold text-white">
  Certifications & Job Simulations
</h2>

</div>

{/* Certifications Grid */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">

  {certifications.map((cert) => (

<div
  key={cert.title + cert.provider}
  className="group relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden shadow-2xl hover:-translate-y-3 hover:border-cyan-400/40 hover:shadow-cyan-500/10 transition-all duration-500"
>

  {/* Top Gradient Line */}
  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-80"></div>

  {/* Hover Glow */}
  <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

  <div className="relative p-8 flex flex-col h-full">

    {/* Icon */}
    <div
      className={`w-fit mx-auto mb-6 p-3 rounded-2xl border ${cert.bg} ${cert.border} ${cert.color} text-3xl`}
    >
      {cert.icon}
    </div>

    {/* Provider */}
    <p className="text-center text-cyan-400 font-medium mb-2">
      {cert.provider}
    </p>

    {/* Title */}
    <h3 className="text-xl font-bold text-center text-white mb-4">
      {cert.title}
    </h3>

    {/* Description */}
    <p className="text-gray-400 text-center text-sm leading-relaxed mb-6 flex-grow">
      {cert.description}
    </p>

    {/* Certificate Button */}
    <div className="flex justify-center mt-auto">
      <a
        href={cert.link}
        target="_blank"
        rel="noreferrer"
        className="bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 px-5 py-3 rounded-2xl font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/20"
      >
        View Certificate
      </a>
    </div>

  </div>

</div>

 ))}

</div>

  </div>

</section>


{/* Contact Section */}
<section
  id="contact"
  className="relative border-t border-white/10 py-24 px-6 overflow-hidden bg-gradient-to-b from-[#071029] to-[#0f172a]"
>

  {/* Background Glow */}
  <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

  <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

  <div className="relative z-10 max-w-6xl mx-auto text-center">

    {/* Heading */}
    <div className="mb-16">

      <p className="text-cyan-400 font-semibold tracking-[0.25em] uppercase mb-4">
        Let’s Connect
      </p>

      <h2 className="text-5xl md:text-6xl font-extrabold text-white">
        Contact
      </h2>

    </div>

    {/* Contact Card */}
    <div className="group relative bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 rounded-[36px] p-10 md:p-14 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 overflow-hidden">

      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-80"></div>

      {/* Glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

      <div className="relative">

        {/* Description */}
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-14">
          Open to freelance projects, internships, collaborations,
and full-time opportunities in Data Analytics, Power BI,
SQL Development, Python Full Stack Development, and Web Development.
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Email */}
          <a
            href="mailto:harshithaadicherla03@gmail.com"
            className="group/card bg-slate-900/60 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 hover:bg-slate-900/80 transition-all duration-300 shadow-xl"
          >

            <div className="text-5xl mb-5 text-cyan-300 group-hover/card:text-white flex justify-center transition duration-300">
              <MdEmail />
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              Email
            </h3>

            <p className="text-gray-400 text-sm break-all">
              harshithaadicherla03@gmail.com
            </p>

          </a>

          {/* GitHub */}
          <a
            href="https://github.com/harshithaadicherla10"
            target="_blank"
            rel="noreferrer"
            className="group/card bg-slate-900/60 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 hover:bg-slate-900/80 transition-all duration-300 shadow-xl"
          >

            <div className="text-5xl mb-5 text-cyan-300 group-hover/card:text-white flex justify-center transition duration-300">
              <FaGithub />
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              GitHub
            </h3>

            <p className="text-gray-400 text-sm break-all">
              github.com/harshithaadicherla10
            </p>

          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/harshithaadicherla10"
            target="_blank"
            rel="noreferrer"
            className="group/card bg-slate-900/60 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 hover:bg-slate-900/80 transition-all duration-300 shadow-xl"
          >

            <div className="text-5xl mb-5 text-cyan-300 group-hover/card:text-white flex justify-center transition duration-300">
              <FaLinkedin />
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              LinkedIn
            </h3>

            <p className="text-gray-400 text-sm break-all">
              linkedin.com/in/harshithaadicherla10
            </p>

          </a>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* Footer Divider */}
<div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

      {/* Footer */}
<footer className="bg-[#020617] py-10 px-6">

  <div className="max-w-7xl mx-auto gap-5">

    {/* Left */}
    <p className="text-gray-500 text-sm text-center ">
      <a href="#"><b>© 2026 Harshitha Adicherla. All rights reserved.</b></a>
    </p>

  </div>

</footer>
    </div>
  );
}
