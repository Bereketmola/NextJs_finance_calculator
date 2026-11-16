# UI Coding Standards

## Component Library

- Use **shadcn/ui** components for all UI in this application.
- Do **not** create custom components or hand-rolled UI primitives.
- Build pages and features by composing shadcn/ui components directly.

## Adding Components

1. Check whether the required component is already installed.
2. Reuse an existing shadcn/ui component whenever possible.
3. If no suitable component is installed, check the shadcn/ui registry and install the appropriate component before implementing the UI.
4. Do not create a custom substitute when a shadcn/ui component exists.

## Styling and Usage

- Style components with Tailwind CSS and the project’s existing design tokens.
- Preserve shadcn/ui component APIs and behavior. Customize through props and utility classes rather than rewriting component internals.
- Keep layouts responsive and components accessible.
