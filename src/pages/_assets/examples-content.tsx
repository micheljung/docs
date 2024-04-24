import { PropTypes } from "../../components/Examples/example-list"

export const basic: PropTypes = {
  id: "basic",
  title: "Basic examples",
  description:
    "Guides, tutorials, and configurations for using Ory services. Examples are maintained by the Ory team.",
  examples: [
    {
      title: "Protect a page with login: Next.js/React",
      language: "nextjs",
      languageLogoAlt: "Next.js logo",
      author: "ory",
      tested: true,
      repo: "https://github.com/ory/docs/tree/master/code-examples/protect-page-login/nextjs",
      docs: "https://www.ory.sh/docs/getting-started/integrate-auth/nextjs",
    },
    {
      title: "Protect a page with login: React",
      language: "react",
      languageLogoAlt: "React logo",
      author: "ory",
      tested: true,
      repo: "https://github.com/ory/docs/tree/master/code-examples/protect-page-login/react",
      docs: "https://www.ory.sh/docs/getting-started/integrate-auth/react",
    },
    {
      title: "Protect a Page with Login: React Native",
      language: "react",
      languageLogoAlt: "React logo",
      author: "ory",
      tested: true,
      repo: "https://github.com/ory/kratos-selfservice-ui-react-native",
      docs: "https://www.ory.sh/docs/getting-started/integrate-auth/react-native",
    },
    {
      title: "Protect a page with login: Express.js",
      language: "typescript",
      languageLogoAlt: "TypeScript logo",
      author: "ory",
      tested: true,
      repo: "https://github.com/ory/docs/tree/master/code-examples/protect-page-login/expressjs",
      docs: "https://www.ory.sh/docs/getting-started/integrate-auth/expressjs",
    },
    {
      title: "Protect a page with login: Go",
      language: "go",
      languageLogoAlt: "Go logo",
      author: "ory",
      tested: true,
      repo: "https://github.com/ory/docs/tree/master/code-examples/protect-page-login/go",
      docs: "https://www.ory.sh/docs/getting-started/integrate-auth/go",
    },
    {
      title: "Protect a page with login: PHP",
      language: "php",
      languageLogoAlt: "PHP logo",
      author: "ory",
      tested: true,
      repo: "https://github.com/ory/docs/tree/master/code-examples/protect-page-login/php",
      docs: "https://www.ory.sh/docs/getting-started/integrate-auth/php",
    },
    {
      title: "Protect a page with login: Vue.js",
      language: "vue",
      languageLogoAlt: "Vue logo",
      author: "ory",
      tested: true,
      repo: "https://github.com/ory/docs/tree/master/code-examples/protect-page-login/vue",
      docs: "https://www.ory.sh/docs/getting-started/integrate-auth/vue",
    },
    {
      title: "Protect a page with login: Flutter",
      language: "flutter",
      languageLogoAlt: "Flutter logo",
      author: "ory",
      tested: true,
      repo: "https://github.com/ory/docs/tree/master/code-examples/protect-page-login/flutter_web_redirect",
      docs: "https://www.ory.sh/docs/getting-started/integrate-auth/flutter-web-redirect",
    },
    {
      title: "Protect a page with login: Django",
      language: "django",
      languageLogoAlt: "Django logo",
      author: "ory",
      tested: true,
      repo: "https://github.com/ory/examples/tree/master/django-ory-cloud",
      docs: "https://hauke.me/writing/2021-03-building-a-quarkus-application-with-ory-kratos/",
    },
    {
      title: "Protect a page with login: Flask",
      language: "python",
      languageLogoAlt: "Python logo",
      author: "ory",
      tested: true,
      repo: "https://github.com/ory/examples/tree/master/kratos-keto-flask",
      docs: "https://www.ory.sh/securing-flask-application-using-kratos-and-keto/",
    },
    {
      title: "Protect a page with login: .NET Core",
      language: "dotnet",
      languageLogoAlt: ".NET Core logo",
      author: "ory",
      tested: true,
      repo: "https://github.com/ory/docs/tree/master/code-examples/protect-page-login/dotnet",
      docs: "https://www.ory.sh/docs/getting-started/integrate-auth/dotnet",
    },
    {
      title: "Protect a page with login: ASP.NET Core",
      language: "dotnet",
      languageLogoAlt: ".NET Core logo",
      author: "ory",
      tested: false,
      repo: "https://github.com/ory/examples/tree/master/dotnet-ory-network",
      docs: "https://github.com/ory/examples/blob/master/dotnet-ory-network/README.md",
      description: "Advanced example",
    },
  ],
}

