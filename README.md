<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>GLB Optimization Demo</title>

  <script type="module"
    src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js">
  </script>

  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      color: #171717;
      background: #f5f5f5;
    }

    main {
      max-width: 1100px;
      margin: 0 auto;
      padding: 40px 20px;
    }

    .comparison {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    .card {
      background: white;
      border-radius: 12px;
      padding: 16px;
    }

    model-viewer {
      width: 100%;
      height: 420px;
      background: #eeeeee;
      border-radius: 8px;
    }

    @media (max-width: 700px) {
      .comparison {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>

<body>
  <main>
    <h1>Автоматическая оптимизация GLB</h1>

    <p>
      Сравнение исходной и облегчённой статичной 3D-модели.
      Обработка выполняется автоматически.
    </p>

    <section class="comparison">
      <div class="card">
        <h2>До обработки</h2>
        <p>42,8 МБ</p>

        <model-viewer
          src="models/source.glb"
          alt="Исходная модель"
          camera-controls
          auto-rotate>
        </model-viewer>
      </div>

      <div class="card">
        <h2>После обработки</h2>
        <p>8,1 МБ — уменьшение 81%</p>

        <model-viewer
          src="models/optimized.glb"
          alt="Оптимизированная модель"
          camera-controls
          auto-rotate>
        </model-viewer>
      </div>
    </section>

    <h2>Условия</h2>
    <p>
      Принимаются готовые OBJ и GLB. Ручное моделирование,
      редактирование геометрии, анимации и риггинг не выполняются.
    </p>

    <p>
      Для обработки 10–50 файлов напишите:
      <a href="mailto:you@example.com">you@example.com</a>
    </p>
  </main>
</body>
</html>
