---
layout: default
title: Fendex — GLB Optimization
---

<script
  type="module"
  src="{{ '/assets/js/model-viewer.min.js' | relative_url }}">
</script>

<script>
  customElements.whenDefined("model-viewer").then(() => {
    const ModelViewer = customElements.get("model-viewer");

    ModelViewer.meshoptDecoderLocation =
      "{{ '/assets/js/meshopt_decoder.js' | relative_url }}";
  });
</script>

<header class="site-header">
  <div class="header-inner">
    <a class="brand" href="{{ '/' | relative_url }}">
      {{ site.data.site.brand }}
    </a>

    <div class="header-actions">
      <button
        class="language-button active"
        data-language="ru"
        type="button">
        RU
      </button>

      <button
        class="language-button"
        data-language="en"
        type="button">
        EN
      </button>

      <button
        class="theme-button"
        id="theme-toggle"
        type="button"
        aria-label="Toggle theme">
        ☾
      </button>
    </div>
  </div>
</header>

<main class="page-content">

  <section class="hero-section">

    <div
      class="hero-badge"
      data-ru="Демонстрационное портфолио"
      data-en="Demonstration portfolio">
      Демонстрационное портфолио
    </div>

    <h1
      data-ru="Автоматическая оптимизация 3D-моделей"
      data-en="Automatic 3D Model Optimization">
      Автоматическая оптимизация 3D-моделей
    </h1>

    <p
      class="hero-subtitle"
      data-ru="Получение облегчённых GLB из готовых OBJ, GLB, FBX, BLEND и STL-моделей для WebGL и WebAR."
      data-en="Lightweight GLB files from ready-made OBJ, GLB, FBX, BLEND and STL models for WebGL and WebAR.">
      Получение облегчённых GLB из готовых OBJ, GLB, FBX, BLEND и STL-моделей для WebGL и WebAR.
    </p>

    <div class="hero-actions">

      <button
        class="pill-button primary copy-email-button"
        type="button"
        data-copy-text="{{ site.data.site.email }}">
        <span
          data-ru="Скопировать Email"
          data-en="Copy Email">
          Скопировать Email
        </span>
      </button>

      <a
        class="pill-button"
        href="{{ site.data.site.telegram_url }}"
        target="_blank"
        rel="noopener">
        Telegram
      </a>

    </div>

    <p
      class="demo-note"
      data-ru="Это демонстрационная страница. Загрузка и обработка файлов здесь не выполняются."
      data-en="This is a demonstration page. Files are not uploaded or processed here.">
      Это демонстрационная страница. Загрузка и обработка файлов здесь не выполняются.
    </p>

  </section>

  <section class="content-section">

    <h2
      data-ru="Что я делаю"
      data-en="What I do">
      Что я делаю
    </h2>

    <div class="info-grid">

      <div class="info-card">
        <span class="info-icon">01</span>

        <h3
          data-ru="Входные форматы"
          data-en="Input formats">
          Входные форматы
        </h3>

        <p
          data-ru="Готовые файлы OBJ, GLB, FBX, BLEND и STL."
          data-en="Ready-made OBJ, GLB, FBX and STL files.">
          Готовые файлы OBJ, GLB, FBX и STL.
        </p>
      </div>

      <div class="info-card">
        <span class="info-icon">02</span>

        <h3
          data-ru="Выходной формат"
          data-en="Output format">
          Выходной формат
        </h3>

        <p
          data-ru="Облегчённый GLB для браузерных проектов."
          data-en="Lightweight GLB for browser-based projects.">
          Облегчённый GLB для браузерных проектов.
        </p>
      </div>

      <div class="info-card">
        <span class="info-icon">03</span>

        <h3
          data-ru="Автоматическая обработка"
          data-en="Automatic processing">
          Автоматическая обработка
        </h3>

        <p
          data-ru="Файл проходит через автоматизированный pipeline."
          data-en="The file is processed through an automated pipeline.">
          Файл проходит через автоматизированный pipeline.
        </p>
      </div>

      <div class="info-card">
        <span class="info-icon">04</span>

        <h3
          data-ru="От одного файла"
          data-en="From one file">
          От одного файла
        </h3>

        <p
          data-ru="Можно начать с одного файла. Крупные партии согласовываются отдельно."
          data-en="You can start with one file. Larger batches are agreed separately.">
          Можно начать с одного файла. Крупные партии согласовываются отдельно.
        </p>
      </div>

    </div>
  </section>

  <section class="content-section">

    <div class="section-heading">

      <h2
        data-ru="Сравнение моделей"
        data-en="Model comparison">
        Сравнение моделей
      </h2>

      <p
        data-ru="Исходные и оптимизированные статичные GLB-модели."
        data-en="Source and optimized static GLB models.">
        Исходные и оптимизированные статичные GLB-модели.
      </p>

    </div>

    <div class="models-list">

      {% for model in site.data.models %}

      {% assign source_url = site.data.site.storage_base_url
        | append: "/"
        | append: model.source_file %}

      {% assign optimized_url = site.data.site.storage_base_url
        | append: "/"
        | append: model.optimized_file %}

      {% assign saved_size = model.source_size_mb
        | minus: model.optimized_size_mb %}

      {% assign reduction = saved_size
        | times: 100.0
        | divided_by: model.source_size_mb
        | round: 1 %}

      <article class="model-comparison">

        <div class="model-title">

          <h3
            class="model-name"
            data-title-ru="{{ model.title_ru }}"
            data-title-en="{{ model.title_en }}">
            {{ model.title_ru }}
          </h3>

          <span class="reduction-badge">
            -{{ reduction }}%
          </span>

        </div>

        <div class="viewer-grid">

          <div class="viewer-card">

            <div class="viewer-header">

              <span
                data-ru="До обработки"
                data-en="Before optimization">
                До обработки
              </span>

              <strong>
                {{ model.source_size_mb }} MB
              </strong>

            </div>

            <model-viewer
              class="model-viewer"
              src="{{ source_url }}"
              alt="{{ model.title_en }} source model"
              crossorigin="anonymous"
              loading="eager"
              reveal="auto"
              environment-image="neutral"
              camera-controls
              auto-rotate
              shadow-intensity="1"
              exposure="1">
            </model-viewer>

            <div class="viewer-controls">

              <button
                class="viewer-button reset-camera"
                type="button">
                <span
                  data-ru="Сбросить камеру"
                  data-en="Reset camera">
                  Сбросить камеру
                </span>
              </button>

              <button
                class="viewer-button fullscreen-button"
                type="button">
                <span
                  data-ru="На весь экран"
                  data-en="Fullscreen">
                  На весь экран
                </span>
              </button>

            </div>

            <div class="technical-data">

              <div>
                <span
                  data-ru="Полигоны"
                  data-en="Polygons">
                  Полигоны
                </span>

                <strong>
                  {{ model.polygons_source }}
                </strong>
              </div>

              <div>
                <span
                  data-ru="Материалы"
                  data-en="Materials">
                  Материалы
                </span>

                <strong>
                  {{ model.materials_source }}
                </strong>
              </div>

              <div>
                <span
                  data-ru="Текстуры"
                  data-en="Textures">
                  Текстуры
                </span>

                <strong>
                  {{ model.textures_source }}
                </strong>
              </div>

            </div>
          </div>

          <div class="viewer-card optimized-card">

            <div class="viewer-header">

              <span
                data-ru="После обработки"
                data-en="After optimization">
                После обработки
              </span>

              <strong>
                {{ model.optimized_size_mb }} MB
              </strong>

            </div>

            <model-viewer
              class="model-viewer"
              src="{{ optimized_url }}"
              alt="{{ model.title_en }} optimized model"
              crossorigin="anonymous"
              loading="eager"
              reveal="auto"
              environment-image="neutral"
              camera-controls
              auto-rotate
              shadow-intensity="1"
              exposure="1">
            </model-viewer>

            <div class="viewer-controls">

              <button
                class="viewer-button reset-camera"
                type="button">
                <span
                  data-ru="Сбросить камеру"
                  data-en="Reset camera">
                  Сбросить камеру
                </span>
              </button>

              <button
                class="viewer-button fullscreen-button"
                type="button">
                <span
                  data-ru="На весь экран"
                  data-en="Fullscreen">
                  На весь экран
                </span>
              </button>

              <a
                class="viewer-button download-button"
                href="{{ optimized_url }}"
                download>
                <span
                  data-ru="Скачать GLB"
                  data-en="Download GLB">
                  Скачать GLB
                </span>
              </a>

            </div>

            <div class="technical-data">

              <div>
                <span
                  data-ru="Полигоны"
                  data-en="Polygons">
                  Полигоны
                </span>

                <strong>
                  {{ model.polygons_optimized }}
                </strong>
              </div>

              <div>
                <span
                  data-ru="Материалы"
                  data-en="Materials">
                  Материалы
                </span>

                <strong>
                  {{ model.materials_optimized }}
                </strong>
              </div>

              <div>
                <span
                  data-ru="Текстуры"
                  data-en="Textures">
                  Текстуры
                </span>

                <strong>
                  {{ model.textures_optimized }}
                </strong>
              </div>

            </div>
          </div>

        </div>
      </article>

      {% endfor %}

    </div>
  </section>

  <section class="content-section">

    <h2
      data-ru="Ограничения"
      data-en="Limitations">
      Ограничения
    </h2>

    <div class="limitations-box">

      <ul>

        <li
          data-ru="Принимаются готовые OBJ, GLB, FBX, BLEND и STL-файлы."
          data-en="Ready-made OBJ, GLB, FBX, BLEND and STL files are accepted.">
          Принимаются готовые OBJ, GLB, FBX, BLEND и STL-файлы.
        </li>

        <li
          data-ru="Выходной формат — GLB."
          data-en="The output format is GLB.">
          Выходной формат — GLB.
        </li>

        <li
          data-ru="Обработка возможна от одного файла. Крупные партии согласовываются отдельно."
          data-en="Processing is available from one file. Larger batches are agreed separately.">
          Обработка возможна от одного файла. Крупные партии согласовываются отдельно.
        </li>

        <li
          data-ru="Ручное моделирование и ручное редактирование моделей не выполняются."
          data-en="Manual modeling and manual model editing are not provided.">
          Ручное моделирование и ручное редактирование моделей не выполняются.
        </li>

        <li
          data-ru="Анимации и риггинг не поддерживаются."
          data-en="Animations and rigging are not supported.">
          Анимации и риггинг не поддерживаются.
        </li>

        <li
          data-ru="Фактический результат зависит от исходного файла."
          data-en="The actual result depends on the source file.">
          Фактический результат зависит от исходного файла.
        </li>

        <li
          data-ru="Для Meshopt-сжатых файлов целевой просмотрщик должен поддерживать Meshopt-декодирование."
          data-en="For Meshopt-compressed files, the target viewer must support Meshopt decoding.">
          Для Meshopt-сжатых файлов целевой просмотрщик должен поддерживать Meshopt-декодирование.
        </li>

      </ul>

    </div>
  </section>

  <section class="content-section pricing-section">

    <h2
      data-ru="Ориентировочная стоимость"
      data-en="Estimated pricing">
      Ориентировочная стоимость
    </h2>

    <div class="pricing-grid">

      <div class="price-card">

        <h3
          data-ru="От одного файла"
          data-en="From one file">
          От одного файла
        </h3>

        <strong class="price-value ru-price">
          {{ site.data.site.price_10_ru }}
        </strong>

        <strong class="price-value en-price">
          {{ site.data.site.price_10_en }}
        </strong>

      </div>

      <div class="price-card">

        <h3
          data-ru="Большие партии (50 моделей)"
          data-en="Larger batches (50 models)">
          Большие партии
        </h3>

        <strong class="price-value ru-price">
          {{ site.data.site.price_50_ru }}
        </strong>

        <strong class="price-value en-price">
          {{ site.data.site.price_50_en }}
        </strong>

      </div>

    </div>
  </section>

  <section class="contact-section">

    <h2
      data-ru="Связаться со мной"
      data-en="Contact me">
      Связаться со мной
    </h2>

    <p
      data-ru="Если вам нужно обработать один или несколько готовых 3D-файлов, напишите мне."
      data-en="If you need to process one or more ready-made 3D files, contact me.">
      Если вам нужно обработать один или несколько готовых 3D-файлов, напишите мне.
    </p>

    <div class="contact-actions">

      <button
        class="pill-button primary copy-email-button"
        type="button"
        data-copy-text="{{ site.data.site.email }}">
        Email
      </button>

      <a
        class="pill-button"
        href="{{ site.data.site.telegram_url }}"
        target="_blank"
        rel="noopener">
        Telegram
      </a>

    </div>
  </section>

</main>

<footer class="site-footer">
  <p>
    © {{ site.data.site.brand }}
  </p>
</footer>

<script src="{{ '/assets/js/viewer.js' | relative_url }}"></script>