# 🌿 La Maison Jungle  
Application e-commerce de plantes développée en **React**.

## 🏡 Présentation
**La Maison Jungle** est une application web permettant aux utilisateurs de parcourir un catalogue de plantes, de gérer un panier interactif et de filtrer les plantes par catégorie.  
Ce projet met en avant la maîtrise de **React**, des composants fonctionnels, de la gestion d’état, des props, du localStorage et de la logique d’un mini-système e-commerce.

---

## 🚀 Fonctionnalités principales

### 🌱 Gestion des plantes
- Affichage d'une liste de plantes  
- Informations visibles : nom, prix, catégorie, lumière, arrosage, image  
- Ajout d’une plante au panier  
- Incrémentation automatique si ajout multiple  

### 🛒 Panier dynamique
- Ajout au panier  
- Calcul automatique du total  
- Suppression du panier  
- Persistance du panier grâce à **localStorage**

### 🔎 Filtrage / catégories
- Filtrer les plantes selon leur catégorie  
- Composant dédié pour la sélection des catégories  

### ⚛️ Fonctionnalités React utilisées
- `useState`  
- `useEffect`  
- Gestion des props  
- Lifting state up  
- Manipulation du LocalStorage  
- Composants réutilisables  

---

## 🛠️ Technologies utilisées
- **React 18+**
- **JavaScript (ES6+)**
- **CSS3**
- **Node.js & npm**
- **LocalStorage API**

---

## 📦 Installation & Lancement

### 1️⃣ Cloner le projet
```bash
git clone https://github.com/orasewilberson/La-maison-jungle1.git

Installer les dépendances
npm install

3️⃣ Lancer l’application
npm start


➡️ Ensuite, ouvrez : http://localhost:3000

📁 Structure du projet
la-maison-jungle/
│
├── src/
│   ├── components/
│   │   ├── Cart.js
│   │   ├── PlantItem.js
│   │   ├── ShoppingList.js
│   │   ├── Categories.js
│   │   └── Banner.js
│   │
│   ├── data/
│   │   └── plantList.js
│   │
│   ├── styles/
│   ├── App.js
│   ├── index.js
│   └── ...
│
└── public/
---
### 👨‍💻 Auteur

Wilberson Orase (Ing Will)
Passionné par le développement web moderne : React, Laravel, PHP, JavaScript, etc.

📧 Contact : orasewilberson@gmail.com
