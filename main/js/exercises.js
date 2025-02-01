'use strict';

function fn_exercises() {

	const exercises = [{
		name: 'Seated Hamstring Stretch',
		key: 'seated-hamstring-stretch',
		exercises: [
			'While seated rest your heel on the floor with your knee straight and gently lean forward until a stretch is felt behind your knee/thigh.',
			'Maintain a straight spine the entire time.',
			'Bend through your hips.',
		]
	}, {
		name: 'Supine Pirtformis Stretch',
		key: 'supine-pirtformis-stretch',
		exercises: [
			'Lie flat on your back with both knees bent.',
			'Take one leg and place ankle of opposite knee allowing the hip to open up and feel a stretch the butt.',
		],
	}, {
		name: 'Butterfly Stretch - Supine',
		key: 'butterfly-stretch-supine',
		exercises: [
			'Lie on your back with knees bent and place the bottom of your feet together.',
			'Next lower your knees to the side for a stretch to your inner thighs.',
		],
	}, {
		name: 'Trunk  Stretch Bilateral',
		key: 'trunk-stretch-bilateral',
		exercises: [
			'Start by lying on your back with your knees bent.',
			'Next, slowly allow your knees to drop to the one side as you rotate through your spine for a gentle stretch.',
			'Arms out at sides in “T” position.',
		],
	}, {
		name: 'Sidelying Clamshell - Clam Shell',
		key: 'sidelying-clamshell-clam-shell',
		exercises: [
			'While lying on your side with your knees bent raise your top knee upwards while keeping your feet in contact the entire time.',
			'Lower back down and repeat.',
			'Do not let your pelvis roll back during the lifting movement.',
		],
	}, {
		name: 'Figure Four Bridge',
		key: 'figure-four-bridge',
		exercises: [
			'Start lying on back with both legs bent, keep the affected leg bent, bring your left ankle on the right leg to rest on top of the knee.',
			'Press through the your heel and lift your butt off of the floor, keeping your stomach tight.',
		],
	}, {
		name: 'Heel Slides',
		key: 'heel-slides',
		exercises: [
			'While lying on your back with your knees bent slowly slide your heel forward on the floor/bed and then slide it back.',
			'Use your stomach muscle to keep your spine from moving.',
		],
	}, {
		name: 'Sit to Stand',
		key: 'sit-to-stand',
		exercises: [
			'Begin sitting upright with your feet flat on the ground underneath your knees.',
			'Move your shoulders and head over your toes, bring your knees forward, and allow your hips to come of the chair, then push down equally into both feet to stand up.',
			'Sit back down and repeat.',
			'Make sure to keep your weight evenly distributed between both legs, and try to keep your back straight throughout the exercise.',
			'Do not lock out your knees once you are standing.',
		],
	}, {
		name: 'Seated Hip Abduction with Resistance',
		key: 'seated-hip-abduction-with-resistance',
		exercises: [
			'Begin by sitting upright in a chair with a resistance loop secured around your legs.',
			'Move your legs outward, creating more tension in the band, then return to the starting position and repeat.',
			'Make sure to keep your back straight during the exercise.',
		],
	}, {
		name: 'Weight Shift: Anterior / Posterior (Limits of Stability)',
		key: 'weight-shift-anterior-posterior-limits-of-stability',
		exercises: [
			'Slowly shift weight backward until toes begin to rise off floor.',
			'Return to starting position.',
			'Shift weight forward until heels begin to rise off floor.',
			'Hold each position 1 seconds.',
			'Repeat 10 times per session.',
			'Do 2 sessions per day.',
		],
	}, {
		name: 'Weight Shift: Lateral (Limits of Stability)',
		key: 'weight-shift-lateral-limits-of-stability',
		exercises: [
			'Slowly shift weight to right as far as possible, without taking a step.',
			'Return to starting position.',
			'Then shift left as fars as possible and return to start.',
			'Hold each position 1 seconds.',
			'Repeat 10 times per session.',
			'Do 2 sessions per day.',
		],
	}, {
		name: 'Bridging',
		key: 'bridging',
		exercises: [
			'While lying on your back with knees bent, tighten your stomach, squeeze your buttocks and then raise your buttocks off the bed as picture.',
			'Focus on equal push-off between both legs.',
			'Hold, then slowly lower and repeat.',
		],
	}, {
		name: 'Sidelying Clamshell - Clam Shell',
		key: 'sidelying-clamshell-clam-shell',
		exercises: [
			'While lying on your LEFT side with your knees bent, draw up the top (RIGHT) knee while keeping contact of your feet together.',
			'Do not let your pelvis roll back during the lifting movement',
		],
	}, {
		name: 'Ankle Pumps - Seated AP',
		key: 'ankle-pumps-seated-ap',
		exercises: [
			'While seated with feet on the floor, press your toes into the floor so that your heels raise up off the floor.',
			'Then, relax to allow your heels to lower and then lift your toes off the floor as your hedls press into the floor.',
			'Alternate and repeat; do both together at the same time.',
		],
	}, {
		name: 'Triceps Extensions',
		key: 'triceps-extensions',
		exercises: [
			'Lie on your back on a weigth bench.',
			'Hold a dumbbell starting with the elbow straight.',
			'Keep your upper arm vertical while slowly bending the elbow toward the forehead slowly return can do in morning either do after nap.',
			'Use strap weight 1lb.',
		],
	}, {
		name: 'Stretch Hand',
		key: 'stretch-hand',
		exercises: [
			'For the right hand',
			'Stretch the fingers to the right',
			'Stretch the fingers to the left',
			'Make a fist',
		],
		instructions: [
			[ 'Repeat', '10 Times' ],
			[ 'Complete', '3 Sets' ],
		]
	}, {
		name: 'Hand of Hand',
		key: 'hand-of-hand',
		exercises: [
			'With the left hand on the bottom of the pole',
			'Place the right hand next on the pole, and remove the left hand',
			'Do this until you have we reached the top',
			'Alternate between left and right all the way back to the bottom of the pole',
		],
		instructions: [
			[ 'Repeat', '10 Times' ],
			[ 'Complete', '3 Sets' ],
		]
	}, {
		name: 'Diaphragmatic Breathing',
		key: 'diaphragmatic-breathing',
		image: 'diaphragmatic-breathing.jpg',
		exercises: [
			'While lying down on your back, place one hand on your breast bone and one hand on your abdomen near your navel.',
			'Slowly take a deep breath in and focus on trying to get your hand on your stomach rise while the hand on your breast bone remains still.',
			'As you breathe in, the hand on your stomach should rise.',
			'When you breath out, the hand on your stomach should lower.',
		],
		instructions: [
			[ 'Repeat',   '20 Times' ],
			[ 'Hold',     '1 Second' ],
			[ 'Complete', '3 Sets' ],
			[ 'Perform',  '1 Times a Day' ],
		]
	}, {
		name: 'Glute Bridge',
		key: 'glute-bridge',
		image: 'glute-bridge.jpg',
		exercises: [
			'Starting in the supine position with knees bent and feet flat on the table or floor, engage your core and press your heels into the ground to lift your glutes off of the surface.',
			'Slowly lower back down to the surface.',
		],
		instructions: [
			[ 'Repeat', '10 Times' ],
			[ 'Complete', '3 Sets' ],
		]
	}, {
		name: 'Lumbar Rotations',
		key: 'lumbar-rotations',
		image: 'lumbar-rotations.jpg',
		exercises: [
			'Lying on your back with your knees bent, slowly drop your legs to one side and hold the stretch.',
			'Come back to the middle and switch sides.',
			'You should feel the stretch in your back on the opposite side that your legs are leaning.',
			'SET 1: feet and knees close together, small range of motion (avoid painful movement)',
			'SET 2: feet wider than hips, one hip will feel more stretch as you twist',
		],
		instructions: [
			[ 'Repeat',   '20 Times' ],
			[ 'Complete', '2 Sets' ],
		]
	}, {
		name: 'Supine Hip Abduction - Elastic Band Clams - Clamshell',
		key: 'supine-hip-abduction-elastic-band-clams-clamshell',
		image: 'supine-hip-abduction-elastic-band-clams-clamshell.jpg',
		exercises: [
			'Lie down on your back with your knees bent.',
			'Place an elastic band around your knees and then pull your knees apart.',
			'Return your knees together and repeat.',
		],
		instructions: [
			[ 'Repeat',   '20 Times' ],
			[ 'Complete', '3 Sets' ],
		]
	}, {
		name: 'Supine March',
		key: 'supine-march',
		image: 'supine-march.jpg',
		exercises: [
			'Lie on your back with your knees pulled up so that your feet rest on the table.',
			'Hold your core and slowly lift one leg from the table.',
			'Slowly return your leg to the table and then repeat on the other side.',
			'Your stomach should stay pulled in through this entire exercise.',
		],
		instructions: [
			[ 'Repeat',   '20 Times' ],
			[ 'Complete', '3 Sets' ],
		]
	}, {
		name: 'Supine Single Leg Clamshell',
		key: 'supine-single-leg-clamshell',
		image: 'supine-single-leg-clamshell.jpg',
		exercises: [
			'Place an elastic band around the knees.',
			'Lie down in hooklying position with both feet positioned flat and straight.',
			'Keep your LEFT leg STABLE.',
			'Move your RIGHT leg out to side pushing against the band, using the muscles in the outer upper side of your buttock as shown in the photo.',
			'Slowly return the leg to starting position and SWITCH SIDES each repetition, resetting your center position each time.',
		],
		instructions: [
			[ 'Repeat',   '20 Times' ],
			[ 'Complete', '3 Sets' ],
			[ 'Perform',  '1 Times a Day' ],
		]
	}];

	return exercises;
}
