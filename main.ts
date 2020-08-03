import { readJsonSync } from "https://deno.land/std@0.63.0/fs/read_json.ts";

class Currency {
	constructor (private code: string,
				 private name: string,
				 private symbol: string) {}
}

class Language {
	constructor (private iso639_1: string,
				 private iso629_2: string,
				 private name: string,
				 private nativeName: string) {}
}

class Translation {
	constructor (private de: string,
	             private es: string,
	             private ja: string,
	             private it: string,
	             private br: string,
	             private nl: string,
	             private hr: string,
	             private fa: string) {}
}

class RegionalBloc {
	constructor (private acronym: string,
	             private name: string,
	             private otherAcronyms: Array<string>,
	             private otherNames: Array<string>) {}
}

class Country {
	constructor(private name: string,
	            private topLevelDomain: Array<string>,
	            private alpha2Code: string,
	            private alpha3Code: string,
	            private callingCodes: Array<string>,
	            private capital: string,
	            private altSpellings: Array<string>,
	            private latlng: Array<number>,
	            private demonym: string,
	            private area: number,
	            private gini: number,
	            private timezones: Array<string>,
	            private borders: Array<string>,
	            private nativeName: string,
	            private numericCode: string,
	            private currencies: Array<Currency>,
	            private languages: Array<Language>,
	            private translations: Array<Translation>,
	            private flag: string,
	            private regionalBlocs: Array<string>,
	            private cloc: string) {}

	getName(): string {
		return this.name;
	}
}

function getCountriesFromFile(filename: string = "all.json"): Array<Country>  {
	return <Array<Country>> readJsonSync(filename);
}

function main() {}

main();