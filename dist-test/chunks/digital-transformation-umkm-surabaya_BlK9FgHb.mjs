async function getMod() {
						return import('./digital-transformation-umkm-surabaya_BNic-s4l.mjs').then(n => n._);
					}
					const collectedLinks = [];
					const collectedStyles = [];
					const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts: [] };

export { defaultMod as default };
