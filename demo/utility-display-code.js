export function displayCode(c, v, fileName) {
	c.e(`a`, c => {
		c.a(`href`, c => {
			c.t(c => `${fileName}`);
		});
		c.a(`target`, c => {
			c.t(c => `_blank`);
		});
		c.t(c => fileName);
	});
	c.e(`ol`, c => {
		v.target[fileName] = c;
		if (v.resources[fileName]) {
			c.a(`class`, c => {
				c.t(c => `code`);
			});
			v.resources[fileName].forEach(line => {
				c.e(`li`, c => {
					c.t(c => line);
				});
			});
		} else {
			v.resources[fileName] = ["ファイルの読み込み中……。"];
			v.target[fileName].refresh();
			fetch(fileName)
				.then(response => response.text())
				.then(text => {
					v.resources[fileName] = text.trim().split("\n");
					v.target[fileName].refresh();
				});
		}
	});
}