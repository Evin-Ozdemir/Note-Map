import { goToIcon, homeIcon, jobIcon, parkIcon } from "./constants.js";

// Status durumunu belirtleyen fonksiyon
export const getStatus = (status) => {
  switch (status) {
    case "goto":
      return "Ziyaret";
    case "home":
      return "Ev";
    case "park":
      return "Park Yeri";
    case "job":
      return "İş";
    default:
      return "Diğer";
  }
};

// Status değerine bağlı olarak icon belirleyen fonksiyon
export const getIcon = (status) => {
  switch (status) {
    case "goto":
      return goToIcon; // goToIcon'ı doğru şekilde tanımladığınızdan emin olun
    case "home":
      return homeIcon;
    case "park":
      return parkIcon;
    case "job":
      return jobIcon;
    default:
      return null; // Varsayılan bir ikon döndür
  }
};
