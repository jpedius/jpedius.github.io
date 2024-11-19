'use strict';

let myTitle = document.getElementById("my_title");
myTitle.innerHTML = document.title = "GB Studio";

let myAllEvents = document.getElementById("my_all_events");
let myEventGlossary = document.getElementById("my_event_glossary");

let gbAllEvents = [
	"Actor",
	"Camera",
	"Color",
	"Control Flow",
	"Dialogues & Menus",
	"Engine Fields",
	"Joypad Input",
	"Math",
	"Music & Sound Effects",
	"Save Data",
	"Scene",
	"Screen",
	"Timer",
	"Variables",
	"Miscellaneous",
];
let gbAllEventsLength = 0;

let gbEventGlossary = [
	[
		{
			name: "Actions",
			bool: false,
		}, {
			name: "Launch Projectile",
			bool: true,
		}, {
			name: "Show Emote Bubble",
			bool: true,
		}, {
			name: "Control Flow",
			bool: false,
		}, {
			name: "If Actor At Position",
			bool: true,
		}, {
			name: "If Actor Distance From Actor",
			bool: true,
		}, {
			name: "If Actor Facing Direction",
			bool: true,
		}, {
			name: "If Actor Relative To Actor",
			bool: true,
		}, {
			name: "Movement",
			bool: false,
		}, {
			name: "Actor Move Cancel",
			bool: true,
		}, {
			name: "Actor Move Relative",
			bool: true,
		}, {
			name: "Actor Move To",
			bool: true,
		}, {
			name: "Push Actor Away From Player",
			bool: true,
		}, {
			name: "Set Actor Position",
			bool: true,
		}, {
			name: "Set Actor Relative Position",
			bool: true,
		}, {
			name: "Platformer",
			bool: false,
		}, {
			name: "Player Bounce",
			bool: true,
		}, {
			name: "Properties",
			bool: false,
		}, {
			name: "Activate Actor",
			bool: true,
		}, {
			name: "Deactivate Actor",
			bool: true,
		}, {
			name: "Set Actor Animation Frame",
			bool: true,
		}, {
			name: "Set Actor Animation Speed",
			bool: true,
		}, {
			name: "Set Actor Animation State",
			bool: true,
		}, {
			name: "Set Actor Collisions Disable",
			bool: true,
		}, {
			name: "Set Actor Collisions Enable",
			bool: true,
		}, {
			name: "Set Actor Direction",
			bool: true,
		}, {
			name: "Set Actor Movement Speed",
			bool: true,
		}, {
			name: "Set Actor Sprite Sheet",
			bool: true,
		}, {
			name: "Set Player Sprite Sheet",
			bool: true,
		}, {
			name: "Script",
			bool: false,
		}, {
			name: "Start Actor's 'On Update' Script",
			bool: true,
		}, {
			name: "Stop Actor's 'On Update' Script",
			bool: true,
		}, {
			name: "Variables",
			bool: false,
		}, {
			name: "Store Actor Direction In Variable",
			bool: true,
		}, {
			name: "Store Actor Position In Variables",
			bool: true,
		}, {
			name: "Visibility",
			bool: false,
		}, {
			name: "Hide Actor",
			bool: true,
		}, {
			name: "Hide All Sprites",
			bool: true,
		}, {
			name: "Show Actor",
			bool: true,
		}, {
			name: "Show All Sprites",
			bool: true,
		}
	], [
		{
			name: "Camera",
			bool: false,
		}, {
			name: "Camera Lock To Player",
			bool: true,
		}, {
			name: "Camera Move To",
			bool: true,
		}, {
			name: "Camera Shake",
			bool: true,
		}, {
			name: "Set Camera Position",
			bool: true,
		}, {
			name: "Property",
			bool: false,
		}, {
			name: "Set Camera Property",
			bool: true,
		}, {
			name: "Screen",
			bool: false,
		}, {
			name: "Fade Screen In",
			bool: true,
		}, {
			name: "Fade Screen Out",
			bool: true,
		}
	], [
		{
			name: "Color",
			bool: false,
		}, {
			name: "Set Background Palettes",
			bool: true,
		}, {
			name: "Set Emote Palette",
			bool: true,
		}, {
			name: "Set Sprite Palettes",
			bool: true,
		}, {
			name: "Set UI Palette",
			bool: true,
		}, {
			name: "Control Flow",
			bool: false,
		}, {
			name: "If Color Mode Is Available",
			bool: true,
		}, {
			name: "If GBA Mode Is Available",
			bool: true,
		}, {
			name: "If Super GB Mode Is Available",
			bool: true,
		}
	], [
		{
			name: "Control Flow",
			bool: false,
		}, {
			name: "Call Script",
			bool: true,
		}, {
			name: "If",
			bool: true,
		}, {
			name: "Loop",
			bool: true,
		}, {
			name: "Loop For",
			bool: true,
		}, {
			name: "Loop While",
			bool: true,
		}, {
			name: "Stop Script",
			bool: true,
		}, {
			name: "Switch",
			bool: true,
		}, {
			name: "Actor",
			bool: false,
		}, {
			name: "If Actor At Position",
			bool: true,
		}, {
			name: "If Actor Distance From Actor",
			bool: true,
		}, {
			name: "If Actor Facing Direction",
			bool: true,
		}, {
			name: "If Actor Relative To Actor",
			bool: true,
		}, {
			name: "Device",
			bool: false,
		}, {
			name: "If Color Mode Is Available",
			bool: true,
		}, {
			name: "If GBA Mode Is Available",
			bool: true,
		}, {
			name: "If Super GB Mode Is Available",
			bool: true,
		}, {
			name: "Joypad Input",
			bool: false,
		}, {
			name: "If Button Held",
			bool: true,
		}, {
			name: "Math",
			bool: false,
		}, {
			name: "If Math Expression",
			bool: true,
		}, {
			name: "Loop While Math Expression",
			bool: true,
		}, {
			name: "Save Data",
			bool: false,
		}, {
			name: "If Game Data Saved",
			bool: true,
		}, {
			name: "Scene",
			bool: false,
		}, {
			name: "If Current Scene Is",
			bool: true,
		}, {
			name: "Threads",
			bool: false,
		}, {
			name: "Script Lock",
			bool: true,
		}, {
			name: "Script Unlock",
			bool: true,
		}, {
			name: "Stop Thread",
			bool: true,
		}, {
			name: "Thread Start",
			bool: true,
		}, {
			name: "Variables",
			bool: false,
		}, {
			name: "If Variable Compare With Value",
			bool: true,
		}, {
			name: "If Variable Compare With Variable",
			bool: true,
		}, {
			name: "If Variable Has Flag",
			bool: true,
		}, {
			name: "If Variable Is 'false'",
			bool: true,
		}, {
			name: "If Variable Is 'true'",
			bool: true,
		}
	], [
		{
			name: "Dialogue & Menus",
			bool: false,
		}, {
			name: "Display Dialogue",
			bool: true,
		}, {
			name: "Display Menu",
			bool: true,
		}, {
			name: "Display Multiple Choice",
			bool: true,
		}, {
			name: "Draw Text",
			bool: true,
		}, {
			name: "Music & Sound Effects",
			bool: false,
		}, {
			name: "Set Text Sound Effect",
			bool: true,
		}, {
			name: "Properties",
			bool: false,
		}, {
			name: "Close Non-Modal Dialogue",
			bool: true,
		}, {
			name: "Set Dialogue Frame",
			bool: true,
		}, {
			name: "Set Text Animation Speed",
			bool: true,
		}
	], [
		{
			name: "Engine Fields",
			bool: false,
		}, {
			name: "Engine Field Update",
			bool: true,
		}, {
			name: "Variables",
			bool: false,
		}, {
			name: "Store Engine Field In Variable",
			bool: true,
		}
	], [
		{
			name: "Joypad Input",
			bool: false,
		}, {
			name: "Attach Script To Button",
			bool: true,
		}, {
			name: "Pause Script Until Button Pressed",
			bool: true,
		}, {
			name: "Remove Button Script",
			bool: true,
		}, {
			name: "Control Flow",
			bool: false,
		}, {
			name: "If Button Held",
			bool: true,
		}
	], [
		{
			name: "Control Flow",
			bool: false,
		}, {
			name: "If Math Expression",
			bool: true,
		}, {
			name: "Loop While Math Expression",
			bool: true,
		}, {
			name: "Random",
			bool: false,
		}, {
			name: "Seed Random Number Generator",
			bool: true,
		}, {
			name: "Variables",
			bool: false,
		}, {
			name: "Evaluate Math Expression",
			bool: true,
		}, {
			name: "Math Functions",
			bool: true,
		}
	], [
		{
			name: "Music & Sound Effects",
			bool: true,
		}, {
			name: "Play Music Track",
			bool: true,
		}, {
			name: "Play Sound Effect",
			bool: true,
		}, {
			name: "Dialogue & Menus",
			bool: true,
		}, {
			name: "Set Text Sound Effect",
			bool: true,
		}, {
			name: "Script",
			bool: false,
		}, {
			name: "Set Music Routine",
			bool: true,
		}, {
			name: "Stop",
			bool: false,
		}, {
			name: "Mute Channel",
			bool: true,
		}, {
			name: "Stop Music",
			bool: true,
		}
	], [
		{
			name: "Save Data",
			bool: false,
		}, {
			name: "Game Data Load",
			bool: true,
		}, {
			name: "Game Data Remove",
			bool: true,
		}, {
			name: "Game Data Save",
			bool: true,
		}, {
			name: "Control Flow",
			bool: false,
		}, {
			name: "If Game Data Saved",
			bool: true,
		}, {
			name: "Variables",
			bool: false,
		}, {
			name: "Store Variable from Game Data In Variable",
			bool: true,
		}
	], [
		{
			name: "Scene",
			bool: false,
		}, {
			name: "Change Scene",
			bool: true,
		}, {
			name: "Control Flow",
			bool: false,
		}, {
			name: "If Current Scene Is",
			bool: true,
		}, {
			name: "Scene Stack",
			bool: false,
		}, {
			name: "Remove All From Scene Stack",
			bool: true,
		}, {
			name: "Restore First Scene From Stack",
			bool: true,
		}, {
			name: "Restore Previous Scene From Stack",
			bool: true,
		}, {
			name: "Store Current Scene On Stack",
			bool: true,
		}, {
			name: "Tiles",
			bool: false,
		}, {
			name: "Replace Tile At Position",
			bool: true,
		}, {
			name: "Replace Tile At Position From Sequence",
			bool: true,
		}
	], [
		{
			name: "Screen",
			bool: false,
		}, {
			name: "Fade Screen In",
			bool: true,
		}, {
			name: "Fade Screen Out",
			bool: true,
		}, {
			name: "Overlay",
			bool: false,
		}, {
			name: "Hide Overlay",
			bool: true,
		}, {
			name: "Overlay Move To",
			bool: true,
		}, {
			name: "Set Overlay Scanline Cutoff",
			bool: true,
		}, {
			name: "Show Overlay",
			bool: true,
		}
	], [
		{
			name: "Timer",
			bool: false,
		}, {
			name: "Idle",
			bool: true,
		}, {
			name: "Wait",
			bool: true,
		}, {
			name: "Script",
			bool: false,
		}, {
			name: "Attach Timer Script",
			bool: true,
		}, {
			name: "Remove Timer Script",
			bool: true,
		}, {
			name: "Restart Timer",
			bool: true,
		}
	], [
		{
			name: "Variables",
			bool: false,
		}, {
			name: "Variable Set To Value",
			bool: true,
		}, {
			name: "Actor",
			bool: false,
		}, {
			name: "Store Actor Direction In Variable",
			bool: true,
		}, {
			name: "Store Actor Position In Variables",
			bool: true,
		}, {
			name: "Boolean",
			bool: false,
		}, {
			name: "Variable Set To 'false'",
			bool: true,
		}, {
			name: "Variable Set To 'true'",
			bool: true,
		}, {
			name: "Control Flow",
			bool: false,
		}, {
			name: "If Variable Compare With Value",
			bool: true,
		}, {
			name: "If Variable Compare With Variable",
			bool: true,
		}, {
			name: "Counter",
			bool: false,
		}, {
			name: "Variable Decrement By 1",
			bool: true,
		}, {
			name: "Variable Increment By 1",
			bool: true,
		}, {
			name: "Engine Fields",
			bool: false,
		}, {
			name: "Store Engine Field In Variable",
			bool: true,
		}, {
			name: "Flags",
			bool: false,
		}, {
			name: "Variable Flags Add",
			bool: true,
		}, {
			name: "Variable Flags Clear",
			bool: true,
		}, {
			name: "Variable Flags Set",
			bool: true,
		}, {
			name: "Math",
			bool: false,
		}, {
			name: "Evaluate Math Expression",
			bool: true,
		}, {
			name: "Math Functions",
			bool: true,
		}, {
			name: "Random",
			bool: false,
		}, {
			name: "Seed Random Number Generator",
			bool: true,
		}, {
			name: "Reset",
			bool: false,
		}, {
			name: "Reset All Variables To 'false'",
			bool: true,
		}, {
			name: "Save Data",
			bool: false,
		}, {
			name: "Store Variable from Game Data In Variable",
			bool: true,
		}
	], [
		{
			name: "Miscellaneous",
			bool: false,
		}, {
			name: "Comment",
			bool: true,
		}, {
			name: "Event Group",
			bool: true,
		}, {
			name: "GBVM Script",
			bool: true,
		}, {
			name: "Multiplayer",
			bool: false,
		}, {
			name: "Link: Close",
			bool: true,
		}, {
			name: "Link: Host",
			bool: true,
		}, {
			name: "Link: Join",
			bool: true,
		}, {
			name: "Link: Transfer",
			bool: true,
		}, {
			name: "Printer",
			bool: false,
		}, {
			name: "Print Using GB Printer",
			bool: true,
		}, {
			name: "Threads",
			bool: false,
		}, {
			name: "Script Lock",
			bool: true,
		}, {
			name: "Script Unlock",
			bool: true,
		}, {
			name: "Stop Thread",
			bool: true,
		}, {
			name: "Thread Start",
			bool: true,
		}
	]
];

