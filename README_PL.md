<a name="readme-top">
  <div align="center"> 
  <br>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/Valik3201/bookshelf/blob/main/src/images/logo-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://github.com/Valik3201/bookshelf/blob/main/src/images/logo-light.svg">
    <img alt="Bookshelf Logo" src="https://github.com/Valik3201/bookshelf/blob/main/src/images/logo_light.svg" width="400">
  </picture>
  </div>
</a>
    
<h2 align="center">
    Budowanie doświadczenia z web aplikacją Bookshelf przy użyciu HTML, CSS, JavaScript, Axios, Firebase i nie tylko!
</h2>
    
<div align="center">
  <p>
    Odkrywaj, szukaj i wyświetlaj książki na intuicyjnej platformie Bookshelf.
    <br />
    <a href="https://github.com/Valik3201/bookshelf"><strong>Ddokumentacja »</strong></a>
    <br />
    <br />
    <a href="https://valik3201.github.io/bookshelf/">Zobacz Demo</a>
    ·
    <a href="https://github.com/Valik3201/bookshelf/issues">Zgłoś błąd</a>
    ·
    <a href="https://github.com/Valik3201/bookshelf/issues">Zaproponuj ulepszenie</a>
  </p>
</div>

<!-- SPIS TREŚCI -->
<!-- SPIS TREŚCI -->
<details>
  <summary>Spis Treści</summary>
  <ol>
    <li><a href="#o-projekcie">O Projekcie</a></li>
    <li><a href="#zastosowane-technologie">Zastosowane technologie</a></li>
    <li><a href="#odwołania-do-api">Odwołania do API</a></li>
    <li>
      <a href="#rozpoczęcie">Rozpoczęcie</a>
      <ul>
        <li><a href="#wymagania-wstępne">Wymagania wstępne</a></li>
        <li><a href="#instalacja">Instalacja</a></li>
      </ul>
    </li>
    <li><a href="#użycie">Użycie</a></li>
    <li><a href="#współtworzenie">Współtworzenie</a></li>
    <li><a href="#zespół">Zespół</a></li>
  </ol>
</details>

<!-- O PROJEKCIE -->

## O Projekcie

<!-- Zrzut ekranu -->

