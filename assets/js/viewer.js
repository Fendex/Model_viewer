document.addEventListener("DOMContentLoaded", () => {
  let currentLanguage = localStorage.getItem("language") || "ru";
  let darkMode = localStorage.getItem("theme") === "dark";

  const setLanguage = (language) => {
    currentLanguage = language;
    localStorage.setItem("language", language);
    document.documentElement.lang = language;

    document.querySelectorAll("[data-ru][data-en]").forEach((element) => {
      element.textContent = element.dataset[language];
    });

    document.querySelectorAll(".model-name").forEach((element) => {
      element.textContent =
        language === "ru"
          ? element.dataset.titleRu
          : element.dataset.titleEn;
    });

    document.querySelectorAll(".language-button").forEach((button) => {
      button.classList.toggle(
        "active",
        button.dataset.language === language
      );
    });

    document.querySelectorAll(".ru-price").forEach((element) => {
      element.style.display = language === "ru" ? "block" : "none";
    });

    document.querySelectorAll(".en-price").forEach((element) => {
      element.style.display = language === "en" ? "block" : "none";
    });
  };

  const setTheme = (dark) => {
    darkMode = dark;
    document.body.classList.toggle("dark-mode", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");

    const themeButton = document.getElementById("theme-toggle");

    if (themeButton) {
      themeButton.textContent = dark ? "☀" : "☾";
    }
  };

  document.querySelectorAll(".language-button").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.language);
    });
  });

  const themeToggle = document.getElementById("theme-toggle");

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      setTheme(!darkMode);
    });
  }

  document.querySelectorAll(".reset-camera").forEach((button) => {
    button.addEventListener("click", () => {
      const viewer = button
        .closest(".viewer-card")
        .querySelector("model-viewer");

      viewer.cameraOrbit = "0deg 75deg 105%";
      viewer.fieldOfView = "30deg";

      if (viewer.jumpCameraToGoal) {
        viewer.jumpCameraToGoal();
      }
    });
  });

  document.querySelectorAll(".fullscreen-button").forEach((button) => {
    button.addEventListener("click", () => {
      const viewer = button
        .closest(".viewer-card")
        .querySelector("model-viewer");

      if (viewer.requestFullscreen) {
        viewer.requestFullscreen();
      }
    });
  });

  document.querySelectorAll("model-viewer").forEach((viewer) => {
    viewer.addEventListener("load", () => {
      console.log("Модель загружена:", viewer.src);
    });

    viewer.addEventListener("error", (event) => {
      console.error("Ошибка загрузки модели:", viewer.src, event);
    });
  });

  const toast = document.getElementById("toast");

  function showToast(message) {
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    window.clearTimeout(window.toastTimer);

    window.toastTimer = window.setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
  }

  document.querySelectorAll(".copy-email-button").forEach((button) => {
    button.addEventListener("click", async () => {
      const text = button.dataset.copyText;

      try {
        await navigator.clipboard.writeText(text);

        const language = localStorage.getItem("language") || "ru";

        showToast(
          language === "ru"
            ? "Email скопирован в буфер обмена"
            : "Email copied to clipboard"
        );
      } catch (error) {
        console.error("Не удалось скопировать Email:", error);

        const language = localStorage.getItem("language") || "ru";

        showToast(
          language === "ru"
            ? "Не удалось скопировать Email"
            : "Could not copy Email"
        );
      }
    });
  });

  setLanguage(currentLanguage);
  setTheme(darkMode);
});
