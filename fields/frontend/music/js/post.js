//DOM
const $ = document.querySelector.bind(document);

//APP
let App = {};
App.init = (function() {
            //Init
            function handleFileSelect(evt) {
                const files = evt.target.files; // FileList object

                //files template
                let template = `${Object.keys(files)
            .map(file => `
            <textarea name="description" id="description" cols="30" rows="7"></textarea>
    `)
			.join("")}`;

		$("#drop").classList.add("hidden");
		$("footer").classList.add("hasFiles");
		$(".importar").classList.add("active");
		setTimeout(() => {
			$(".list-files").innerHTML = template;
		}, 1000);

		Object.keys(files).forEach(file => {
			let load = 2000 + (file * 2000); // fake load
			setTimeout(() => {
				$(`.file--${file}`).querySelector(".progress").classList.remove("active");
				$(`.file--${file}`).querySelector(".done").classList.add("anim");
			}, load);
		});
	}

	// trigger input
	$("#triggerFile").addEventListener("click", evt => {
		evt.preventDefault();
		$("input[type=file]").click();
	});

	// input change
	$("input[type=file]").addEventListener("change", handleFileSelect);
})();