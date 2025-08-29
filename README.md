# ✅ Vista Todo

A modern, responsive Todo application built with **React, TypeScript, Redux
Toolkit, and TailwindCSS**.  
This project demonstrates solid **state management**, a **clean UI**, and
**basic statistics** with persistence.

---

## Live Demo

▶ **[Vista Todo Live Demo](https://task-todo-rho.vercel.app/)** — Explore the
production version deployed on Vercel!

---

## 🚀 Features

- **Add, Edit, Delete, Toggle Complete** todos
- **Filter by All, Active, Completed**
- **Live Stats** in the header:
  - Total Todos
  - Completed
  - Remaining
- **Global State Management** with Redux Toolkit
- **Form Modal** for adding new todos
- **Edit Modal / Inline Editing**
- **Loading state** simulation
- **Validations** (prevent empty values)
- **Responsive Layout** (mobile, tablet, desktop)
- **Dark Mode Toggle**
- **Keyboard Accessibility**
  - Enter → Add
  - Esc → Cancel edit
- **Animations** for add/remove/toggle
- **LocalStorage Persistence** (todos remain after refresh)

---

## 🛠️ Tech Stack

- **React 19**
- **TypeScript**
- **Redux Toolkit + React Redux**
- **React Router v7**
- **TailwindCSS v4 + tw-animate-css**
- **Radix UI** (components)
- **Lucide React** (icons)
- **React Hook Form + Zod** (form validation)
- **Date-fns** (date utilities)
- **Sonner** (toast notifications)
- **UUID** (unique IDs)

---

## 📂 Project Structure

src/ ├── assets/ # Images, icons (e.g. logo) │ ├── Vista SysTech-02 1.png │ └──
react.svg ├── components/ # Reusable UI & module components │ ├── module/task/ │
│ ├── AddTaskModal.tsx │ │ └── TaskCards.tsx │ └── ui/ │ │ ├── accordion.tsx │ │
└── button.tsx # and many more │ └── mode-toggle.tsx ├── hook/ │ └── hooks.ts #
Custom hooks ├── layout/ │ └── Navbar.tsx # App navigation ├── lib/ │ └──
utils.ts # Utility functions ├── pages/ │ └── Tasks.tsx # Tasks page ├──
provider/ │ └── theme-provider.tsx ├── redux/ # Global state (Redux Toolkit) │
├── features/task/ │ │ ├── taskSlice.ts │ │ └── todoSlice.ts │ └── store.ts ├──
routes/ │ └── index.tsx # Route management ├── types/ │ └── index.ts # Type
definitions ├── App.tsx # Root component ├── index.css # Global styles ├──
main.tsx # App entry point └── vite-env.d.ts

---

## 📊 Global State (Redux Toolkit)

**Actions:**

- `addTodo`
- `toggleTodo`
- `editTodo`
- `deleteTodo`
- `setFilter`

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/nahidn228/Vista-ToDo.git
cd Vista-ToDo

```
