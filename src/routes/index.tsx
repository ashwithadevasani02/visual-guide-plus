import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  LayoutDashboard, Target, BookOpen, FileText, Mic, DoorOpen, Users, Briefcase,
  Star, Hand, Calendar, CheckSquare, Check, Flame, Rocket, ChartPie, Cpu, Brain,
  ArrowRight, BarChart3, Bell, MessageSquare, TrendingUp, MessagesSquare, Bot,
  Sparkles, FileText as FileIcon, Layers, Award, Medal, Tag, Sliders, Heart,
  Clock, Plus, ArrowLeft, HelpCircle, Gift, X, Building2, Send, Upload,
  Search, Inbox, Trophy, Code, LineChart, Bolt, ListChecks, User, Lightbulb,
  PhoneCall, ChevronDown,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Accredian — Career Acceleration Platform" },
      { name: "description", content: "Strategic skills, mentor matchmaking, alumni referrals, and AI-modeled career projections — all in one place." },
    ],
  }),
  component: Index,
});

type ScreenId = "s1" | "s2" | "s3" | "s4" | "s5";

const NAV: { id: ScreenId; label: string }[] = [
  { id: "s1", label: "Dashboard" },
  { id: "s2", label: "Career Room" },
  { id: "s3", label: "Matchmaking" },
  { id: "s4", label: "Referrals" },
  { id: "s5", label: "Future Self" },
];

function Index() {
  const [screen, setScreen] = useState<ScreenId>("s1");
  const [hours, setHours] = useState(2);

  const proj = hours <= 1
    ? { pkg: "₹8 LPA", conf: "55%", time: "8 months" }
    : hours <= 2
    ? { pkg: "₹15 LPA", conf: "84%", time: "4 months" }
    : hours <= 4
    ? { pkg: "₹22 LPA", conf: "91%", time: "3 months" }
    : { pkg: "₹28 LPA", conf: "94%", time: "2 months" };

  return (
    <div className="app-shell">
      {/* Utility bar */}
      <div className="utility-bar">
        Navigate your ideal career path with tailored expert advice
        <a href="#"><PhoneCall size={13} style={{ display: "inline", verticalAlign: "-2px", marginRight: 4 }} />Contact Expert</a>
      </div>

      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div className="brand">
              <span className="brand-name">accredian</span>
              <span className="brand-tag">credentials that matter</span>
            </div>
            <button className="courses-btn">Courses <ChevronDown size={14} /></button>
          </div>
          <nav className="topnav" aria-label="Primary">
            {NAV.map((n) => (
              <button
                key={n.id}
                className={`tnav ${screen === n.id ? "active" : ""}`}
                onClick={() => setScreen(n.id)}
              >
                {n.label}
              </button>
            ))}
          </nav>
          <div className="user-chip">
            <span className="av" style={{ background: "#E6F1FB", color: "#0C447C" }}>R</span>
            Rahul
          </div>
        </div>
      </header>

      <div className="workspace">
        {screen === "s1" && <Dashboard go={setScreen} />}
        {screen === "s2" && <CareerRoom go={setScreen} />}
        {screen === "s3" && <Matchmaking go={setScreen} />}
        {screen === "s4" && <Referrals go={setScreen} />}
        {screen === "s5" && <FutureSelf go={setScreen} hours={hours} setHours={setHours} proj={proj} />}
      </div>
    </div>
  );
}

