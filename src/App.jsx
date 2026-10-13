import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Feather, MoonStar, Mail } from 'lucide-react';
import React from 'react';
const stories = [
  {
    number: '01',
    category: 'Gothic fiction',
    title: <>The House<br />That Remembered</>,
    description: 'A quiet house. A locked room. And a woman who begins to suspect the walls know more about her family than she does.',
    status: 'Excerpt coming soon',
    style: 'story-card--house',
  },
  {
    number: '02',
    category: 'Literary fiction',
    title: <>When the<br />Lights Went Out</>,
    description: 'On a city street after midnight, two strangers meet at the exact moment both are ready to disappear.',
    status: 'In progress',
    style: 'story-card--lights',
  },
];

const collections = [
  { number: '01', title: 'Dark & Gothic', description: 'Old houses, buried histories, and the beautiful things that frighten us.' },
  { number: '02', title: 'Literary Fiction', description: 'Ordinary lives at extraordinary turning points; small moments with enormous echoes.' },
  { number: '03', title: 'Short Stories', description: 'Brief encounters, strange coincidences, and endings that linger.' },
  { number: '04', title: 'Works in Progress', description: 'Early glimpses of new worlds, unfinished chapters, and stories still finding their shape.' },
];

function Header() {
  const [open, setOpen] = useState(false);
  const links = [['Home', '#home'], ['Featured', '#featured'], ['Stories', '#stories'], ['About', '#about'], ['Contact', '#contact']];
  return (
    <header className="site-header">
      <div className="container nav">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>Sarah <span>Persons</span></a>
        <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />} <span>{open ? 'Close' : 'Menu'}</span>
        </button>
        <nav className={`nav-links ${open ? 'nav-links--open' : ''}`} aria-label="Main navigation">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grain" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-content reveal">
          <p className="eyebrow"><span className="eyebrow-line" /> Fiction · worlds after dark</p>
          <h1>Somewhere<br />between <em>truth</em><br />and fiction.</h1>
          <p className="hero-copy">I write about the things that haunt us, the people we become, and the lives waiting just beyond the edge of what we know.</p>
          <div className="hero-actions">
            <a className="button button--wine" href="#stories">Enter the stories <ArrowUpRight size={16} /></a>
            <a className="button button--outline" href="#about">Meet Sarah</a>
          </div>
          <p className="hero-note">For readers who like to feel something</p>
        </div>
        <div className="hero-art reveal" aria-label="Abstract moonlit arch in burgundy tones" role="img">
          <div className="moon" />
          <div className="arch"><span className="arch-light" /></div>
          <p className="art-label">Every story leaves a shadow</p>
          <div className="hero-quote">
            <span className="quote-mark">“</span>
            <p>Some doors only open when the world goes quiet.</p>
            <span className="quote-credit">A note from the writing room</span>
          </div>
        </div>
      </div>
      <a className="scroll-cue" href="#featured"><span>Scroll to explore</span><ArrowDownRight size={16} /></a>
    </section>
  );
}

function Marquee() {
  const words = ['Fiction', 'Memory', 'The unseen', 'Human nature', 'What if?'];
  return <div className="marquee" aria-label={words.join(', ')}><div className="marquee-track">{[...words, ...words].map((word, i) => <span key={i}>{word}<i>✳</i></span>)}</div></div>;
}

function FeaturedStories() {
  return (
    <section className="section featured" id="featured">
      <div className="container">
        <div className="section-heading reveal">
          <div><p className="eyebrow">A place to begin</p><h2>Stories that stay<br /><em>after the last page.</em></h2></div>
          <p className="section-intro">Step into a few imagined worlds. Each story begins with a question—and follows it somewhere unexpected.</p>
        </div>
        <div className="story-grid">
          {stories.map((story) => (
            <article className={`story-card ${story.style} reveal`} key={story.number}>
              <div className="story-orb" aria-hidden="true" />
              <div className="story-content">
                <p className="story-number">Featured story · {story.number}</p>
                <h3>{story.title}</h3>
                <p className="story-description">{story.description}</p>
                <div className="story-meta"><span>{story.category}</span><span>{story.status} <ArrowUpRight size={14} /></span></div>
              </div>
            </article>
          ))}
        </div>
        <p className="placeholder-note">Story titles and descriptions are placeholders for Sarah’s real work.</p>
      </div>
    </section>
  );
}

