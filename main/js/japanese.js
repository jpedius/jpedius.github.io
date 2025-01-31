'use strict';

function fn_hiragana() {

	const hiragana = [{
		'english': 'a',
		'gif': 'あ.gif',
		'png': 'あ.png',
		'japanese': 'あ',
	}, {
		'english': 'i',
		'gif': 'い.gif',
		'png': 'い.png',
		'japanese': 'い',
	}, {
		'english': 'u',
		'gif': 'う.gif',
		'png': 'う.png',
		'japanese': 'う',
	}, {
		'english': 'e',
		'gif': 'え.gif',
		'png': 'え.png',
		'japanese': 'え',
	}, {
		'english': 'o',
		'gif': 'お.gif',
		'png': 'お.png',
		'japanese': 'お',
	}, {
		'english': 'ka',
		'gif': 'か.gif',
		'png': 'か.png',
		'japanese': 'か',
	}, {
		'english': 'ki',
		'gif': 'き.gif',
		'png': 'き.png',
		'japanese': 'き',
	}, {
		'english': 'ku',
		'gif': 'く.gif',
		'png': 'く.png',
		'japanese': 'く',
	}, {
		'english': 'ke',
		'gif': 'け.gif',
		'png': 'け.png',
		'japanese': 'け',
	}, {
		'english': 'ko',
		'gif': 'こ.gif',
		'png': 'こ.png',
		'japanese': 'こ',
	}, {
		'english': 'sa',
		'gif': 'さ.gif',
		'png': 'さ.png',
		'japanese': 'さ',
	}, {
		'english': 'shi',
		'gif': 'し.gif',
		'png': 'し.png',
		'japanese': 'し',
	}, {
		'english': 'su',
		'gif': 'す.gif',
		'png': 'す.png',
		'japanese': 'す',
	}, {
		'english': 'se',
		'gif': 'せ.gif',
		'png': 'せ.png',
		'japanese': 'せ',
	}, {
		'english': 'so',
		'gif': 'そ.gif',
		'png': 'そ.png',
		'japanese': 'そ',
	}, {
		'english': 'ta',
		'gif': 'た.gif',
		'png': 'た.png',
		'japanese': 'た',
	}, {
		'english': 'chi',
		'gif': 'ち.gif',
		'png': 'ち.png',
		'japanese': 'ち',
	}, {
		'english': 'tsu',
		'gif': 'つ.gif',
		'png': 'つ.png',
		'japanese': 'つ',
	}, {
		'english': 'te',
		'gif': 'て.gif',
		'png': 'て.png',
		'japanese': 'て',
	}, {
		'english': 'to',
		'gif': 'と.gif',
		'png': 'と.png',
		'japanese': 'と',
	}, {
		'english': 'na',
		'gif': 'な.gif',
		'png': 'な.png',
		'japanese': 'な',
	}, {
		'english': 'ni',
		'gif': 'に.gif',
		'png': 'に.png',
		'japanese': 'に',
	}, {
		'english': 'nu',
		'gif': 'ぬ.gif',
		'png': 'ぬ.png',
		'japanese': 'ぬ',
	}, {
		'english': 'ne',
		'gif': 'ね.gif',
		'png': 'ね.png',
		'japanese': 'ね',
	}, {
		'english': 'no',
		'gif': 'の.gif',
		'png': 'の.png',
		'japanese': 'の',
	}, {
		'english': 'ha',
		'gif': 'は.gif',
		'png': 'は.png',
		'japanese': 'は',
	}, {
		'english': 'hi',
		'gif': 'ひ.gif',
		'png': 'ひ.png',
		'japanese': 'ひ',
	}, {
		'english': 'fu',
		'gif': 'ふ.gif',
		'png': 'ふ.png',
		'japanese': 'ふ',
	}, {
		'english': 'he',
		'gif': 'へ.gif',
		'png': 'へ.png',
		'japanese': 'へ',
	}, {
		'english': 'ho',
		'gif': 'ほ.gif',
		'png': 'ほ.png',
		'japanese': 'ほ',
	}, {
		'english': 'ma',
		'gif': 'ま.gif',
		'png': 'ま.png',
		'japanese': 'ま',
	}, {
		'english': 'mi',
		'gif': 'み.gif',
		'png': 'み.png',
		'japanese': 'み',
	}, {
		'english': 'mu',
		'gif': 'む.gif',
		'png': 'む.png',
		'japanese': 'む',
	}, {
		'english': 'me',
		'gif': 'め.gif',
		'png': 'め.png',
		'japanese': 'め',
	}, {
		'english': 'mo',
		'gif': 'も.gif',
		'png': 'も.png',
		'japanese': 'も',
	}, {
		'english': 'ya',
		'gif': 'や.gif',
		'png': 'や.png',
		'japanese': 'や',
	}, {
		'english': 'yu',
		'gif': 'ゆ.gif',
		'png': 'ゆ.png',
		'japanese': 'ゆ',
	}, {
		'english': 'yo',
		'gif': 'よ.gif',
		'png': 'よ.png',
		'japanese': 'よ',
	}, {
		'english': 'ra',
		'gif': 'ら.gif',
		'png': 'ら.png',
		'japanese': 'ら',
	}, {
		'english': 'ri',
		'gif': 'り.gif',
		'png': 'り.png',
		'japanese': 'り',
	}, {
		'english': 'ru',
		'gif': 'る.gif',
		'png': 'る.png',
		'japanese': 'る',
	}, {
		'english': 're',
		'gif': 'れ.gif',
		'png': 'れ.png',
		'japanese': 'れ',
	}, {
		'english': 'ro',
		'gif': 'ろ.gif',
		'png': 'ろ.png',
		'japanese': 'ろ',
	}, {
		'english': 'wa',
		'gif': 'わ.gif',
		'png': 'わ.png',
		'japanese': 'わ',
	}, {
		'english': 'wo',
		'gif': 'を.gif',
		'png': 'を.png',
		'japanese': 'を',
	}, {
		'english': 'n',
		'gif': 'ん.gif',
		'png': 'ん.png',
		'japanese': 'ん',
	}];

	return hiragana;
}