/* ============ Dashboard ============ */
function Dashboard({ go }: { go: (s: ScreenId) => void }) {
  return (
    <>
      <aside className="sidebar">
        <p className="slabel">Main</p>
        <div className="sitem on"><LayoutDashboard /> Dashboard</div>
        <div className="sitem"><Target /> My goals</div>
        <div className="sitem"><BookOpen /> Courses</div>
        <div className="sitem"><FileText /> Resume builder</div>
        <div className="sitem"><Mic /> Mock interviews</div>
        <hr className="sdiv" />
        <p className="slabel">Explore</p>
        <div className="sitem" onClick={() => go("s2")}><DoorOpen /> Career rooms</div>
        <div className="sitem" onClick={() => go("s3")}><Users /> Matchmaking</div>
        <div className="sitem" onClick={() => go("s4")}><Briefcase /> Referrals</div>
        <div className="sitem" onClick={() => go("s5")}><Star /> Future self</div>
      </aside>

      <main className="main">
        <div className="greet-row">
          <div>
            <h1 className="greet-h"><Hand size={22} color="#D85A30" /> Good evening, Rahul</h1>
            <div className="greet-s">Monday, 15 June · 3 missions left today</div>
          </div>
          <span className="pill pill-blue"><Calendar size={11} /> Week 24</span>
        </div>

        <div className="row2">
          <div className="card">
            <div className="clabel">Career progress</div>
            <div className="ctitle">Overall readiness</div>
            <div className="prog-track"><div className="prog-fill" style={{ width: "72%", background: "var(--primary)" }} /></div>
            <div className="prog-lbl"><span>72% complete</span><span>Target 90%</span></div>
          </div>
          <div className="card">
            <div className="clabel">Predicted placement package</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 6 }}>
              <span style={{ fontSize: 16, color: "var(--text-secondary)" }}>₹12 LPA</span>
              <ArrowRight size={14} color="var(--text-tertiary)" />
              <span style={{ fontSize: 26, fontWeight: 700, color: "var(--primary)", letterSpacing: "-0.02em" }}>₹18 LPA</span>
            </div>
            <span className="pill pill-green" style={{ marginTop: 10 }}><TrendingUp size={11} /> +50% projected</span>
          </div>
        </div>

        <div className="card">
          <div className="sec-head"><CheckSquare /> Today's missions</div>
          <div className="mission-row"><div className="chk done"><Check /></div><span className="mtext done">SQL practice</span><span className="pill pill-green">Done</span></div>
          <div className="mission-row"><div className="chk done"><Check /></div><span className="mtext done">Resume review</span><span className="pill pill-green">Done</span></div>
          <div className="mission-row"><div className="chk" /><span className="mtext">Mock interview</span><span className="pill pill-amber">Pending</span></div>
        </div>

        <div className="card">
          <div className="sec-head"><Flame style={{ color: "#D85A30" }} /> Career opportunities</div>
          <div className="opp-row"><div className="dot8" style={{ background: "var(--primary)" }} />Referral available<span className="pill pill-blue" style={{ marginLeft: 4 }}>New</span><span style={{ marginLeft: "auto", fontSize: 12, color: "var(--text-secondary)" }}>via Alumni</span></div>
          <div className="opp-row"><div className="dot8" style={{ background: "#BA7517" }} />Hackathon open<span style={{ marginLeft: "auto", fontSize: 12, color: "var(--text-secondary)" }}>Closes in 3 days</span></div>
          <div className="opp-row"><div className="dot8" style={{ background: "#639922" }} />Interview experience shared<span style={{ marginLeft: "auto", fontSize: 12, color: "var(--text-secondary)" }}>By 2 peers</span></div>
        </div>

        <div className="card">
          <div className="sec-head"><Rocket /> Enter career rooms</div>
          {[
            { icon: <ChartPie style={{ color: "#534AB7" }} />, bg: "#ECEAFE", name: "PM placements", sub: "142 active" },
            { icon: <Cpu style={{ color: "var(--primary)" }} />, bg: "#E6F1FB", name: "Data science", sub: "98 active" },
            { icon: <Brain style={{ color: "#3B6D11" }} />, bg: "#E6F4E1", name: "Gen AI jobs", sub: "214 active" },
          ].map((r) => (
            <div key={r.name} className="room-row" onClick={() => go("s2")}>
              <div className="room-left">
                <div className="ricon" style={{ background: r.bg }}>{r.icon}</div>
                <div><div className="rname">{r.name}</div><div className="rsub">{r.sub}</div></div>
              </div>
              <span className="enter-btn">Enter <ArrowRight size={12} /></span>
            </div>
          ))}
        </div>
      </main>

      <aside className="rpanel">
        <div className="rp-head"><Target /> Recommended people</div>
        <div className="person-row"><div className="pav" style={{ background: "#ECEAFE", color: "#3C3489" }}>AM</div><div><p className="pname">Aman</p><p className="prole">Data analyst</p></div><span className="match-b">98%</span></div>
        <div className="person-row"><div className="pav" style={{ background: "#FBEAF0", color: "#72243E" }}>SN</div><div><p className="pname">Sneha</p><p className="prole">PM aspirant</p></div><span className="match-b">94%</span></div>
        <div className="person-row"><div className="pav" style={{ background: "#ECEEF2", color: "#444B5C" }}>KR</div><div><p className="pname">Kiran</p><p className="prole">ML engineer</p></div><span className="match-b">89%</span></div>
        <p style={{ fontSize: 12, color: "var(--primary)", textAlign: "right", marginTop: 8, cursor: "pointer", fontWeight: 600 }} onClick={() => go("s3")}>View all <ArrowRight size={11} style={{ display: "inline" }} /></p>

        <hr className="rp-div" />
        <div className="rp-head"><BarChart3 /> This week</div>
        <div className="stat-row"><span className="stat-l">Courses done</span><span className="stat-v">3/5</span></div>
        <div className="stat-row"><span className="stat-l">Practice sessions</span><span className="stat-v">7</span></div>
        <div className="stat-row"><span className="stat-l">Peers connected</span><span className="stat-v">4</span></div>
        <div className="stat-row"><span className="stat-l">Streak</span><span className="stat-v" style={{ color: "#D85A30" }}>12 days</span></div>

        <hr className="rp-div" />
        <div className="rp-head"><Bell /> Notifications</div>
        <div className="notif-row"><span className="notif-new">New</span> · Referral by IIM alumni</div>
        <div className="notif-row">Sneha viewed your profile</div>
        <div className="notif-row">Mock slot opens tomorrow</div>
      </aside>
    </>
  );
}

