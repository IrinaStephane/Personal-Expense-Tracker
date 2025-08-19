# 📊 Personal Expense Tracker

A full-stack web application that enables users to track personal expenses and income, upload receipts, set up recurring expenses with a defined duration, and receive alerts when they exceed their monthly budget.

## 🚀 Technologies utilisées

| Frontend | Backend | Base de données | Outils |
|----------|--------|-----------------|--------|
| React + Vite | Express.js | PostgreSQL | Tailwind CSS |
| React Router | Node.js | Prisma | Typescrit |
| Axios | Multer (upload fichiers) |  | JWT (authentification) |

---

## 👥 Équipe du projet


| Référence | Nom                 | Prénom                        | Rôle dans le projet                   |
|-----------|----------------------|-------------------------------|----------------------------------------|
| STD24013  | RAKOTOARISON         | Santatriniaina Fiderana       | Développeur fullstack        |
| STD24039  | RANDRIAMANANTENA     | Mitia Jessica                 | Développeur fullstack           |
| STD24060  | RAKOTOARISON         | Irina Stéphane                | Développeur fullstack              |
| STD24071  | NOMENJANAHARY      | Tsikiniaina Tsilavina     | Développeur fullstack              |


## 📌 Fonctionnalités

- **Authentification sécurisée** (JWT)
- **Gestion des dépenses et revenus**
- **Catégories personnalisables**
- **Upload de reçus** (JPG, PNG, PDF)
- **Résumé mensuel** avec graphiques
- **Alerte budget** si dépenses > revenus
- **Mode sombre** (optionnel)

---

## 📂 Structure du projet
```
Personal-Expense-Tracker/  
│  
├── backend/  
│   ├── src/  
│   │   ├── index.js 
│   │   ├── routes/  
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── middlewares/ 
│   │   └── utils/
│   │  
│   ├── prisma/  
│   │   └── schema.prisma  
│   │  
│   ├── package.json  
│   └── .gitignore  
│  
├── frontend/  
│   ├── public/ 
│   │  
│   ├── src/  
│   │   ├── assets/  
│   │   ├── components/
│   │   ├── pages/
│   │   ├── index.css
│   │   └── main.jsx  
│   │  
│   ├── package.json  
│   └── .gitignore  
│── README.md  

```
