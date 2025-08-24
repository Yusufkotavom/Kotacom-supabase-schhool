import fs from 'fs';
import path from 'path';

function ensureLeadingSlash(p) {
	if (!p) return '/';
	if (p.startsWith('http://') || p.startsWith('https://')) return p;
	return p.startsWith('/') ? p : `/${p}`;
}

function toVercelSourcePattern(from) {
	// Convert /posts/* -> /posts/:splat*
	if (from.endsWith('/*')) {
		return from.replace(/\/\*$/, '/:splat*');
	}
	return from;
}

function mapRedirect(r) {
	const from = toVercelSourcePattern(ensureLeadingSlash(r.from));
	const to = ensureLeadingSlash(r.to);
	const status = r.type === 'temporary' ? 302 : 301;
	return {
		source: from,
		destination: to,
		statusCode: status
	};
}

function generateVercelConfig() {
	const root = process.cwd();
	const redirectsPath = path.join(root, 'src', 'data', 'redirects.json');
	let redirectsJson = { redirects: [] };

	try {
		const raw = fs.readFileSync(redirectsPath, 'utf8');
		redirectsJson = JSON.parse(raw);
	} catch (e) {
		console.warn('[redirects] No src/data/redirects.json found or invalid JSON. Skipping.');
	}

	const redirects = Array.isArray(redirectsJson.redirects) ? redirectsJson.redirects.map(mapRedirect) : [];
	const vercelConfig = { redirects };
	const outFile = path.join(root, 'vercel.json');
	fs.writeFileSync(outFile, JSON.stringify(vercelConfig, null, 2) + '\n', 'utf8');
	console.log(`[redirects] Wrote ${redirects.length} redirects to vercel.json`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
	generateVercelConfig();
}

export default generateVercelConfig;