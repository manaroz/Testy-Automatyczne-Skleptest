# Testy-Automatyczne-Skleptest

## Tabela zawartości
* [Podstawowe informacje](#general-info)
* [Technologie](#technologies)
* [Linki](#images)
* [Setup](#setup)
* [Autorka](#author)
* [Nauczyciele](#teachers)

## Podstawowe informacje
Testy-Automatyczne-Skleptest - aplikacja wykonana w ramach studiów wykorzystująca testy automatyczne typu E2E bazujące na frameworku WebdriverIO
	
## Technologie

| Tech | Użycie
------------ | -------------
[TypeScript](https://www.typescriptlang.org/) | Język podstawowy
[WebdriverIO](https://webdriver.io/) | Implementacja testów automatycznych
[Allure](https://webdriver.io/docs/allure-reporter/) | Reporter testów WBIO
[Visual Studio Code](https://code.visualstudio.com/) | IDE Used

## Linki

Do testów wykorzystano stronę do ćwiczenia testowania:
* **Generic Shop - Skleptest.pl** - [Generic Shop](https://skleptest.pl/)
	
## Setup

Zainstaluj odpowiednie pakiety.
Zdefiniuj odpowiednie skrypty w pliku package.json w celu atomatycznego uruchamiania testu E2E:

```
"scripts": {
    "wdio": "wdio run ./wdio.conf.ts",
    "e2e": "wdio wdio.conf.ts --suite e2e",
    "debug": "wdio wdio.conf.ts --suite debug"
  },
```
Z katalogu programu uruchom testy poleceniem:
```
$ cd ../NazwaPliku
$ npm run debug
```

## Autor
* **Gosia Różańska** - [manaroz](https://github.com/manaroz)
## Nauczyciele
* **Dariusz Kralewski** - *Nauczyciel akademicki na Uniwersytetcie Gdańskim w Gdańsku* - [Dariusz Kralewski](https://github.com/DariuszKralewski) - Dziękuję!
* **Rafał Podraza** - *Kurs: Automatyzacja testów: WebdriverIO + Typescript * - [Rafał Podraza](https://github.com/rafi9898) - Dziękuję!
