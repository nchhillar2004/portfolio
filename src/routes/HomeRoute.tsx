import { Link } from "react-router-dom";

export default function HomeRoute() {
    return (
        <>
            <div
                className="flex flex-wrap space-y-5"
                itemScope
                itemType="https://schema.org/Person"
            >
                <meta itemProp="name" content="Nishant Chhillar" />
                <meta itemProp="jobTitle" content="Full Stack Developer" />
                <div className="flex w-full max-lg:space-y-5 lg:flex-row flex-col justify-between">
                    <section
                        className="lg:w-[45%] w-full"
                        id="about"
                        itemScope
                        itemType="https://schema.org/AboutPage"
                    >
                        <h2>
                            <span className="mr-2 select-none">&#x2756;</span>
                            Welcome!
                        </h2>
                        <div className="content" itemProp="description">
                            <p>
                                NONE of the content here is AI generated. Hello!
                                Welcome to my personal portfolio website. My
                                name is Nishant Chhillar, and I'm currently
                                pursuing a Computer Science degree from{" "}
                                <a href="https://mdu.ac.in/" target="_blank">
                                    Maharshi Dayanand University
                                </a>
                                , Rohtak.
                            </p>
                            <p className="">
                                This website is a place where I share my
                                projects, skills, and what I've been learning. I
                                enjoy writing code, building websites, and
                                learning new technologies. Feel free to explore
                                further and see my articles, blogs, projects...
                            </p>
                            <p className="">
                                Don't forget to checkout my{" "}
                                <Link
                                    to="https://github.com/nchhillar2004/"
                                    target="_blank"
                                >
                                    GitHub.
                                </Link>
                            </p>
                        </div>
                    </section>
                    <section className="lg:w-[45%] w-full" id="education">
                        <h2>
                            <span className="mr-2 select-none">&#x2756;</span>
                            Education
                        </h2>
                        <div className="content">
                            <p>
                                Completed my high school from Delhi Public
                                School. (2023)
                            </p>
                            <p className="">
                                Currently pursuing Bachelor of Computer
                                Applications (BCA) which is a four-years
                                undergraduate-level program that primarily
                                focuses on computer applications and software
                                development. (2023 - 2027)
                            </p>
                            <p className="">
                                Also completing side-quests from online courses,
                                YouTube (OG) and udemy.
                            </p>
                        </div>
                    </section>
                </div>

                <div className="flex w-full max-lg:space-y-5 lg:flex-row flex-col justify-between">
                    <section className="lg:w-[45%] w-full" id="skills">
                        <h2>
                            <span className="mr-2 select-none">&#x2756;</span>
                            Technical Skills
                        </h2>
                        <div className="content">
                            <p className="flex">
                                <span className="mr-1 text-[var(--secondary-color)]">
                                    Languages:
                                </span>{" "}
                                TypeScript, Node.js, Java, C, C++, Python
                            </p>
                            <p className="flex">
                                <span className="mr-1 text-[var(--secondary-color)]">
                                    Frameworks/ libraries:
                                </span>
                                Next.js, Reacts.js, Express.js, Spring boot
                            </p>
                            <p className="flex">
                                <span className="mr-1 text-[var(--secondary-color)]">
                                    DB/ Cloud:
                                </span>{" "}
                                MongoDB, MySQL | AWS, Git, Vercel
                            </p>
                            <p className="flex">
                                <span className="mr-1 text-[var(--secondary-color)]">
                                    Tools/ Others:
                                </span>{" "}
                                Tailwind CSS, Shadcn/ui, GSAP, GitHub, Jira
                            </p>
                            <p>
                                From the above skills, my specialization is in
                                TypeScript, Next.js, Java, Shadcn/ui, MySQL, and
                                Tailwind. Languages like C, C++ and Python were
                                taught in college so I only know the basics :
                                {")"}
                            </p>
                        </div>
                    </section>
                    <section
                        className="lg:w-[45%] w-full"
                        id="experience"
                        itemScope
                        itemType="https://schema.org/WorkExperience"
                    >
                        <h2>
                            <span className="mr-2 select-none">&#x2756;</span>
                            Experience
                        </h2>
                        <div className="content">
                            <div className="flex items-center justify-between">
                                <h4>
                                    <a
                                        href="https://digismiths.com/"
                                        target="_blank"
                                        itemProp="url"
                                    >
                                        Digismiths (Internship)
                                    </a>
                                </h4>
                                <div
                                    className="flex flex-col"
                                    itemScope
                                    itemType="https://schema.org/Place"
                                >
                                    <p itemProp="addressLocality">Delhi, IN</p>
                                    <small>Apr, 2024 - Jul 2024</small>
                                </div>
                            </div>
                            <p itemProp="description">
                                Worked as a Full Stack Developer - Intern at
                                Digismiths, a startup in Delhi. I gained a lot
                                of real-world experience in coding, teamwork and
                                timely completion of work at this internship.
                                Here are some projects I worked on:
                            </p>
                            <p>
                                Developed a Google Autocomplete CRM widget for
                                Zoho forms by Google Maps integration using
                                React.
                            </p>
                            <p>
                                Created a Pricing Table application with
                                authentication features and CSV file upload
                                capabilities. I converted the uploaded CSV file
                                into interactive tables. Also fetched external
                                data from a private API. 🤫 (Next.js)
                            </p>
                            <p>
                                Added documentation and settings page for other
                                digismith widgets on Zoho using React.
                            </p>
                        </div>
                    </section>
                </div>

                <div className="flex w-full max-lg:space-y-5 lg:flex-row flex-col justify-between">
                    <section
                        className="lg:w-[45%] w-full"
                        id="projects"
                        itemScope
                        itemType="https://schema.org/CreativeWork"
                    >
                        <h2>
                            <span className="mr-2 select-none">&#x2756;</span>
                            Projects
                        </h2>
                        <div className="content">
                            <p itemProp="about">
                                Q & A website like StackOverflow: Next.js,
                                TypeScript, Next-Auth, JWT, MongoDB Atlas,
                                Shadcn/ui
                            </p>
                            <p itemProp="about">Amazon Clone: MERN stack</p>
                        </div>
                    </section>
                    <section
                        className="lg:w-[45%] w-full"
                        id="contact"
                        itemScope
                        itemType="https://schema.org/ContactPage"
                    >
                        <h2>
                            <span className="mr-2 select-none">&#x2756;</span>
                            Contact
                        </h2>
                        <div className="content" itemProp="contactOption">
                            <p>
                                Looks like you made it this far and want to
                                contact me.
                            </p>
                            <p>Contact: {"मैं नहीं बताऊंगा"}</p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
