var textReductionPunctuation = function (_result) {
	// <doublequotes>还原为双引号
	_result = _result.replace(/\<textdoublequotes\>/g, "\"");
	// <singlequote>还原为单引号
	_result = _result.replace(/\<textsinglequote\>/g, "'");
	// <colon>还原为冒号
	_result = _result.replace(/\<textcolon\>/g, ":");
	// <semicolon>还原为分号
	_result = _result.replace(/\<textsemicolon\>/g, ";");
	//<Leftbrace>还原为左中括号
	_result = _result.replace(/\<textLeftbrace\>/g, "[");
	//<Rightbrace>还原为右中括号
	_result = _result.replace(/\<textRightbrace\>/g, "]");
	//<LeftBigbrace>还原为左大括号
	_result = _result.replace(/\<textLeftBigbrace\>/g, "{");
	//<RightBigbrace>还原为右大括号
	_result = _result.replace(/\<textRightBigbrace\>/g, "}");
	//<comma>还原为逗号
	_result = _result.replace(/\<textcomma\>/g, ",");
	return _result;
}
