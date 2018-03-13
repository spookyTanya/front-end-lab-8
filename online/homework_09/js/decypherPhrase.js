function decypherPhrase(charactersMap, str) {
    for (elem in charactersMap) {
        x = elem;
        elem = charactersMap[elem];
        charactersMap[elem] = x;
    }
    return cypherPhrase(charactersMap, str);
}

var charactersMap = {a: 'o', c: 'd', t: 'g'}