/* ============ Career Room ============ */
function CareerRoom({ go }: { go: (s: ScreenId) => void }) {
  return (
    <>
      <aside className="sidebar">
        <p className="slabel">Rooms</p>
        <div className="sitem on"><ChartPie /> PM placements</div>
        <div className="sitem"><Cpu /> Data science</div>
        <div className="sitem"><Brain /> Gen AI jobs</div>
        <div className="sitem"><Code /> SDE prep</div>
        <div className="sitem"><LineChart /> Finance</div>
        <hr className="sdiv" />
        <div className="sitem"><Plus /> Browse all rooms</div>
        <hr className="sdiv" />
        <div className="sitem" onClick={() => go("s1")}><ArrowLeft /> Back to dashboard</div>
      </aside>

      <main className="main">
        <div className="greet-row">
          <div>
            <h1 className="page-title"><ChartPie /> Product management room</h1>
            <div className="room-stat">
              <span className="rst"><Users /> 2,341 members</span>
              <span className="rst"><Flame style={{ color: "#D85A30" }} /> 47 online now</span>
              <span className="rst"><MessageSquare /> 128 posts today</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            <span className="pill pill-purple">Joined</span>
            <span className="pill pill-blue">Notify me</span>
          </div>
        </div>

        <div className="trending-card">
          <div className="trend-label"><TrendingUp size={11} /> Today's trending discussion</div>
          <div className="trend-text">"How to crack PM internships at top product companies?"</div>
          <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
            <span className="pill" style={{ background: "#D6D2F8", color: "#26215C" }}>34 replies</span>
            <span className="pill" style={{ background: "#D6D2F8", color: "#26215C" }}>102 upvotes</span>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div className="sec-head" style={{ marginBottom: 0 }}><MessagesSquare /> Posts</div>
          <div className="filter-row">
            <span className="fchip on">Latest</span>
            <span className="fchip">Top</span>
            <span className="fchip">Unanswered</span>
          </div>
        </div>

        <div className="post-card">
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <div className="pav" style={{ background: "#E6F1FB", color: "#0C447C" }}>R</div>
            <span className="post-author">Rahul</span>
            <span className="post-time">2h ago</span>
            <span className="pill pill-blue" style={{ marginLeft: "auto" }}>Data Science</span>
          </div>
          <div className="post-body">How should I prepare for product metrics questions? Any frameworks that actually worked for you in interviews?</div>
          <div className="ai-answer">
            <div className="ai-label"><Bot size={11} /> AI verified answer</div>
            <div className="ai-text">Use the HEART framework for engagement metrics and NSM for growth. Focus on defining success before diving into measurement. Practice with real PM case studies from top companies.</div>
          </div>
          <div className="vote-row">
            <span className="vote-btn"><TrendingUp /> 47</span>
            <span className="vote-btn"><MessageSquare /> 12 replies</span>
            <span className="vote-btn"><FileIcon /> Save</span>
          </div>
        </div>

        <div className="post-card">
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <div className="pav" style={{ background: "#ECEAFE", color: "#3C3489" }}>AM</div>
            <span className="post-author">Aman</span>
            <span className="post-time">5h ago</span>
            <span className="pill pill-purple" style={{ marginLeft: "auto" }}>Strategy</span>
          </div>
          <div className="post-body">Just cracked Swiggy PM interview! Sharing my complete prep strategy and the exact questions they asked.</div>
          <div className="vote-row">
            <span className="vote-btn"><TrendingUp /> 102</span>
            <span className="vote-btn"><MessageSquare /> 28 replies</span>
            <span className="vote-btn"><FileIcon /> Save</span>
          </div>
        </div>

        <div className="card">
          <div className="sec-head"><Sparkles style={{ color: "#534AB7" }} /> AI-generated resources</div>
          <div className="res-row"><div className="res-icon" style={{ background: "#E6F1FB" }}><FileIcon style={{ color: "var(--primary)" }} /></div>Discussion summary — today's top insights</div>
          <div className="res-row"><div className="res-icon" style={{ background: "#ECEAFE" }}><Layers style={{ color: "#534AB7" }} /></div>Flashcards — PM metrics & frameworks</div>
          <div className="res-row"><div className="res-icon" style={{ background: "#DBF3EB" }}><Mic style={{ color: "#0F6E56" }} /></div>Mock interview questions generated from room</div>
        </div>
      </main>

      <aside className="rpanel">
        <div className="rp-head"><Sparkles style={{ color: "#534AB7" }} /> AI insights</div>
        <div style={{ fontSize: 12, color: "var(--text-secondary)", marginBottom: 10 }}>Top skills discussed this week</div>
        {[
          { name: "Product metrics", v: 64 },
          { name: "Roadmaps", v: 48 },
          { name: "A/B testing", v: 31 },
        ].map((s) => (
          <div key={s.name} style={{ marginBottom: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 4 }}>
              <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>{s.name}</span>
              <span style={{ color: "var(--text-secondary)" }}>{s.v}%</span>
            </div>
            <div className="prog-track"><div className="prog-fill" style={{ width: `${s.v}%`, background: "#534AB7" }} /></div>
          </div>
        ))}

        <hr className="rp-div" />
        <div className="rp-head"><Medal style={{ color: "#BA7517" }} /> Most active members</div>
        <div className="rank-row"><span className="rank-n">#1</span><div className="pav" style={{ background: "#FBEFD7", color: "#6B3D08", width: 24, height: 24 }}>AM</div><span>Aman</span><span className="pill pill-amber" style={{ marginLeft: "auto" }}>142 pts</span></div>
        <div className="rank-row"><span className="rank-n">#2</span><div className="pav" style={{ background: "#FBEAF0", color: "#72243E", width: 24, height: 24 }}>SN</div><span>Sneha</span><span className="pill pill-amber" style={{ marginLeft: "auto" }}>98 pts</span></div>
        <div className="rank-row"><span className="rank-n">#3</span><div className="pav" style={{ background: "#E6F1FB", color: "#0C447C", width: 24, height: 24 }}>R</div><span>Rahul</span><span className="pill pill-blue" style={{ marginLeft: "auto" }}>72 pts</span></div>

        <hr className="rp-div" />
        <div className="rp-head"><Tag /> Trending tags</div>
        <div>
          {["#metrics", "#roadmap", "#abtesting", "#internship", "#case-study"].map((t) => (
            <span key={t} className="skill-tag">{t}</span>
          ))}
        </div>
      </aside>
    </>
  );
}

