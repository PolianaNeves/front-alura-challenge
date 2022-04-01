export class Project {

    constructor(name, description, codeSnippet, language, backgroundColor, author){
        this._name = name
        this._description = description
        this._codeSnippet = codeSnippet
        this._language = language
        this._backgroundColor = backgroundColor
        this._author = author
    }

    get name() {
        return this._name
    }

    set name(newName) {
        this._name = newName
    }

    get description() {
        return this._description
    }

    set description(newDescription) {
        this._description = newDescription
    }

    get codeSnippet() {
        return this._codeSnippet
    }

    set codeSnippet(newCodeSnippet) {
        this._codeSnippet = newCodeSnippet
    }

    get language() {
        return this._language
    }

    set language(newLanguage) {
        this._language = newLanguage
    }

    get backgroundColor() {
        return this._backgroundColor
    }

    set backgroundColor(newBackgroundColor) {
        this._backgroundColor = newBackgroundColor
    }

    get author() {
        return this._author
    }
}