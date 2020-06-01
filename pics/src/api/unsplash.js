import axois from "axios";



export const unsplash = axois.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID hLzALwQgbfK5BGiJABgWxvpPMVchC4Obc7OensV9Vx0",
  },
});
