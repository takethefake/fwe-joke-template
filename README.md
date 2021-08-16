# FWE Template Witz Bibliothek

## Getting Started

Hej! Herzlich willkommen bei deinem Template für die Joke-Hausaufgabe in FWE!

Hier findest du ein vorkonfiguriertes Frontend/Backend für deine Hausaufgabe.

Im Folgenden erkläre ich dir wie du das Projekt initial starten kannst.

### Installation von Docker

Die aktuelle Umgebung basiert auf Docker, um mit dieser zu arbeiten musst du Docker auf deinem Rechner installiert haben. Schaue am besten in den offiziellen Docs nach.

Aus Erfahrung haben wir gehört, dass es beim installieren auf Windows teils zu Problemen kommen kann.

Eine Lösung hierfür wäre es beispielsweise eine Linux Distribution(bspw. Manjaro/Ubuntu/... ) in einer VM mit VirtualBox (https://www.virtualbox.org/) laufen zu lassen und das Projekt in dieser zu entwickeln.

Gerade für das

### Installation mit Docker

- Gehe in den `frontend`-Ordner und installiere alle Abhängigkeiten mit

```bash
npm install
```

- Gehe in den `backend`-Ordner und installiere alle Abhängigkeiten mit

```bash
npm install
```

- Gehe in das Hauptverzeichnis und starte das Frontend/Backend/Datenbank mit

```bash
docker compose up -d
```

Das führt den Start für alle Dienste entsprechend aus.

mit `docker compose log -f` kannst du die Log Nachrichten für alle Container sehen mit `docker compose log -f frontend` kannst du bspw. alle Nachrichten für das Frontend sehen.

Manchmal kann es vorkommen, das beim ersten Start der Backend-Container nicht mit der Datenbank verbinden kann.

Rufe in diesem Fall

```bash
docker compose backend restart
```

auf um den Start des Backend-Containers erneut zu versuchen.

### Updaten des Datenbank-Schemas

Damit wir Daten in der Datenbank speichern können, müssen wir die Datenbank erstellen.

dafür gehen wir in den `backend`-Container weisen `typeorm` an die Migration durchzuführen

```bash
docker compose exec backend bash
npm run typeorm schema:drop # löscht das aktuelle Schema
npm run typeorm schema:sync # Erstellt das Schema abhängig von euren Daten in `backend/src/entity`
```


Anschließend kann es auch schon direkt losgehen! :)