[![screenshot](https://github.com/Valik3201/bookshelf/blob/main/src/images/screenshots/1.png)](https://github.com/Valik3201/bookshelf/blob/main/src/images/screenshots/1.png)

**Bookshelf** to aplikacja internetowa do przeglądania książek, z dodatkowymi funkcjami takimi jak
dodawanie książek do listy zakupów, przeglądanie kategorii, przeglądanie popularnych książek i
wspieranie fundacji charytatywnych.

[![screenshot](https://github.com/Valik3201/bookshelf/blob/main/src/images/screenshots/5.png)](https://github.com/Valik3201/bookshelf/blob/main/src/images/screenshots/5.png)

> [!NOTE]\
> Projekt jest skonfigurowany do automatycznego wdrażania na GitHub Pages przy użyciu GitHub Actions autorstwa JamesIves ([GitHub Pages Deployment Action](https://github.com/marketplace/actions/deploy-to-github-pages)).
> Akcja wdrażania jest skonfigurowana do przesyłania kodu gotowego do produkcji do gałęzi `gh-pages`.

<p align="right"><a href="#readme-top">Powrót do góry</a></p>

<!-- STWORZONE Z -->

## Zastosowane technologie

Projekt "Bookshelf" wykorzystuje różnorodny zestaw technologii i narzędzi do stworzenia płynnego i
interaktywnego doświadczenia użytkownika.

### Frontend

- **HTML:** Język znaczników do strukturyzacji treści.
- **CSS:** Język stylizacji do prezentacji wizualnych aspektów projektu.
- **JavaScript:** Język programowania do tworzenia dynamicznych i interaktywnych elementów.
- **Swiper:** Wykorzystywany do tworzenia komponentu slidera dla fundacji charytatywnych.

### Backend / Firebase

- **Firebase:** Zintegrowany do uwierzytelniania użytkowników, zapewnia bezpieczny system logowania.

### Komunikacja z serwerem/API

- **Axios:** Klient HTTP używany do zarządzania operacjami asynchronicznymi i obsługiwnia żądań HTTP
  efektywnie.

### Powiadomienia

- **Notiflix:** Biblioteka powiadomień wdrożona w celu poprawy informacji zwrotnej dla użytkownika.

### Dodatkowe Narzędzia

- **Node.js i npm:** Używane do zarządzania zależnościami projektu.
- **Responsywność:** Zaprojektowana w celu zapewnienia optymalnej wydajności na różnych urządzeniach.

Ten różnorodny stos technologiczny umożliwia projektowi "Bookshelf" dostarczenie platformy bogatej w
funkcje dla miłośników książek, oferującej funkcje takie jak przeglądanie książek, wspieranie
fundacji charytatywnych, zarządzanie listami zakupów i wiele więcej.

[![screenshot](https://github.com/Valik3201/bookshelf/blob/main/src/images/screenshots/6.png)](https://github.com/Valik3201/bookshelf/blob/main/src/images/screenshots/6.png)

<p align="right"><a href="#readme-top">Powrót do góry</a></p>

<!-- ODWOŁANIA DO API -->

## Odwołania do API

####  Wszystkie kategorie

```
  GET /books/category-list
```

Zwraca listę kategorii.

####  Najlepsze książki w każdej kategorii

```
  GET /books/top-books
```

Pobiera pierwsze 5 książek z kolekcji w każdej kategorii.

#### Książki według kategorii

```
  GET /books/category
```

| Parametr    | Typ      | Opis                                                |
| :---------- | :------- | :--------------------------------------------------- |
| `category`  | `string` | Nazwa kategorii, dla której chcesz uzyskać listę książek |

Otrzymuje kolekcję 20 książek z określonej kategorii.

#### Informacje o książce

```
  GET /books/{id}
```

| Parametr    | Typ      | Opis                           |
| :---------- | :------- | :----------------------------- |
| `id`        | `string` | **Wymagane**. Id książki do pobrania |

Otrzymuje pełne informacje o książce zidentyfikowanej przez `{id}`.

<!-- ROZPOCZĘCIE -->

## Rozpoczęcie

Ta sekcja zawiera informacje na temat wymagań wstępnych i kroków instalacyjnych do skonfigurowania projektu Bookshelf lokalnie.

### Wymagania wstępne

Upewnij się, że masz zainstalowane:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Instalacja

1. Sklonuj repozytorium
   ```sh
   git clone https://github.com/Valik3201/bookshelf.git
   ```
2. Przejdź do katalogu projektu
   ```sh
    cd bookshelf
   ```
3. Zainstaluj zależności
   ```sh
    npm ci
   ```
4. Uruchom projekt w trybie deweloperskim
   ```sh
   npm run dev
   ```

<p align="right"><a href="#readme-top">Powrót do góry</a></p>

<!-- UŻYCIE -->

## Użycie

Użytkownicy mogą poruszać się po platformie, korzystając z następujących funkcji:

### Autentykacja

- Możliwość utworzenia konta i zalogowania się za pomocą Firebase.

### Przeglądanie Książek

- Strona główna wyświetla listę kategorii książek i najlepiej sprzedających się w każdej kategorii.
- Umożliwia użytkownikom przeglądanie książek na podstawie kategorii.

### Lista Zakupów

- Użytkownicy mogą dodawać książki do listy zakupów.
- Lista zakupów jest dostępna dla zalogowanych użytkowników.

### Szczegółowe Informacje

- Kliknięcie na książkę dostarcza użytkownikom szczegółowych informacji w oknie modalnym.

### Fundacje Charytatywne

- Użytkownicy mogą kliknąć na każdą fundację, otwierając nową stronę z odpowiednią witryną fundacji
  w celu uzyskania więcej informacji.

### Motywy i Responsywność

- Dostępne są dwa motywy: jasny i ciemny.
- Responsywność zoptymalizowana dla różnych urządzeń.

### Paginacja, Loader, Scroll Up

- Paginacja na stronie listy zakupów.
- Loader wskazuje trwające operacje asynchroniczne.
- Przycisk Scroll Up do szybkiej nawigacji do góry strony.

<p align="right"><a href="#readme-top">Powrót do góry</a></p>

<!-- WSPÓŁTWORZENIE -->

## Współtworzenie

Zapraszamy do współtworzenia! Jeśli masz sugestie lub ulepszenia, śmiało forkuj projekt, stwórz
nową gałąź, wprowadź zmiany i prześlij pull request.

1. Zforkuj projekt
2. Stwórz swoją gałąź

   ```sh
   git checkout -b feature/NowaFunkcja
   ```

3. Zacommituj zmiany
   ```sh
   git commit -m 'Dodaj NowaFunkcja'
   ```
4. Wypchnij do gałęzi
   ```sh
   git push origin feature/NowaFunkcja
   ```
5. Otwórz Pull Request

<p align="right"><a href="#readme-top">Powrót do góry</a></p>

<!-- ZESPÓŁ -->

## Zespół

1. **[Valentyn Chernetskyi](https://github.com/Valik3201)** - Team Leader
   - Strona Główna
   - Loader
   - Autoryzacja

2. **[Mateusz Firla](https://github.com/superfilar)** - Scrum Master
   - Nagłówek
   - Tryb Ciemny

3. **[Tomek Stańczak](https://github.com/tomekstanczak)**
   - Nagłówek
   - Menu Mobilne
   - Autoryzacja

4. **[Anna Sanetra](https://github.com/Anna0067)**
   - Strona Listy Zakupów
   - Książki w localStorage
   - Paginacja

5. **[Aleksandra Jarzębska](https://github.com/AleksandraJarz)**
   - Obrazy i Ikony
   - Okno Modalne
   - Książka według ID

6. **[Ewa Górniak](https://github.com/gorniakewa300)**
   - Okno Modalne
   - Książka według ID

7. **[Patryk Kuca](https://github.com/patryq03)**
   - Fundacje Charytatywne
   - Przycisk Scroll Up

<p align="right"><a href="#readme-top">Powrót do góry</a></p>
