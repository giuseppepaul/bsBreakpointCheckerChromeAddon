# bsBreakpointCheckerChromeAddon
Chrome addon to check what CSS breakpoint is currently active on Boostrap 3 projects.

## Use
Add an html element to your page for each css breakpoint like so:

```html
<span class="visible-xs breakpoint" data-breakpoint="xs"></span>
<span class="visible-sm breakpoint" data-breakpoint="sm"></span>
<span class="visible-md breakpoint" data-breakpoint="md"></span>
<span class="visible-lg breakpoint" data-breakpoint="lg"></span>
<span class="visible-my-breakpoint-size breakpoint" data-breakpoint="my-breakpoint-size"></span>
```