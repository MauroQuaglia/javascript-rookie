Number: 64 bit
----
| Numero scritto     | Valore interno     | Motivo                             |
| ------------------ | ------------------ | ---------------------------------- |
| `1`                | `1`                | Intero piccolo                     |
| `2`                | `2`                | Potenza di 2                       |
| `9007199254740991` | `9007199254740991` | = 2^53 - 1 (ultimo intero sicuro)  |
| `0.5`              | `0.5`              | = 1/2, frazione con denominatore 2 |
| `0.25`             | `0.25`             | = 1/4, frazione con denominatore 2 |
| `0.125`            | `0.125`            | = 1/8, frazione con denominatore 2 |
| `0.75`             | `0.75`             | = 3/4 = 3 ÷ 2²                     |

----

| Numero scritto | Valore reale interno (approssimato) |
| -------------- | ----------------------------------- |
| `0.1`          | `0.10000000000000000555…`           |
| `0.2`          | `0.2000000000000000111…`            |
| `0.3`          | `0.2999999999999999889…`            |
| `0.6`          | `0.6000000000000000888…`            |
| `0.7`          | `0.6999999999999999556…`            |
| `0.9`          | `0.9000000000000000222…`            |

----
* Regola pratica
  * Esatti → interi fino a 2^53, potenze di 2, e frazioni con denominatore 2^n.
  * Non esatti → qualunque numero che in decimale sembra semplice ma in binario non ha rappresentazione finita (es. 1/10, 1/3, ecc.).