function fn_katakana() {

	const katakana = [{
		'english': 'a',
		'gif': 'ア.gif',
		'png': 'ア.png',
		'japanese': 'ア',
	}, {
		'english': 'i',
		'gif': 'イ.gif',
		'png': 'イ.png',
		'japanese': 'イ',
	}, {
		'english': 'u',
		'gif': 'ウ.gif',
		'png': 'ウ.png',
		'japanese': 'ウ',
	}, {
		'english': 'e',
		'gif': 'エ.gif',
		'png': 'エ.png',
		'japanese': 'エ',
	}, {
		'english': 'o',
		'gif': 'オ.gif',
		'png': 'オ.png',
		'japanese': 'オ',
	}, {
		'english': 'ka',
		'gif': 'カ.gif',
		'png': 'カ.png',
		'japanese': 'カ',
	}, {
		'english': 'ki',
		'gif': 'キ.gif',
		'png': 'キ.png',
		'japanese': 'キ',
	}, {
		'english': 'ku',
		'gif': 'ク.gif',
		'png': 'ク.png',
		'japanese': 'ク',
	}, {
		'english': 'ke',
		'gif': 'ケ.gif',
		'png': 'ケ.png',
		'japanese': 'ケ',
	}, {
		'english': 'ko',
		'gif': 'コ.gif',
		'png': 'コ.png',
		'japanese': 'コ',
	}, {
		'english': 'sa',
		'gif': 'サ.gif',
		'png': 'サ.png',
		'japanese': 'サ',
	}, {
		'english': 'shi',
		'gif': 'シ.gif',
		'png': 'シ.png',
		'japanese': 'シ',
	}, {
		'english': 'su',
		'gif': 'ス.gif',
		'png': 'ス.png',
		'japanese': 'ス',
	}, {
		'english': 'se',
		'gif': 'セ.gif',
		'png': 'セ.png',
		'japanese': 'セ',
	}, {
		'english': 'so',
		'gif': 'ソ.gif',
		'png': 'ソ.png',
		'japanese': 'ソ',
	}, {
		'english': 'ta',
		'gif': 'タ.gif',
		'png': 'タ.png',
		'japanese': 'タ',
	}, {
		'english': 'chi',
		'gif': 'チ.gif',
		'png': 'チ.png',
		'japanese': 'チ',
	}, {
		'english': 'tsu',
		'gif': 'ツ.gif',
		'png': 'ツ.png',
		'japanese': 'ツ',
	}, {
		'english': 'te',
		'gif': 'テ.gif',
		'png': 'テ.png',
		'japanese': 'テ',
	}, {
		'english': 'to',
		'gif': 'ト.gif',
		'png': 'ト.png',
		'japanese': 'ト',
	}, {
		'english': 'na',
		'gif': 'ナ.gif',
		'png': 'ナ.png',
		'japanese': 'ナ',
	}, {
		'english': 'ni',
		'gif': 'ニ.gif',
		'png': 'ニ.png',
		'japanese': 'ニ',
	}, {
		'english': 'nu',
		'gif': 'ヌ.gif',
		'png': 'ヌ.png',
		'japanese': 'ヌ',
	}, {
		'english': 'ne',
		'gif': 'ネ.gif',
		'png': 'ネ.png',
		'japanese': 'ネ',
	}, {
		'english': 'no',
		'gif': 'ノ.gif',
		'png': 'ノ.png',
		'japanese': 'ノ',
	}, {
		'english': 'ha',
		'gif': 'ハ.gif',
		'png': 'ハ.png',
		'japanese': 'ハ',
	}, {
		'english': 'hi',
		'gif': 'ヒ.gif',
		'png': 'ヒ.png',
		'japanese': 'ヒ',
	}, {
		'english': 'fu',
		'gif': 'フ.gif',
		'png': 'フ.png',
		'japanese': 'フ',
	}, {
		'english': 'he',
		'gif': 'ヘ.gif',
		'png': 'ヘ.png',
		'japanese': 'ヘ',
	}, {
		'english': 'ho',
		'gif': 'ホ.gif',
		'png': 'ホ.png',
		'japanese': 'ホ',
	}, {
		'english': 'ma',
		'gif': 'マ.gif',
		'png': 'マ.png',
		'japanese': 'マ',
	}, {
		'english': 'mi',
		'gif': 'ミ.gif',
		'png': 'ミ.png',
		'japanese': 'ミ',
	}, {
		'english': 'mu',
		'gif': 'ム.gif',
		'png': 'ム.png',
		'japanese': 'ム',
	}, {
		'english': 'me',
		'gif': 'メ.gif',
		'png': 'メ.png',
		'japanese': 'メ',
	}, {
		'english': 'mo',
		'gif': 'モ.gif',
		'png': 'モ.png',
		'japanese': 'モ',
	}, {
		'english': 'ya',
		'gif': 'ヤ.gif',
		'png': 'ヤ.png',
		'japanese': 'ヤ',
	}, {
		'english': 'yu',
		'gif': 'ユ.gif',
		'png': 'ユ.png',
		'japanese': 'ユ',
	}, {
		'english': 'yo',
		'gif': 'ヨ.gif',
		'png': 'ヨ.png',
		'japanese': 'ヨ',
	}, {
		'english': 'ra',
		'gif': 'ラ.gif',
		'png': 'ラ.png',
		'japanese': 'ラ',
	}, {
		'english': 'ri',
		'gif': 'リ.gif',
		'png': 'リ.png',
		'japanese': 'リ',
	}, {
		'english': 'ru',
		'gif': 'ル.gif',
		'png': 'ル.png',
		'japanese': 'ル',
	}, {
		'english': 're',
		'gif': 'レ.gif',
		'png': 'レ.png',
		'japanese': 'レ',
	}, {
		'english': 'ro',
		'gif': 'ロ.gif',
		'png': 'ロ.png',
		'japanese': 'ロ',
	}, {
		'english': 'wa',
		'gif': 'ワ.gif',
		'png': 'ワ.png',
		'japanese': 'ワ',
	}, {
		'english': 'wo',
		'gif': 'ヲ.gif',
		'png': 'ヲ.png',
		'japanese': 'ヲ',
	}, {
		'english': 'n',
		'gif': 'ン.gif',
		'png': 'ン.png',
		'japanese': 'ン',
	}];

	return katakana;
}
