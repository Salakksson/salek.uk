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
		`,
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
		`,
		`
"It has more firewalls than the devil's bedroom"
		`,
		`
"My favourite game is Crazy Cattle 3D"
		`,
		`
"vim > emacs"
		`,
		`
"emacs > vim"
		`,
		`
"The floor is evil and it screams"
		`,
		`
"Whats the male version of girl scouts?"
		`,
		`
"What do you do in product design?"
		`,
		`
"Works on my machine"
		`,
	];
	const footer = document.getElementById("quotes");
	const index = Math.floor(Math.random() * quotes.length);
	footer.innerHTML = quotes[index];
}

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