/* ============ Matchmaking ============ */
function Matchmaking({ go }: { go: (s: ScreenId) => void }) {
  const matches = [
    { name: "Ankit Sharma", sub: "Data analyst aspirant · IIT Delhi", av: "AN", avBg: "#ECEAFE", avC: "#3C3489", pct: 92, pills: [["pill-blue", "Remote"], ["pill-purple", "2 yrs exp"]], help: "SQL partner", offer: "Power BI guidance" },
    { name: "Priya Nair", sub: "BA aspirant · NIT Trichy", av: "PR", avBg: "#FBEAF0", avC: "#72243E", pct: 88, pills: [["pill-teal", "Hybrid"], ["pill-purple", "Fresher"]], help: "Mock interviews", offer: "Resume reviews" },
  ];
  return (
    <>
      <aside className="sidebar">
        <p className="slabel">Find partner</p>
        <div className="sitem on"><Sliders /> My preferences</div>
        <div className="sitem"><Users /> All matches</div>
        <div className="sitem"><Heart /> Connected</div>
        <div className="sitem"><Clock /> Pending requests</div>
        <hr className="sdiv" />
        <p className="slabel">My profile</p>
        <div style={{ background: "var(--bg-secondary)", borderRadius: 12, padding: 12 }}>
          <div style={{ fontSize: 11, color: "var(--text-secondary)", marginBottom: 6 }}>I need help with</div>
          <span className="skill-tag" style={{ background: "#FCEBEB", color: "#791F1F" }}>SQL</span>
          <span className="skill-tag" style={{ background: "#FCEBEB", color: "#791F1F" }}>DSA</span>
          <div style={{ fontSize: 11, color: "var(--text-secondary)", margin: "10px 0 6px" }}>I can offer</div>
          <span className="skill-tag" style={{ background: "#E6F4E1", color: "#1F5C0E" }}>Excel</span>
          <span className="skill-tag" style={{ background: "#E6F4E1", color: "#1F5C0E" }}>Python</span>
        </div>
        <hr className="sdiv" />
        <div className="sitem" onClick={() => go("s1")}><ArrowLeft /> Back</div>
      </aside>

      <main className="main">
        <div>
          <h1 className="page-title"><Users /> Find my growth partner</h1>
          <div className="page-sub">Matched by goal, skills, and availability</div>
        </div>
        <div className="filter-row">
          <span className="fchip on">Goal: Data analyst</span>
          <span className="fchip on">Target: ₹12 LPA+</span>
          <span className="fchip on">Remote</span>
          <span className="fchip">+ Add filter</span>
        </div>
        <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>12 matches found · Swipe to connect</div>

        {matches.map((m) => (
          <div key={m.name} className="match-card">
            <div className="match-top">
              <div className="match-big-av" style={{ background: m.avBg, color: m.avC }}>{m.av}</div>
              <div style={{ flex: 1 }}>
                <div className="match-name">{m.name}</div>
                <div className="match-sub">{m.sub}</div>
                <div style={{ marginTop: 6, display: "flex", gap: 4 }}>
                  {m.pills.map(([c, l]) => <span key={l} className={`pill ${c}`}>{l}</span>)}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div className="match-pct">{m.pct}%</div>
                <div style={{ fontSize: 11, color: "var(--text-secondary)" }}>goal match</div>
              </div>
            </div>
            <div className="match-grid">
              <div className="match-box">
                <div className="match-box-l"><HelpCircle size={11} /> Needs help with</div>
                <div className="match-box-v">{m.help}</div>
              </div>
              <div className="match-box">
                <div className="match-box-l"><Gift size={11} /> Can offer</div>
                <div className="match-box-v">{m.offer}</div>
              </div>
            </div>
            <div className="swipe-row">
              <div className="sw-skip"><X size={14} /> Skip</div>
              <div className="sw-connect"><Users size={14} /> Study together</div>
            </div>
          </div>
        ))}
      </main>

      <aside className="rpanel">
        <div className="rp-head"><BarChart3 /> Match stats</div>
        <div className="stat-row"><span className="stat-l">Total matches</span><span className="stat-v">12</span></div>
        <div className="stat-row"><span className="stat-l">Above 90%</span><span className="stat-v">3</span></div>
        <div className="stat-row"><span className="stat-l">Connected</span><span className="stat-v">2</span></div>

        <hr className="rp-div" />
        <div className="rp-head"><Lightbulb style={{ color: "#BA7517" }} /> How matching works</div>
        <div style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.8 }}>
          <div>Shared career goal</div>
          <div>Complementary skill gaps</div>
          <div>Similar target salary</div>
          <div>Availability overlap</div>
          <div>Location preference</div>
        </div>

        <hr className="rp-div" />
        <div className="rp-head"><Heart style={{ color: "#D4537E" }} /> Recently connected</div>
        <div className="person-row"><div className="pav" style={{ background: "#DBF3EB", color: "#085041", width: 28, height: 28 }}>VK</div><div><p className="pname">Vikram K.</p><p className="prole">SQL study partner</p></div></div>
        <div className="person-row"><div className="pav" style={{ background: "#FBEFD7", color: "#6B3D08", width: 28, height: 28 }}>DP</div><div><p className="pname">Divya P.</p><p className="prole">Resume swap</p></div></div>
      </aside>
    </>
  );
}

