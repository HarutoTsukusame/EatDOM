export function menu(c, v) {
	const pageNames = ["トップページ", "チュートリアル", "リファレンス"];

	c.e(`menu`, c => {
		pageNames.forEach(pageName => {
			c.e(`li`, c => {
				c.e(`button`, c => {
					c.t(c => pageName);
					c.setPostRenderHook(node => {
						node.addEventListener("click", event => {
							window.history.pushState(null, '', `?page-name=${pageName}`);
							const url = new URL(location.href);
							v.pageName = url.searchParams.get("page-name");
							v.target.refresh();
						});
					});
				});
			});
		});
	});
}
