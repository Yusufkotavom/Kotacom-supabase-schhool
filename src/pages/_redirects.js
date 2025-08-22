export const GET = async () => {
	// Build Netlify _redirects content from src/data/redirects.json
	let redirects = [];
	try {
		const data = (await import('../data/redirects.json')).default;
		redirects = Array.isArray(data?.redirects) ? data.redirects : [];
	} catch (e) {
		redirects = [];
	}

	const ensureLeadingSlash = (path) => {
		if (!path) return '/';
		if (path.startsWith('http://') || path.startsWith('https://')) return path;
		return path.startsWith('/') ? path : `/${path}`;
	};

	const lines = redirects.map((r) => {
		const from = ensureLeadingSlash(r.from);
		const to = ensureLeadingSlash(r.to);
		const status = (r.type === 'temporary' ? 302 : 301);
		const force = r.force ? ' !' : '';
		return `${from} ${to} ${status}${force}`.trim();
	});

	// Ensure newline at EOF
	const body = (lines.join('\n') + '\n');

	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8'
		}
	});
};