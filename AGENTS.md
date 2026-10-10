<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the business service definitions and contact URL validation in a shared browser-safe module so discovery and contact behavior can be tested independently.
- Keep this business showcase on a single content route with accessible section navigation; use dialogs for service details rather than adding duplicate service pages.
- Do not create a lead-storage service for the showcase; contact controls must transparently reflect whether the business WhatsApp number is configured.
