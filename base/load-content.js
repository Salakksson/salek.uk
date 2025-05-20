async function loadPage()
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

	const content = await (await fetch("./content.html")).text();
	target.innerHTML = content;
}

window.onload = loadPage;
