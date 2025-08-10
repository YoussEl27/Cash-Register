# Cash-Register
Dieses Projekt implementiert eine Wechselgeldberechnung nach dem Prinzip eines Greedy-Algorithmus.
Die Funktion checkCashRegister() nimmt einen Kaufpreis, den erhaltenen Betrag und den aktuellen Inhalt der Kasse und gibt zurück, ob genug Wechselgeld vorhanden ist, sowie den genauen Betrag in Münzen und Scheinen.

Das Projekt wurde inspiriert durch FreeCodeCamp’s JavaScript Algorithms and Data Structures Certification und ist vollständig in JavaScript umgesetzt.

# Funktionsweise
--> Eingaben:

    1-price – Kaufpreis

    2-cash – erhaltene Zahlung

    3-cid – Inhalt der Kasse als 2D-Array

--> Ausgabe:
    Ein Objekt mit:

        status: "OPEN", "CLOSED" oder "INSUFFICIENT_FUNDS"

        change: Liste der zurückgegebenen Münzen/Scheine oder leer
