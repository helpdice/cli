#!/usr/bin/env node

const { execSync } = require('child_process');

const boilerplates = {
  react: 'https://github.com/helpdice/create-react-app',
  next: 'https://github.com/helpdice/create-next-app',
};

const args = process.argv.slice(2);

if (args.length < 1 || !boilerplates[args[0]]) {
  console.log('❌ Usage: npx @helpdice/cli <react|next> <project-name>');
  process.exit(1);
}

const boilerplate = args[0];
const projectName = args[1] || 'my-app';
const repoUrl = boilerplates[boilerplate];

console.log(`📦 Setting up ${boilerplate} app into ${projectName}...`);

try {
  execSync(`git clone ${repoUrl} ${projectName}`, { stdio: 'inherit' });
  console.log('✅ Setup complete!');
} catch (err) {
  console.error('❌ Failed to create:', err.message);
  process.exit(1);
}
