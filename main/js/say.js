'use strict';

function fn_say() {

	const say = [[
		['enable'],
		['ability'],
		['able'],
		['ably'],
	], [
		['accept'],
		['acceptance'],
		['acceptable'],
		['acceptably'],
	], [
		['accuse'],
		['accusation'],
		['accusing'],
		['accusingly'],
	], [
		['achieve'],
		['achievement'],
		['achievable'],
		[],
	], [
		['act'],
		['act', 'action', 'activity'],
		['active'],
		['actively'],
	], [
		['add'],
		['addition'],
		['additional'],
		['additionally'],
	], [
		['admire'],
		['admiration'],
		['admirable'],
		['admirably'],
	], [
		['advise'],
		['advice'],
		['advisable'],
		['advisably'],
	], [
		['agree'],
		['agreement'],
		['agreeable'],
		['agreeably'],
	], [
		['anger'],
		['anger'],
		['angry'],
		['angrily'],
	], [
		['appreciate'],
		['appreciation'],
		['appreciable', 'appreciative'],
		['appreciatively'],
	], [
		['approve'],
		['approval'],
		['approving'],
		['approvingly'],
	], [
		['approximate'],
		['approximation'],
		['approximate'],
		['approximately'],
	], [
		['argue'],
		['argument'],
		['arguable', 'argumentative'],
		['arguably'],
	], [
		['attend'],
		['attention'],
		['attentive'],
		['attentively'],
	], [
		['attract'],
		['attraction'],
		['attractive'],
		['attractively'],
	], [
		['base'],
		['base', 'basis'],
		['basic'],
		['basically'],
	], [
		['beautify'],
		['beauty'],
		['beautiful'],
		['beautifully'],
	], [
		['believe'],
		['belief'],
		['believable'],
		['believably'],
	], [
		['bore'],
		['bore', 'boredom'],
		['bored', 'boring'],
		['boringly'],
	], [
		['breathe'],
		['breath'],
		['breathless'],
		['breathlessly'],
	], [
		['calm'],
		['calm', 'calmness'],
		['calm'],
		['calmly'],
	], [
		['care'],
		['care'],
		['careful', 'caring'],
		['carefully', 'carelessly'],
	], [
		['centralize'],
		['centre', 'centralization'],
		['central', 'centralized'],
		['centrally'],
	], [
		['characterize'],
		['character'],
		['characteristic'],
		['characteristically'],
	], [
		['circulate'],
		['circulation'],
		['circular'],
		[],
	], [
		['clean'],
		['cleanliness'],
		['clean'],
		['cleanly'],
	], [
		['clear'],
		['clarity', 'clearance'],
		['clear'],
		['clearly'],
	], [
		['collect'],
		['collection'],
		['collective'],
		['collectively'],
	], [
		['colour'],
		['colour'],
		['coloured'],
		['colourfully'],
	], [
		['comfort'],
		['comfort'],
		['comfortable'],
		['comfortably'],
	], [
		['compare'],
		['comparison'],
		['comparable', 'comparative'],
		['comparatively'],
	], [
		['compete'],
		['competition'],
		['competitive', 'uncompetitive'],
		['competitively'],
	], [
		['complete'],
		['completion'],
		['complete'],
		['completely'],
	], [
		['conclude'],
		['conclusion'],
		['conclusive'],
		['conclusively'],
	], [
		['condition'],
		['condition'],
		['conditional'],
		['conditionally'],
	], [
		['confide'],
		['confidence'],
		['confident', 'confidential'],
		['confidently', 'confidentially'],
	], [
		['confuse'],
		['confusion'],
		['confused', 'confusing'],
		['confusingly'],
	], [
		['consider'],
		['consideration'],
		['considerable', 'considerate'],
		['considerably'],
	], [
		['continue'],
		['continuation', 'continuity'],
		['continual', 'continuous'],
		['continually', 'continuously'],
	], [
		['cool'],
		['cool', 'coolness'],
		['cool'],
		['coolly'],
	], [
		['correct'],
		['correction', 'correctness'],
		['correct', 'corrective'],
		['correctly'],
	], [
		['create'],
		['creation', 'creativity'],
		['creative'],
		['creatively'],
	], [
		['criticize'],
		['critic'],
		['critical'],
		['critically'],
	], [
		['accustom'],
		['custom'],
		['customary'],
		['customarily'],
	], [
		['dare'],
		['dare'],
		['daring'],
		['daringly'],
	], [
		['darken'],
		['dark', 'darkness'],
		['dark', 'darkened', 'darkening'],
		['darkly'],
	], [
		['deaden'],
		['death'],
		['dead', 'deadly', 'deathly'],
		['deadly', 'deathly'],
	], [
		['deceive'],
		['deceit', 'deception'],
		['deceitful', 'deceptive'],
		['deceptively'],
	], [
		['decide'],
		['decision'],
		['decided', 'decisive'],
		['decidedly', 'decisively'],
	], [
		['decorate'],
		['decoration'],
		['decorative'],
		['decoratively'],
	], [
		['deepen'],
		['deep', 'depth'],
		['deep', 'deepening'],
		['deeply'],
	], [
		['defend'],
		['defence'],
		['defensive'],
		['defensively'],
	], [
		['define'],
		['definition'],
		['definite'],
		['definitely'],
	], [
		['demonstrate'],
		['demonstration'],
		['demonstrable', 'demonstrative'],
		['demonstrably'],
	], [
		['depend'],
		['dependent', 'dependence'],
		['dependable'],
		['dependably'],
	], [
		['describe'],
		['description'],
		['describable'],
		['descriptively'],
	], [
		['destroy'],
		['destruction'],
		['destructive'],
		['destructively'],
	], [
		['determine'],
		['determination'],
		['determined'],
		['determinedly'],
	], [
		['differ', 'differentiate'],
		['difference'],
		['different'],
		['differently'],
	], [
		['direct'],
		['direction'],
		['direct'],
		['directly'],
	], [
		['disagree'],
		['disagreement'],
		['disagreeable'],
		['disagreeably'],
	], [
		['disappoint'],
		['disappointment'],
		['disappointed', 'disappointing'],
		['disappointingly'],
	], [
		['distance'],
		['distance'],
		['distant'],
		['distantly'],
	], [
		['disturb'],
		['disturbance'],
		['disturbed', 'disturbing'],
		['disturbingly'],
	], [
		['doubt'],
		['doubt'],
		['doubtful'],
		['doubtfully'],
	], [
		['dream'],
		['dream'],
		['dreamless', 'dreamy'],
		['dreamily'],
	], [
		['dress'],
		['dress'],
		['dressed', 'dressy'],
		['dressily'],
	], [
		['drink'],
		['drink', 'drunkenness'],
		['drunk', 'drunken'],
		['drunkenly'],
	], [
		['ease'],
		['ease', 'easiness'],
		['easy'],
		['easily'],
	], [
		['educate'],
		['education'],
		['educated', 'educational'],
		['educationally'],
	], [
		['effect'],
		['effect', 'effectiveness'],
		['effective'],
		['effectively'],
	], [
		['electrify'],
		['electricity'],
		['electric', 'electrical'],
		['electrically'],
	], [
		['embarrass'],
		['embarrassment'],
		['embarrassed', 'embarrassing'],
		['embarrassingly'],
	], [
		['emphasize'],
		['emphasis'],
		['emphatic'],
		['emphatically'],
	], [
		['encourage'],
		['encouragement'],
		['encouraged', 'encouraging'],
		['encouragingly'],
	], [
		['end'],
		['end'],
		['unending', 'endless'],
		['endlessly'],
	], [
		['energize'],
		['energy'],
		['energetic'],
		['energetically'],
	], [
		['enjoy'],
		['enjoyment'],
		['enjoyable'],
		['enjoyably'],
	], [
		['entertain'],
		['entertainment'],
		['entertaining'],
		['entertainingly'],
	], [
		['enthuse'],
		['enthusiasm'],
		['enthusiastic'],
		['enthusiastically'],
	], [
		['equalize'],
		['equality'],
		['equal'],
		['equally'],
	], [
		['excel'],
		['excellence'],
		['excellent'],
		['excellently'],
	], [
		['excite'],
		['excitement'],
		['excitable', 'excited', 'exciting'],
		['excitedly', 'excitingly'],
	], [
		['excuse'],
		['excuse'],
		['excusable'],
		['excusably'],
	], [
		['expect'],
		['expectation'],
		['expectant'],
		['expectantly'],
	], [
		['expend'],
		['expenditure', 'expense'],
		['expensive'],
		['expensively'],
	], [
		['experiment'],
		['experiment'],
		['experimental'],
		['experimentally'],
	], [
		['explain'],
		['explanation'],
		['explanatory', 'explicable'],
		['inexplicably'],
	], [
		['explode'],
		['explosion'],
		['explosive'],
		['explosively'],
	], [
		['express'],
		['expression'],
		['expressive'],
		['expressively'],
	], [
		['familiarize'],
		['familiarity'],
		['familiar'],
		['familiarly'],
	], [
		['fashion'],
		['fashion'],
		['fashionable'],
		['fashionably'],
	], [
		['fear'],
		['fear'],
		['fearful', 'fearless', 'fearsome'],
		['fearfully', 'fearlessly'],
	], [
		['finalize'],
		['final'],
		['final'],
		['finally'],
	], [
		['fish'],
		['fish', 'fishing'],
		['fishy'],
		['fishily'],
	], [
		['fit'],
		['fit'],
		['fitted'],
		['fittingly'],
	], [
		['force'],
		['force'],
		['forceful', 'forcible'],
		['forcefully', 'forcibly'],
	], [
		['forget'],
		['forgetfulness'],
		['forgetful'],
		['forgetfully'],
	], [
		['formalize'],
		['formality'],
		['formal'],
		['formally'],
	], [
		['frequent'],
		['frequency'],
		['frequent'],
		['frequently'],
	], [
		['freshen'],
		['freshness'],
		['fresh'],
		['freshly'],
	], [
		['frighten'],
		['fright'],
		['frightened', 'frightening', 'frightful'],
		['frighteningly', 'frightfully'],
	], [
		['harden'],
		['hardship'],
		['hard'],
		['hard', 'hardly'],
	], [
		['harm'],
		['harm', 'harmfulness'],
		['harmful', 'harmless'],
		['harmfully', 'harmlessly'],
	], [
		['heat', 'overheat'],
		['heat'],
		['heated'],
		['heatedly'],
	], [
		['help'],
		['help'],
		['helpful', 'helpless'],
		['helpfully', 'helplessly'],
	], [
		['hope'],
		['hope'],
		['hopeful', 'hopeless'],
		['hopefully', 'hopelessly'],
	], [
		['hurry'],
		['hurry'],
		['hurried'],
		['hurriedly'],
	], [
		['hurt'],
		['hurt'],
		['hurtful'],
		['hurtfully'],
	], [
		['ice'],
		['ice'],
		['icy'],
		['icily'],
	], [
		['imagine'],
		['imagination'],
		['imaginable', 'imaginative'],
		['unimaginably', 'imaginatively'],
	], [
		['impress'],
		['impression'],
		['impressive'],
		['impressively'],
	], [
		['increase'],
		['increase'],
		['increased'],
		['increasingly'],
	], [
		['infect'],
		['infection'],
		['infectious'],
		['infectiously'],
	], [
		['insist'],
		['insistence'],
		['insistent'],
		['insistently'],
	], [
		['instruct'],
		['instruction'],
		['instructive'],
		['instructively'],
	], [
		['intend'],
		['intent', 'intention'],
		['intended', 'intentional'],
		['intentionally'],
	], [
		['interest'],
		['interest'],
		['interested', 'disinterested', 'uninterested', 'interesting'],
		['interestingly'],
	], [
		['invent'],
		['invention'],
		['inventive'],
		['inventively'],
	], [
		['invite'],
		['invitation', 'invite'],
		['inviting'],
		['invitingly'],
	], [
		['know'],
		['knowledge'],
		['knowledgeable', 'known'],
		['knowingly', 'knowledgeably'],
	], [
		['enlarge'],
		['enlargement'],
		['large'],
		['largely'],
	], [
		['laugh'],
		['laugh'],
		['laughable'],
		['laughably'],
	], [
		['outlaw'],
		['law'],
		['lawful'],
		['lawfully'],
	], [
		['legalize'],
		['legality'],
		['legal'],
		['legally'],
	], [
		['lengthen'],
		['length'],
		['lengthy'],
		['lengthily'],
	], [
		['light', 'lighten'],
		['light'],
		['light'],
		['lightly'],
	], [
		['locate,'],
		['location'],
		['local'],
		['locally'],
	], [
		['love'],
		['love'],
		['lovable', 'lovely'],
		['lovingly'],
	], [
		['lower'],
		['low'],
		['low', 'lower'],
		['low'],
	], [
		['man'],
		['man', 'mankind'],
		['manly'],
		['mannishly', 'manfully'],
	], [
		['mark'],
		['mark'],
		['marked'],
		['markedly'],
	], [
		['match'],
		['match'],
		['matchless'],
		['matchlessly'],
	], [
		['materialize'],
		['material', 'materialism'],
		['immaterial', 'materialistic'],
		['materially'],
	], [
		['mean'],
		['meaning', 'meaningfulness'],
		['meaningful', 'meaningless'],
		['meaningfully', 'meaninglessly'],
	], [
		['measure'],
		['measurement'],
		['measurable'],
		['immeasurably'],
	], [
		['memorize'],
		['memory'],
		['memorable'],
		['memorably'],
	], [
		['mind'],
		['mind', 'mindlessness'],
		['mindless', 'mindful'],
		['mindlessly'],
	], [
		['minimize'],
		['minimum'],
		['minimal'],
		['minimally'],
	], [
		['mistake'],
		['mistake'],
		['mistaken'],
		['mistakenly'],
	], [
		['moralize'],
		['moral', 'morality'],
		['moral', 'moralistic'],
		['morally'],
	], [
		['mother'],
		['mother', 'motherhood'],
		['motherly'],
		[],
	], [
		['move'],
		['move', 'movement'],
		['movable', 'moving'],
		['movingly'],
	], [
		['murder'],
		['murder'],
		['murderous'],
		['murderously'],
	], [
		['name', 'rename'],
		['name'],
		['named', 'unnamed', 'nameless'],
		['namely'],
	], [
		['nationalize'],
		['nation', 'nationalization', 'nationality'],
		['national', 'nationalistic'],
		['nationally'],
	], [
		['naturalize'],
		['nature', 'naturalist', 'naturalization,'],
		['natural', 'naturalistic'],
		['naturally'],
	], [
		['necessitate'],
		['necessity'],
		['necessary'],
		['necessarily'],
	], [
		['need'],
		['need'],
		['needy'],
		['needlessly'],
	], [
		['unnerve'],
		['nerve', 'nervousness'],
		['nervous', 'nervy'],
		['nervously', 'nervelessly'],
	], [
		['renew'],
		['news', 'newness'],
		['new', 'renewable'],
		['newly', 'anew'],
	], [
		['normalize'],
		['normality'],
		['normal'],
		['normally'],
	], [
		['notice'],
		['notice'],
		['noticeable'],
		['noticeably'],
	], [
		['obey'],
		['obedience'],
		['obedient'],
		['obediently'],
	], [
		['offend'],
		['offense'],
		['offensive'],
		['offensively'],
	], [
		['officiate'],
		['office'],
		['official'],
		['officially'],
	], [
		['open'],
		['openness'],
		['open'],
		['openly'],
	], [
		['operate', 'cooperate'],
		['operation'],
		['operational', 'operative'],
		['operationally'],
	], [
		['opt'],
		['option'],
		['optional'],
		['optionally'],
	], [
		['originate'],
		['origin'],
		['original'],
		['originally'],
	], [
		['pain'],
		['pain'],
		['painful', 'painless'],
		['painfully', 'painlessly'],
	], [
		['part', 'impart'],
		['part', 'partition'],
		['partial', 'impartial'],
		['partially', 'partly'],
	], [
		['pacify'],
		['peace'],
		['peaceful'],
		['peacefully'],
	], [
		['perfect'],
		['perfection'],
		['perfect'],
		['perfectly'],
	], [
		['personalize', 'personify'],
		['person', 'personality'],
		['personal', 'personalized'],
		['personally'],
	], [
		['persuade'],
		['persuasion', 'persuasiveness'],
		['persuasive'],
		['persuasively'],
	], [
		['play', 'outplay'],
		['play', 'playfulness'],
		['playful', 'playable'],
		['playfully'],
	], [
		['please'],
		['pleasure'],
		['pleasant', 'pleasurable'],
		['pleasantly', 'unpleasantly'],
	], [
		['point'],
		['point', 'pointlessness'],
		['pointed', 'pointless'],
		['pointlessly', 'pointedly'],
	], [
		['politicize'],
		['politics'],
		['political', 'politicized'],
		['politically'],
	], [
		['popularize'],
		['popularity'],
		['popular'],
		['popularly'],
	], [
		['power', 'empower'],
		['power'],
		['powerful', 'powerless'],
		['powerfully'],
	], [
		['prefer'],
		['preference'],
		['preferable', 'preferred'],
		['preferably'],
	], [
		['present'],
		['presence', 'presentation,'],
		['present', 'presentable'],
		['presently'],
	], [
		['privatize'],
		['privacy', 'privatization'],
		['private'],
		['privately'],
	], [
		['profit'],
		['profit', 'profitability'],
		['profitable'],
		['profitably'],
	], [
		['progress'],
		['progress', 'progression'],
		['progressive'],
		['progressively'],
	], [
		['provide'],
		['provision'],
		['provisional'],
		['provisionally'],
	], [
		['publicize'],
		['public', 'publicity'],
		['public'],
		['publicly'],
	], [
		['punish'],
		['punishment'],
		['punishable', 'punishing'],
		['punishingly'],
	], [
		['purify'],
		['purification', 'purity'],
		['pure'],
		['purely'],
	], [
		['question'],
		['question'],
		['questionable'],
		['questionably'],
	], [
		['quieten'],
		['quiet'],
		['quiet'],
		['quietly'],
	], [
		['race'],
		['race'],
		['racial'],
		['racially'],
	], [
		['realize'],
		['realism', 'reality'],
		['real', 'realistic'],
		['really', 'realistically'],
	], [
		['reason'],
		['reason'],
		['reasonable'],
		['reasonably'],
	], [
		['receive'],
		['receipt', 'reception'],
		['receptive', 'reciprocal'],
		['reciprocally'],
	], [
		['recognize'],
		['recognition'],
		['recognizable'],
		['recognizably'],
	], [
		['reflect'],
		['reflection'],
		['reflective'],
		['reflectively'],
	], [
		['regret'],
		['regret'],
		['regrettable', 'regretful'],
		['regrettably', 'regretfully'],
	], [
		['regulate'],
		['regular', 'regularity'],
		['regular'],
		['regularly'],
	], [
		['relate'],
		['relation', 'relationship'],
		['related', 'relative'],
		['relatively'],
	], [
		['rely'],
		['reliability'],
		['reliable'],
		['reliably'],
	], [
		['remark'],
		['remark'],
		['remarkable'],
		['remarkably'],
	], [
		['repair'],
		['repair'],
		['irreparable'],
		['irreparably'],
	], [
		['repeat'],
		['repeat', 'repetition'],
		['repeated', 'repetitive'],
		['repeatedly', 'repetitively'],
	], [
		['report'],
		['report'],
		['reported'],
		['reportedly'],
	], [
		['respect'],
		['respect'],
		['respectable', 'respectful', 'respective'],
		['respectably', 'respectfully', 'respectively'],
	], [
		['respond'],
		['response', 'responsiveness'],
		['responsive'],
		['responsively'],
	], [
		['rest'],
		['rest'],
		['restless', 'rested', 'restful'],
		['restlessly'],
	], [
		['enrich'],
		['riches', 'richness'],
		['rich'],
		['richly'],
	], [
		['right'],
		['right', 'rightness,'],
		['righteous', 'rightful'],
		['right', 'rightly', 'rightfully'],
	], [
		['romanticize'],
		['romance', 'romanticism'],
		['romantic', 'romanticized'],
		['romantically'],
	], [
		['roughen'],
		['rough', 'roughness'],
		['rough'],
		['roughly'],
	], [
		['round'],
		['round'],
		['round', 'rounded'],
		['roundly'],
	], [
		['sadden'],
		['sadness'],
		['sad', 'saddened'],
		['sadly'],
	], [
		['satisfy'],
		['satisfaction'],
		['satisfactory'],
		['satisfactorily'],
	], [
		['school'],
		['school', 'pre-school'],
		['scholastic'],
		['scholastically'],
	], [
		['search', 'research'],
		['search', 'research'],
		['searchable'],
		['searchingly'],
	], [
		['sense', 'sensitize'],
		['sense', 'sensibility', 'sensitivity', 'sensitiveness'],
		['sensible', 'sensitive', 'sensory'],
		['sensibly', 'sensitively'],
	], [
		['separate'],
		['separation'],
		['separable', 'separate'],
		['separately'],
	], [
		['shake'],
		['shake', 'shakiness'],
		['shaky'],
		['shakily'],
	], [
		['shape'],
		['shape'],
		['shapely', 'shaped'],
		['shapelessly'],
	], [
		['sharpen'],
		['sharpness'],
		['sharp'],
		['sharply', 'sharpish'],
	], [
		['shock'],
		['shock'],
		['shocking', 'shockable'],
		['shockingly'],
	], [
		['shorten'],
		['short', 'shortness'],
		['short', 'shortish'],
		['shortly'],
	], [
		['shy'],
		['shyness'],
		['shy'],
		['shyly'],
	], [
		['sicken'],
		['sick', 'sickness'],
		['sick', 'sickly'],
		['sickeningly'],
	], [
		['signify'],
		['significance'],
		['significant'],
		['significantly'],
	], [
		['silence'],
		['silence'],
		['silent'],
		['silently'],
	], [
		['simplify'],
		['simplicity', 'simplification'],
		['simplistic'],
		['simply'],
	], [
		['single'],
		['single'],
		['singular'],
		['singly'],
	], [
		['sleep'],
		['sleep', 'sleepiness'],
		['asleep', 'sleepy'],
		['sleepily'],
	], [
		['socialize'],
		['society', ''],
		['sociable', 'social'],
		['socially'],
	], [
		['soften'],
		['softness'],
		['soft'],
		['softly'],
	], [
		['solidify'],
		['solid', 'solidity'],
		['solid'],
		['solidly'],
	], [
		['specialize'],
		['specialty'],
		['special', 'specialized'],
		['specially'],
	], [
		['speed'],
		['speed', 'speediness'],
		['speedy'],
		['speedily'],
	], [
		['spot'],
		['spot'],
		['spotted', 'spotty'],
		['spotlessly'],
	], [
		['stand', 'withstand'],
		['stand', 'standstill'],
		['standing', 'outstanding'],
		['outstandingly'],
	], [
		['steepen'],
		['steepness'],
		['steep'],
		['steeply'],
	], [
		['stiffen'],
		['stiffness'],
		['stiff'],
		['stiffly'],
	], [
		['strengthen'],
		['strength'],
		['strong'],
		['strongly'],
	], [
		['strike'],
		['strike'],
		['striking'],
		['strikingly'],
	], [
		['structure'],
		['structure', 'structuralism'],
		['structural'],
		['structurally'],
	], [
		['study'],
		['student', 'study'],
		['studious'],
		['studiously'],
	], [
		['style'],
		['style', 'stylishness'],
		['stylish', 'stylistic'],
		['stylishly', 'stylistically'],
	], [
		['substantiate'],
		['substance'],
		['substantial', 'substantive'],
		['substantially'],
	], [
		['succeed'],
		['success', 'succession'],
		['successful', 'successive'],
		['successfully'],
	], [
		['suggest'],
		['suggestion'],
		['suggestive', 'suggestible'],
		['suggestively'],
	], [
		['support'],
		['support', 'supportiveness'],
		['supportive', 'supporting'],
		['supportively'],
	], [
		['suppose', 'presuppose'],
		['supposition'],
		['supposed'],
		['supposedly'],
	], [
		['surprise'],
		['surprise'],
		['surprised', 'surprising'],
		['surprisingly'],
	], [
		['suspect'],
		['suspect', 'suspicion'],
		['suspected', 'suspicious'],
		['suspiciously'],
	], [
		['sweeten'],
		['sweet', 'sweetness'],
		['sweet'],
		['sweetly'],
	], [
		['symbolize'],
		['symbol', 'symbolism'],
		['symbolic'],
		['symbolically'],
	], [
		['sympathize'],
		['sympathy'],
		['sympathetic'],
		['sympathetically'],
	], [
		['systematize'],
		['system', 'systematization'],
		['systematic'],
		['systematically'],
	], [
		['talk'],
		['talk', 'talks'],
		['talkative'],
		['talkatively'],
	], [
		['taste'],
		['taste'],
		['tasteful', 'tasty'],
		['tastefully'],
	], [
		['thank'],
		['thanks', 'thankfulness'],
		['thankful'],
		['thankfully'],
	], [
		['theorize'],
		['theory', 'theorem'],
		['theoretical'],
		['theoretically'],
	], [
		['thicken'],
		['thick', 'thickness'],
		['thick'],
		['thickly'],
	], [
		['thin'],
		['thinness'],
		['thin'],
		['thinly'],
	], [
		['think'],
		['thought', 'thoughtfulness'],
		['thoughtful'],
		['thoughtfully'],
	], [
		['threaten'],
		['threat'],
		['threatening'],
		['threateningly'],
	], [
		['tighten'],
		['tightness'],
		['tight'],
		['tight', 'tightly'],
	], [
		['tire'],
		['tiredness'],
		['tired', 'tiresome', 'tiring'],
		['tiredly', 'tiresomely'],
	], [
		['touch'],
		['touch'],
		['touched', 'touching', 'touchy'],
		['touchingly', 'touchily'],
	], [
		['trouble'],
		['trouble'],
		['troublesome', 'troubling'],
		['troublingly'],
	], [
		['trust', 'entrust'],
		['trust', 'trusteeship'],
		['trusting', 'trustworthy'],
		['trustfully'],
	], [
		['typify'],
		['type'],
		['typical'],
		['typically'],
	], [
		['understand'],
		['understanding'],
		['understandable'],
		['understandably'],
	], [
		['use'],
		['usage', 'use'],
		['used', 'useful'],
		['usefully'],
	], [
		['vary'],
		['variant', 'variety', 'variation'],
		['variable', 'varied', 'various'],
		['invariably', 'variously'],
	], [
		['violate'],
		['violence'],
		['violent'],
		['violently'],
	], [
		['wrong'],
		['wrong'],
		['wrongful'],
		['wrongly', 'wrongfully'],
	], [
		['warm'],
		['warmth'],
		['warm'],
		['warmly'],
	], [
		['waste'],
		['wastage', 'waste'],
		['waste', 'wasteful'],
		['wastefully'],
	], [
		['watch'],
		['watch', 'watchfulness'],
		['watchful'],
		['watchfully'],
	], [
		['weaken'],
		['weakness'],
		['weak'],
		['weakly'],
	], [
		['weigh', 'outweigh'],
		['weight'],
		['weighty', 'weightless'],
		['weightlessly'],
	], [
		['widen'],
		['width'],
		['wide'],
		['widely'],
	], [
		['wonder'],
		['wonder'],
		['wonderful'],
		['wonderfully'],
	], [
		['worry'],
		['worry'],
		['worried', 'worrying', 'worrisome'],
		['worryingly'],
	], [
		['write', 're-write'],
		['writing'],
		['written'],
		[],
	]];

	return say;
}
