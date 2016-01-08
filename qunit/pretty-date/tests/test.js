var prettyDate = new PrettyDate();

QUnit.test("prettydate.format", function( assert ) {
  var dateNow = "2016/01/08 22:25:00";
	assert.equal(prettyDate.format(dateNow, "2016/01/08 22:24:30"), "Agora mesmo");
	assert.equal(prettyDate.format(dateNow, "2016/01/08 22:23:30"), "1 minuto atrás");
	assert.equal(prettyDate.format(dateNow, "2016/01/08 21:23:30"), "1 hora atrás");
	assert.equal(prettyDate.format(dateNow, "2016/01/07 22:23:30"), "Ontem");
	assert.equal(prettyDate.format(dateNow, "2016/01/06 22:23:30"), "2 dias atrás");
	assert.equal(prettyDate.format(dateNow, "2015/01/06 22:23:30"), undefined);
});

function domtest(name, now, first, second) {
	QUnit.test(name, function( assert ) {
		var links = document.getElementById("qunit-fixture").getElementsByTagName("a");
		assert.equal(links[0].innerHTML, "January 28th, 2008");
		assert.equal(links[2].innerHTML, "January 27th, 2008");
		prettyDate.update(now);
		assert.equal(links[0].innerHTML, first);
		assert.equal(links[2].innerHTML, second);
	});
}
domtest("prettyDate.update", "2008-01-28T22:25:00Z", "2 horas atrás", "Ontem");
domtest("prettyDate.update, um dia depois", "2008/01/29 22:25:00", "Ontem", "2 dias atrás");