/* ============ Referrals ============ */
function Referrals({ go }: { go: (s: ScreenId) => void }) {
  return (
    <>
      <aside className="sidebar">
        <p className="slabel">Referrals</p>
        <div className="sitem on"><Building2 /> Browse companies</div>
        <div className="sitem"><Send /> My requests</div>
        <div className="sitem"><Users /> My alumni</div>
        <div className="sitem"><Star /> Top alumni</div>
        <hr className="sdiv" />
        <div className="sitem"><Upload /> Update resume</div>
        <div className="sitem" onClick={() => go("s1")}><ArrowLeft /> Back</div>
      </aside>

      <main className="main">
        <h1 className="page-title"><Briefcase /> Referral marketplace</h1>
        <div className="search-bar">
          <Search />
          <input type="text" placeholder="Search company, role, or alumni..." defaultValue="Google" />
          <span className="pill pill-blue" style={{ cursor: "pointer" }}>Search</span>
        </div>
        <div className="filter-row">
          <span className="fchip on">All</span>
          <span className="fchip">FAANG</span>
          <span className="fchip">Startups</span>
          <span className="fchip">Consulting</span>
          <span className="fchip">Finance</span>
        </div>

        <div className="sec-head" style={{ marginBottom: 0 }}><Inbox /> Open referral requests</div>
        <div className="ref-card">
          <div className="ref-top">
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div className="pav" style={{ background: "#E6F1FB", color: "#0C447C", width: 40, height: 40, fontSize: 14 }}>R</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }}>Rahul</div>
                <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>Data Analyst · Google</div>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div className="ref-score-l">Resume score</div>
              <div className="ref-score">89%</div>
            </div>
          </div>
          <div className="ref-meta-row">
            <span className="pill pill-green"><Check size={11} /> Qualified</span>
            <span className="pill pill-blue">CGPA 8.4</span>
            <span className="pill pill-purple">2 yrs exp</span>
          </div>
        </div>

        <div className="sec-head" style={{ marginBottom: 0, marginTop: 8 }}><Users /> Available alumni at Google</div>

        {[
          { av: "AR", avBg: "#FBEFD7", avC: "#6B3D08", name: "Arjun Mehta", role: "Sr. Data Analyst · Google · Batch 2021", placed: 12, rate: 85, badges: [["badge-gold", <Trophy size={11} />, "Top contributor"], ["badge-purple", <Star size={11} />, "Placement hero"]] },
          { av: "NR", avBg: "#DBF3EB", avC: "#085041", name: "Neha Rao", role: "Product Analyst · Google · Batch 2022", placed: 7, rate: 71, badges: [["badge-silver", <Award size={11} />, "Mentor"]] },
        ].map((a) => (
          <div key={a.name} className="alumni-card">
            <div className="alumni-top">
              <div className="pav" style={{ background: a.avBg, color: a.avC, width: 44, height: 44, fontSize: 14 }}>{a.av}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }}>{a.name}</div>
                <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>{a.role}</div>
              </div>
              <button className="req-btn">Request referral</button>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
              <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{a.placed} students placed</span>
              <span style={{ fontSize: 12, color: "#1F5C0E", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 4 }}><TrendingUp size={12} /> {a.rate}% success rate</span>
            </div>
            <div className="badge-row">
              {a.badges.map((b, i) => <span key={i} className={`badge ${b[0]}`}>{b[1]}{b[2]}</span>)}
            </div>
          </div>
        ))}
      </main>

      <aside className="rpanel">
        <div className="rp-head"><BarChart3 /> Your referral stats</div>
        <div className="stat-row"><span className="stat-l">Requests sent</span><span className="stat-v">3</span></div>
        <div className="stat-row"><span className="stat-l">Pending</span><span className="stat-v">2</span></div>
        <div className="stat-row"><span className="stat-l">Confirmed</span><span className="stat-v" style={{ color: "#1F5C0E" }}>1</span></div>

        <hr className="rp-div" />
        <div className="rp-head"><Trophy style={{ color: "#BA7517" }} /> Alumni reputation</div>
        <div style={{ fontSize: 12, color: "var(--text-secondary)", marginBottom: 10 }}>Earned by helping students</div>
        <div style={{ marginBottom: 6 }}><span className="badge badge-gold"><Trophy size={11} /> Top contributor</span></div>
        <div style={{ marginBottom: 6 }}><span className="badge badge-silver"><Award size={11} /> Mentor</span></div>
        <div><span className="badge badge-purple"><Star size={11} /> Placement hero</span></div>

        <hr className="rp-div" />
        <div className="rp-head"><Building2 /> Top companies</div>
        <div className="rank-row"><span className="rank-n">#1</span><span>Google</span><span className="pill pill-green" style={{ marginLeft: "auto" }}>12 alumni</span></div>
        <div className="rank-row"><span className="rank-n">#2</span><span>Microsoft</span><span className="pill pill-blue" style={{ marginLeft: "auto" }}>9 alumni</span></div>
        <div className="rank-row"><span className="rank-n">#3</span><span>Flipkart</span><span className="pill pill-blue" style={{ marginLeft: "auto" }}>7 alumni</span></div>
      </aside>
    </>
  );
}

