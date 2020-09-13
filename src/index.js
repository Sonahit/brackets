/**
 *
 * @param {string} str
 * @param {string[][]} bracketsConfig
 */
function check(str, bracketsConfig) {
    const brackets = bracketsConfig.map((b) => b.join(""));
    for (let i = 0; i < brackets.length; i++) {
        if (str.includes(brackets[i])) {
            str = str.replace(brackets[i], "");
            i = -1;
        }
    }
    return !str;
}

module.exports = check;
