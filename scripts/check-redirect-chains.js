#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const FIREBASE_PATH = path.resolve(__dirname, '..', 'firebase.json');

function hasFileExtension(urlPath) {
  const last = urlPath.split('/').filter(Boolean).pop() || '';
  return last.includes('.');
}

function isLiteralPath(route) {
  if (typeof route !== 'string') return false;
  if (!route.startsWith('/')) return false;
  return !/[\*:\{\(]/.test(route);
}

function isSlashCanonicalInternal(route) {
  if (typeof route !== 'string') return true;
  if (!route.startsWith('/')) return true;
  if (route === '/') return true;
  if (hasFileExtension(route)) return true;
  return route.endsWith('/');
}

function expandOptionalSlash(source) {
  if (source.includes('{,/}')) {
    const base = source.replace('{,/}', '');
    return [base, `${base}/`];
  }
  return [source];
}

function main() {
  if (!fs.existsSync(FIREBASE_PATH)) {
    console.error(`Missing firebase config: ${FIREBASE_PATH}`);
    process.exit(1);
  }

  const raw = fs.readFileSync(FIREBASE_PATH, 'utf-8');
  const json = JSON.parse(raw);
  const redirects = json?.hosting?.redirects || [];

  const sourceOwners = new Map();
  const duplicateSources = [];
  const slashWarnings = [];

  for (let i = 0; i < redirects.length; i += 1) {
    const entry = redirects[i];
    const expandedSources = expandOptionalSlash(entry.source || '');

    if (isLiteralPath(entry.destination) && !isSlashCanonicalInternal(entry.destination)) {
      slashWarnings.push({
        index: i,
        source: entry.source,
        destination: entry.destination,
      });
    }

    for (const source of expandedSources) {
      if (!isLiteralPath(source)) continue;
      if (!sourceOwners.has(source)) {
        sourceOwners.set(source, [i]);
      } else {
        sourceOwners.get(source).push(i);
      }
    }
  }

  for (const [source, owners] of sourceOwners.entries()) {
    if (owners.length > 1) {
      duplicateSources.push({ source, owners });
    }
  }

  const sourceSet = new Set(sourceOwners.keys());
  const loops = [];
  const chains = [];

  for (let i = 0; i < redirects.length; i += 1) {
    const entry = redirects[i];
    const destination = entry.destination;
    if (!isLiteralPath(destination)) continue;

    for (const source of expandOptionalSlash(entry.source || '')) {
      if (!isLiteralPath(source)) continue;

      if (source === destination) {
        loops.push({ index: i, source, destination });
      }

      if (sourceSet.has(destination)) {
        chains.push({ index: i, source, destination });
      }
    }
  }

  console.log(`Checked ${redirects.length} redirect rules in firebase.json`);

  if (slashWarnings.length > 0) {
    console.log(`Found ${slashWarnings.length} destination URL(s) not using trailing-slash canonical style:`);
    for (const warn of slashWarnings) {
      console.log(`  [rule ${warn.index}] ${warn.source} -> ${warn.destination}`);
    }
  }

  if (duplicateSources.length > 0) {
    console.error(`Found ${duplicateSources.length} duplicate redirect source path(s):`);
    for (const dup of duplicateSources) {
      console.error(`  ${dup.source} (rules: ${dup.owners.join(', ')})`);
    }
  }

  if (loops.length > 0) {
    console.error(`Found ${loops.length} redirect loop(s):`);
    for (const loop of loops) {
      console.error(`  [rule ${loop.index}] ${loop.source} -> ${loop.destination}`);
    }
  }

  if (chains.length > 0) {
    console.error(`Found ${chains.length} redirect chain candidate(s):`);
    for (const chain of chains) {
      console.error(`  [rule ${chain.index}] ${chain.source} -> ${chain.destination} (destination is also a redirect source)`);
    }
  }

  if (duplicateSources.length > 0 || loops.length > 0 || chains.length > 0) {
    process.exit(1);
  }

  console.log('No duplicate sources, no loops, no redirect chains.');
}

main();