function fn_all_options() {
    myAllEvents.innerHTML = '';
    for (let i=0; i<gbAllEvents.length; i++) {
        const option = document.createElement('option');
        option.textContent = `${gbAllEvents[i]}`;
        myAllEvents.appendChild(option);
    }
    myAllEvents.selectedIndex = 0
}
fn_all_options();

function fn_glossary_options(event) {
	myEventGlossary.innerHTML = '';
    for (let i=0; i<event.length; i++) {
        const option = document.createElement('option');
        if (event[i].bool !== true) {
        	option.textContent = `- ${event[i].name} -`;
        }
        else {
        	option.textContent = `${event[i].name}`;
        }
        myEventGlossary.appendChild(option);
    }
	myEventGlossary.selectedIndex = 0;
}
fn_glossary_options(gbEventGlossary[0]);

function fn_all_events() {
	gbAllEventsLength = myAllEvents.selectedIndex;
	fn_glossary_options(gbEventGlossary[gbAllEventsLength]);
	my_speak(gbAllEvents[gbAllEventsLength]);
}

function fn_event_glossary() {
	my_speak(myEventGlossary.value);
	writeClipboardText(myEventGlossary.value)
}

async function writeClipboardText(text) {
	try {
		await navigator.clipboard.writeText(text);
	} catch (error) {
		console.error(error.message);
	}
}
