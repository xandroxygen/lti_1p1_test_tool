# LTI 1.1 Test Tool

This test tool is very barebones and has only the most basic functionality needed
for testing Canvas's LTI 1.1 support.

## Canvas Installation and Usage

Navigate to https://lti-1p1-test-tool.vercel.app/ and configure your tool
the way you want it. Fields left blank will use defaults. Course Navigation is the
only default placement, so add more if you want them. Once you're ready, copy the
XML from the bottom of the page.

In a Canvas course or account, navigate to Settings -> Apps -> + App -> Paste XML.
Give the tool a name (I prefer LTI 1.1 Test Tool) and put `key` for the Consumer
Key and `secret` for the Shared Secret, and paste the XML in the XML box.

Save the tool and then reload the page. `LTI 1.1 Test Tool` should be a new option
in the course nav sidebar. Launch it and you will be able to see all the launch
parameters.

Built with Remix

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
cp .env.example .env
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.
Note that your tool url and domain will now be `localhost:2918` instead of the
deployed url and domain.

## Configuring with Canvas

For LTI 1.1: navigate to this tool's home page (usually `http://localhost:2918`),
and follow the configuration and installations there.

For LTI 1.3: This tool currently can only work with one `client_id` and one
Platform at a time. These details are configured in the `.env` file. Restart
the dev server after making any changes to this file.

## Deployment

This tool is deployed with Vercel and is connected to the github repo. If you
have push rights to `master`, pushing to master will deploy new code. Otherwise,
open a pull request to get your changes merged and deployed.
