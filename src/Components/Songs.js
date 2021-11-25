const Songs = [
  {
    id: 1,
    favourite: false,
    songName: "Bella Ciao",
    artist: "El Profesor",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fbellaciao.mp3?alt=media&token=e1dd8233-3521-4574-8957-d51af9a5db5c",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fmoneyheist.jpg?alt=media&token=32baf3d7-0ab5-47d5-ba48-554792cea117",
  },
  {
    id: 2,
    favourite: false,
    songName: "Beast",
    artist: "Anirudh Ravichander",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fbeast.mp3?alt=media&token=ebf29a01-079b-44eb-969a-57ee66a15ee8",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fbeast.jpg?alt=media&token=7cc7c33e-8eac-4f7a-858d-75e75d4b609c",
  },
  {
    id: 3,
    favourite: false,
    songName: "Joker - Rock and Roll",
    artist: "Hildur Guðnadóttir",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fjoker.mp3?alt=media&token=9e79751a-726d-4359-8a26-116db925f6ff",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fjoker.jpg?alt=media&token=c3955b3c-7efd-4127-b119-6c6343dbc414",
  },
  {
    id: 4,
    favourite: false,
    songName: "I Am A Peaky Blinder",
    artist: "Otnicka",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fpeaky-blinder.mp3?alt=media&token=2ddb5cfb-f4e0-4604-b77c-a7f63894d3ec",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fpeakyblinder.jpg?alt=media&token=b83fbf86-37ef-47c2-948e-3447a22a2d07",
  },
  {
    id: 5,
    favourite: false,
    songName: "Naanga Vera Maari",
    artist: "Yuvan Shankar Raja",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fvalimai.mp3?alt=media&token=97c769ab-e2fb-4562-90aa-18c73b320bde",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fvalimai.jpg?alt=media&token=e11b839d-2514-4e1a-aa3a-20db3540a837",
  },
  {
    id: 6,
    songName: "Your Woman",
    artist: "White Town",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FWhite-Town-Your-Women.mp3?alt=media&token=91817445-98ba-4a99-a4b4-6218f2742eb3",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fwhitetown.jpg?alt=media&token=25e1ec0c-24ec-4a11-a7a7-e55ec1fc50cf",
  },
  {
    id: 7,
    favourite: false,
    songName: "Charlie",
    artist: "Gopi Sundar",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FCharlie.mp3?alt=media&token=5a129114-bb31-4a5a-95b7-1767829df21e",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fcharlie.jpg?alt=media&token=81a1dc08-a9af-4db2-b74d-1f50315f9342",
  },
  {
    id: 8,
    favourite: false,
    songName: "Mask Off",
    artist: "Future",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FFuture-Mask-Off.mp3?alt=media&token=92d8b60f-2bca-406f-914a-40bfb9a9324a",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fmask.jpg?alt=media&token=22f0d7be-74b8-4c0d-849d-b777370e9559",
  },
  {
    id: 9,
    favourite: false,
    songName: "Hey Mama",
    artist: "David Guetta",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FHeyMamaRingtone.mp3?alt=media&token=850148f5-8a15-4f87-995d-711138d5d7a0",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fheymama.jpg?alt=media&token=2d8e8632-8051-4105-9760-3c715d797802",
  },
  {
    id: 10,
    favourite: false,
    songName: "Turkish Folk Battle Song",
    artist: "CVR Toon ",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2FPlevne-turkish.mp3?alt=media&token=72f7e03b-2865-4ffb-a2d1-da4c4557fb80",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Images%2Fturkish.jpg?alt=media&token=1f44ad17-43a8-4e1d-b232-a78b28cb9fe0",
  },
];

export { Songs };
