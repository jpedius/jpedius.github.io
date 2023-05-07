'use strict';

let hiragana = [
	[
		{
			'text': 'a',
			'gif': 'files/hiragana-あ.gif',
			'png': 'files/hiragana-あ.png',
			'key': 'あ',
		}, {
			'text': 'i',
			'gif': 'files/hiragana-い.gif',
			'png': 'files/hiragana-い.png',
			'key': 'い',
		}, {
			'text': 'u',
			'gif': 'files/hiragana-う.gif',
			'png': 'files/hiragana-う.png',
			'key': 'う',
		}, {
			'text': 'e',
			'gif': 'files/hiragana-え.gif',
			'png': 'files/hiragana-え.png',
			'key': 'え',
		}, {
			'text': 'o',
			'gif': 'files/hiragana-お.gif',
			'png': 'files/hiragana-お.png',
			'key': 'お',
		}, {
			'text': 'ka',
			'gif': 'files/hiragana-か.gif',
			'png': 'files/hiragana-か.png',
			'key': 'か',
		}, {
			'text': 'ki',
			'gif': 'files/hiragana-き.gif',
			'png': 'files/hiragana-き.png',
			'key': 'き',
		}, {
			'text': 'ku',
			'gif': 'files/hiragana-く.gif',
			'png': 'files/hiragana-く.png',
			'key': 'く',
		}, {
			'text': 'ke',
			'gif': 'files/hiragana-け.gif',
			'png': 'files/hiragana-け.png',
			'key': 'け',
		}, {
			'text': 'ko',
			'gif': 'files/hiragana-こ.gif',
			'png': 'files/hiragana-こ.png',
			'key': 'こ',
		}, {
			'text': 'sa',
			'gif': 'files/hiragana-さ.gif',
			'png': 'files/hiragana-さ.png',
			'key': 'さ',
		}, {
			'text': 'shi',
			'gif': 'files/hiragana-し.gif',
			'png': 'files/hiragana-し.png',
			'key': 'し',
		}, {
			'text': 'su',
			'gif': 'files/hiragana-す.gif',
			'png': 'files/hiragana-す.png',
			'key': 'す',
		}, {
			'text': 'se',
			'gif': 'files/hiragana-せ.gif',
			'png': 'files/hiragana-せ.png',
			'key': 'せ',
		}, {
			'text': 'so',
			'gif': 'files/hiragana-そ.gif',
			'png': 'files/hiragana-そ.png',
			'key': 'そ',
		}, {
			'text': 'ta',
			'gif': 'files/hiragana-た.gif',
			'png': 'files/hiragana-た.png',
			'key': 'た',
		}, {
			'text': 'chi',
			'gif': 'files/hiragana-ち.gif',
			'png': 'files/hiragana-ち.png',
			'key': 'ち',
		}, {
			'text': 'tsu',
			'gif': 'files/hiragana-つ.gif',
			'png': 'files/hiragana-つ.png',
			'key': 'つ',
		}, {
			'text': 'te',
			'gif': 'files/hiragana-て.gif',
			'png': 'files/hiragana-て.png',
			'key': 'て',
		}, {
			'text': 'to',
			'gif': 'files/hiragana-と.gif',
			'png': 'files/hiragana-と.png',
			'key': 'と',
		}, {
			'text': 'na',
			'gif': 'files/hiragana-な.gif',
			'png': 'files/hiragana-な.png',
			'key': 'な',
		}, {
			'text': 'ni',
			'gif': 'files/hiragana-に.gif',
			'png': 'files/hiragana-に.png',
			'key': 'に',
		}, {
			'text': 'nu',
			'gif': 'files/hiragana-ぬ.gif',
			'png': 'files/hiragana-ぬ.png',
			'key': 'ぬ',
		}, {
			'text': 'ne',
			'gif': 'files/hiragana-ね.gif',
			'png': 'files/hiragana-ね.png',
			'key': 'ね',
		}, {
			'text': 'no',
			'gif': 'files/hiragana-の.gif',
			'png': 'files/hiragana-の.png',
			'key': 'の',
		}, {
			'text': 'ha',
			'gif': 'files/hiragana-は.gif',
			'png': 'files/hiragana-は.png',
			'key': 'は',
		}, {
			'text': 'hi',
			'gif': 'files/hiragana-ひ.gif',
			'png': 'files/hiragana-ひ.png',
			'key': 'ひ',
		}, {
			'text': 'fu',
			'gif': 'files/hiragana-ふ.gif',
			'png': 'files/hiragana-ふ.png',
			'key': 'ふ',
		}, {
			'text': 'he',
			'gif': 'files/hiragana-へ.gif',
			'png': 'files/hiragana-へ.png',
			'key': 'へ',
		}, {
			'text': 'ho',
			'gif': 'files/hiragana-ほ.gif',
			'png': 'files/hiragana-ほ.png',
			'key': 'ほ',
		}, {
			'text': 'ma',
			'gif': 'files/hiragana-ま.gif',
			'png': 'files/hiragana-ま.png',
			'key': 'ま',
		}, {
			'text': 'mi',
			'gif': 'files/hiragana-み.gif',
			'png': 'files/hiragana-み.png',
			'key': 'み',
		}, {
			'text': 'mu',
			'gif': 'files/hiragana-む.gif',
			'png': 'files/hiragana-む.png',
			'key': 'む',
		}, {
			'text': 'me',
			'gif': 'files/hiragana-め.gif',
			'png': 'files/hiragana-め.png',
			'key': 'め',
		}, {
			'text': 'mo',
			'gif': 'files/hiragana-も.gif',
			'png': 'files/hiragana-も.png',
			'key': 'も',
		}, {
			'text': 'ya',
			'gif': 'files/hiragana-や.gif',
			'png': 'files/hiragana-や.png',
			'key': 'や',
		}, {
			'text': 'yu',
			'gif': 'files/hiragana-ゆ.gif',
			'png': 'files/hiragana-ゆ.png',
			'key': 'ゆ',
		}, {
			'text': 'yo',
			'gif': 'files/hiragana-よ.gif',
			'png': 'files/hiragana-よ.png',
			'key': 'よ',
		}, {
			'text': 'ra',
			'gif': 'files/hiragana-ら.gif',
			'png': 'files/hiragana-ら.png',
			'key': 'ら',
		}, {
			'text': 'ri',
			'gif': 'files/hiragana-り.gif',
			'png': 'files/hiragana-り.png',
			'key': 'り',
		}, {
			'text': 'ru',
			'gif': 'files/hiragana-る.gif',
			'png': 'files/hiragana-る.png',
			'key': 'る',
		}, {
			'text': 're',
			'gif': 'files/hiragana-れ.gif',
			'png': 'files/hiragana-れ.png',
			'key': 'れ',
		}, {
			'text': 'ro',
			'gif': 'files/hiragana-ろ.gif',
			'png': 'files/hiragana-ろ.png',
			'key': 'ろ',
		}, {
			'text': 'wa',
			'gif': 'files/hiragana-わ.gif',
			'png': 'files/hiragana-わ.png',
			'key': 'わ',
		}, {
			'text': 'wo',
			'gif': 'files/hiragana-を.gif',
			'png': 'files/hiragana-を.png',
			'key': 'を',
		}, {
			'text': 'n',
			'gif': 'files/hiragana-ん.gif',
			'png': 'files/hiragana-ん.png',
			'key': 'ん',
		}
	], [
		{
			'text': 'ga',
			'key': 'が',
		}, {
			'text': 'gi',
			'key': 'ぎ',
		}, {
			'text': 'gu',
			'key': 'ぐ',
		}, {
			'text': 'ge',
			'key': 'げ',
		}, {
			'text': 'go',
			'key': 'ご',
		}, {
			'text': 'za',
			'key': 'ざ',
		}, {
			'text': 'ji',
			'key': 'じ',
		}, {
			'text': 'zu',
			'key': 'ず',
		}, {
			'text': 'ze',
			'key': 'ぜ',
		}, {
			'text': 'zo',
			'key': 'ぞ',
		}, {
			'text': 'da',
			'key': 'だ',
		}, {
			'text': 'ji',
			'key': 'ぢ',
		}, {
			'text': 'zu',
			'key': 'づ',
		}, {
			'text': 'de',
			'key': 'で',
		}, {
			'text': 'do',
			'key': 'ど',
		}, {
			'text': 'ba',
			'key': 'ば',
		}, {
			'text': 'bi',
			'key': 'び',
		}, {
			'text': 'bu',
			'key': 'ぶ',
		}, {
			'text': 'be',
			'key': 'べ',
		}, {
			'text': 'bo',
			'key': 'ぼ',
		}, {
			'text': 'pa',
			'key': 'ぱ',
		}, {
			'text': 'pi',
			'key': 'ぴ',
		}, {
			'text': 'pu',
			'key': 'ぷ',
		}, {
			'text': 'pe',
			'key': 'ぺ',
		}, {
			'text': 'po',
			'key': 'ぽ',
		}
	], [
		{
			'text': 'kya',
			'key': 'きゃ',
		}, {
			'text': 'kyu',
			'key': 'きゅ',
		}, {
			'text': 'kyo',
			'key': 'きょ',
		}, {
			'text': 'sha',
			'key': 'しゃ',
		}, {
			'text': 'shu',
			'key': 'しゅ',
		}, {
			'text': 'sho',
			'key': 'しょ',
		}, {
			'text': 'cha',
			'key': 'ちゃ',
		}, {
			'text': 'chu',
			'key': 'ちゅ',
		}, {
			'text': 'cho',
			'key': 'ちょ',
		}, {
			'text': 'nya',
			'key': 'にゃ',
		}, {
			'text': 'nyu',
			'key': 'にゅ',
		}, {
			'text': 'nyo',
			'key': 'にょ',
		}, {
			'text': 'hya',
			'key': 'ひゃ',
		}, {
			'text': 'hyu',
			'key': 'ひゅ',
		}, {
			'text': 'hyo',
			'key': 'ひょ',
		}, {
			'text': 'mya',
			'key': 'みゃ',
		}, {
			'text': 'myu',
			'key': 'みゅ',
		}, {
			'text': 'myo',
			'key': 'みょ',
		}, {
			'text': 'rya',
			'key': 'りゃ',
		}, {
			'text': 'ryu',
			'key': 'りゅ',
		}, {
			'text': 'ryo',
			'key': 'りょ',
		}, {
			'text': 'gya',
			'key': 'ぎゃ',
		}, {
			'text': 'gyu',
			'key': 'ぎゅ',
		}, {
			'text': 'gyo',
			'key': 'ぎょ',
		}, {
			'text': 'ja',
			'key': 'じゃ',
		}, {
			'text': 'ju',
			'key': 'じゅ',
		}, {
			'text': 'jo',
			'key': 'じょ',
		}, {
			'text': 'ja',
			'key': 'ぢゃ',
		}, {
			'text': 'ju',
			'key': 'ぢゅ',
		}, {
			'text': 'jo',
			'key': 'ぢょ',
		}, {
			'text': 'bya',
			'key': 'びゃ',
		}, {
			'text': 'byu',
			'key': 'びゅ',
		}, {
			'text': 'byo',
			'key': 'びょ',
		}, {
			'text': 'pya',
			'key': 'ぴゃ',
		}, {
			'text': 'pyu',
			'key': 'ぴゅ',
		}, {
			'text': 'pyo',
			'key': 'ぴょ',
		}
	], [
		{
			'text': 'i',
			'key': 'ゐ',
		}, {
			'text': 'e',
			'key': 'ゑ',
		}
	]
];

