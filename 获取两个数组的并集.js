//获取arr1存在于arr2中的项
var getSameData = function (arr1, arr2) {
	//var arr1 = ["1", "2", "3", "3"];
	//var arr2 = [1, "f", "g", 3];
	var arr3 = [];
	for (var s in arr1) {
		for (var x in arr2) {
			if (arr1[s] == arr2[x]) {
				arr3.push(arr1[s]);
			}
		}
	}
	return arr3;
	//alert("相同的元素有" + arr3); // 1, 3
}
