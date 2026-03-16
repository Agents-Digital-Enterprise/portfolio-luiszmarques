export interface Skill {
  name: string;
  note?: string;
}

export interface SkillGroup {
  domain: string;
  description: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    domain: 'Frontend',
    description: 'Component-driven UI architecture built for scale',
    skills: [
      { name: 'Vue 3', note: 'Composition API, component architecture' },
      { name: 'TypeScript', note: 'Strict typing, type-driven design' },
      { name: 'SCSS', note: 'BEM, design systems, theming' },
      { name: 'Astro', note: 'Static-first, MPA architecture' },
      { name: 'Vite', note: 'Build tooling, DX optimisation' },
    ],
  },
  {
    domain: 'Edge / BFF',
    description: 'API gateway and backend-for-frontend on the edge',
    skills: [
      { name: 'Cloudflare Workers', note: 'BFF pattern, edge compute' },
      { name: 'Cloudflare Pages', note: 'Static + edge deployment' },
      { name: 'API Gateway Design', note: 'Routing, auth, rate limiting' },
      { name: 'Service Bindings', note: 'Worker-to-Worker communication' },
    ],
  },
  {
    domain: 'APIs',
    description: 'Graph-native API design at enterprise scale',
    skills: [
      { name: 'GraphQL', note: 'Schema design, resolvers, subscriptions' },
      { name: 'Federation', note: 'Distributed schema architecture' },
      { name: 'REST', note: 'API design, OpenAPI, versioning' },
      { name: 'Server Implementation', note: 'Apollo, Yoga, custom resolvers' },
    ],
  },
  {
    domain: 'Cloud & Infrastructure',
    description: 'AWS design, resource management, and IaC',
    skills: [
      { name: 'AWS', note: 'System design, resource management' },
      { name: 'CI/CD', note: 'Pipeline design, GitHub Actions' },
      { name: 'Environment Management', note: 'Dev/staging/prod parity' },
      { name: 'Deployment Strategy', note: 'Zero-downtime, rollback planning' },
    ],
  },
  {
    domain: 'Data',
    description: 'Migration strategy and execution under production constraints',
    skills: [
      { name: 'Data Migration', note: 'Strategy, execution, validation' },
      { name: 'Schema Evolution', note: 'Backward-compatible changes' },
      { name: 'Data Integrity', note: 'Validation, reconciliation, auditing' },
    ],
  },
  {
    domain: 'Delivery',
    description: 'End-to-end ownership from brief to production',
    skills: [
      { name: 'Technical Leadership', note: 'Architecture decisions, code review' },
      { name: 'B2B Client Management', note: 'Stakeholder comms, expectation setting' },
      { name: 'Problem Ownership', note: 'Full-cycle delivery accountability' },
    ],
  },
];
