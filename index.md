---
layout: default
title: Fendex — GLB Optimization
---

<header class="site-header">
  <div class="header-inner">
    <a class="brand" href="{{ '/' | relative_url }}">
      {{ site.data.site.brand }}
    </a>

    <div class="header-actions">
      <button class="language-button active" data-language="ru">RU</button>
      <button class="language-button" data-language="en">EN</button>
      <button class="theme-button" id="theme-toggle" aria-label="Toggle theme">
        ☾
      </button>
    </div>
  </div>
</header>

<main class="page-content">

  <section class="hero-section">
    <div class="hero-badge" data-ru="Демонстрационное портфолио" data-en="Demonstration portfolio">
      Демонстрационное портфолио
    </div>

    <h1
      data-ru="Автоматическая оптимизация 3D-моделей"
      data-en="Automatic 3D Model Optimization">
      Автоматическая оптимизация 3D-моделей
    </h1>

    <p
      class="hero-subtitle"
      data-ru="Получение облегчённых GLB из готовых OBJ и GLB-моделей для WebGL и WebAR."
      data-en="Lightweight GLB files from ready-made OBJ and GLB models for WebGL and WebAR.">
      Получение облегчённых GLB из готовых OBJ и GLB-моделей для WebGL и WebAR.
    </p>

    <div class="hero-actions">
      <a class="pill-button primary" href="mailto:{{ site.data.site.email }}">
        <span data-ru="Написать на Email" data-en="Send Email">Написать на Email</span>
      </a>

      <a class="pill-button" href="{{ site.data.site.telegram_url }}" target="_blank" rel="noopener">
        <span data-ru="Telegram" data-en="Telegram">Telegram</span>
      </a>
    </div>

    <p
      class="demo-note"
      data-ru="Эта страница предназначена только для демонстрации результата. Загрузка и обработка файлов на сайте не выполняются."
      data-en="This page is for demonstration purposes only. Files are not uploaded or processed on this website.">
      Эта страница предназначена только для демонстрации результата. Загрузка и обработка файлов на сайте не выполняются.
    </p>
  </section>

  <section class="content-section">
    <h2 data-ru="Что я делаю:" data-en="What I do:">Что я делаю:</h2>

    <div class="info-grid">
      <div class="info-card">
        <span class="info-icon">01</span>
        <h3 data-ru="Входные форматы" data-en="Input formats">Входные форматы</h3>
        <p data-ru="Готовые файлы OBJ и GLB." data-en="Ready-made OBJ and GLB files.">
          Готовые файлы OBJ и GLB.
        </p>
      </div>

    <script
      type="module"
      src="{{ '/assets/js/model-viewer.min.js' | relative_url }}">
    </script>
      
      <script>
    customElements.whenDefined("model-viewer").then(() => {
    const ModelViewer = customElements.get("model-viewer");

    ModelViewer.meshoptDecoderLocation =
      "https://unpkg.com/meshoptimizer/meshopt_decoder.js";
    });
    </script>

      <div class="info-card">
        <span class="info-icon">02</span>
        <h3 data-ru="Выходной формат" data-en="Output format">Выходной формат</h3>
        <p data-ru="Облегчённый GLB для браузерных проектов." data-en="Lightweight GLB for browser-based projects.">
          Облегчённый GLB для браузерных проектов.
        </p>
      </div>

      <div class="info-card">
        <span class="info-icon">03</span>
        <h3 data-ru="Автоматическая обработка" data-en="Automatic processing">
          Автоматическая обработка
        </h3>
        <p data-ru="Файл проходит через автоматизированный pipeline."
           data-en="The file is processed through an automated pipeline.">
          Файл проходит через автоматизированный pipeline.
        </p>
      </div>

      <div class="info-card">
        <span class="info-icon">04</span>
        <h3 data-ru="Пакетная обработка" data-en="Batch processing">
          Пакетная обработка
        </h3>
        <p data-ru="Возможна обработка партий от 10 до 50 файлов."
           data-en="Batch processing is available for 10 to 50 files.">
          Возможна обработка партий от 10 до 50 файлов.
        </p>
      </div>
    </div>
  </section>

  <section class="content-section">
    <div class="section-heading">
      <div>
        <h2 data-ru="Сравнение моделей" data-en="Model comparison">
          Сравнение моделей
        </h2>
        <p
          data-ru="Исходные и оптимизированные статичные GLB-модели."
          data-en="Source and optimized static GLB models.">
          Исходные и оптимизированные статичные GLB-модели.
        </p>
      </div>
    </div>

    <div class="models-list">
      {% for model in site.data.models %}
      <article class="model-comparison">
        <div class="model-title">
          <h3 class="model-name"
              data-title-ru="{{ model.title_ru }}"
              data-title-en="{{ model.title_en }}">
            {{ model.title_ru }}
          </h3>

          <span class="reduction-badge">
            {{ model.reduction }}
          </span>
        </div>

        <div class="viewer-grid">
          <div class="viewer-card">
            <div class="viewer-header">
              <span data-ru="До обработки" data-en="Before optimization">
                До обработки
              </span>
              <strong>{{ model.source_size }}</strong>
            </div>

            <model-viewer
              class="model-viewer"
              src="{{ site.data.site.storage_base_url }}/{{ model.source_file }}"
              alt="{{ model.title_en }} source model"
              crossorigin="anonymous"
              camera-controls
              auto-rotate
              shadow-intensity="1"
              exposure="1">
            </model-viewer>

            <div class="viewer-controls">
              <button class="viewer-button reset-camera" type="button">
                <span data-ru="Сбросить камеру" data-en="Reset camera">
                  Сбросить камеру
                </span>
              </button>

              <button class="viewer-button fullscreen-button" type="button">
                <span data-ru="На весь экран" data-en="Fullscreen">
                  На весь экран
                </span>
              </button>
            </div>

            <div class="technical-data">
              <div>
                <span data-ru="Полигоны" data-en="Polygons">Полигоны</span>
                <strong>{{ model.polygons_source }}</strong>
              </div>

              <div>
                <span data-ru="Материалы" data-en="Materials">Материалы</span>
                <strong>{{ model.materials_source }}</strong>
              </div>

              <div>
                <span data-ru="Текстуры" data-en="Textures">Текстуры</span>
                <strong>{{ model.textures_source }}</strong>
              </div>
            </div>
          </div>

          <div class="viewer-card optimized-card">
            <div class="viewer-header">
              <span data-ru="После обработки" data-en="After optimization">
                После обработки
              </span>
              <strong>{{ model.optimized_size }}</strong>
            </div>

            <model-viewer
              class="model-viewer"
              src="{{ site.data.site.storage_base_url }}/{{ model.optimized_file }}"
              alt="{{ model.title_en }} optimized model"
              crossorigin="anonymous"
              camera-controls
              auto-rotate
              shadow-intensity="1"
              exposure="1">
            </model-viewer>

            <div class="viewer-controls">
              <button class="viewer-button reset-camera" type="button">
                <span data-ru="Сбросить камеру" data-en="Reset camera">
                  Сбросить камеру
                </span>
              </button>

              <button class="viewer-button fullscreen-button" type="button">
                <span data-ru="На весь экран" data-en="Fullscreen">
                  На весь экран
                </span>
              </button>

             <a
                class="viewer-button download-button"
                href="{{ site.data.site.storage_base_url }}/{{ model.optimized_file }}"
                download>
                <span data-ru="Скачать GLB" data-en="Download GLB">
                  Скачать GLB
                </span>
              </a>
            </div>

            <div class="technical-data">
              <div>
                <span data-ru="Полигоны" data-en="Polygons">Полигоны</span>
                <strong>{{ model.polygons_optimized }}</strong>
              </div>

              <div>
                <span data-ru="Материалы" data-en="Materials">Материалы</span>
                <strong>{{ model.materials_optimized }}</strong>
              </div>

              <div>
                <span data-ru="Текстуры" data-en="Textures">Текстуры</span>
                <strong>{{ model.textures_optimized }}</strong>
              </div>
            </div>
          </div>
        </div>
      </article>
      {% endfor %}
    </div>
  </section>

  <section class="content-section">
    <h2 data-ru="Ограничения" data-en="Limitations">Ограничения</h2>

    <div class="limitations-box">
      <ul>
        <li data-ru="Принимаются только готовые OBJ и GLB-файлы."
            data-en="Only ready-made OBJ and GLB files are accepted.">
          Принимаются только готовые OBJ и GLB-файлы.
        </li>

        <li data-ru="Выходной формат — GLB."
            data-en="The output format is GLB.">
          Выходной формат — GLB.
        </li>

        <li data-ru="Ручное моделирование и редактирование моделей не выполняются."
            data-en="Manual modeling and manual model editing are not provided.">
          Ручное моделирование и редактирование моделей не выполняются.
        </li>

        <li data-ru="Анимации и риггинг не поддерживаются."
            data-en="Animations and rigging are not supported.">
          Анимации и риггинг не поддерживаются.
        </li>

        <li data-ru="Фактический результат зависит от исходного файла."
            data-en="The actual result depends on the source file.">
          Фактический результат зависит от исходного файла.
        </li>
      </ul>
    </div>
  </section>

  <section class="content-section pricing-section">
    <h2 data-ru="Ориентировочная стоимость" data-en="Estimated pricing">
      Ориентировочная стоимость
    </h2>

    <div class="pricing-grid">
      <div class="price-card">
        <h3 data-ru="Пакет 10 файлов" data-en="10-file package">
          Пакет 10 файлов
        </h3>
        <strong class="price-value ru-price">{{ site.data.site.price_10_ru }}</strong>
        <strong class="price-value en-price">{{ site.data.site.price_10_en }}</strong>
      </div>

      <div class="price-card">
        <h3 data-ru="Пакет 50 файлов" data-en="50-file package">
          Пакет 50 файлов
        </h3>
        <strong class="price-value ru-price">{{ site.data.site.price_50_ru }}</strong>
        <strong class="price-value en-price">{{ site.data.site.price_50_en }}</strong>
      </div>
    </div>
  </section>

  <section class="contact-section">
    <h2 data-ru="Связаться со мной" data-en="Contact me">
      Связаться со мной
    </h2>

    <p
      data-ru="Если вам нужно обработать партию готовых OBJ или GLB-моделей, напишите мне."
      data-en="If you need to process a batch of ready-made OBJ or GLB models, contact me.">
      Если вам нужно обработать партию готовых OBJ или GLB-моделей, напишите мне.
    </p>

    <div class="contact-actions">
      <a class="pill-button primary" href="{{ site.data.site.telegram_url }}" target="_blank" rel="noopener">
        Telegram
      </a>

      <a class="pill-button" href="mailto:{{ site.data.site.email }}">
        Email
      </a>
    </div>
  </section>

</main>

<footer class="site-footer">
  <p>© {{ site.data.site.brand }}</p>
</footer>

<script src="{{ '/assets/js/viewer.js' | relative_url }}"></script>
