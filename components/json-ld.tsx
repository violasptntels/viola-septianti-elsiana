const schema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Viola Septianti Elsiana',
  givenName: 'Viola Septianti',
  familyName: 'Elsiana',
  jobTitle: 'Full Stack Developer & Software Quality Engineer',
  description:
    'Informatics Engineering student with hands-on experience in Backend Development, Software Quality Assurance, and Front-End Development through academic and industry projects.',
  url: 'https://violase.dev',
  email: 'violaseptiantiana23@gmail.com',
  image: 'https://violase.dev/apple-icon.png',
  knowsAbout: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Flutter',
    'Laravel',
    'PHP',
    'Dart',
    'Golang',
    'PostgreSQL',
    'MySQL',
    'Git',
    'Functional Testing',
    'Regression Testing',
    'UAT',
    'Test Case Design',
    'Bug Reporting',
  ],
  sameAs: [
    'https://github.com/violasptntels',
    'https://linkedin.com/in/violasptntels',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Universitas Logistik dan Bisnis Internasional',
  },
  alumniOf: [
    {
      '@type': 'Organization',
      name: 'PT. Tarung Bersama Teknologi',
    },
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Oracle Java Programming',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Mindluster Google Go',
    },
  ],
}

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
