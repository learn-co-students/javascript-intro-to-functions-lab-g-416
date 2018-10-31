function shout(words) {
	return words.toUpperCase()
}

function whisper(words) {
	return words.toLowerCase()
}

function logShout(words) {
	return console.log(shout(words))
}

function logWhisper(words) {
	return console.log(whisper(words))
}

function sayHiToGrandma(hi) {
	const quiet = hi.toLowerCase() === hi
	const loud = hi.toUpperCase() === hi
	const love = 'I love you, Grandma.' === hi

	if (quiet) {
		return "I can't hear you!"
	} else if (loud) {
		return 'YES INDEED!'
	} else if (love) {
		return 'I love you, too.'
	}

	return "EH?? WHAT'S THAT?"
}
