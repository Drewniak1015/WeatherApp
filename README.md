# WeatherApp

WeatherApp to aplikacja webowa, która pozwala użytkownikom na sprawdzenie prognozy pogody w wybranych miastach na podstawie danych uzyskanych z publicznego API.

## Funkcjonalności

- **Wyszukiwanie państw**: Użytkownicy mogą wyszukiwać miasto, aby sprawdzić aktualne warunki pogodowe.
- **Prognoza pogody**: Aplikacja wyświetla temperaturę, wilgotność, ciśnienie oraz prędkość wiatru.
- **Interaktywny interfejs**: Aplikacja ma przyjazny dla użytkownika interfejs, który umożliwia łatwe korzystanie z jej funkcji.

## Technologie

- **HTML**: Struktura aplikacji.
- **CSS**: Stylizacja aplikacji, responsywny design.
- **JavaScript**: Logika aplikacji i interakcje z API.
- **API**: Aplikacja korzysta z [OpenWeatherMap API](https://openweathermap.org/api), aby pobrać dane pogodowe w czasie rzeczywistym.

## Użycie API

Aplikacja korzysta z [OpenWeatherMap API](https://openweathermap.org/api), aby uzyskać dane o pogodzie na podstawie wprowadzonego miasta. API umożliwia dostęp do różnych parametrów pogodowych, takich jak temperatura, wilgotność, ciśnienie i prędkość wiatru.

### Jak działa:

1. Użytkownik wprowadza nazwę miasta.
2. Aplikacja wysyła zapytanie do API, aby uzyskać dane pogodowe.
3. Aplikacja wyświetla wyniki w prostym formacie, zawierającym szczegóły na temat pogody w wybranym mieście.

## Instalacja

Aby uruchomić aplikację lokalnie:

1. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/TwojaNazwaUzytkownika/WeatherApp.git
2. Przejdź do katalogu aplikacji: cd WeatherApp
3. Zainstaluj zależności: npm install
4. Uruchom aplikację: npm run start
