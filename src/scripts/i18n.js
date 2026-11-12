/* ==========================================================================
   Portfolio · Angel Moreyra
   Sistema de internacionalización (ES / EN)
   ========================================================================== */

(() => {
  'use strict';

  const STORAGE_KEY = 'lang';
  const DEFAULT_LANG = 'es';
  const SUPPORTED_LANGS = ['es', 'en'];

  const translations = {
    es: {
      'meta.title': 'Angel Moreyra | Data Engineer & Cloud Developer',
      'meta.description': 'Portfolio profesional de Angel Moreyra, Data Engineer especializado en Azure, PySpark, SQL y Python.',
      'meta.ogDescription': 'Ingeniería de datos, Azure Cloud y Big Data.',

      'a11y.home': 'Ir al inicio',
      'a11y.mainNav': 'Navegación principal',
      'a11y.sendEmail': 'Enviar email',
      'a11y.themeDark': 'Activar tema oscuro',
      'a11y.themeLight': 'Activar tema claro',
      'a11y.langToEn': 'Cambiar a inglés',
      'a11y.langToEs': 'Cambiar a español',

      'nav.about': 'Sobre mí',
      'nav.stack': 'Tecnologías',
      'nav.experience': 'Experiencia',
      'nav.projects': 'Proyectos',
      'nav.contact': 'Contacto',
      'header.contact': 'Contactar',

      'hero.badge': 'Disponible para nuevas oportunidades',
      'hero.lead': 'Diseño e implemento pipelines de datos y procesos ETL/ELT utilizando Python, PySpark, SQL y servicios de Azure. Me enfoco en construir soluciones escalables, automatizadas y eficientes para el procesamiento de datos.',
      'hero.projects': 'Ver proyectos',
      'hero.copyEmail': 'Copiar email',
      'hero.downloadCv': 'Descargar CV',
      'hero.photoAlt': 'Fotografía de Angel Moreyra',
      'hero.mainTech': 'Tecnologías principales',

      'about.title': 'Sobre mí',
      'about.p1': 'Soy desarrollador especializado en ingeniería de datos, con formación como Técnico Superior en Desarrollo de Aplicaciones Multiplataforma y estudios universitarios en Ingeniería de Software. Cuento con experiencia en el desarrollo de procesos de ingesta, transformación y modelado de datos en entornos cloud.',
      'about.p2': 'Me interesa la optimización de procesos, la calidad del dato y el diseño de arquitecturas que permitan transformar información en soluciones útiles para el negocio.',

      'stack.title': 'Stack tecnológico',
      'stack.lead': 'Tecnologías y herramientas utilizadas en proyectos de ingeniería de datos y desarrollo de software.',
      'stack.languages': 'Lenguajes',
      'stack.cloud': 'Cloud & Big Data',
      'stack.databases': 'Bases de datos',
      'stack.tools': 'Herramientas',

      'experience.title': 'Experiencia técnica',
      'experience.lead': 'Áreas en las que he trabajado y conocimientos aplicados en proyectos.',
      'experience.1.title': 'Arquitectura Medallion y modelado dimensional',
      'experience.1.desc': 'Organización de la ingesta y transformación en capas Bronze, Silver y Gold, con modelos estrella y copo de nieve en la capa Gold para el consumo analítico.',
      'experience.2.title': 'Orquestación ETL/ELT',
      'experience.2.desc': 'Automatización de flujos de ingesta y transformación con Azure Data Factory y Azure Functions, integrando orígenes CSV, JSON y bases de datos hacia el Data Lake.',
      'experience.3.title': 'Optimización de PySpark y SQL',
      'experience.3.desc': 'Transformación de datos con PySpark y SQL, optimizando consultas y reduciendo operaciones costosas como joins y shuffles según el volumen de datos.',
      'experience.4.title': 'CI/CD y trabajo ágil',
      'experience.4.desc': 'Control de versiones con Git, gestión del trabajo con Jira y Azure Boards, y aplicación de prácticas de integración y despliegue continuo.',

      'projects.title': 'Proyectos destacados',
      'projects.lead': 'Una selección de proyectos de ingeniería de datos y desarrollo de software.',

      'project1.tag': 'Modernización de datos · Migración legacy',
      'project1.title': 'Migración de gestión de existencias y caducidades',
      'project1.desc': 'Migración de la lógica de negocio de gestión de existencias y caducidades desde paquetes PL/SQL en Oracle hacia el ecosistema de datos de Azure.',
      'project1.b1': 'Análisis funcional y técnico de los paquetes PL/SQL para identificar la lógica de negocio y sus dependencias.',
      'project1.b2': 'Rediseño y desarrollo de los procesos como notebooks PySpark en Azure Synapse y Databricks.',
      'project1.b3': 'Persistencia de los resultados en Azure Data Lake para su explotación analítica.',
      'project1.visual.title': 'Migración de lógica de negocio',
      'project1.diagram.deps': 'Análisis de<br>dependencias',
      'project1.diagram.flow': 'Legacy → Rediseño → Procesamiento distribuido → Datos analíticos',

      'project2.tag': 'Ingeniería de datos',
      'project2.title': 'Motor de ingesta y procesamiento Cloud',
      'project2.desc': 'Diseño e implementación de pipelines automatizados para la ingesta de diferentes fuentes de datos. Transformación y organización de la información mediante Azure Functions y procesos PySpark, con almacenamiento en formatos orientados al análisis.',
      'project2.b1': 'Ingesta automatizada desde distintas fuentes de datos, como CSV y bases de datos.',
      'project2.b2': 'Transformación y organización de los datos con Azure Functions y PySpark.',
      'project2.b3': 'Almacenamiento en formatos orientados al análisis siguiendo la arquitectura Medallion.',
      'project2.visual.title': 'Flujo de procesamiento',
      'project2.visual.subtitle': 'Arquitectura de datos',
      'project2.diagram.source': 'Origen<br>CSV / BD',
      'project2.diagram.flow': 'Ingesta → Bronze → Silver → Gold → Consumo analítico',

      'project3.kicker': 'Procesamiento y orquestación',
      'project3.title': 'Motor de cálculo de facturación eléctrica',
      'project3.desc': 'Modificación de los procesos de cálculo de facturación eléctrica con Azure Functions (Scala y Python) y orquestación mediante pipelines de Azure Data Factory, con validación de datos en Hive e Impala.',

      'project4.kicker': 'Desarrollo de software',
      'project4.title': 'Sistema ERP y control de accesos',
      'project4.desc': 'Módulos web y móviles para gestión de inventario, control de dispositivos y administración de accesos, integrando interfaces de usuario con servicios y bases de datos.',

      'contact.title': '¿Hablamos?',
      'contact.lead': 'Estoy abierto a nuevas oportunidades en ingeniería de datos. Puedes contactar conmigo por email o LinkedIn.',
      'contact.linkedin': 'Perfil de LinkedIn',
      'contact.downloadCv': 'Descargar CV',

      'footer.rights': 'Angel Moreyra. Todos los derechos reservados.',
      'footer.location': 'Data Engineer · Madrid, España',

      'toast.default': 'Acción realizada',
      'toast.emailCopied': '¡Email copiado al portapapeles!',
      'toast.copyError': 'No se pudo copiar. Usa: {email}'
    },

    en: {
      'meta.title': 'Angel Moreyra | Data Engineer & Cloud Developer',
      'meta.description': 'Professional portfolio of Angel Moreyra, Data Engineer specialized in Azure, PySpark, SQL and Python.',
      'meta.ogDescription': 'Data engineering, Azure Cloud and Big Data.',

      'a11y.home': 'Go to the top',
      'a11y.mainNav': 'Main navigation',
      'a11y.sendEmail': 'Send email',
      'a11y.themeDark': 'Enable dark theme',
      'a11y.themeLight': 'Enable light theme',
      'a11y.langToEn': 'Switch to English',
      'a11y.langToEs': 'Switch to Spanish',

      'nav.about': 'About me',
      'nav.stack': 'Tech stack',
      'nav.experience': 'Experience',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      'header.contact': 'Get in touch',

      'hero.badge': 'Available for new opportunities',
      'hero.lead': 'I design and implement data pipelines and ETL/ELT processes using Python, PySpark, SQL and Azure services. I focus on building scalable, automated and efficient solutions for data processing.',
      'hero.projects': 'View projects',
      'hero.copyEmail': 'Copy email',
      'hero.downloadCv': 'Download CV',
      'hero.photoAlt': 'Photograph of Angel Moreyra',
      'hero.mainTech': 'Core technologies',

      'about.title': 'About me',
      'about.p1': 'I am a developer specialized in data engineering, with a Higher Technician degree in Multiplatform Application Development and university studies in Software Engineering. I have experience developing data ingestion, transformation and modeling processes in cloud environments.',
      'about.p2': 'I am interested in process optimization, data quality and the design of architectures that turn information into useful solutions for the business.',

      'stack.title': 'Tech stack',
      'stack.lead': 'Technologies and tools used in data engineering and software development projects.',
      'stack.languages': 'Languages',
      'stack.cloud': 'Cloud & Big Data',
      'stack.databases': 'Databases',
      'stack.tools': 'Tools',

      'experience.title': 'Technical experience',
      'experience.lead': 'Areas I have worked in and knowledge applied to projects.',
      'experience.1.title': 'Medallion architecture and dimensional modeling',
      'experience.1.desc': 'Organization of ingestion and transformation into Bronze, Silver and Gold layers, with star and snowflake models in the Gold layer for analytical consumption.',
      'experience.2.title': 'ETL/ELT orchestration',
      'experience.2.desc': 'Automation of ingestion and transformation workflows with Azure Data Factory and Azure Functions, integrating CSV, JSON and database sources into the Data Lake.',
      'experience.3.title': 'PySpark and SQL optimization',
      'experience.3.desc': 'Data transformation with PySpark and SQL, optimizing queries and reducing costly operations such as joins and shuffles depending on data volume.',
      'experience.4.title': 'CI/CD and agile work',
      'experience.4.desc': 'Version control with Git, work management with Jira and Azure Boards, and application of continuous integration and deployment practices.',

      'projects.title': 'Featured projects',
      'projects.lead': 'A selection of data engineering and software development projects.',

      'project1.tag': 'Data modernization · Legacy migration',
      'project1.title': 'Inventory and expiration management migration',
      'project1.desc': 'Migration of inventory and expiration management business logic from PL/SQL packages in Oracle to the Azure data ecosystem.',
      'project1.b1': 'Functional and technical analysis of the PL/SQL packages to identify business logic and dependencies.',
      'project1.b2': 'Redesign and development of the processes as PySpark notebooks in Azure Synapse and Databricks.',
      'project1.b3': 'Persistence of the results in Azure Data Lake for analytical use.',
      'project1.visual.title': 'Business logic migration',
      'project1.diagram.deps': 'Dependency<br>analysis',
      'project1.diagram.flow': 'Legacy → Redesign → Distributed processing → Analytical data',

      'project2.tag': 'Data engineering',
      'project2.title': 'Cloud ingestion and processing engine',
      'project2.desc': 'Design and implementation of automated pipelines for ingesting different data sources. Transformation and organization of information using Azure Functions and PySpark processes, with storage in analysis-oriented formats.',
      'project2.b1': 'Automated ingestion from different data sources, such as CSV files and databases.',
      'project2.b2': 'Transformation and organization of data with Azure Functions and PySpark.',
      'project2.b3': 'Storage in analysis-oriented formats following the Medallion architecture.',
      'project2.visual.title': 'Processing flow',
      'project2.visual.subtitle': 'Data architecture',
      'project2.diagram.source': 'Source<br>CSV / DB',
      'project2.diagram.flow': 'Ingestion → Bronze → Silver → Gold → Analytical consumption',

      'project3.kicker': 'Processing and orchestration',
      'project3.title': 'Electricity billing calculation engine',
      'project3.desc': 'Modification of electricity billing calculation processes with Azure Functions (Scala and Python) and orchestration through Azure Data Factory pipelines, with data validation in Hive and Impala.',

      'project4.kicker': 'Software development',
      'project4.title': 'ERP system and access control',
      'project4.desc': 'Web and mobile modules for inventory management, device control and access administration, integrating user interfaces with services and databases.',

      'contact.title': "Let's talk",
      'contact.lead': 'I am open to new opportunities in data engineering. You can contact me by email or LinkedIn.',
      'contact.linkedin': 'LinkedIn profile',
      'contact.downloadCv': 'Download CV',

      'footer.rights': 'Angel Moreyra. All rights reserved.',
      'footer.location': 'Data Engineer · Madrid, Spain',

      'toast.default': 'Action completed',
      'toast.emailCopied': 'Email copied to clipboard!',
      'toast.copyError': 'Could not copy. Use: {email}'
    }
  };

  const root = document.documentElement;
  let currentLang = DEFAULT_LANG;

  function getSavedLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return SUPPORTED_LANGS.includes(saved) ? saved : DEFAULT_LANG;
    } catch (error) {
      return DEFAULT_LANG;
    }
  }

  function saveLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      // La página sigue funcionando aunque el navegador bloquee localStorage.
    }
  }

  function translate(key, vars) {
    const dict = translations[currentLang];
    let value = dict[key] ?? translations[DEFAULT_LANG][key] ?? key;

    if (vars) {
      Object.keys(vars).forEach((name) => {
        value = value.replace(new RegExp('\\{' + name + '\\}', 'g'), vars[name]);
      });
    }

    return value;
  }

  function setMeta(attribute, name, content) {
    const element = document.querySelector('meta[' + attribute + '="' + name + '"]');
    if (element) {
      element.setAttribute('content', content);
    }
  }

  function applyLanguage(lang, options = {}) {
    currentLang = SUPPORTED_LANGS.includes(lang) ? lang : DEFAULT_LANG;
    const dict = translations[currentLang];

    root.setAttribute('lang', currentLang);

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const value = dict[element.dataset.i18n];
      if (typeof value === 'string') {
        element.textContent = value;
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach((element) => {
      const value = dict[element.dataset.i18nHtml];
      if (typeof value === 'string') {
        element.innerHTML = value;
      }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
      const value = dict[element.dataset.i18nAria];
      if (typeof value === 'string') {
        element.setAttribute('aria-label', value);
      }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
      const value = dict[element.dataset.i18nAlt];
      if (typeof value === 'string') {
        element.setAttribute('alt', value);
      }
    });

    document.title = translate('meta.title');
    setMeta('name', 'description', translate('meta.description'));
    setMeta('property', 'og:description', translate('meta.ogDescription'));

    const langButton = document.getElementById('lang-toggle');
    const langLabel = document.getElementById('lang-label');
    const nextLang = currentLang === 'es' ? 'en' : 'es';

    if (langLabel) {
      langLabel.textContent = nextLang.toUpperCase();
    }

    if (langButton) {
      const label = translate(nextLang === 'en' ? 'a11y.langToEn' : 'a11y.langToEs');
      langButton.setAttribute('aria-label', label);
      langButton.setAttribute('title', label);
    }

    if (options.persist !== false) {
      saveLang(currentLang);
    }

    document.dispatchEvent(
      new CustomEvent('languagechange', { detail: { lang: currentLang } })
    );
  }

  function init() {
    applyLanguage(getSavedLang(), { persist: false });

    const langButton = document.getElementById('lang-toggle');
    if (langButton) {
      langButton.addEventListener('click', () => {
        applyLanguage(currentLang === 'es' ? 'en' : 'es');
      });
    }
  }

  window.i18n = {
    t: translate,
    applyLanguage,
    getLang: () => currentLang
  };

  init();
})();
