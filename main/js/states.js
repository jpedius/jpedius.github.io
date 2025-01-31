'use strict';

function fn_states() {

	const states = [{
		'state': 'Alabama',
		'abbreviation': 'AL',
		'capital': 'Montgomery',
		'month': 12,
		'day': 14,
		'year': 1819,
		'num_of_reps': 7
	}, {
		'state': 'Alaska',
		'abbreviation': 'AK',
		'capital': 'Juneau',
		'month': 1,
		'day': 3,
		'year': 1959,
		'num_of_reps': 1
	}, {
		'state': 'Arizona',
		'abbreviation': 'AZ',
		'capital': 'Phoenix',
		'month': 2,
		'day': 14,
		'year': 1912,
		'num_of_reps': 9
	}, {
		'state': 'Arkansas',
		'abbreviation': 'AR',
		'capital': 'Little Rock',
		'month': 6,
		'day': 15,
		'year': 1836,
		'num_of_reps': 4
	}, {
		'state': 'California',
		'abbreviation': 'CA',
		'capital': 'Sacramento',
		'month': 9,
		'day': 9,
		'year': 1850,
		'num_of_reps': 52
	}, {
		'state': 'Colorado',
		'abbreviation': 'CO',
		'capital': 'Denver',
		'month': 8,
		'day': 1,
		'year': 1876,
		'num_of_reps': 8
	}, {
		'state': 'Connecticut',
		'abbreviation': 'CT',
		'capital': 'Hartford',
		'month': 1,
		'day': 9,
		'year': 1788,
		'num_of_reps': 5
	}, {
		'state': 'Delaware',
		'abbreviation': 'DE',
		'capital': 'Dover',
		'month': 12,
		'day': 7,
		'year': 1787,
		'num_of_reps': 1
	}, {
		'state': 'Florida',
		'abbreviation': 'FL',
		'capital': 'Tallahassee',
		'month': 3,
		'day': 3,
		'year': 1845,
		'num_of_reps': 28
	}, {
		'state': 'Georgia',
		'abbreviation': 'GA',
		'capital': 'Atlanta',
		'month': 1,
		'day': 2,
		'year': 1788,
		'num_of_reps': 14
	}, {
		'state': 'Hawaii',
		'abbreviation': 'HI',
		'capital': 'Honolulu',
		'month': 8,
		'day': 21,
		'year': 1959,
		'num_of_reps': 2
	}, {
		'state': 'Idaho',
		'abbreviation': 'ID',
		'capital': 'Boise',
		'month': 7,
		'day': 3,
		'year': 1890,
		'num_of_reps': 2
	}, {
		'state': 'Illinois',
		'abbreviation': 'IL',
		'capital': 'Springfield',
		'month': 12,
		'day': 3,
		'year': 1818,
		'num_of_reps': 17
	}, {
		'state': 'Indiana',
		'abbreviation': 'IN',
		'capital': 'Indianapolis',
		'month': 12,
		'day': 11,
		'year': 1816,
		'num_of_reps': 9
	}, {
		'state': 'Iowa',
		'abbreviation': 'IA',
		'capital': 'Des Moines',
		'month': 12,
		'day': 28,
		'year': 1846,
		'num_of_reps': 4
	}, {
		'state': 'Kansas',
		'abbreviation': 'KS',
		'capital': 'Topeka',
		'month': 1,
		'day': 29,
		'year': 1861,
		'num_of_reps': 4
	}, {
		'state': 'Kentucky',
		'abbreviation': 'KY',
		'capital': 'Frankfort',
		'month': 6,
		'day': 1,
		'year': 1792,
		'num_of_reps': 6
	}, {
		'state': 'Louisiana',
		'abbreviation': 'LA',
		'capital': 'Baton Rouge',
		'month': 4,
		'day': 30,
		'year': 1812,
		'num_of_reps': 6
	}, {
		'state': 'Maine',
		'abbreviation': 'ME',
		'capital': 'Augusta',
		'month': 3,
		'day': 15,
		'year': 1820,
		'num_of_reps': 2
	}, {
		'state': 'Maryland',
		'abbreviation': 'MD',
		'capital': 'Annapolis',
		'month': 4,
		'day': 28,
		'year': 1788,
		'num_of_reps': 8
	}, {
		'state': 'Massachusetts',
		'abbreviation': 'MA',
		'capital': 'Boston',
		'month': 2,
		'day': 6,
		'year': 1788,
		'num_of_reps': 9
	}, {
		'state': 'Michigan',
		'abbreviation': 'MI',
		'capital': 'Lansing',
		'month': 1,
		'day': 26,
		'year': 1837,
		'num_of_reps': 13
	}, {
		'state': 'Minnesota',
		'abbreviation': 'MN',
		'capital': 'Saint Paul',
		'month': 5,
		'day': 11,
		'year': 1858,
		'num_of_reps': 8
	}, {
		'state': 'Mississippi',
		'abbreviation': 'MS',
		'capital': 'Jacksonville',
		'month': 12,
		'day': 10,
		'year': 1817,
		'num_of_reps': 4
	}, {
		'state': 'Missouri',
		'abbreviation': 'MO',
		'capital': 'Jefferson City',
		'month': 8,
		'day': 10,
		'year': 1821,
		'num_of_reps': 8
	}, {
		'state': 'Montana',
		'abbreviation': 'MT',
		'capital': 'Helena',
		'month': 11,
		'day': 8,
		'year': 1889,
		'num_of_reps': 2
	}, {
		'state': 'Nebraska',
		'abbreviation': 'NE',
		'capital': 'Lincoln',
		'month': 3,
		'day': 1,
		'year': 1867,
		'num_of_reps': 3
	}, {
		'state': 'Nevada',
		'abbreviation': 'NV',
		'capital': 'Carson City',
		'month': 10,
		'day': 31,
		'year': 1864,
		'num_of_reps': 4
	}, {
		'state': 'New Hampshire',
		'abbreviation': 'NH',
		'capital': 'Concord',
		'month': 6,
		'day': 21,
		'year': 1788,
		'num_of_reps': 2
	}, {
		'state': 'New Jersey',
		'abbreviation': 'NJ',
		'capital': 'Trenton',
		'month': 12,
		'day': 18,
		'year': 1787,
		'num_of_reps': 12
	}, {
		'state': 'New Mexico',
		'abbreviation': 'NM',
		'capital': 'Santa Fe ',
		'month': 1,
		'day': 6,
		'year': 1912,
		'num_of_reps': 3
	}, {
		'state': 'New York',
		'abbreviation': 'NY',
		'capital': 'Albany',
		'month': 7,
		'day': 26,
		'year': 1788,
		'num_of_reps': 26
	}, {
		'state': 'North Carolina',
		'abbreviation': 'NC',
		'capital': 'Raleigh',
		'month': 11,
		'day': 21,
		'year': 1789,
		'num_of_reps': 14
	}, {
		'state': 'North Dakota',
		'abbreviation': 'ND',
		'capital': 'Bismarck',
		'month': 11,
		'day': 2,
		'year': 1889,
		'num_of_reps': 1
	}, {
		'state': 'Ohio',
		'abbreviation': 'OH',
		'capital': 'Columbus',
		'month': 3,
		'day': 1,
		'year': 1803,
		'num_of_reps': 15
	}, {
		'state': 'Oklahoma',
		'abbreviation': 'OK',
		'capital': 'Oklahoma City',
		'month': 11,
		'day': 16,
		'year': 1907,
		'num_of_reps': 5
	}, {
		'state': 'Oregon',
		'abbreviation': 'OR',
		'capital': 'Salem',
		'month': 2,
		'day': 14,
		'year': 1859,
		'num_of_reps': 6
	}, {
		'state': 'Pennsylvania',
		'abbreviation': 'PA',
		'capital': 'Harrisburg',
		'month': 12,
		'day': 12,
		'year': 1787,
		'num_of_reps': 17
	}, {
		'state': 'Rhode Island',
		'abbreviation': 'RI',
		'capital': 'Providence',
		'month': 5,
		'day': 29,
		'year': 1790,
		'num_of_reps': 2
	}, {
		'state': 'South Carolina',
		'abbreviation': 'SC',
		'capital': 'Columbia',
		'month': 5,
		'day': 23,
		'year': 1788,
		'num_of_reps': 7
	}, {
		'state': 'South Dakota',
		'abbreviation': 'SD',
		'capital': 'Pierre',
		'month': 11,
		'day': 2,
		'year': 1889,
		'num_of_reps': 1
	}, {
		'state': 'Tennessee',
		'abbreviation': 'TN',
		'capital': 'Nashville',
		'month': 6,
		'day': 1,
		'year': 1796,
		'num_of_reps': 9
	}, {
		'state': 'Texas',
		'abbreviation': 'TX',
		'capital': 'Austin',
		'month': 12,
		'day': 29,
		'year': 1845,
		'num_of_reps': 38
	}, {
		'state': 'Utah',
		'abbreviation': 'UT',
		'capital': 'Salt Lake City',
		'month': 1,
		'day': 4,
		'year': 1896,
		'num_of_reps': 4
	}, {
		'state': 'Vermont',
		'abbreviation': 'VT',
		'capital': 'Montpelier',
		'month': 3,
		'day': 4,
		'year': 1791,
		'num_of_reps': 1
	}, {
		'state': 'Virginia',
		'abbreviation': 'VA',
		'capital': 'Richmond',
		'month': 6,
		'day': 25,
		'year': 1788,
		'num_of_reps': 11
	}, {
		'state': 'Washington',
		'abbreviation': 'WA',
		'capital': 'Olympia',
		'month': 11,
		'day': 11,
		'year': 1889,
		'num_of_reps': 10
	}, {
		'state': 'West Virginia',
		'abbreviation': 'WV',
		'capital': 'Charleston',
		'month': 6,
		'day': 20,
		'year': 1863,
		'num_of_reps': 2
	}, {
		'state': 'Wisconsin',
		'abbreviation': 'WI',
		'capital': 'Madison',
		'month': 5,
		'day': 29,
		'year': 1848,
		'num_of_reps': 8
	}, {
		'state': 'Wyoming',
		'abbreviation': 'WY',
		'capital': 'Cheyenne',
		'month': 7,
		'day': 10,
		'year': 1890,
		'num_of_reps': 1
	}]

	return states;
}
