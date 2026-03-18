"use client";

import { CasesCarousel } from "@/components/CasesCarousel";
import { AnimatedStat } from "@/components/AnimatedStat";
import { AnimatedRangeStat } from "@/components/AnimatedRangeStat";

export function HomeCasesCarousel() {
  const slides = [
    <div key="01" className="case-card featured fade-up">
      <div className="case-left">
        <div className="case-num">01</div>
        <div className="case-tags">
          <span className="tag">AI Agent</span>
          <span className="tag">Slack</span>
          <span className="tag">Operations</span>
        </div>
        <h3>AI Knowledge Bot That Replaced 50 People Tagging Each Other</h3>
        <p>
          Every day, employees across Support, Sales, and Engineering spent time tagging colleagues
          to find answers: &quot;Where is the refund policy?&quot;, &quot;What&apos;s the status of
          client X in HubSpot?&quot;, &quot;Is there a Zoom recording for this onboarding?&quot;.
        </p>
        <p>
          I built an AI agent inside Slack that connects to every major system in the company. Now
          employees ask the bot — and get an answer in seconds.
        </p>
        <div className="what-i-did">
          <div className="what-i-did-label">What I did</div>
          <ul>
            <li>
              Cleaned and restructured Confluence (4,000+ → 1,500 clean documents) to give AI
              high-quality data
            </li>
            <li>
              Built an AI Slack bot connected to HubSpot, Jira, Confluence, Zoom, Google Calendar,
              Aloware, and Intercom
            </li>
            <li>
              Added private DM mode so people could ask &quot;embarrassing&quot; questions without
              audience
            </li>
            <li>Ran 2 demo sessions + created docs and FAQ to drive adoption</li>
            <li>
              Designed the system to be MCP-extensible — any new tool can be connected without
              rebuilding
            </li>
          </ul>
        </div>
      </div>
      <div className="case-right">
        <div className="problem-box">
          <div className="problem-box-label">The problem before</div>
          <p>
            People were constantly tagging colleagues in Slack to find information scattered across
            6+ systems. Every interruption cost both people time — and the person tagged had to stop
            what they were doing.
          </p>
        </div>
        <div className="impact-grid">
          <AnimatedStat
            value={22}
            suffix="h"
            label="Saved in the first 3 days with only 13 users"
            delay={0}
          />
          <AnimatedStat value={51} label="Active users within one week of launch" delay={120} />
          <AnimatedStat value={480} label="Messages per week at peak usage" delay={240} />
          <AnimatedStat value={6} suffix="+ days" label="Of human work saved every single week" delay={360} />
        </div>
      </div>
    </div>,
    <div key="02" className="case-card fade-up">
      <div className="case-left">
        <div className="case-num">02</div>
        <div className="case-tags">
          <span className="tag">8 AI Agents</span>
          <span className="tag">Market Intelligence</span>
          <span className="tag">Content</span>
        </div>
        <h3>Reddit Intelligence System That Replaced Manual Market Research</h3>
        <p>
          Understanding what potential customers actually struggle with — in their own words — used
          to require expensive research firms or hours of manual browsing. I built a system that
          does it automatically, at scale.
        </p>
        <p>
          The system monitors targeted subreddits for conversations relevant to Aloware&apos;s
          market. 8 specialised AI agents then turn raw Reddit posts into product insights,
          marketing angles, sales opportunities, and ready-to-post content.
        </p>
        <div className="what-i-did">
          <div className="what-i-did-label">What I did</div>
          <ul>
            <li>Built automated monitoring across 17 subreddits with custom keyword filters</li>
            <li>Created a Product Analyst agent that maps complaints to roadmap priorities</li>
            <li>Created a Marketing Analyst agent that identifies messaging opportunities</li>
            <li>Built a Content agent that generates blog/social drafts from real customer language</li>
            <li>Built a Sales Opportunity agent that flags high-intent posts for the sales team</li>
            <li>The volume of output led to a dedicated social media hire to manage publishing</li>
          </ul>
        </div>
      </div>
      <div className="case-right">
        <div className="problem-box">
          <div className="problem-box-label">What the system found (example)</div>
          <p>
            From 1,193 analysed posts: 65% of conversations are about VoIP/calling fundamentals, 48%
            about AI &amp; automation, 37% about CRM integrations. The #1 competitor gap: HubSpot +
            GoHighLevel native integration depth. This data now drives product roadmap decisions.
          </p>
        </div>
        <div className="impact-grid">
          <AnimatedStat value={1193} label="Posts analysed automatically to date" delay={0} />
          <AnimatedStat value={8} label="Specialised AI agents working in parallel" delay={120} />
          <AnimatedStat value={17} label="Subreddits monitored continuously" delay={240} />
          <AnimatedStat value={1} suffix=" hire" label="New role created to handle content output" delay={360} />
        </div>
      </div>
    </div>,
    <div key="03" className="case-card fade-up">
      <div className="case-left">
        <div className="case-num">03</div>
        <div className="case-tags">
          <span className="tag">Process Design</span>
          <span className="tag">Jira</span>
          <span className="tag">Cross-team</span>
        </div>
        <h3>PULPO: Turning 28 Jira Boards Into a System Engineers Could Trust</h3>
        <p>
          Multiple teams were adding half-filled bug reports directly to engineering boards.
          Developers would receive tickets with missing context, pass them to product, who&apos;d
          chase the original reporter — while the customer waited and CSAT scores dropped.
        </p>
        <p>
          I designed and built PULPO (named after the Spanish word for octopus — it connects
          everything). A structured intake system that created one clear path for any request to
          reach engineering.
        </p>
        <div className="what-i-did">
          <div className="what-i-did-label">What I did</div>
          <ul>
            <li>
              Designed a 3-tier hierarchy: Product Matrix (roadmap) → PULPO (cross-team intake) →
              Engineering Pods
            </li>
            <li>
              Created mandatory fields on issue types — incomplete tickets simply cannot be
              submitted
            </li>
            <li>Built automations that route, categorise, and generate metrics on every incoming request</li>
            <li>Reduced 28 boards to 15 active ones with clear ownership and live dashboards</li>
            <li>Rolled out training from day one of onboarding so every new joiner learns the system</li>
          </ul>
        </div>
      </div>
      <div className="case-right">
        <div className="problem-box">
          <div className="problem-box-label">The problem before</div>
          <p>
            Teams created boards for new projects, used them for 2 weeks, then abandoned them.
            Developers had no clear backlog. Product managers spent hours chasing context. Clients
            didn&apos;t get updates. CSAT declined.
          </p>
        </div>
        <div className="impact-grid">
          <AnimatedRangeStat from={28} to={15} label="Boards consolidated with active owners" delay={0} />
          <AnimatedStat from={10} value={0} label="Incomplete tickets — enforced by the system" delay={120} />
          <div className="stat-card">
            <span className="stat-number">Full CFT</span>
            <span className="stat-label">Every cross-functional team trained from day one</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">Live</span>
            <span className="stat-label">Metrics dashboards on bugs, features, and cycle time</span>
          </div>
        </div>
      </div>
    </div>,
    <div key="04" className="case-card fade-up">
      <div className="case-left">
        <div className="case-num">04</div>
        <div className="case-tags">
          <span className="tag">Custom ATS</span>
          <span className="tag">AI Screening</span>
          <span className="tag">GDPR</span>
        </div>
        <h3>Custom ATS That Replaced $15K/Year Software</h3>
        <p>
          The company was paying for enterprise HR tools — JazzHR, BambooHR, Factorial — but with one
          recruiter and limited needs, 80% of the features went unused. The cost wasn&apos;t
          justified.
        </p>
        <p>
          I built a custom Applicant Tracking System inside Google Sheets, with AI-powered screening,
          automated emails, a careers page, and full GDPR compliance.
        </p>
        <div className="what-i-did">
          <div className="what-i-did-label">What I did</div>
          <ul>
            <li>Built a careers page with per-role descriptions and an application form</li>
            <li>
              Set up automated emails (sent from official domain) triggered by candidate status
              changes
            </li>
            <li>
              Added AI agents that analyse each CV against all open roles — so a &quot;no&quot; for
              one role might be a &quot;yes&quot; for another
            </li>
            <li>Built a secure resume storage system with GDPR deletion on request</li>
            <li>
              Candidates agree to privacy policy at the point of application — legally sound under US
              and EU law
            </li>
          </ul>
        </div>
      </div>
      <div className="case-right">
        <div className="problem-box">
          <div className="problem-box-label">The problem before</div>
          <p>
            Paying for 3+ enterprise recruiting tools built for teams of 10+ recruiters. Most
            functionality unused. Spreadsheets still being used for quick tasks on top. No AI
            screening. No system for matching candidates across roles.
          </p>
        </div>
        <div className="impact-grid">
          <AnimatedStat
            from={2000}
            value={0}
            prefix="$"
            label="Replaced paid platforms with a custom-built solution"
            delay={0}
          />
          <div className="stat-card">
            <span className="stat-number">Multi-role</span>
            <span className="stat-label">AI screens each candidate across all open positions</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">Auto</span>
            <span className="stat-label">Email sequences triggered by hiring stage</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">GDPR</span>
            <span className="stat-label">Fully compliant — EU &amp; US privacy law</span>
          </div>
        </div>
      </div>
    </div>,
    <div key="05" className="case-card fade-up">
      <div className="case-left">
        <div className="case-num">05</div>
        <div className="case-tags">
          <span className="tag">Knowledge Management</span>
          <span className="tag">Confluence</span>
          <span className="tag">AI Readiness</span>
        </div>
        <h3>4,000 Documents → 1,500: Making Knowledge AI-Ready</h3>
        <p>
          Confluence had grown organically over years. Each team had their own space. The deeper you
          went, the older the data. New joiners spent days looking for documents — and then needed a
          call to understand them.
        </p>
        <p>
          I audited everything, removed what was outdated, rewrote what was unclear, and built a
          unified index. The clean output then became the foundation for the AI knowledge bot.
        </p>
        <div className="what-i-did">
          <div className="what-i-did-label">What I did</div>
          <ul>
            <li>Audited all Confluence spaces and mapped documentation to actual team needs</li>
            <li>Deleted or archived outdated pages — reducing total count from 4,000+ to ~1,500</li>
            <li>
              Created a single master index so any employee can find any document without knowing
              which space it lives in
            </li>
            <li>Standardised writing format so pages are actually readable, not just stored</li>
            <li>
              This clean data became the input for the AI bot — garbage in, garbage out was avoided
            </li>
          </ul>
        </div>
      </div>
      <div className="case-right">
        <div className="problem-box">
          <div className="problem-box-label">The problem before</div>
          <p>
            4,000+ pages, many outdated or duplicate. No consistent structure across teams. New hires
            joined Zoom calls to find documents. Experienced employees wasted time explaining content
            that should have been self-explanatory. AI could not be added to messy data.
          </p>
        </div>
        <div className="impact-grid">
          <AnimatedRangeStat
            from={4000}
            to={1500}
            format="compact"
            label="Documents cleaned and restructured"
            delay={0}
          />
          <AnimatedStat value={1} suffix=" index" label="Single entry point to all company knowledge" delay={120} />
          <div className="stat-card">
            <span className="stat-number">AI-ready</span>
            <span className="stat-label">Clean data made AI bot possible and accurate</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">Faster</span>
            <span className="stat-label">Onboarding — new hires find answers independently</span>
          </div>
        </div>
      </div>
    </div>,
  ];

  return (
    <>
      <div className="cases-header fade-up">
        <div className="section-label">Selected Cases</div>
        <h2>
          Real problems. Real results.
          <br />
          All inside one 60-person company.
        </h2>
      </div>

      <CasesCarousel slides={slides} />
    </>
  );
}
