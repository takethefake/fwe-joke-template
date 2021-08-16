# FWE Template Witz Bibliothek

## Getting Started

Hej! Herzlich willkommen bei deinem Template für die Joke-Hausaufgabe in FWE!

Hier findest du ein vorkonfiguriertes Frontend/Backend für deine Hausaufgabe.

Im Folgenden erkläre ich dir wie du das Projekt initial starten kannst.

### Vorbedinungen

Die aktuelle Umgebung basiert auf Docker, um mit dieser zu arbeiten musst du Docker auf deinem Rechner installiert haben. Schaue am besten in den offiziellen Docs nach. https://docs.docker.com/get-started/

Aus Erfahrung haben wir gehört, dass es beim Installieren auf Windows teils zu Problemen kommen kann.

Aus diesem Grund stellen wir euch eine Virtuelle Maschine bereit, die alles beinhaltet, was ihr für die Entwicklung benötigt.

https://drive.google.com/file/d/1EgAdMI9Y3b4GeLRpAzof1Tdl3JX5UuCo/view?usp=sharing

Der Nutzer hat initial kein Passwort und das ausgecheckte Hausaufgaben Projekt liegt unter `~/development/joke-homework`.

Hier kannst du direkt `docker-compose up -d` ausführen und das Projekt ist unter `http://localhost:3000` erreichbar.

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

mit `docker-compose log -f` kannst du die Log Nachrichten für alle Container sehen mit `docker-compose log -f frontend` kannst du bspw. alle Nachrichten für das Frontend sehen.

Manchmal kann es vorkommen, das beim ersten Start der Backend-Container nicht mit der Datenbank verbinden kann.

Rufe in diesem Fall

```bash
docker-compose backend restart
```

auf um den Start des Backend-Containers erneut zu versuchen.

### Updaten des Datenbank-Schemas

Damit wir Daten in der Datenbank speichern können, müssen wir die Datenbank erstellen.

dafür gehen wir in den `backend`-Container weisen `typeorm` an die Migration durchzuführen

```bash
docker-compose exec backend bash
npm run typeorm schema:drop # löscht das aktuelle Schema
npm run typeorm schema:sync # Erstellt das Schema abhängig von euren Daten in `backend/src/entity`
```

Anschließend kann es auch schon direkt losgehen! :)