/* ============ Future Self ============ */
function FutureSelf({ go, hours, setHours, proj }: { go: (s: ScreenId) => void; hours: number; setHours: (n: number) => void; proj: { pkg: string; conf: string; time: string } }) {
  return (
    <>
      <aside className="sidebar">
        <p className="slabel">Future self</p>
        <div className="sitem on"><LineChart /> Projections</div>
        <div className="sitem"><ListChecks /> Improvement plan</div>
        <div className="sitem"><BarChart3 /> Progress tracker</div>
        <hr className="sdiv" />
        <div className="sitem" onClick={() => go("s1")}><ArrowLeft /> Back</div>
      </aside>

      <main className="main">
        <div>
          <h1 className="page-title"><Star style={{ color: "#BA7517" }} /> Your future self</h1>
          <div className="page-sub">AI-modeled projection based on your current pace and study habits</div>
        </div>

        <div className="future-cards">
          <div className="fc">
            <div className="fc-head" style={{ color: "var(--text-secondary)" }}><User size={12} /> Current you</div>
            <div className="fc-pkg">₹7 LPA</div>
            <div className="fc-conf">62% confidence</div>
            <div className="fc-bar"><div className="fc-fill" style={{ width: "62%", background: "#E24B4A" }} /></div>
            <ul className="fc-issue bad"><li>Low DSA progress</li><li>Few mock interviews</li><li>No referrals yet</li></ul>
          </div>
          <div className="arrow-conn"><ArrowRight /></div>
          <div className="fc featured">
            <div className="fc-head" style={{ color: "var(--primary)" }}><Bolt size={12} /> Future A · 2 hrs/day</div>
            <div className="fc-pkg">₹15 LPA</div>
            <div className="fc-conf">84% confidence</div>
            <div className="fc-bar"><div className="fc-fill" style={{ width: "84%", background: "var(--primary)" }} /></div>
            <ul className="fc-issue ok"><li>DSA basics covered</li><li>4 mocks done</li><li>1 referral request</li></ul>
          </div>
          <div className="arrow-conn"><ArrowRight /></div>
          <div className="fc">
            <div className="fc-head" style={{ color: "#1F5C0E" }}><Rocket size={12} /> Future B · 4 hrs/day</div>
            <div className="fc-pkg">₹22 LPA</div>
            <div className="fc-conf">91% confidence</div>
            <div className="fc-bar"><div className="fc-fill" style={{ width: "91%", background: "#639922" }} /></div>
            <ul className="fc-issue good"><li>DSA completed</li><li>10+ mocks done</li><li>3 referrals lined up</li></ul>
          </div>
        </div>

        <div className="card">
          <div className="sec-head"><Sliders /> Adjust your study plan</div>
          <div className="study-row">
            <span className="study-h">Daily study hours</span>
            <input type="range" min={0} max={8} step={1} value={hours} onChange={(e) => setHours(Number(e.target.value))} />
            <span className="study-val">{hours}h</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginTop: 10 }}>
            <div className="mcard"><div className="mn">Expected package</div><div className="mv" style={{ color: "var(--primary)" }}>{proj.pkg}</div></div>
            <div className="mcard"><div className="mn">Confidence</div><div className="mv">{proj.conf}</div></div>
            <div className="mcard"><div className="mn">Time to placement</div><div className="mv">{proj.time}</div></div>
          </div>
        </div>

        <div className="card">
          <div className="sec-head"><ListChecks /> What to focus on next</div>
          <div className="opp-row"><div className="dot8" style={{ background: "#E24B4A" }} /><span style={{ flex: 1 }}>Complete DSA module — 3 topics remaining</span><span className="pill pill-red">High impact</span></div>
          <div className="opp-row"><div className="dot8" style={{ background: "#BA7517" }} /><span style={{ flex: 1 }}>Book 2 mock interviews this week</span><span className="pill pill-amber">Medium</span></div>
          <div className="opp-row"><div className="dot8" style={{ background: "#639922" }} /><span style={{ flex: 1 }}>Request referral from Arjun at Google</span><span className="pill pill-green">Quick win</span></div>
        </div>

        <button className="cta-btn">Start my improvement plan →</button>
      </main>

      <aside className="rpanel">
        <div className="rp-head"><LineChart /> Package trajectory</div>
        {[
          { l: "Now", v: "₹7L", pct: 32, c: "#E24B4A" },
          { l: "2 hrs/day", v: "₹15L", pct: 68, c: "var(--primary)" },
          { l: "4 hrs/day", v: "₹22L", pct: 100, c: "#639922" },
        ].map((t) => (
          <div key={t.l} style={{ marginBottom: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--text-secondary)", marginBottom: 4 }}>
              <span>{t.l}</span><span>{t.v}</span>
            </div>
            <div className="prog-track"><div className="prog-fill" style={{ width: `${t.pct}%`, background: t.c }} /></div>
          </div>
        ))}

        <hr className="rp-div" />
        <div className="rp-head"><Users /> Peers who made it</div>
        <div className="person-row"><div className="pav" style={{ background: "#E6F4E1", color: "#1F5C0E", width: 28, height: 28 }}>VK</div><div><p className="pname">Vikram</p><p className="prole">Now at ₹18 LPA</p></div></div>
        <div className="person-row"><div className="pav" style={{ background: "#ECEAFE", color: "#3C3489", width: 28, height: 28 }}>AN</div><div><p className="pname">Ananya</p><p className="prole">Now at ₹24 LPA</p></div></div>

        <hr className="rp-div" />
        <div className="rp-head"><Lightbulb style={{ color: "#BA7517" }} /> AI tip</div>
        <div style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.6 }}>
          Students who do 3+ mock interviews are 2.4x more likely to exceed their target package.
        </div>
      </aside>
    </>
  );
}
