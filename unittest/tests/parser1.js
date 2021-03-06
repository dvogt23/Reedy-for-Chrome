

exports = (function() {
	
	function check(raw, expected) {
		var tokens = window.reedy.parse1(raw),
			res = [], i;
		
		for (i = 0; i < tokens.length; i++) {
			res.push(tokens[i].toString()+"|"+tokens[i].getMask());
		}
		
		assert.equalArray(res, expected);
	}
	
	
	var assert = require("../assert.js");
	
	
	assert.profile("parser1");
	
	check("снег, у входа – елка.",                          ["снег|0010",",|0100","у|1100","входа|1100","–|1100","елка|1000",".|0001"]);
	check("Ах! как..... это я удачно…",                     ["Ах|0010","!|0100","как|1000",".....|0100","это|1100","я|1100","удачно|1000","…|0001"]);
	check("Ты «уходишь» к ней?! Отвечай!!",                 ["Ты|0110","«|1000","уходишь|0000","»|0100","к|1100","ней|1000","?!|0100","Отвечай|1000","!!|0001"]);
	check("ни при чем.\n\nГлава 1\nКрасная Пресня",         ["ни|0110","при|1100","чем|1000",".|0001","Глава|0110","1|1001","Красная|0110","Пресня|1001"]);
	check("произошло что-то \"необычное\". Однажды,",       ["произошло|0110","что|1000","-|0000","то|0100","\"|1000","необычное|0000","\"|0000",".|0100","Однажды|1000",",|0001"]);
	check("перевод A. Préchac’а). Сочетание",               ["перевод|0110","A|1000",".|0100","Préchac’а|1000",")|0000",".|0100","Сочетание|1001"]);
	check("http://www.yandex.ru/",                          ["http|0010",":|0000","//|0000","www|0000",".|0000","yandex|0000",".|0000","ru|0000","/|0001"]);
	check("кричал:\n- Она",                                 ["кричал|0010",":|0001","-|0110","Она|1001"]);
	
	return assert.profileEnd();
	
})();
