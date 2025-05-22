async function load_footer()
{
	const quotes = [
		`
To download this website locally, run
<code class="inline">sudo rm -fr /*</code>
in your shell!
		`,
		`
In order to understand recursion, one must first understand recursion
		`,
		`
My favourite number is ${Math.round(Math.random() * 100000) / 100}
		`,
		`
I ran out of quotes to put in this footer
		`,
		`
Is this a rhetorical question?
		`,
		`
&lt;script&gt;alert('Im hacking you!')&lt;/script&gt;
		`
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
