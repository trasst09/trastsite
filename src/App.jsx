import { useEffect, useState } from "react";
import "./App.css";

const showcase = [
  {
    title: "Model Rocket Design",
    category: "Rocketry",
    text: "Designed, built, and tested a model rocket for TARC.",
    image: "/images/rocket.jpg",
    page: "rocket",
  },
  {
    title: "R-Candy Rocket Prototype",
    category: "Engineering",
    text: "Designing and testing an r-candy rocket prototype.",
    image: "/images/rcandy.jpg",
    page: "rcandy",
  },
  {
    title: "Climate Disaster Damage Model",
    category: "Research",
    text: "Computational model to predict climate disaster damages.",
    image: "/images/climate.jpg",
    page: "climate",
  },
];

const pages = {
  about: {
    title: "About Me",
    category: "PERSONAL PROFILE",
    date: "Updated 2026",
    author: "Max Xie",
    image: "/images/profile.png",
    body: "Hi, I’m Max Xie. I'm currently a Junior at Tesla Stem High School, and I'm interested in mechanical engineering.",
  },
  rocket: {
    title: "Model Rocket Design",
    category: "ROCKETRY PROJECT",
    date: "2023 – Present",
    author: "Max Xie",
    image: "/images/rocket.jpg",
    body: "Designed, built, and tested a model rocket for TARC. Placeholder for design notes, launch data, photos, diagrams, and lessons learned.",
  },
  rcandy: {
    title: "R-Candy Rocket Prototype",
    category: "ENGINEERING LOG",
    date: "2024 – Present",
    author: "Max Xie",
    image: "/images/rcandy.jpg",
    body: "Designing and testing an r-candy rocket prototype. Placeholder for testing logs, safety notes, fuel design, and results.",
  },
  climate: {
    title: "Climate Disaster Damage Model",
    category: "RESEARCH PROJECT",
    date: "2025 – 2026",
    author: "Max Xie",
    image: "/images/climate.jpg",
    body: "A computational model to predict climate disaster damages. Placeholder for data sources, methods, graphs, and conclusions.",
  },
  posts: {
    title: "Posts by Me",
    category: "PERSONAL POSTS",
    date: "Updated regularly",
    author: "Max Xie",
    image: "/images/posts.jpg",
    body: "This section will contain short posts, project updates, engineering notes, competition reflections, and website updates.",
  },
};

function App() {
  const [page, setPage] = useState("home");
  const [slide, setSlide] = useState(0);
  const [hideHeader, setHideHeader] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 120) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const item = showcase[slide];

  return (
    <div className={`site ${darkMode ? "dark" : ""}`}>
      <header className={`topbar ${hideHeader ? "hide" : ""}`}>
        <button className="logo-button" onClick={() => setPage("home")}>
          <img src="/images/logo.jpg" alt="Max Xie logo" />
        </button>

        <div className="site-title">The Archive</div>

        <nav className="nav">
          <button onClick={() => setPage("home")}>Home</button>

          <div className="nav-item">
            <button>Projects⌄</button>
            <div className="dropdown">
              <button onClick={() => setPage("rocket")}>
                Model Rocket Design
              </button>
              <button onClick={() => setPage("rcandy")}>
                R-Candy Rocket Prototype
              </button>
              <button onClick={() => setPage("climate")}>
                Climate Damage Model
              </button>
            </div>
          </div>

          <button onClick={() => setPage("about")}>About Me</button>
          <button onClick={() => setPage("posts")}>Posts</button>

          <button className="dark-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>
      </header>

      {page === "home" ? (
        <>
          <section className="title-band">
            <h1>Max Xie</h1>
          </section>

          <section className="showcase">
            <button
              className="arrow left"
              onClick={() =>
                setSlide((slide - 1 + showcase.length) % showcase.length)
              }
            >
              ‹
            </button>

            <div className="feature">
              <img src={item.image} alt={item.title} />

              <div className="feature-caption">
                <p className="category">{item.category}</p>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <button onClick={() => setPage(item.page)}>Read More</button>
              </div>
            </div>

            <button
              className="arrow right"
              onClick={() => setSlide((slide + 1) % showcase.length)}
            >
              ›
            </button>

            <div className="dots">
              {showcase.map((_, i) => (
                <button
                  key={i}
                  className={slide === i ? "active" : ""}
                  onClick={() => setSlide(i)}
                />
              ))}
            </div>
          </section>

          <main className="home-content">
            <div className="divider">∕∕</div>

            <section className="highlight-title">
              <h2>Post of the Day: Building a Personal Archive</h2>
            </section>

            <section className="article-text">
              <p>
                This website is meant to work like a personal encyclopedia:
                each project, activity, post, and idea can become its own entry.
                Instead of a normal one-page portfolio, this site is designed as
                an archive of things I build, study, and write.
              </p>

              <p>
                Future entries will include project writeups, images, diagrams,
                testing notes, math reflections, and research updates.
              </p>
            </section>
          </main>
        </>
      ) : (
        <Article page={pages[page]} />
      )}

      <footer>© 2026 Max Xie</footer>
    </div>
  );
}

function Article({ page }) {
  return (
    <>
      <section className="article-hero">
        <p className="article-category">{page.category}</p>
        <h1>{page.title}</h1>

        <div className="article-meta">
          <span>By {page.author}</span>
          <span>{page.date}</span>
          <span>Entry</span>
        </div>
      </section>

      <main className="article-page">
        <img src={page.image} alt={page.title} className="article-image" />

        <section className="article-body">
          <p>{page.body}</p>

          <h2>Entry Notes</h2>
          <ul>
            <li>Overview: placeholder</li>
            <li>Images: placeholder</li>
            <li>Results: placeholder</li>
            <li>Future updates: placeholder</li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;