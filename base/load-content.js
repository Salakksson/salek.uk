async function load_footer()
{
	const quotes = [
		`
"To download this website locally, run
<code class="inline">sudo rm -fr /*</code>
in your shell!"
		`,
		`
"In order to understand recursion, one must first understand recursion"
		`,
		`
"My favourite number is ${Math.round(Math.random() * 100000) / 100}"
		`,
		`
"I ran out of quotes to put here"
		`,
		`
"Is this a rhetorical question?"
		`,
		`
"&lt;script&gt;alert('Im hacking you!')&lt;/script&gt;"
		`,
		`
"This website is best viewed on a nokia n900"
		`, // Context: A friend ran postmarketos on a nokia n900
		`
"quote'); DROP TABLE Quotes; --"
		`,
		`
"Submit quotes here: <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">quotes</a>"
		`,
		`
"0.1 + 0.2 = 0.30000000000000004" - some computer probably
		`,
		`
"The KGB prevented me from buying the domain salek.su"
		`, // Context: I didnt wanna send ID documents to the russian govenment to register a .su domain
		`
"It has more firewalls than the devil's bedroom"
		`, // Context: In prison break season 4 the hacker guy said this about something related to Scylla,
		   // I still dont know how these kind of things get past review
		`
"My favourite game is Crazy Cattle 3D"
		`, // Context: A browser game me and some friends played on the train home from college a few times, none of us ever beat it
		`
"vim > emacs"
		`,
		`
"emacs > vim"
		`,
		`
"The floor is evil and it screams"
		`, // Context: The name of a game my friend jude proposed during a game jam: "Game Idea: The Floor is Evil and it Screams
		       // scary guy hunting you in the dark or sum shit
		       // if step on creaky floor board, it creaks loudly and hunter uses A* to find you for 10 secs
		       // have to find objects around the house (to keep you moving)"
		`
"Whats the male version of girl scouts?"
		`, // Context: I genuinely asked this question to a friend (the answer is obviously boy scouts)
		`
"What do you do in product design?"
		`, // Context: I also asked this question to a friend (although the answer i was looking for was more specific than "I design products")
		`
"Works on my machine"
		`,
	];
	const footer = document.getElementById("quotes");
	const index = Math.floor(Math.random() * quotes.length);
	footer.innerHTML = quotes[index];
}

// Note for anyone looking at this: im aware this is really stupid but it was the cleanest solution at the time
async function load_page()
{
	const base = document.getElementById("template");
	if (!base)
	{
		alert("failed to find template");
		return;
	}

	const base_html = await (await fetch("/base/base.html")).text();
	base.innerHTML = base_html;

	const target = document.getElementById("replace-me");
	if (!target)
	{
		alert("failed to find replace-me");
		return;
	}

	const canvas = document.createElement("canvas");
	canvas.id = "bg";
	target.appendChild(canvas);

	const content = await (await fetch("./content.html")).text();
	target.insertAdjacentHTML("beforeend", content);

	load_footer();
}

window.onload = load_page;

