export class Calculator {
    static add(a, b) {
        return a + b;
    }

     static sub(a,b){
        return a - b
    }

     static Mul(a,b){
        return a * b 
    }

     static Div(a,b){
        return a / b
    }
    // ✅ Somme d'une liste de nombres
    static sum(termes) {
        return termes.reduce((acc, val) => acc + val, 0);
    }

    // ✅ Moyenne d'une liste
    static mean(termes) {
        if (!termes.length) return 0;
        const somme = termes.reduce((acc, val) => acc + val, 0);
        return Math.round(somme / termes.length); // arrondi à l'entier
    }

}

