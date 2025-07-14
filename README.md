# Calculatrice

## I. Logique combinatoire

### 1 - créer un fichier calculator.mjs avec une méthode de classe Calculator.add(a, b) qui permet d'ajouter deux nombres entiers

### 2 - créer un fichier server.mjs et importer la classe 'Calculator'.

- Ajouter le message console.log("Add: 2 + 3 = " + calculator.add(2, 3))
- Lancer le programme avec ``node server.mjs``. Vous devriez voir le message:
  ``'Add: 2 + 3 = 5'``

### 3 - Ajouter une méthode Calculator.subtract(a,b) qui permet de faire la différence entre deux nombres entiers

- Ajouter dans server.mjs le message console.log("Sub: 7 - 3 = " + calculator.subtract(7, 3))
- Lancer le programme avec ``node server.mjs``. Vous devriez voir le message:
  ``'Sub: 7 - 3 = 4'``

### 4 - Ajouter une méthode Calculator.multiply(a,b) qui permet de faire la multiplication entre deux nombres entiers

- Ajouter dans server.mjs le message console.log("Mul: 5 x 3 = " + calculator.multiplt(5, 3))
- Lancer le programme avec ``node server.mjs``. Vous devriez voir le message:
  ``'Mul: 5 x 3 = 15'``

### 5 - Ajouter une méthode Calculator.divide(a,b) qui permet de faire la division entre deux nombres entiers

- Ajouter dans server.mjs le message console.log("Div: 9 / 3 = " + calculator.divide(9, 3))
- Lancer le programme avec ``node server.mjs``. Vous devriez voir le message:
  ``'Div: 9 / 3 = 3'``

## II Micro-service de calcul

### 1 - créer un endpoint REST POST avec le module Http /add qui prend deux paramètre ‘a’ et ‘b’ et qui appelle la methode Calculator.add(a, b)

- Lancer le programme avec ``node server.mjs``.
- Tester l’application en utilisant le navigateur our un client HTTP. Vous devriez voir le message:
```
  {
      "operation": "add",
      "params": {
        "a": 2,
        "b": 3
      },
      "result": 5
  }
```

### 2 - créer un endpoint REST POST avec le module Http /subtract qui prend deux paramètre ‘a’ et ‘b’ et qui appelle la methode Calculator.subtract(a, b)

- Lancer le programme avec ``node server.mjs``.
- Tester l’application en utilisant le navigateur our un client HTTP. Vous devriez voir le message:
```
  {
       "operation": "subtract",
       "params": {
           "a": 7,
           "b": 3
       },
       "result": 4
   }

```

### 3 - créer un endpoint REST POST avec le module Http /multiply qui prend deux paramètre ‘a’ et ‘b’ et qui appelle la methode Calculator.multiply (a, b)

- Lancer le programme avec ``node server.mjs``.
- Tester l’application en utilisant le navigateur our un client HTTP. Vous devriez voir le message:
```
  {
       "operation": "multiply",
       "params": {
           "a": 7,
           "b": 3
       },
       "result": 4
   }
```

### 4 - créer un endpoint REST POST avec le module Http /divide qui prend deux paramètre ‘a’ et ‘b’ et qui appelle la methode Calculator.divide (a, b)

- Lancer le programme avec ``node server.mjs``.
- Tester l’application en utilisant le navigateur our un client HTTP. Vous devriez voir le message:
```
  {
        "operation": "divide",
        "params": {
            "a": 9,
            "b": 3
        },
        "result": 3
  }
```

## III. Approfondissement (devoir maison)

### 1 - créer le endpoint REST /sum qui utilise Calculator.sum([termes]) et permet d’ajouter les éléments d’une liste envoyé en paramètre

- Lancer le programme avec ``node server.mjs``.
- Tester l’application en utilisant le navigateur our un client HTTP. Vous devriez voir le message:
 ```
  {
        "operation": "sum",
        "params": [
            2,
            3,
            5
        ],
        "result": 10
    }
 ```

### 2 – créer le endpoint REST /mean qui utilise Calculator.mean([termes]) et permet de calculer la moyenne des éléments d’une liste envoyé en paramètre selon leur signe

- Lancer le programme avec ``node server.mjs``.
- Tester l’application en utilisant le navigateur our un client HTTP. Vous devriez voir le message:
```
  {
        "operation": "mean",
        "params": [
            7,
            -3,
            5
        ],
        "result": 3
  }
```
# Node.js Calculator — Devoir M2 GLO,Maria Angela ABAGA NVE

## 🔍 Objectif
Développer un micro-service de calcul avec Node.js et Express, comportant deux endpoints REST : `/sum` et `/mean`.

## 🧠 Fonctionnalités
- Addition, soustraction, multiplication, division de deux nombres.
- Somme d’une liste de nombres.
- Moyenne d’une liste de nombres.
- Endpoints REST POST `/sum` et `/mean` utilisant Express.

---

## 🚀 Lancement du serveur

### Installation des dépendances :
```bash
npm install
