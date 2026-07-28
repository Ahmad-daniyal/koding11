import { router } from "./router.js";

const schoolName = "SMK Yadika banjaran";

window.addEventListener("hashchange", () => router(schoolName));
window.addEventListener("DOMContentLoaded", () => router(schoolName));