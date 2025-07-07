# 📝 Tech Blog – Personal Blogging Platform

A full-stack blogging platform like Medium where the admin can write and publish articles, and readers can read, like, and comment on them.

Built with:
- Backend: Node.js + Express + TypeScript + MongoDB
- Frontend: React + TailwindCSS
- Editor: Toast UI (Markdown)
- Auth: JWT

---

## 🚀 Project Goals

- Create your own blogging platform with clean Markdown editor
- Admin panel to manage blogs, profile, and stats
- Public frontend for readers with search, likes, comments

---

## 📌 Tech Stack

| Layer | Tech |
|-------|------|
| Backend | Node.js, Express, TypeScript, MongoDB |
| Frontend | React, TailwindCSS |
| Auth | JWT |
| Editor | Toast UI (Markdown + Preview) |
| Validation | Zod |

---

## ✅ Phase 1 – Admin Panel & Core Features (MVP)

> 👨‍💻 Focus: Get the backend + admin panel working

### 🎯 Backend APIs

- [x] `POST /api/auth/login` – Admin login
- [x] `POST /api/blogs` – Create blog
- [x] `GET /api/blogs` – Admin blog list
- [x] `GET /api/blogs/:slug` – Blog details (public)
- [x] `PUT /api/blogs/:id` – Edit blog
- [x] `DELETE /api/blogs/:id` – Delete blog
- [x] `GET /api/profile` – Get profile info
- [x] `PUT /api/profile` – Update profile

### 🎯 Frontend Admin Features

- [x] Admin Login page
- [x] Admin Dashboard
- [x] Create Blog (with Toast UI editor)
- [x] Edit / Delete Blog
- [x] Profile page (update name, bio, image)
- [x] Blog list with title, publish status

---

## 📘 Phase 2 – Reader-Facing Features

> 🌍 Focus: Public frontend experience for visitors

### 🧭 Reader Features

- [ ] Blog Feed (Homepage)
- [ ] Blog Reading Page (`/blogs/:slug`)
- [ ] Like button (simple counter)
- [ ] Comment system (name + comment)
- [ ] Tag filter (e.g., #nodejs)
- [ ] Author box under blog
- [ ] Share buttons (Twitter, LinkedIn, WhatsApp)
- [ ] Estimated read time
- [ ] Responsive design (mobile-friendly)
- [ ] Blog views counter

---

## 🧠 Optional Phase 3 – Power Features (Optional)

- [ ] Bookmark blog
- [ ] Light/Dark reading mode
- [ ] Blog search
- [ ] Newsletter or subscribe to author
- [ ] Multiple authors (multi-tenant)

---

## 🛠 Folder Structure

