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
      'hero.photoAlt': 'Fotografía de Angel Moreyra',
      'hero.mainTech': 'Tecnologías principales',

      'about.title': 'Sobre mí',
      'about.p1': 'Soy desarrollador especializado en ingeniería de datos, con formación como Técnico Superior en Desarrollo de Aplicaciones Multiplataforma y estudios universitarios en Ingeniería de Software. Cuento con experiencia en el desarrollo de procesos de ingesta, transformación y modelado de datos en entornos cloud.',
      'about.p2': 'Me interesa la optimización de procesos, la calidad del dato y el diseño de arquitecturas que permitan transformar información en soluciones útiles para el negocio.',

      'stack.title': 'Stack tecnológico',
      'stack.lead': 'Tecnologías y herramientas utilizadas en proyectos de ingeniería de datos, IA aplicada y desarrollo de software.',
      'stack.languages': 'Lenguajes',
      'stack.cloud': 'Cloud & Big Data',
      'stack.databases': 'Bases de datos',
      'stack.tools': 'Herramientas',
      'stack.ai': 'IA & RAG',

      'experience.title': 'Experiencia técnica',
      'experience.lead': 'Áreas en las que he trabajado y conocimientos aplicados en proyectos.',
      'experience.1.title': 'Arquitectura Medallion y modelado dimensional',
      'experience.1.desc': 'Organización de la ingesta y transformación en capas Bronze, Silver y Gold, con datos en formato Parquet, tablas externas y vistas en Azure Synapse, y modelos en estrella y copo de nieve en la capa Gold para consumo analítico.',
      'experience.2.title': 'Orquestación ETL/ELT',
      'experience.2.desc': 'Automatización de flujos de ingesta y transformación con Azure Data Factory y Azure Functions, integrando orígenes CSV, JSON y bases de datos hacia el Data Lake.',
      'experience.3.title': 'Optimización de PySpark y SQL',
      'experience.3.desc': 'Transformación de datos con PySpark y SQL, optimizando consultas y reduciendo operaciones costosas como joins y shuffles según el volumen de datos.',
      'experience.4.title': 'IA aplicada: RAG y Text-to-SQL',
      'experience.4.desc': 'Desarrollo de pipelines de búsqueda semántica con PostgreSQL (pgvector) y flujos RAG con LangChain y FastAPI, además de habilitar consultas Text-to-SQL sobre vistas analíticas en Azure Synapse mediante metadatos y reglas de seguridad.',

      'projects.title': 'Proyectos destacados',
      'projects.lead': 'Una selección de proyectos de ingeniería de datos e IA aplicada.',

      'project1.tag': 'Ingeniería de datos · Azure',
      'project1.title': 'Motor de ingesta con Azure Data Factory',
      'project1.desc': 'Diseño e implementación de pipelines de ingesta de datos con Azure Data Factory (ADF), automatizando la carga de fuentes CSV, JSON, bases de datos y otros orígenes hacia Azure Data Lake. Desarrollo de Azure Functions en Python y notebooks PySpark para transformaciones, con procesamiento y limpieza de datos en las capas Silver y Gold en formato Parquet.',
      'project1.b1': 'Ingesta automatizada de fuentes CSV, JSON, bases de datos y otros orígenes hacia Azure Data Lake mediante ADF.',
      'project1.b2': 'Transformación, procesamiento y limpieza de datos en capas Silver y Gold con Azure Functions (Python) y notebooks PySpark, almacenando en Parquet.',
      'project1.b3': 'Creación de tablas externas y vistas en Azure Synapse y diseño de esquemas en estrella y copo de nieve en la capa Gold para consultas eficientes.',
      'project1.visual.title': 'Flujo de ingesta y procesamiento',
      'project1.visual.subtitle': 'Arquitectura Medallion en Azure',
      'project1.diagram.source': 'Origen<br>CSV / JSON / BD',
      'project1.diagram.flow': 'ADF → Bronze → Silver/Gold (Parquet) → Synapse (tablas y vistas)',

      'project2.tag': 'IA aplicada · RAG & Text-to-SQL',
      'project2.title': 'Vector RAG y Text-to-SQL (MVP)',
      'project2.desc': 'MVP de IA aplicada que combina búsqueda semántica (RAG) y consultas en lenguaje natural sobre datos analíticos del sector energético.',
      'project2.b1': 'Pipelines en Python para procesar normativas y contratos energéticos, con almacenamiento y búsqueda vectorial en PostgreSQL (pgvector).',
      'project2.b2': 'Vistas analíticas en Azure Synapse y definición de metadatos y reglas de seguridad para habilitar consultas Text-to-SQL sobre consumo y facturación.',
      'project2.b3': 'Integración de flujos RAG con LangChain y FastAPI en colaboración con Data Science, y apoyo al equipo Full Stack en el modelado de datos en PostgreSQL e integración con Azure.',
      'project2.visual.title': 'Flujo RAG y Text-to-SQL',
      'project2.visual.subtitle': 'Búsqueda semántica y consulta analítica',
      'project2.diagram.source': 'Normativas<br>y contratos',
      'project2.diagram.flow': 'Embeddings → pgvector → RAG / Text-to-SQL → Respuesta analítica',

      'project3.kicker': 'Modernización de datos · Migración legacy',
      'project3.title': 'Migración de gestión de existencias y caducidades',
      'project3.desc': 'Migración de la lógica de negocio desde paquetes PL/SQL en Oracle hacia Azure, con rediseño e implementación en notebooks PySpark (Azure Synapse y Databricks) y persistencia de resultados en Azure Data Lake para su explotación analítica.',

      'project4.kicker': 'Desarrollo de software',
      'project4.title': 'Sistema ERP y control de accesos',
      'project4.desc': 'Módulos web y móviles para gestión de inventario, control de dispositivos y administración de accesos, integrando interfaces de usuario con servicios y bases de datos.',

      'contact.title': '¿Hablamos?',
      'contact.lead': 'Estoy abierto a nuevas oportunidades en ingeniería de datos. Puedes contactar conmigo por email o LinkedIn.',
      'contact.linkedin': 'Perfil de LinkedIn',

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
      'hero.photoAlt': 'Photograph of Angel Moreyra',
      'hero.mainTech': 'Core technologies',

      'about.title': 'About me',
      'about.p1': 'I am a developer specialized in data engineering, with a Higher Technician degree in Multiplatform Application Development and university studies in Software Engineering. I have experience developing data ingestion, transformation and modeling processes in cloud environments.',
      'about.p2': 'I am interested in process optimization, data quality and the design of architectures that turn information into useful solutions for the business.',

      'stack.title': 'Tech stack',
      'stack.lead': 'Technologies and tools used in data engineering, applied AI and software development projects.',
      'stack.languages': 'Languages',
      'stack.cloud': 'Cloud & Big Data',
      'stack.databases': 'Databases',
      'stack.tools': 'Tools',
      'stack.ai': 'AI & RAG',

      'experience.title': 'Technical experience',
      'experience.lead': 'Areas I have worked in and knowledge applied to projects.',
      'experience.1.title': 'Medallion architecture and dimensional modeling',
      'experience.1.desc': 'Organization of ingestion and transformation into Bronze, Silver and Gold layers, with data in Parquet format, external tables and views in Azure Synapse, and star and snowflake models in the Gold layer for analytical consumption.',
      'experience.2.title': 'ETL/ELT orchestration',
      'experience.2.desc': 'Automation of ingestion and transformation workflows with Azure Data Factory and Azure Functions, integrating CSV, JSON and database sources into the Data Lake.',
      'experience.3.title': 'PySpark and SQL optimization',
      'experience.3.desc': 'Data transformation with PySpark and SQL, optimizing queries and reducing costly operations such as joins and shuffles depending on data volume.',
      'experience.4.title': 'Applied AI: RAG and Text-to-SQL',
      'experience.4.desc': 'Development of semantic search pipelines with PostgreSQL (pgvector) and RAG workflows with LangChain and FastAPI, as well as enabling Text-to-SQL queries over analytical views in Azure Synapse through metadata and security rules.',

      'projects.title': 'Featured projects',
      'projects.lead': 'A selection of data engineering and applied AI projects.',

      'project1.tag': 'Data engineering · Azure',
      'project1.title': 'Ingestion engine with Azure Data Factory',
      'project1.desc': 'Design and implementation of data ingestion pipelines with Azure Data Factory (ADF), automating the loading of CSV, JSON, database and other sources into Azure Data Lake. Development of Python-based Azure Functions and PySpark notebooks for transformations, with data processing and cleansing across Silver and Gold layers in Parquet format.',
      'project1.b1': 'Automated ingestion of CSV, JSON, database and other sources into Azure Data Lake using ADF.',
      'project1.b2': 'Data transformation, processing and cleansing across Silver and Gold layers with Azure Functions (Python) and PySpark notebooks, storing data in Parquet.',
      'project1.b3': 'Creation of external tables and views in Azure Synapse and design of star and snowflake schemas in the Gold layer for efficient querying.',
      'project1.visual.title': 'Ingestion and processing flow',
      'project1.visual.subtitle': 'Medallion architecture on Azure',
      'project1.diagram.source': 'Source<br>CSV / JSON / DB',
      'project1.diagram.flow': 'ADF → Bronze → Silver/Gold (Parquet) → Synapse (tables and views)',

      'project2.tag': 'Applied AI · RAG & Text-to-SQL',
      'project2.title': 'Vector RAG and Text-to-SQL (MVP)',
      'project2.desc': 'An applied AI MVP combining semantic search (RAG) and natural language queries over analytical data in the energy sector.',
      'project2.b1': 'Python pipelines to process energy regulations and contracts, with vector storage and search in PostgreSQL (pgvector).',
      'project2.b2': 'Analytical views in Azure Synapse and definition of metadata and security rules to enable Text-to-SQL queries over consumption and billing data.',
      'project2.b3': 'Integration of RAG workflows with LangChain and FastAPI in collaboration with the Data Science team, and support for the Full Stack team on the PostgreSQL data model and Azure integration.',
      'project2.visual.title': 'RAG and Text-to-SQL flow',
      'project2.visual.subtitle': 'Semantic search and analytical querying',
      'project2.diagram.source': 'Regulations<br>and contracts',
      'project2.diagram.flow': 'Embeddings → pgvector → RAG / Text-to-SQL → Analytical response',

      'project3.kicker': 'Data modernization · Legacy migration',
      'project3.title': 'Inventory and expiration management migration',
      'project3.desc': 'Migration of business logic from PL/SQL packages in Oracle to Azure, with redesign and implementation in PySpark notebooks (Azure Synapse and Databricks) and persistence of results in Azure Data Lake for analytical use.',

      'project4.kicker': 'Software development',
      'project4.title': 'ERP system and access control',
      'project4.desc': 'Web and mobile modules for inventory management, device control and access administration, integrating user interfaces with services and databases.',

      'contact.title': "Let's talk",
      'contact.lead': 'I am open to new opportunities in data engineering. You can contact me by email or LinkedIn.',
      'contact.linkedin': 'LinkedIn profile',

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
