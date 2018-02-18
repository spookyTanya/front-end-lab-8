function forStr(x){
	for(elem in charactersMap){
		if(elem===x){
			return charactersMap[elem];
		}
	}
	return x;
}
function cypherPhrase(charactersMap, str) {
    return getTransformedArray(str, forStr).join('');
}

var charactersMap = {a: 'o', c: 'd', t: 'g'}
