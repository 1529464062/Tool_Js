var ReductionPunctuation = function (_result) {
	// <doublequotes>还原为双引号
	_result = _result.replace(/\<doublequotes\>/g, "\"");
	// <singlequote>还原为单引号
	_result = _result.replace(/\<singlequote\>/g, "'");
	// <colon>还原为冒号
	_result = _result.replace(/\<colon\>/g, ":");
	// <semicolon>还原为分号
	_result = _result.replace(/\<semicolon\>/g, ";");
	//<Leftbrace>还原为左中括号
	_result = _result.replace(/\<Leftbrace\>/g, "[");
	//<Rightbrace>还原为右中括号
	_result = _result.replace(/\<Rightbrace\>/g, "]");
	//<LeftBigbrace>还原为左大括号
	_result = _result.replace(/\<LeftBigbrace\>/g, "{");
	//<RightBigbrace>还原为右大括号
	_result = _result.replace(/\<RightBigbrace\>/g, "}");
	//<comma>还原为逗号
	_result = _result.replace(/\<comma\>/g, ",");
	return _result;
}
