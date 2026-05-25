// Central place for site-wide content.
// Edit this file (no rebuild config needed) when you want to update profile,
// news, education, etc. Everything is plain TypeScript so you get type checks.

export const site = {
  // Used as the <title> on the home page and inside the HTML <meta> tags.
  title: 'Shuhao Chen',
  // Short tagline shown under the name. Keep it under ~12 words.
  tagline: 'PhD Student, HKUST',
  // Description for SEO (<meta name="description">).
  description:
    'Shuhao Chen is a PhD student at HKUST working on machine learning, LLM routing, and trustworthy AI.',
  // Canonical URL. Update if the deployment domain changes.
  url: 'https://shuhao02.github.io',
  // Path to the profile photo, served from /public.
  profileImage: '/images/profile.png',
} as const;

// The author's display name. Any occurrence of this string inside a paper's
// `authors` array will be rendered in bold.
export const selfName = 'Shuhao Chen';

// About / bio. Rendered as a paragraph next to the profile photo.
// Inline HTML is allowed — use it for the few links you want inside the bio.
export const bio = `I am a first-year PhD student at <a href="https://hkust.edu.hk/" target="_blank" rel="noopener">HKUST</a>, advised by <a href="https://www.cse.ust.hk/~jamesk/" target="_blank" rel="noopener">Prof. James Kwok</a> and <a href="https://yuzhanghk.github.io/" target="_blank" rel="noopener">Prof. Yu Zhang</a>. Before that, I received my Master's degree from <a href="https://www.sustech.edu.cn/" target="_blank" rel="noopener">SUSTech</a> (advised by Prof. Yu Zhang) and my Bachelor's degree from <a href="https://www.scut.edu.cn/" target="_blank" rel="noopener">SCUT</a>.<br/><br/>My research focuses on machine learning, with a current interest in large language models (e.g., LLM routing / assembling) and trustworthy AI.`;

// Inline contact links shown beneath the bio. Order is preserved.
// `url` becomes the href; set it to a `mailto:` link for email.
export const contacts: Array<{ label: string; url: string }> = [
  { label: 'Email', url: 'mailto:shuhochen@gmail.com' },
  {
    label: 'Google Scholar',
    url: 'https://scholar.google.com.hk/citations?user=YqX_IbAAAAAJ&hl=zh-CN',
  },
  {
    label: 'OpenReview',
    url: 'https://openreview.net/profile?id=~Shuhao_Chen1',
  },
  { label: 'GitHub', url: 'https://github.com/shuhao02' },
];

// News list. Newest first. Each item supports inline HTML for links.
// Format guideline: keep entries terse and consistent —
//   "[N] paper(s) (<em>PaperName</em>) accepted at <strong>Venue</strong>."
// One event per entry; two events in the same month get two entries.
export const news: Array<{ date: string; html: string }> = [
  {
    date: 'May 2026',
    html: 'Two papers (<em>SPARD</em>, <em>MetaMoE</em>) accepted at <strong>ICML 2026</strong>.',
  },
  {
    date: 'Sep 2025',
    html: 'Started my Ph.D. at <strong>HKUST</strong>.',
  },
  {
    date: 'Aug 2025',
    html: 'One paper (<em>SPE Attention</em>) accepted at <strong>EMNLP 2025</strong>.',
  },
  {
    date: 'May 2025',
    html: 'Two co-authored papers accepted at <strong>ICML 2025</strong>.',
  },
  {
    date: 'Jan 2025',
    html: 'One paper (<em>DGCDM</em>) accepted by <em>Neural Networks</em>.',
  },
  {
    date: 'Sep 2024',
    html: 'One paper (<em>RouterDC</em>) accepted at <strong>NeurIPS 2024</strong>.',
  },
  {
    date: 'May 2024',
    html: 'One paper (<em>Label Encoding Perspective</em>) accepted at <strong>ICML 2024</strong>.',
  },
];

// Education timeline. Order is rendered as-is (most recent first).
export const education: Array<{
  period: string;
  degree: string;
  institution: string;
  detail?: string;
}> = [
  {
    period: '2025 – Present',
    degree: 'Ph.D. in Computer Science',
    institution: 'The Hong Kong University of Science and Technology',
    detail: 'Advised by Prof. James Kwok and Prof. Yu Zhang.',
  },
  {
    period: '2022 – 2025',
    degree: 'M.Sc. in Computer Science and Technology',
    institution: 'Southern University of Science and Technology',
    detail: 'Advised by Prof. Yu Zhang.',
  },
  {
    period: '2018 – 2022',
    degree: 'B.Eng. in Computer Science',
    institution: 'South China University of Technology',
  },
];

// Internships. Same shape as education.
export const internships: Array<{
  period: string;
  role: string;
  org: string;
  detail?: string;
}> = [
  { period: 'Summer 2024', role: 'Applied Research Intern', org: 'Tencent' },
  { period: 'Summer 2021', role: 'Software Engineer Intern', org: 'ByteDance' },
];

// Awards & honors. Plain bulleted list.
export const awards: string[] = [
  'Postgraduate Studentship (PGS), HKUST.',
  'School Scholarship, South China University of Technology.',
];

// Conferences and journals you serve as a reviewer for.
export const services: string[] = [
  'Conference Reviewer: ICLR 2025, 2026; NeurIPS 2024, 2025; ICML 2025, 2026.',
  'Journal Reviewer: IEEE Transactions on Neural Networks and Learning Systems; IEEE Transactions on Knowledge and Data Engineering.',
];
