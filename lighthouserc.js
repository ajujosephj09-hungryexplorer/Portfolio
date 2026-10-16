module.exports = {
  ci: {
    collect: {
      staticDistDir: './out',
      url: [
        '/',
        '/about',
        '/contact',
        '/case-studies/canadahelps-turnaround',
        '/case-studies/ensemble',
        '/case-studies/hpcc-platform',
        '/case-studies/redline',
      ],
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:seo': ['warn', { minScore: 0.9 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
