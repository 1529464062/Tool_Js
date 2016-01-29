var textReplacePunctuation = function (_result) {
	try {
		//替换双引号为 <doublequotes>
		_result = _result.replace(/["]/g, "<textdoublequotes>");
		//替换单引号为 <singlequote>
		_result = _result.replace(/[']/g, "<textsinglequote>");
		//替换冒号为 <colon>
		_result = _result.replace(/[:]/g, "<textcolon>");
		//替换分号为 <semicolon>
		_result = _result.replace(/[;]/g, "<textsemicolon>");
		//替换左中括号 为<Leftbrace>
		_result = _result.replace(/[\[]/g, "<textLeftbrace>");
		//替换右中括号 为<Rightbrace>
		_result = _result.replace(/[\]]/g, "<textRightbrace>");
		//替换左大括号 为<LeftBigbrace>
		_result = _result.replace(/[\{]/g, "<textLeftBigbrace>");
		//替换右大括号 为<RightBigbrace>
		_result = _result.replace(/[\}]/g, "<textRightBigbrace>");
		//替换逗号为<comma>
		_result = _result.replace(/[,]/g, "<textcomma>");
		return _result;
	} catch (ex) {
		window.location.href = "http://native.cmd/?cmd=log&value=" + ex.message;
	}
}
