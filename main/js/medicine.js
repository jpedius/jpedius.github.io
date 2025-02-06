'use strict';

export function fn_medicine() {

	const items = [{
		name: 'Labetalol',
		key: 'labetalol',
		image: 'labetalol.jpg',
		description: 'Labetalol HCL 300 mg tablet',
		pronunciation: {
			ipa: '/ləˈbɛtəlɔːl/',
			google: 'luh·/bay/·tuh·laal'
		}
	}, {
		name: 'Lisinopril',
		key: 'lisinopril',
		image: 'lisinopril.jpg', 
		description: 'Lisinopril 20 mg tablet',
		pronunciation: {
			ipa: '/laɪˈsɪnəprɪl/',
			google: 'luh·/si/·nuh·pruhl'
		}
	}, {
		name: 'Amlodipine Besylate',
		key: 'amlodipine besylate',
		image: 'amlodipine-besylate.jpg',
		description: 'Amlodipine Besylate 10 mg tablet',
		pronunciation: {
			ipa: '/æmˈloʊdɪˌpiːn/', // besylate
			google: 'am·/low/·duh·peen' // besylate
		}
	}, { 
		name: 'Spironolactone',
		key: 'spironolactone',
		image: 'spironolactone.jpg',
		description: 'Spironolactone 25 mg tablet',
		pronunciation: {
			ipa: '/ˌspaɪroʊnoʊˈlæktoʊn/',
			google: 'spai·ruh·now·/lak/·town'
		}
	}, { 
		name: 'Tamsulosin',
		key: 'tamsulosin',
		image: 'tamsulosin.jpg',
		description: 'Tamsulosin HCL 0.4 mg capsule',
		pronunciation: {
			ipa: '/tæmˈsuːləsɪn/',
			google: 'tam·suh·/low/·sn'
		}
	}, { 
		name: 'Rosuvastatin Calcium',
		key: 'rosuvastatin calcium',
		image: 'rosuvastatin-calcium.jpg',
		description: 'Rosuvastatin Calcium 5 mg tablet',
		pronunciation: { 
			ipa: '/roʊˈsuːvəstætɪn/', // calcium kˈælsi͡əm 
			google: 'ruh·/soo/·vuh·sta·tuhn /kal/·see·uhm'
		}
	}];

	return items;
}
