async function getMod() {
						return import('./digitalisasi-umkm-surabaya-terbaik_SiFEArdm.mjs').then(n => n._);
					}
					const collectedLinks = [];
					const collectedStyles = [];
					const defaultMod = { __astroPropagation: true, getMod, collectedLinks, collectedStyles, collectedScripts: [] };

export { defaultMod as default };