let katakana = [
	[
		{
			'text': 'a',
			'gif': 'files/katakana-ア.gif',
			'png': 'files/katakana-ア.png',
			'key': 'ア',
		}, {
			'text': 'i',
			'gif': 'files/katakana-イ.gif',
			'png': 'files/katakana-イ.png',
			'key': 'イ',
		}, {
			'text': 'u',
			'gif': 'files/katakana-ウ.gif',
			'png': 'files/katakana-ウ.png',
			'key': 'ウ',
		}, {
			'text': 'e',
			'gif': 'files/katakana-エ.gif',
			'png': 'files/katakana-エ.png',
			'key': 'エ',
		}, {
			'text': 'o',
			'gif': 'files/katakana-オ.gif',
			'png': 'files/katakana-オ.png',
			'key': 'オ',
		}, {
			'text': 'ka',
			'gif': 'files/katakana-カ.gif',
			'png': 'files/katakana-カ.png',
			'key': 'カ',
		}, {
			'text': 'ki',
			'gif': 'files/katakana-キ.gif',
			'png': 'files/katakana-キ.png',
			'key': 'キ',
		}, {
			'text': 'ku',
			'gif': 'files/katakana-ク.gif',
			'png': 'files/katakana-ク.png',
			'key': 'ク',
		}, {
			'text': 'ke',
			'gif': 'files/katakana-ケ.gif',
			'png': 'files/katakana-ケ.png',
			'key': 'ケ',
		}, {
			'text': 'ko',
			'gif': 'files/katakana-コ.gif',
			'png': 'files/katakana-コ.png',
			'key': 'コ',
		}, {
			'text': 'sa',
			'gif': 'files/katakana-サ.gif',
			'png': 'files/katakana-サ.png',
			'key': 'サ',
		}, {
			'text': 'shi',
			'gif': 'files/katakana-シ.gif',
			'png': 'files/katakana-シ.png',
			'key': 'シ',
		}, {
			'text': 'su',
			'gif': 'files/katakana-ス.gif',
			'png': 'files/katakana-ス.png',
			'key': 'ス',
		}, {
			'text': 'se',
			'gif': 'files/katakana-セ.gif',
			'png': 'files/katakana-セ.png',
			'key': 'セ',
		}, {
			'text': 'so',
			'gif': 'files/katakana-ソ.gif',
			'png': 'files/katakana-ソ.png',
			'key': 'ソ',
		}, {
			'text': 'ta',
			'gif': 'files/katakana-タ.gif',
			'png': 'files/katakana-タ.png',
			'key': 'タ',
		}, {
			'text': 'chi',
			'gif': 'files/katakana-チ.gif',
			'png': 'files/katakana-チ.png',
			'key': 'チ',
		}, {
			'text': 'tsu',
			'gif': 'files/katakana-ツ.gif',
			'png': 'files/katakana-ツ.png',
			'key': 'ツ',
		}, {
			'text': 'te',
			'gif': 'files/katakana-テ.gif',
			'png': 'files/katakana-テ.png',
			'key': 'テ',
		}, {
			'text': 'to',
			'gif': 'files/katakana-ト.gif',
			'png': 'files/katakana-ト.png',
			'key': 'ト',
		}, {
			'text': 'na',
			'gif': 'files/katakana-ナ.gif',
			'png': 'files/katakana-ナ.png',
			'key': 'ナ',
		}, {
			'text': 'ni',
			'gif': 'files/katakana-ニ.gif',
			'png': 'files/katakana-ニ.png',
			'key': 'ニ',
		}, {
			'text': 'nu',
			'gif': 'files/katakana-ヌ.gif',
			'png': 'files/katakana-ヌ.png',
			'key': 'ヌ',
		}, {
			'text': 'ne',
			'gif': 'files/katakana-ネ.gif',
			'png': 'files/katakana-ネ.png',
			'key': 'ネ',
		}, {
			'text': 'no',
			'gif': 'files/katakana-ノ.gif',
			'png': 'files/katakana-ノ.png',
			'key': 'ノ',
		}, {
			'text': 'ha',
			'gif': 'files/katakana-ハ.gif',
			'png': 'files/katakana-ハ.png',
			'key': 'ハ',
		}, {
			'text': 'hi',
			'gif': 'files/katakana-ヒ.gif',
			'png': 'files/katakana-ヒ.png',
			'key': 'ヒ',
		}, {
			'text': 'fu',
			'gif': 'files/katakana-フ.gif',
			'png': 'files/katakana-フ.png',
			'key': 'フ',
		}, {
			'text': 'he',
			'gif': 'files/katakana-ヘ.gif',
			'png': 'files/katakana-ヘ.png',
			'key': 'ヘ',
		}, {
			'text': 'ho',
			'gif': 'files/katakana-ホ.gif',
			'png': 'files/katakana-ホ.png',
			'key': 'ホ',
		}, {
			'text': 'ma',
			'gif': 'files/katakana-マ.gif',
			'png': 'files/katakana-マ.png',
			'key': 'マ',
		}, {
			'text': 'mi',
			'gif': 'files/katakana-ミ.gif',
			'png': 'files/katakana-ミ.png',
			'key': 'ミ',
		}, {
			'text': 'mu',
			'gif': 'files/katakana-ム.gif',
			'png': 'files/katakana-ム.png',
			'key': 'ム',
		}, {
			'text': 'me',
			'gif': 'files/katakana-メ.gif',
			'png': 'files/katakana-メ.png',
			'key': 'メ',
		}, {
			'text': 'mo',
			'gif': 'files/katakana-モ.gif',
			'png': 'files/katakana-モ.png',
			'key': 'モ',
		}, {
			'text': 'ya',
			'gif': 'files/katakana-ヤ.gif',
			'png': 'files/katakana-ヤ.png',
			'key': 'ヤ',
		}, {
			'text': 'yu',
			'gif': 'files/katakana-ユ.gif',
			'png': 'files/katakana-ユ.png',
			'key': 'ユ',
		}, {
			'text': 'yo',
			'gif': 'files/katakana-ヨ.gif',
			'png': 'files/katakana-ヨ.png',
			'key': 'ヨ',
		}, {
			'text': 'ra',
			'gif': 'files/katakana-ラ.gif',
			'png': 'files/katakana-ラ.png',
			'key': 'ラ',
		}, {
			'text': 'ri',
			'gif': 'files/katakana-リ.gif',
			'png': 'files/katakana-リ.png',
			'key': 'リ',
		}, {
			'text': 'ru',
			'gif': 'files/katakana-ル.gif',
			'png': 'files/katakana-ル.png',
			'key': 'ル',
		}, {
			'text': 're',
			'gif': 'files/katakana-レ.gif',
			'png': 'files/katakana-レ.png',
			'key': 'レ',
		}, {
			'text': 'ro',
			'gif': 'files/katakana-ロ.gif',
			'png': 'files/katakana-ロ.png',
			'key': 'ロ',
		}, {
			'text': 'wa',
			'gif': 'files/katakana-ワ.gif',
			'png': 'files/katakana-ワ.png',
			'key': 'ワ',
		}, {
			'text': 'wo',
			'gif': 'files/katakana-ヲ.gif',
			'png': 'files/katakana-ヲ.png',
			'key': 'ヲ',
		}, {
			'text': 'n',
			'gif': 'files/katakana-ン.gif',
			'png': 'files/katakana-ン.png',
			'key': 'ン',
		}
	], [
		{
			'text': 'ga',
			'key': 'ガ',
		}, {
			'text': 'gi',
			'key': 'ギ',
		}, {
			'text': 'gu',
			'key': 'グ',
		}, {
			'text': 'ge',
			'key': 'ゲ',
		}, {
			'text': 'go',
			'key': 'ゴ',
		}, {
			'text': 'za',
			'key': 'ザ',
		}, {
			'text': 'ji',
			'key': 'ジ',
		}, {
			'text': 'zu',
			'key': 'ズ',
		}, {
			'text': 'ze',
			'key': 'ゼ',
		}, {
			'text': 'zo',
			'key': 'ゾ',
		}, {
			'text': 'da',
			'key': 'ダ',
		}, {
			'text': 'ji',
			'key': 'ヂ',
		}, {
			'text': 'zu',
			'key': 'ヅ',
		}, {
			'text': 'de',
			'key': 'デ',
		}, {
			'text': 'do',
			'key': 'ド',
		}, {
			'text': 'ba',
			'key': 'バ',
		}, {
			'text': 'bi',
			'key': 'ビ',
		}, {
			'text': 'bu',
			'key': 'ブ',
		}, {
			'text': 'be',
			'key': 'ベ',
		}, {
			'text': 'bo',
			'key': 'ボ',
		}, {
			'text': 'pa',
			'key': 'パ',
		}, {
			'text': 'pi',
			'key': 'ピ',
		}, {
			'text': 'pu',
			'key': 'プ',
		}, {
			'text': 'pe',
			'key': 'ペ',
		}, {
			'text': 'po',
			'key': 'ポ',
		}
	], [
		{
			'text': 'kya',
			'key': 'キャ',
		}, {
			'text': 'kyu',
			'key': 'キュ',
		}, {
			'text': 'kyo',
			'key': 'キョ',
		}, {
			'text': 'sha',
			'key': 'シャ',
		}, {
			'text': 'shu',
			'key': 'シュ',
		}, {
			'text': 'sho',
			'key': 'ショ',
		}, {
			'text': 'cha',
			'key': 'チャ',
		}, {
			'text': 'chu',
			'key': 'チュ',
		}, {
			'text': 'cho',
			'key': 'チョ',
		}, {
			'text': 'nya',
			'key': 'ニャ',
		}, {
			'text': 'nyu',
			'key': 'ニュ',
		}, {
			'text': 'nyo',
			'key': 'ニョ',
		}, {
			'text': 'hya',
			'key': 'ヒャ',
		}, {
			'text': 'hyu',
			'key': 'ヒュ',
		}, {
			'text': 'hyo',
			'key': 'ヒョ',
		}, {
			'text': 'mya',
			'key': 'ミャ',
		}, {
			'text': 'myu',
			'key': 'ミュ',
		}, {
			'text': 'myo',
			'key': 'ミョ',
		}, {
			'text': 'rya',
			'key': 'リャ',
		}, {
			'text': 'ryu',
			'key': 'リュ',
		}, {
			'text': 'ryo',
			'key': 'リョ',
		}, {
			'text': 'gya',
			'key': 'ギャ',
		}, {
			'text': 'gyu',
			'key': 'ギュ',
		}, {
			'text': 'gyo',
			'key': 'ギョ',
		}, {
			'text': 'ja',
			'key': 'ジャ',
		}, {
			'text': 'ju',
			'key': 'ジュ',
		}, {
			'text': 'jo',
			'key': 'ジョ',
		}, {
			'text': 'ja',
			'key': 'ヂャ',
		}, {
			'text': 'ju',
			'key': 'ヂュ',
		}, {
			'text': 'jo',
			'key': 'ヂョ',
		}, {
			'text': 'bya',
			'key': 'ビャ',
		}, {
			'text': 'byu',
			'key': 'ビュ',
		}, {
			'text': 'byo',
			'key': 'ビョ',
		}, {
			'text': 'pya',
			'key': 'ピャ',
		}, {
			'text': 'pyu',
			'key': 'ピュ',
		}, {
			'text': 'pyo',
			'key': 'ピョ',
		}
	], [
		{
			'text': 'ye',
			'key': 'エ',
		}, {
			'text': 'i',
			'key': 'ヰ',
		}, {
			'text': 'e',
			'key': 'ヱ',
		}
	]
];
