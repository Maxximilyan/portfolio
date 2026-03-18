import { AnimatedInlineNumber } from "@/components/AnimatedInlineNumber";
import { CasesCarousel } from "@/components/CasesCarousel";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-label">Available for consulting</div>
          <h1>
            I build <em>AI systems</em>
            <br />
            that teams actually use
          </h1>
          <p className="hero-sub">
            Operations specialist who implemented AI inside a real company — 50 out of 60 people
            use it daily. I help businesses go from &quot;we want to try AI&quot; to systems that
            save measurable time, starting week one.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <AnimatedInlineNumber to={83} suffix="%" className="stat-num" />
              <span className="stat-label">Team adoption rate</span>
            </div>
            <div className="stat-item">
              <AnimatedInlineNumber to={6} suffix="+" className="stat-num" />
              <span className="stat-label">Workdays saved / week</span>
            </div>
            <div className="stat-item">
              <AnimatedInlineNumber to={1193} className="stat-num" />
              <span className="stat-label">Posts auto-analysed</span>
            </div>
            <div className="stat-item">
              <AnimatedInlineNumber to={4} suffix=" yrs" className="stat-num" />
              <span className="stat-label">In operations &amp; automation</span>
            </div>
          </div>
          <div className="hero-cta">
            <a href="#cases" className="btn-primary">
              View Cases →
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-left fade-up">
          <div className="section-label">About me</div>
          <h2>From recruiter to operations &amp; AI builder</h2>
          <p>
            I started in recruiting — which taught me how people actually work, what slows them
            down, and where organisations lose time. That perspective became the foundation for
            everything I do in operations.
          </p>
          <p>
            Over 4+ years across enterprise, SaaS, and fintech, I moved from managing hiring to
            redesigning the processes around it — documentation, tooling, cross-team workflows.
            When AI became practical, I was already inside the machine.
          </p>
          <p>
            Today, I build AI systems that solve operational problems people actually have: too many
            interruptions, too much manual work, no single source of truth. I don&apos;t just set up
            tools — I get them adopted.
          </p>
        </div>
        <div className="about-right fade-up">
          <div className="section-label">Experience</div>

          <div className="exp-item">
            <div className="exp-top">
              <span className="exp-company">Aloware (CCaaS SaaS)</span>
              <span className="exp-type tag-startup">Current</span>
            </div>
            <div className="exp-role">Project Coordinator → Operations &amp; AI Implementation</div>
          </div>

          <div className="exp-item">
            <div className="exp-top">
              <span className="exp-company">SkyEng</span>
              <span className="exp-type tag-enterprise">Enterprise</span>
            </div>
            <div className="exp-role">Operations</div>
          </div>

          <div className="exp-item">
            <div className="exp-top">
              <span className="exp-company">Latoken</span>
              <span className="exp-type tag-startup">Startup</span>
            </div>
            <div className="exp-role">Operations</div>
          </div>

          <div className="exp-item">
            <div className="exp-top">
              <span className="exp-company">GrowMore</span>
              <span className="exp-type tag-startup">Startup</span>
            </div>
            <div className="exp-role">Operations</div>
          </div>
        </div>
      </section>

      <section className="cases-section" id="cases">
        <div className="cases-header fade-up">
          <div className="section-label">Selected Cases</div>
          <h2>
            Real problems. Real results.
            <br />
            All inside one 60-person company.
          </h2>
        </div>

        <CasesCarousel />
      </section>

      <section className="approach">
        <div className="approach-inner">
          <div className="section-label fade-up">How I work</div>
          <h2 className="fade-up">
            Why most AI implementations fail —
            <br />
            and what I do differently
          </h2>
          <div className="approach-grid">
            <div className="approach-item fade-up">
              <div className="approach-icon">🧹</div>
              <h4>Clean data first</h4>
              <p>
                AI is only as good as what it&apos;s connected to. Before building anything, I fix
                the underlying data and processes. Messy input = unreliable output = people stop
                using it.
              </p>
            </div>
            <div className="approach-item fade-up">
              <div className="approach-icon">👥</div>
              <h4>Adoption by design</h4>
              <p>
                Tools don&apos;t drive value — habits do. I build for adoption from day one: demos,
                documentation, private modes, and onboarding flows so people actually use what was
                built.
              </p>
            </div>
            <div className="approach-item fade-up">
              <div className="approach-icon">📐</div>
              <h4>Measurable from week one</h4>
              <p>
                Every project gets success metrics defined upfront. I track hours saved, adoption
                rate, and process improvements — not just &quot;it&apos;s live now&quot;.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-left fade-up">
          <div className="section-label">Contact</div>
          <h2>Let&apos;s talk about your operations</h2>
          <p>
            If you&apos;re a startup or SMB that wants to implement AI properly — not just
            &quot;try ChatGPT&quot; — I&apos;d be glad to explore how I can help. I work with teams
            where there&apos;s a real operational problem to solve.
          </p>
        </div>
        <div className="contact-links fade-up">
          <a href="mailto:dudnyk.maksym@gmail.com" className="contact-link">
            <div className="contact-link-icon">✉️</div>
            <div className="contact-link-text">
              <span className="contact-link-label">Email</span>
              <span className="contact-link-val">dudnyk.maksym@gmail.com</span>
            </div>
          </a>
          <a href="https://t.me/maxximilyan" className="contact-link" target="_blank" rel="noreferrer">
            <div className="contact-link-icon">✈️</div>
            <div className="contact-link-text">
              <span className="contact-link-label">Telegram</span>
              <span className="contact-link-val">@maxximilyan</span>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/maxim-dudnik"
            className="contact-link"
            target="_blank"
            rel="noreferrer"
          >
            <div className="contact-link-icon">💼</div>
            <div className="contact-link-text">
              <span className="contact-link-label">LinkedIn</span>
              <span className="contact-link-val">linkedin.com/in/maxim-dudnik</span>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
