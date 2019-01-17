module.exports = {
    "env": {
        "node": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 8,
        "sourceType" : "module"
    },
    "rules": {
        "no-multiple-empty-lines" :[
            "warn"
        ],
        "no-var":[
            "warn"
        ],
        "prefer-const":[
            "warn"
        ],
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-unreachable":[
            "error"
        ]
    }
};