export const customui: PropTypes = {
  id: "customui",
  title: "Custom UI examples",
  description:
    "Guides, tutorials, and configurations for building a custom UI for Ory services. Examples are maintained by the Ory team.",
  examples: [
    {
      title: "Customize self-service UI: Node.js",
      language: "nodejs",
      languageLogoAlt: "Node.js logo",
      author: "ory",
      tested: true,
      repo: "https://github.com/ory/kratos-selfservice-ui-node",
      docs: "https://github.com/ory/kratos-selfservice-ui-node/blob/master/README.md",
    },
    {
      title: "Customize self-service UI: Next.js/React",
      language: "nextjs",
      languageLogoAlt: "Next.js logo",
      author: "ory",
      tested: true,
      repo: "https://github.com/ory/kratos-nextjs-react-example",
      docs: "https://www.ory.sh/nextjs-authentication-spa-custom-flows-open-source/",
    },
    {
      title: "Customize self-service UI: React Native",
      language: "react",
      languageLogoAlt: "React logo",
      author: "ory",
      tested: false,
      repo: "https://github.com/ory/kratos-selfservice-ui-react-native",
      docs: "https://www.ory.sh/login-react-native-authentication-example-api/",
    },
  ],
}

export const community: PropTypes = {
  id: "community",
  title: "Community examples",
  description:
    "Guides, tutorials, and configurations for using Ory services contributed by the Ory community.",
  examples: [
    {
      title: "Customize self-service UI: Flutter Web",
      language: "flutter",
      languageLogoAlt: "Flutter logo",
      author: "IGLU-Agency",
      tested: false,
      repo: "https://github.com/IGLU-Agency/iglu-ory-kratos-example",
      docs: "https://www.ory.sh/login-flutter-authentication-example-api-open-source/",
    },
    {
      title: "Protect a page with login: Quarkus",
      language: "quarkus",
      languageLogoAlt: "Quarkus logo",
      author: "hbrammer",
      tested: false,
      repo: "https://github.com/hbrammer/quarkus_kratos_example",
      docs: "https://hauke.me/writing/2021-03-building-a-quarkus-application-with-ory-kratos/",
    },
    {
      title: "Customize self-service UI: Vue.js",
      language: "vue",
      languageLogoAlt: "Vue logo",
      author: "timalanfarrow",
      tested: false,
      repo: "https://github.com/timalanfarrow/kratos-selfservice-ui-vue3-typescript",
      docs: "https://github.com/timalanfarrow/kratos-selfservice-ui-vue3-typescript/blob/main/README.md",
    },
    {
      title: "Customize self-service UI: Next.js",
      language: "nextjs",
      languageLogoAlt: "Next.js logo",
      author: "spa5k",
      tested: false,
      repo: "https://github.com/spa5k/kratos-next",
      docs: "https://github.com/spa5k/kratos-next/blob/main/README.md",
    },
    {
      title: "Customize self-service UI: Erlang",
      language: "erlang",
      languageLogoAlt: "Erlang logo",
      author: "hrefhref",
      tested: false,
      repo: "https://github.com/hrefhref/styx",
      docs: "https://github.com/hrefhref/styx/blob/main/README.md",
    },
    {
      title: "Customize self-service UI: Rescript",
      language: "rescript",
      languageLogoAlt: "Rescript logo",
      author: "allancalix",
      tested: false,
      repo: "https://github.com/allancalix/kratos-ui",
      docs: "https://github.com/allancalix/kratos-ui/blob/main/README.md",
    },
    {
      title: "Customize self-service UI: Svelte",
      language: "svelte",
      languageLogoAlt: "Svelte logo",
      author: "drejohnson",
      tested: false,
      repo: "https://github.com/drejohnson/sveltekit-kratos",
      docs: "https://github.com/drejohnson/sveltekit-kratos/blob/main/README.md",
    },
    {
      title: "Customize self-service UI: Svelte",
      language: "svelte",
      languageLogoAlt: "Svelte logo",
      author: "emrahcom",
      tested: false,
      repo: "https://github.com/emrahcom/kratos-selfservice-svelte-node",
      docs: "https://github.com/emrahcom/kratos-selfservice-svelte-node/blob/master/README.md",
    },
    {
      title: "Ory Hydra Reference Implementation - Java - Spring",
      language: "java",
      languageLogoAlt: "Java logo",
      author: "ardetrick",
      tested: false,
      repo: "https://github.com/ardetrick/ory-hydra-refrence-java",
      docs: "https://github.com/ardetrick/ory-hydra-refrence-java/blob/main/README.md",
    },
  ],
}