function Collections() {
  return (
    <section className="section collections" id="stories">
      <div className="container">
        <div className="section-heading reveal">
          <div><p className="eyebrow">The writing room</p><h2>Worlds to wander into.</h2></div>
          <p className="section-intro">Browse by mood, genre, or the kind of question you want a story to leave behind.</p>
        </div>
        <div className="collection-list">
          {collections.map((item) => (
            <a className="collection-row reveal" href="#contact" key={item.number}>
              <span className="collection-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ArrowUpRight className="collection-arrow" size={21} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <div className="portrait-art reveal" role="img" aria-label="Abstract burgundy author portrait placeholder">
          <div className="portrait-arch"><span>S</span></div>
          <p>Sarah Persons · Writer of fiction</p>
        </div>
        <div className="about-content reveal">
          <p className="eyebrow">Behind the pages</p>
          <h2>Every world begins<br />with a <em>what if.</em></h2>
          <p>I’m Sarah Persons, a fiction writer drawn to the strange corners of ordinary life—the secrets people keep, the memories that shift with time, and the moments that change everything.</p>
          <p>This is where I gather the stories I’m building: imagined places, complicated people, and questions that don’t always have neat answers. I hope you find something here that follows you a little way home.</p>
          <p>When I’m not writing, I’m usually collecting fragments: overheard conversations, the feeling of a place just before rain, or a sentence that refuses to leave me alone.</p>
          <div className="signature">Until the next story, — Sarah</div>
          <a className="text-link" href="#contact">Get in touch <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
  );
}

function QuoteBand() {
  return <section className="quote-band"><div className="container reveal"><MoonStar size={20} strokeWidth={1.3} /><p className="eyebrow">A writer’s note</p><blockquote>“The best stories don’t take us away from ourselves. They bring us back by a different road.”</blockquote><span className="quote-credit">From the midnight writing room</span></div></section>;
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [notice, setNotice] = useState('');
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  const submit = (event) => {
    event.preventDefault();
    const recipient = 'hello@sarahpersons.com'; // Replace with Sarah's real email.
    const subject = encodeURIComponent(form.subject || `A note from ${form.name}`);
    const body = encodeURIComponent(`From: ${form.name} (${form.email})\\n\\n${form.message}`);
    setNotice('Opening your email app with the message prepared…');
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };
  return (
    <section className="section contact" id="contact">
      <div className="container contact-grid">
        <div className="contact-copy reveal">
          <p className="eyebrow">The conversation continues</p>
          <h2>Let’s talk<br /><em>stories.</em></h2>
          <p className="contact-intro">For reader notes, collaborations, editorial enquiries, or simply to share a story that stayed with you—I’d love to hear from you.</p>
          <div className="contact-email"><Mail size={17} /><a href="mailto:hello@sarahpersons.com">hello@sarahpersons.com</a></div>
          <p className="contact-small">Replace this placeholder address with Sarah’s preferred contact email.</p>
        </div>
        <form className="contact-form reveal" onSubmit={submit}>
          <div className="form-field"><label htmlFor="name">Your name</label><input id="name" name="name" value={form.name} onChange={update} autoComplete="name" placeholder="How should I address you?" required /></div>
          <div className="form-field"><label htmlFor="email">Your email</label><input id="email" name="email" value={form.email} onChange={update} type="email" autoComplete="email" placeholder="you@example.com" required /></div>
          <div className="form-field"><label htmlFor="subject">What’s this about?</label><input id="subject" name="subject" value={form.subject} onChange={update} placeholder="A reader note, collaboration, enquiry…" /></div>
          <div className="form-field"><label htmlFor="message">Your message</label><textarea id="message" name="message" value={form.message} onChange={update} placeholder="Write a little note…" required /></div>
          <button className="button button--dark" type="submit">Prepare message <ArrowUpRight size={16} /></button>
          <p className="form-note" aria-live="polite">{notice || 'This demo opens your email app; it does not store messages.'}</p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return <footer className="footer"><div className="container footer-inner"><a className="footer-brand" href="#home">Sarah Persons<span>.</span></a><p>Fiction for the hours that belong to no one.</p><div className="footer-links"><a href="#stories">Stories</a><a href="#about">About</a><a href="#contact">Contact</a><a href="#home">Back to top ↑</a></div></div></footer>;
}

export default function App() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach((node) => node.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return <><Header /><main><Hero /><Marquee /><FeaturedStories /><Collections /><About /><QuoteBand /><Contact /></main><Footer /></>;
}