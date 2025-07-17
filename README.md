# 🎬 Movie Search App (Ionic + OMDb API)

A sleek, mobile-friendly app built with **Ionic Framework** and **Angular**, allowing users to search for movies, series, and episodes using the **OMDb API**. Users can view search results, filter by type, and explore detailed information about each title — including posters, plot summaries, ratings, directors, and actors.

---

## 🌟 Features

- 🔍 **Search** movies, series, or episodes by title  
- 🎚️ **Filter by type**: movie, series, episode, or all  
- 📜 **View details** including poster, plot, IMDB rating, director, and cast  
- 🧭 **Smooth navigation** between list and detail pages  
- 🎨 **Clean UI** styled using SCSS and Ionic components  
- 🔗 **External link** to movie websites (when available)  

---

## 🚀 Tech Stack

- **Ionic Framework**
- **Angular**
- **TypeScript**
- **SCSS**
- **OMDb API**

---

## 📸 Screenshots

Search Page

![Search](screenshots/search.png)

----------------------------------------------------
Movie Details

![Details](screenshots/details.png)


---

## 🔧 Getting Started

### 1. Clone the repository:
```bash
git clone https://github.com/your-username/movie-search-ionic.git
cd movie-search-ionic
```

---

### 2. Install dependencies:
```bash
npm install
```

---

### 3. Run the app locally:
```bash
ionic serve
```
This will open the app in your default browser at http://localhost:8100/.

---

### 4. Add your OMDb API Key:

To fetch movie data, you need a valid OMDb API key.

1. Visit https://www.omdbapi.com/apikey.aspx to request a free key.
2. In your project, open the file src/app/services/movie.service.ts.
3. Replace the placeholder value in the code:

private apiKey = 'YOUR_OMDB_API_KEY'; // Replace this with your actual key

---

### 5. Build for Android/iOS (optional)
```bash
ionic build
ionic cap add android
ionic cap open android
```
Or for iOS:
```bash
ionic cap add ios
ionic cap open ios
```

📱 You’ll need Android Studio or Xcode installed to build and test on devices.

---



## 📁 Folder Structure

| Path                     | Description                        |
|--------------------------|------------------------------------|
| `src/`                   | Root source folder                 |
| ├── `app/`               | Main application folder            |
| │   ├── `pages/`         | Contains all UI pages              |
| │   │   ├── `movies/`    | Movie search page components       |
| │   │   ├── `movie-details/` | Movie details view components  |
| │   ├── `services/`      | Application services (e.g., API)   |
| │   └── `app.module.ts`  | Root Angular module                |
| ├── `assets/`            | Static assets (images, etc.)       |
| ├── `theme/`             | Global styles and themes           |
| └── `index.html`         | Main HTML file                     |

