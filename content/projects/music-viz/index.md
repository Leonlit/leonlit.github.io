---
date: '2025-05-04T05:59:55+08:00'
draft: false
title: 'Music Viz'
layout: "project"
thumbnail: "images/home.png"
external_Links: false
youtube: ""
github: ""
demo: ""
tech: ["NodeJS", "ExpressJS", "Python", "HTML", "CSS", "JS", "MongoDB", "RabbitMQ", "minIO","SocketIO", "JWT", "Spleeter"]
---

## Intro
Note: The project repository is currently private. It will be made public once the core features of the application are complete.

A full-stack application that lets users create and share immersive music visualization rooms. Users can build custom playlists, design dynamic visualizers tailored to their tracks, and experience them in real-time. Each room offers a social layer with a built-in chat widget for live interactions. To help surface the best creations, users can upvote or downvote rooms based on their visual or musical appeal.

## Tech Explanations
### Frontend
Built with vanilla HTML, CSS, and JavaScript, keeping the frontend lightweight and dependency-free.

### Backend
- NodeJS for backend language
- ExpressJS for backend framework
- MongoDB for storage
- JWT for authentication
- Socket.IO for real time interactions
- MinIO to store images & music
- RabbitMQ to queue tasks to split music to different intruments
- The music are split using spleeter

### Development
- Bash & python scripts for automation
- yt-dlp to download sample music

## Screenshots 

This project is actively evolving, so the UI and APIs may change over time. For a complete history of updates and improvements, check out the [changelogs](../../changelogs/music-viz/).

### Home Page
<img src="images/home.png" alt="Home page">

### Login Page
<img src="images/login.png" alt="Login Page">

### Register Page
<img src="images/register.png" alt="Register Page">

### Dashboard Page
<img src="images/dashboardBlur.png" alt="Dashboard Page">

### Explore Room Page
<img src="images/exploreBlur.png" alt="Explore Room Page">

### Joined Room Page
<img src="images/joinedRoomBlur.png" alt="Joined Room Page">

### Room Info Page
<img src="images/roomInfoBlur.png" alt="Room Info Page">

### Entering Room Page
<img src="images/enterRoom.png" alt="Entering Room Page">

### Entering Room Page - Playing
<img src="images/enterRoomPlayingBlur.png" alt="Entering Room Page - Playing">

### Entering Room Page - Playlist
<img src="images/enterRoomPlaylistBlur.png" alt="Entering Room Page - Playlist">

### Room Dashboard Page
<img src="images/roomDashboardBlur.png" alt="Room Dashboard Page">

### Create Room Page
<img src="images/createRoom.png" alt="Create Room Page">

### Room Editor Page
<img src="images/roomEditor.png" alt="Room Editor Page">

### Room Editor Page - Preview
<img src="images/roomEditorPreview.png" alt="Room Editor Page - Preview">

### Room Editor Page - Settings
<img src="images/roomEditorSettings.png" alt="Room Editor Page - Settings">

### Room Editor Page - Live Preview
<img src="images/roomEditorLivePreview.png" alt="Room Editor Page - Live Preview">

### Playlist Dashboard Page
<img src="images/playlistDashboardBlur.png" alt="Playlist Dashboard Page">

### Playlist Info Page
<img src="images/playlistInfoBlur.png" alt="Playlist Info Page">

### Create Playlist Page
<img src="images/createPlaylist.png" alt="Create Playlist Page">

### Create Playlist Page - Search
<img src="images/createPlaylistSearchMusicBlur.png" alt="Create Playlist Page - Search">

### Music Dashboard Page
<img src="images/musicDashboardBlur.png" alt="Music Dashboard Page">

### Upload Music Page
<img src="images/uploadMusicBlur.png" alt="Upload Music Page">
