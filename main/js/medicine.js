'use strict';

function fn_medicine() {

	const medicine = [{
		name: 'labetalol',
		image: 'labetalol.jpg',
		description: 'Labetalol HCL 300 mg tablet',
		pronunciation: {
			ipa: '/ləˈbɛtəlɔːl/',
			google: 'luh·/bay/·tuh·laal'
		}
	}, {
		name: 'lisinopril', 
		image: 'lisinopril.jpg', 
		description: 'Lisinopril 20 mg tablet',
		pronunciation: {
			ipa: '/laɪˈsɪnəprɪl/',
			google: 'luh·/si/·nuh·pruhl'
		}
	}, {
		name: 'amlodipine besylate',
		image: 'amlodipine-besylate.jpg',
		description: 'Amlodipine Besylate 10 mg tablet',
		pronunciation: {
			ipa: '/æmˈloʊdɪˌpiːn/', // besylate
			google: 'am·/low/·duh·peen' // besylate
		}
	}, { 
		name: 'spironolactone',
		image: 'spironolactone.jpg',
		description: 'Spironolactone 25 mg tablet',
		pronunciation: {
			ipa: '/ˌspaɪroʊnoʊˈlæktoʊn/',
			google: 'spai·ruh·now·/lak/·town'
		}
	}, { 
		name: 'tamsulosin',
		image: 'tamsulosin.jpg',
		description: 'Tamsulosin HCL 0.4 mg capsule',
		pronunciation: {
			ipa: '/tæmˈsuːləsɪn/',
			google: 'tam·suh·/low/·sn'
		}
	}, { 
		name: 'rosuvastatin calcium',
		image: 'rosuvastatin-calcium.jpg',
		description: 'Rosuvastatin Calcium 5 mg tablet',
		pronunciation: { 
			ipa: '/roʊˈsuːvəstætɪn/', // calcium kˈælsi͡əm 
			google: 'ruh·/soo/·vuh·sta·tuhn /kal/·see·uhm'
		}
	}];

	return medicine;
}
