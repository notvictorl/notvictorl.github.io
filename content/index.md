---
title: Quartz - Victor Liu
---

This is a blank Quartz installation.
See the [documentation](https://quartz.jzhao.xyz) for how to get started.

<style>
@font-face {
    font-display: swap;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 300;
    src: local("Source Sans Pro Light normal"), local("Source Sans Pro-Lightnormal"), url(/static/source-sans-pro-300-fdb74fc65b69c4cc3882b9a73f8961ed.woff2) format("woff2"), url(/static/source-sans-pro-300-f9671025bd0c0262a8bc484bddba9faa.woff) format("woff")
}

@font-face {
    font-display: swap;
    font-family: Source Sans Pro;
    font-style: italic;
    font-weight: 300;
    src: local("Source Sans Pro Light italic"), local("Source Sans Pro-Lightitalic"), url(/static/source-sans-pro-300italic-fb7d9ac504119745f12a7ee9005d582a.woff2) format("woff2"), url(/static/source-sans-pro-300italic-627300c38480193739117c46e7b9c2f8.woff) format("woff")
}

@font-face {
    font-display: swap;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 400;
    src: local("Source Sans Pro Regular normal"), local("Source Sans Pro-Regularnormal"), url(/static/source-sans-pro-400-c558a0b24112c7b72ea2fcc3c2022a7f.woff2) format("woff2"), url(/static/source-sans-pro-400-5533a6de69fa9743fe6f8867f97a1347.woff) format("woff")
}

@font-face {
    font-display: swap;
    font-family: Source Sans Pro;
    font-style: italic;
    font-weight: 400;
    src: local("Source Sans Pro Regular italic"), local("Source Sans Pro-Regularitalic"), url(/static/source-sans-pro-400italic-4e377b61458786717648dac8ec5d0606.woff2) format("woff2"), url(/static/source-sans-pro-400italic-6f4192e62567781bb7a5a1843d12f514.woff) format("woff")
}

@font-face {
    font-display: swap;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    src: local("Source Sans Pro SemiBold normal"), local("Source Sans Pro-SemiBoldnormal"), url(/static/source-sans-pro-600-88439e8de7ddc37df4eb91e788db3596.woff2) format("woff2"), url(/static/source-sans-pro-600-24d5e29793cd5966cffcd4cedde10e2b.woff) format("woff")
}

@font-face {
    font-display: swap;
    font-family: Source Sans Pro;
    font-style: italic;
    font-weight: 600;
    src: local("Source Sans Pro SemiBold italic"), local("Source Sans Pro-SemiBolditalic"), url(/static/source-sans-pro-600italic-970845d7e38c39f426409e70030ac376.woff2) format("woff2"), url(/static/source-sans-pro-600italic-49a3bedea4835d1ecae7f40f9731801f.woff) format("woff")
}

@font-face {
    font-display: swap;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 700;
    src: local("Source Sans Pro Bold normal"), local("Source Sans Pro-Boldnormal"), url(/static/source-sans-pro-700-23d7fef41a30e5afee87e454941e34df.woff2) format("woff2"), url(/static/source-sans-pro-700-71261353a1d4e98c646f12747eae268d.woff) format("woff")
}

@font-face {
    font-display: swap;
    font-family: Source Sans Pro;
    font-style: italic;
    font-weight: 700;
    src: local("Source Sans Pro Bold italic"), local("Source Sans Pro-Bolditalic"), url(/static/source-sans-pro-700italic-a66bf8527aff0e13c76a84d7ee521fff.woff2) format("woff2"), url(/static/source-sans-pro-700italic-6c3740112957c08710bd64810df177f3.woff) format("woff")
}

@font-face {
    font-display: swap;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 900;
    src: local("Source Sans Pro Black normal"), local("Source Sans Pro-Blacknormal"), url(/static/source-sans-pro-900-8876404b1bc5971a89c27d7154a00d5a.woff2) format("woff2"), url(/static/source-sans-pro-900-3ced288e652737722ef0ca71dda8810e.woff) format("woff")
}

@font-face {
    font-display: swap;
    font-family: Source Sans Pro;
    font-style: italic;
    font-weight: 900;
    src: local("Source Sans Pro Black italic"), local("Source Sans Pro-Blackitalic"), url(/static/source-sans-pro-900italic-94c439c5e983af31800b1519b065e4b8.woff2) format("woff2"), url(/static/source-sans-pro-900italic-06068f4f99018c4b6d5e629a245c1dcd.woff) format("woff")
}

@font-face {
    font-display: swap;
    font-family: Ubuntu Mono;
    font-style: normal;
    font-weight: 400;
    src: local("Ubuntu Mono Regular "), local("Ubuntu Mono-Regular"), url(/static/ubuntu-mono-latin-400-fc77a86efb8c0ff2b73e50d92d557136.woff2) format("woff2"), url(/static/ubuntu-mono-latin-400-2f1e7025def086a5cb356e655c145381.woff) format("woff")
}

@font-face {
    font-display: swap;
    font-family: Ubuntu Mono;
    font-style: italic;
    font-weight: 400;
    src: local("Ubuntu Mono Regular italic"), local("Ubuntu Mono-Regularitalic"), url(/static/ubuntu-mono-latin-400italic-7e72ae3c06df2529177832f6793a1d13.woff2) format("woff2"), url(/static/ubuntu-mono-latin-400italic-4848df8ed7d1850e4c12e7552357c219.woff) format("woff")
}

@font-face {
    font-display: swap;
    font-family: Ubuntu Mono;
    font-style: normal;
    font-weight: 700;
    src: local("Ubuntu Mono Bold "), local("Ubuntu Mono-Bold"), url(/static/ubuntu-mono-latin-700-3f5705b3e6a60274bfeff866eec2bb1a.woff2) format("woff2"), url(/static/ubuntu-mono-latin-700-deabcfae541ffb3b92574ca46b7ea121.woff) format("woff")
}

@font-face {
    font-display: swap;
    font-family: Ubuntu Mono;
    font-style: italic;
    font-weight: 700;
    src: local("Ubuntu Mono Bold italic"), local("Ubuntu Mono-Bolditalic"), url(/static/ubuntu-mono-latin-700italic-067da71402c1c3008d5230b106823325.woff2) format("woff2"), url(/static/ubuntu-mono-latin-700italic-029253f5df54bcae6c89c1a8694dd717.woff) format("woff")
}

a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
    border: 0;
    font-size: 100%;
    font: inherit;
    margin: 0;
    padding: 0;
    vertical-align: baseline
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block
}

body {
    line-height: 1
}

ol,
ul {
    list-style: none
}

blockquote,
q {
    quotes: none
}

blockquote:after,
blockquote:before,
q:after,
q:before {
    content: "";
    content: none
}

table {
    border-collapse: collapse;
    border-spacing: 0
}

body {
    --white: #fff;
    --white-rgb: 255, 255, 255;
    --platinum: #e3e3e3;
    --chinese-silver: #ccc;
    --davys-grey: #5c5c5c;
    --dark-charcoal: #333;
    --dark-charcoal-rgb: 51, 51, 51;
    --jordy-blue: #85a9f7;
    --cerulean-blue: #2855b7;
    --background: var(--white);
    --background-rgb: var(--white-rgb);
    --focus-border: var(--davys-grey);
    --focus-border-shade-1: var(--chinese-silver);
    --foreground: var(--dark-charcoal);
    --foreground-shade-1: var(--davys-grey);
    --link: var(--cerulean-blue);
    --code-block-background: #161821;
    --code-block-foreground: #c6c8d1;
    --code-block-foreground-shade-1: #84a0c6;
    --blockquote-background: var(--platinum);
    --input-foreground: var(--foreground);
    --input-placeholder: var(--foreground-shade-1);
    --input-icon: var(--foreground);
    --radio-background: var(--background);
    --radio-foreground: var(--foreground);
    --radio-border: var(--foreground);
    --standard-space: 1rem;
    --small-space: calc(var(--standard-space)/2);
    --smallest-space: calc(var(--small-space)/2);
    --large-space: calc(var(--standard-space)*2);
    --largest-space: calc(var(--large-space)*2);
    --standard-font-family: "Source Sans Pro", sans-serif;
    --code-font-family: "Ubuntu Mono", monospace;
    --line-height: 1.5;
    --small-font-size: 10px;
    --standard-font-size: 16px;
    --large-font-size: 1.25rem;
    --largest-font-size: 2rem;
    --standard-border-radius: 5px;
    --large-border-radius: 10px;
    --standard-page-width: 80rem;
    --large-page-width: 120rem
}

body.dark {
    --background: var(--dark-charcoal);
    --background-rgb: var(--dark-charcoal-rgb);
    --focus-border: var(--white);
    --focus-border-shade-1: var(--chinese-silver);
    --foreground: var(--white);
    --foreground-shade-1: var(--chinese-silver);
    --link: var(--jordy-blue);
    --code-block-background: #e8e9ec;
    --code-block-foreground: #33374c;
    --code-block-foreground-shade-1: #2d539e;
    --blockquote-background: var(--davys-grey)
}

#___gatsby,
body,
html {
    height: 100%;
    margin: 0;
    padding: 0
}

#gatsby-focus-wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    overflow-x: hidden;
    padding: 0 var(--standard-space)
}

#gatsby-focus-wrapper>* {
    flex-shrink: 0;
    max-width: 100%;
    width: var(--standard-page-width)
}

body {
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    background: var(--background);
    color: var(--foreground);
    font-family: var(--standard-font-family);
    font-size: var(--standard-font-size);
    line-height: var(--line-height)
}

* {
    -webkit-font-smoothing: antialiased
}

a {
    color: var(--foreground);
    font-size: inherit;
    text-decoration: none
}

b {
    font-weight: 700
}

button {
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    font-family: var(--standard-font-family);
    font-size: var(--standard-font-size);
    margin: 0;
    padding: 0
}

button:focus,
button:hover {
    border: none;
    outline: none
}

.subtitle {
    font-size: var(--large-font-size)
}

.title {
    font-size: var(--largest-font-size);
    font-weight: 700
}

.inline-link {
    color: var(--link)
}

[data-focusable=true] {
    margin: calc(var(--standard-space)*-1);
    padding: var(--standard-space)
}

@media(hover:hover)and (pointer:fine) {
    [data-focusable=true]:hover {
        border-radius: 0;
        box-shadow: 0 2px 0 0 var(--focus-border)
    }

    [data-focusable=true]:focus {
        border-radius: var(--standard-border-radius);
        box-shadow: 0 0 0 2px var(--focus-border);
        outline: none
    }
}

@media screen and (min-width:768px) {
    #gatsby-focus-wrapper {
        padding: 0 var(--large-space)
    }
}

code,
pre {
    font-family: var(--code-font-family);
    outline: 0
}

.actions {
    position: relative
}

.actions__shadow-overlay {
    background: var(--background);
    background: linear-gradient(to right, rgba(var(--background-rgb), 0), rgba(var(--background-rgb), 1));
    display: block;
    height: 100%;
    position: absolute;
    right: 0;
    transition: background .3s ease;
    width: var(--largest-space);
    z-index: 1
}

.actions__shadow-overlay-block {
    margin-left: var(--largest-space);
    padding: 1px
}

.actions__list {
    align-items: center;
    column-gap: var(--standard-space);
    display: flex;
    overflow-x: auto;
    padding: var(--small-space) 0
}

.actions__action {
    cursor: pointer;
    padding: var(--standard-space);
    position: relative;
    white-space: nowrap
}

.actions__action--active {
    box-shadow: 0 2px 0 0 var(--focus-border)
}

.actions__action>a:after {
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 10
}

.actions__action>a:hover {
    box-shadow: none
}

.actions__action>a:focus {
    border: none;
    box-shadow: none;
    outline: none;
    text-decoration: underline
}

@media(hover:hover)and (pointer:fine) {
    .actions__action:focus-within {
        border-radius: var(--standard-border-radius);
        box-shadow: 0 0 0 2px var(--focus-border);
        outline: none
    }
}

@media(hover:hover)and (pointer:fine) {
    .actions__action:hover {
        border-radius: 0;
        box-shadow: 0 2px 0 0 var(--focus-border)
    }
}

.actions__action:focus-within a {
    border: none;
    box-shadow: none;
    outline: none;
    text-decoration: none
}

@media screen and (min-width:576px) {
    .actions__list {
        justify-content: flex-end;
        padding-right: 0
    }

    .actions__shadow-overlay,
    .actions__shadow-overlay-block {
        display: none
    }
}

@media screen and (min-width:768px) {
    .actions__list {
        align-items: unset;
        flex-wrap: wrap;
        margin: var(--standard-space) calc(var(--standard-space)*-1);
        overflow-x: unset;
        padding: 0
    }
}

.gutter {
    align-items: center;
    display: flex;
    flex-direction: column;
    left: 0;
    padding: .5em 0;
    position: absolute;
    text-align: right;
    width: 2em
}

.gutter__number {
    padding: 0 .5em;
    width: 1em
}

.buffer {
    column-gap: var(--small-space);
    display: flex;
    position: relative
}

.buffer__code {
    overflow-x: auto;
    padding: .5em .5em .5em 2.5em;
    width: 100%
}

.status-line {
    display: flex;
    height: 1.5625em;
    justify-content: space-between;
    max-width: 100%;
    overflow: hidden
}

.status-line__content {
    align-items: center;
    display: flex
}

.status-line__content>* {
    padding: 0 var(--small-space)
}

.status-line__mode {
    align-items: center;
    display: flex;
    height: 100%;
    width: -webkit-min-content;
    width: min-content
}

.status-line__extension {
    display: none
}

@media screen and (min-width:768px) {
    .status-line__extension {
        display: inline-block
    }
}

.code {
    font-family: var(--code-font-family);
    line-height: 1.25
}

.home-link {
    align-items: center;
    column-gap: var(--small-space);
    display: flex;
    font-size: var(--large-font-size)
}

.home-link__logo {
    height: 2.5em;
    width: auto
}

.home-link__title {
    color: var(--foreground-shade-1)
}

.home-link__title>span:first-child {
    color: var(--foreground)
}

@media screen and (min-width:992px) {
    .home-link {
        font-size: var(--largest-font-size)
    }
}

.vimrc__content {
    display: flex;
    flex-direction: column
}

button.vimrc__button {
    --border-color: var(--vim-vimCommand, var(--vim-vimOper, var(--normal-fg)));
    align-items: center;
    background: none;
    border: none;
    color: inherit;
    column-gap: .1rem;
    cursor: pointer;
    display: inline-flex;
    font-family: var(--standard-font-family);
    font-family: var(--code-font-family);
    font-size: var(--standard-font-size);
    font-size: inherit;
    margin: 0;
    margin: calc(var(--smallest-space)*-1);
    padding: 0;
    padding: 0 var(--smallest-space)
}

button.vimrc__button:focus,
button.vimrc__button:hover {
    border: none;
    outline: none
}

@media(hover:hover)and (pointer:fine) {
    button.vimrc__button:hover {
        box-shadow: 0 2px 0 0 var(--border-color)
    }

    button.vimrc__button:focus {
        border-radius: var(--standard-border-radius);
        box-shadow: 0 0 0 2px var(--border-color);
        outline: none
    }
}

.vimrc__button-icon {
    height: 1em;
    width: 1em
}

.footer {
    padding: var(--large-space) 0
}

.footer__content {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: var(--large-space)
}

.footer__content>:first-child {
    flex: 1 1
}

.footer__links {
    column-gap: calc(var(--standard-space)*3);
    justify-content: space-around;
    width: 100%
}

.footer__link,
.footer__links {
    align-items: center;
    display: flex
}

.footer__link {
    column-gap: var(--smallest-space)
}

.footer__link--accent {
    color: var(--link)
}

.footer__link-extension {
    display: none
}

@media screen and (min-width:768px) {
    .footer__content {
        flex-direction: row;
        gap: calc(var(--standard-space)*3);
        justify-content: space-between
    }

    .footer__links {
        justify-content: flex-end
    }

    .footer__link-extension {
        display: inline-block
    }
}

.preview {
    background: var(--normal-bg);
    border-radius: var(--large-border-radius);
    box-shadow: 0 5px 15px rgba(0, 0, 0, .35);
    color: var(--normal-fg);
    font-size: var(--standard-font-size);
    line-height: 1.125em;
    overflow: hidden
}

.preview--dark {
    --normal-fg: var(--vim-NormalFg, #fff);
    --normal-bg: var(--vim-NormalBg, #000)
}

.preview--light {
    --normal-fg: var(--vim-NormalFg, #000);
    --normal-bg: var(--vim-NormalBg, #fff)
}

.preview__header {
    align-items: center;
    background: var(--vim-StatusLineFg, var(--normal-fg));
    color: var(--vim-StatusLineBg, var(--normal-bg));
    display: flex;
    font-weight: 700;
    height: 1.875em;
    justify-content: center;
    position: relative
}

.preview__header>div {
    border-radius: 50%;
    height: .8125em;
    left: var(--small-space);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: .8125em
}

.preview__header>div:first-child {
    background: #ff605c;
    margin-left: 0
}

.preview__header>div:nth-child(2) {
    background: #ffbd44;
    margin-left: 1.3125em
}

.preview__header>div:nth-child(3) {
    background: #00ca4e;
    margin-left: 2.625em
}

.preview__header-file-name {
    left: 50%;
    position: absolute;
    transform: translateX(-50%)
}

.preview__header-type {
    position: absolute;
    right: var(--small-space)
}

.preview>* {
    margin: 0
}

.NormalBg {
    background: var(--normal-bg)
}

.CursorFg {
    color: var(--vim-CursorFg, rgba(0, 0, 0, .5))
}

.CursorBg {
    background: var(--vim-CursorBg, hsla(0, 0%, 100%, .5))
}

.StatusLineFg {
    color: var(--vim-StatusLineFg)
}

.StatusLineBg {
    background: var(--vim-StatusLineBg)
}

.StatusLineFg--inverted {
    color: var(--vim-StatusLineBg, var(--normal-bg))
}

.StatusLineBg--inverted {
    background: var(--vim-StatusLineFg, var(--normal-fg))
}

.LineNrFg {
    color: var(--vim-LineNrFg)
}

.LineNrBg {
    background: var(--vim-LineNrBg, var(--vim-NormalBg))
}

.CursorLineFg {
    color: var(--vim-CursorLineFg, var(--vim-LineNrFg))
}

.CursorLineBg {
    background: var(--vim-CursorLineBg, var(--vim-LineNrBg))
}

.CursorLineNrFg {
    color: var(--vim-CursorLineNrFg, var(--vim-LineNrFg))
}

.CursorLineNrBg {
    background: var(--vim-CursorLineNrBg, var(--vim-LineNrBg))
}

.vimLineComment {
    color: var(--vim-vimLineComment);
    font-style: italic
}

.vimCommand {
    color: var(--vim-vimCommand)
}

.vimFunction {
    color: var(--vim-vimFunction)
}

.vimParenSep {
    color: var(--vim-vimParenSep)
}

.vimOperParen {
    color: var(--vim-vimOperParen)
}

.vimFuncBody {
    color: var(--vim-vimFuncBody)
}

.vimIsCommand {
    color: var(--vim-vimIsCommand)
}

.vimLet {
    color: var(--vim-vimLet)
}

.vimVar {
    color: var(--vim-vimVar)
}

.vimOper {
    color: var(--vim-vimOper)
}

.vimFuncName {
    color: var(--vim-vimFuncName)
}

.vimFuncVar {
    color: var(--vim-vimFuncVar)
}

.vimString {
    color: var(--vim-vimString)
}

.vimSubst {
    color: var(--vim-vimSubst)
}

.vimNumber {
    color: var(--vim-vimNumber)
}

.vimNotFunc {
    color: var(--vim-vimNotFunc)
}

.preview-page {
    height: 627px !important;
    position: relative;
    width: 1200px !important
}

.preview-page__preview-container {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%)
}

.preview-page__preview {
    box-shadow: 0 22px 70px 4px rgba(0, 0, 0, .56);
    font-size: var(--large-font-size)
}

.preview-page--gallery .preview-page__preview {
    font-size: var(--standard-font-size)
}

.pill {
    align-items: center;
    border: 1px solid var(--focus-border);
    color: var(--foreground);
    display: inline-block;
    display: flex;
    height: 1rem;
    justify-content: center;
    padding: var(--smallest-space) var(--small-space)
}

.background-switch,
.pill {
    border-radius: var(--standard-border-radius)
}

.background-switch {
    background: var(--code-block-background);
    color: var(--code-block-foreground);
    cursor: pointer;
    font-family: var(--code-font-family);
    font-size: var(--large-font-size);
    line-height: 1.25;
    padding: 1rem;
    position: relative
}

.background-switch:focus,
.background-switch:hover {
    box-shadow: none;
    outline: none
}

.background-switch__input {
    opacity: 0;
    pointer-events: none;
    position: absolute
}

.background-switch__indicator {
    margin: calc(var(--smallest-space)*-1);
    padding: var(--smallest-space)
}

.background-switch__indicator-operator {
    color: var(--code-block-foreground-shade-1)
}

.background-switch:hover .background-switch__indicator {
    box-shadow: 0 2px 0 0 var(--code-block-foreground-shade-1)
}

@media(hover:hover)and (pointer:fine) {
    .background-switch__input:focus~* .background-switch__indicator {
        border-radius: var(--standard-border-radius);
        box-shadow: 0 0 0 2px var(--code-block-foreground-shade-1)
    }
}

.background-switch__background-label,
.background-switch__indicator-operator {
    display: none
}

@media screen and (min-width:768px) {

    .background-switch__background-label,
    .background-switch__indicator-operator {
        display: inline-block
    }
}

.meta {
    row-gap: var(--standard-space)
}

.meta,
.meta-header {
    display: flex;
    flex-direction: column
}

.meta-header {
    margin-bottom: var(--small-space);
    row-gap: var(--small-space)
}

.meta-header__row {
    align-items: center;
    display: flex;
    justify-content: space-between;
    line-height: 1.25rem
}

.meta-header__statistic {
    align-items: center;
    column-gap: var(--smallest-space);
    display: flex
}

.meta-header__icon {
    line-height: 1.25rem
}

.meta-footer {
    align-items: flex-end;
    column-gap: var(--standard-space);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between
}

.meta-footer__column {
    display: flex;
    flex-direction: column;
    row-gap: var(--smallest-space)
}

.meta-footer__row {
    line-height: 1.25rem
}

.meta-footer__pills {
    align-items: center;
    column-gap: var(--smallest-space);
    display: flex
}

.card {
    display: flex;
    flex-direction: column;
    margin: calc(var(--standard-space)*-1);
    padding: var(--standard-space);
    position: relative;
    row-gap: var(--standard-space)
}

@media(hover:hover)and (pointer:fine) {
    .card:hover {
        border-radius: 0;
        box-shadow: 0 2px 0 0 var(--focus-border)
    }
}

@media(hover:hover)and (pointer:fine) {
    .card:focus-within {
        border-radius: var(--standard-border-radius);
        box-shadow: 0 0 0 2px var(--focus-border);
        outline: none
    }
}

.card__ghost-link {
    height: 75%;
    left: 50%;
    opacity: 0;
    padding: 0;
    pointer-events: none;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 0
}

.card__link {
    margin: calc(var(--small-space)*-1);
    padding: var(--small-space)
}

@media(hover:hover)and (pointer:fine) {
    .card__link:focus {
        border-radius: var(--standard-border-radius);
        box-shadow: 0 0 0 2px var(--focus-border-shade-1);
        outline: none
    }
}

.filters {
    column-gap: var(--standard-space)
}

.filters,
.filters__inputs {
    align-items: center;
    display: flex
}

.filters__inputs {
    column-gap: var(--large-space);
    margin: calc(var(--standard-space)*-1);
    padding: var(--standard-space)
}

@media(hover:hover)and (pointer:fine) {
    .filters__inputs:hover {
        border-radius: 0;
        box-shadow: 0 2px 0 0 var(--focus-border)
    }
}

@media(hover:hover)and (pointer:fine) {
    .filters__inputs:focus-within {
        border-radius: var(--standard-border-radius);
        box-shadow: 0 0 0 2px var(--focus-border);
        outline: none
    }
}

.filters__input-container {
    align-items: center;
    column-gap: var(--small-space);
    cursor: pointer;
    display: flex;
    margin: calc(var(--standard-space)*-1);
    padding: var(--standard-space);
    position: relative
}

.filters__input-container>svg {
    width: 1.5625rem
}

.filters__input {
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0
}

.grid {
    display: grid;
    gap: var(--largest-space);
    grid-template-columns: 100%;
    width: 100%
}

@media screen and (min-width:992px) {
    .grid {
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr)
    }
}

.header {
    align-items: center;
    column-gap: var(--standard-space);
    display: flex;
    justify-content: space-between;
    padding: var(--large-space) 0
}

.main {
    flex: 1 1;
    padding: var(--standard-space)
}

.icon-arrow--left {
    transform: rotate(180deg)
}

.pagination {
    column-gap: var(--standard-space);
    justify-content: space-between;
    margin-top: var(--large-space);
    max-width: 100%;
    width: var(--standard-page-width)
}

.pagination,
.pagination>div {
    align-items: center;
    display: flex
}

.pagination>div {
    flex: 1 1;
    justify-content: center
}

.pagination>div:first-child {
    justify-content: flex-start
}

.pagination>div:last-child {
    justify-content: flex-end
}

.pagination__link {
    align-items: center;
    column-gap: var(--smallest-space);
    display: flex
}

.pagination__icon {
    height: 1.2rem
}

#gatsby-focus-wrapper>.about {
    width: 40rem
}

.about h1,
.about h2,
.about h3,
.about p {
    margin-bottom: var(--standard-space)
}

.about h1,
.about h2,
.about h3 {
    font-weight: 700;
    margin-top: var(--large-space)
}

.about ul {
    padding-left: var(--large-space)
}

.about li {
    list-style: disc
}

.about blockquote {
    background: var(--blockquote-background);
    border-radius: var(--standard-border-radius);
    margin: 1rem 0;
    padding: var(--standard-space)
}

.icon-forward-slash {
    transform: rotate(-28deg)
}

.search-input {
    align-items: center;
    display: flex;
    position: relative
}

.search-input__overlay-button {
    background: none;
    border: none;
    bottom: 0;
    cursor: pointer;
    left: 0;
    outline: none;
    position: absolute;
    right: 0;
    top: 0;
    width: calc(100% + var(--standard-space)*2);
    z-index: -1
}

.search-input__overlay-button:focus,
.search-input__overlay-button:hover {
    border: none;
    box-shadow: none;
    outline: none
}

.search-input__input-wrapper {
    border-bottom: 2px solid var(--focus-border);
    flex: 1 1;
    position: relative
}

@media(hover:hover)and (pointer:fine) {
    .search-input__input-wrapper:focus-within {
        border-bottom: 2px solid var(--focus-border)
    }
}

.search-input__input {
    background: transparent;
    border: none;
    color: var(--input-foreground);
    flex: 1 1;
    font-size: var(--standard-font-size);
    outline: none;
    padding: var(--small-space);
    width: calc(100% - var(--standard-space)*2)
}

.search-input__input::placeholder {
    color: var(--input-placeholder)
}

.search-input__icon {
    color: var(--input-icon);
    height: var(--standard-space);
    width: var(--standard-space)
}

.search-input__icon--short {
    height: calc(var(--standard-space)*.9);
    width: calc(var(--standard-space)*.9)
}

.search-input__icon-wrapper {
    align-items: center;
    display: flex;
    justify-content: center;
    left: 100%;
    position: absolute;
    top: 50%;
    transform: translate(-100%, -50%)
}

@media screen and (min-width:992px) {
    .search-input {
        width: 15rem
    }
}

@media screen and (min-width:992px)and (hover:hover)and (pointer:fine) {
    .search-input__overlay-button:focus {
        box-shadow: 0 0 0 2px var(--focus-border)
    }
}

#gatsby-focus-wrapper>.repositories {
    max-width: 100%;
    width: var(--large-page-width)
}

.repositories {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-top: 0;
    row-gap: var(--large-space)
}

.repositories__header {
    display: flex;
    flex-direction: column;
    gap: var(--large-space);
    max-width: 100%;
    width: var(--standard-page-width)
}

.repositories__header-row {
    display: flex;
    flex-direction: column-reverse;
    gap: var(--large-space)
}

.repositories__header-row--align-end {
    align-items: flex-end
}

.repositories__search-indicator {
    width: 100%
}

@media screen and (min-width:992px) {
    .repositories__header-row {
        align-items: center;
        flex-direction: row;
        justify-content: space-between
    }

    .repositories__header-row--align-end {
        align-items: center;
        justify-content: flex-end
    }
}

.repository__content {
    align-items: center;
    display: flex;
    flex-direction: column;
    row-gap: var(--large-space)
}

.repository__nav {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: var(--standard-space) 0;
    width: 100%
}

.repository__meta {
    margin: 0;
    width: 100%
}

.repository__link {
    align-items: center;
    column-gap: var(--smallest-space);
    display: flex
}

.repository__link-icon {
    height: 1.2rem
}

.repository__previews {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: var(--standard-space) 0 var(--largest-space);
    row-gap: var(--large-space);
    width: 100%
}

.repository__previews>* {
    width: 100%
}

.repository__previews-title {
    text-align: center
}

.repository__preview {
    font-size: var(--standard-font-size);
    margin: var(--standard-space) 0;
    max-width: 56.25rem;
    width: 100%
}

.repository__link-extension {
    display: none
}

@media screen and (min-width:768px) {
    .repository__link-extension {
        display: inline-block
    }

    .repository__preview {
        font-size: var(--large-font-size);
        margin: var(--large-space) 0
    }
}
</style>
<main class="main repository">
                <section class="repository__content">
                    <div class="repository__previews">
                        <div class="preview repository__preview preview--dark" style="--vim-StatusLineFg: #f8f8f2; --vim-vimOperParen: #f8f8f2; --vim-CursorBg: #fee3cf; --vim-vimLineComment: #6c7ea5; --vim-vimIsCommand: #61dba0; --vim-vimString: #efa554; --vim-vimNotFunc: #50cefb; --vim-vimVar: #f8f8f2; --vim-vimParenSep: #f8f8f2; --vim-vimLet: #50cefb; --vim-CursorLineNrBg: #000000; --vim-CursorLineBg: #2d2d52; --vim-CursorFg: #000000; --vim-vimFunction: #f8f8f2; --vim-vimOper: #afc8f5; --vim-vimNumber: #ffeea6; --vim-LineNrFg: #61647b; --vim-vimFuncName: #b772de; --vim-vimFuncBody: #f8f8f2; --vim-LineNrBg: #000000; --vim-vimFuncKey: #50cefb; --vim-vimSubst: #50cefb; --vim-CursorLineNrFg: #ffff00; --vim-StatusLineBg: #29294e; --vim-NormalBg: #000000; --vim-vimCommand: #50cefb; --vim-NormalFg: #f8f8f2; --vim-CursorLineFg: #000000; --vim-vimFuncVar: #f8f8f2;">
                            <header class="preview__header">
                                <div></div>
                                <div></div>
                                <div></div><code data-ignore-a11y="true"
                                    class="preview__header-file-name">mai_dark (dark)</code><code
                                    data-ignore-a11y="true" class="preview__header-type">vim</code>
                            </header>
                            <pre
                                class="code vimrc"><span class="buffer"><code class="gutter LineNrFg LineNrBg"><span class="gutter__number LineNrBg" data-ignore-a11y="true">1</span><span class="gutter__number LineNrBg" data-ignore-a11y="true">2</span></code><code class="buffer__code" aria-label="Code sample in vimscript language" tabindex="-1" data-ignore-a11y="true"><div class="vimrc__content"><span><span class="vimCommand">set</span> background<span class="vimOper">=</span><span>dark</span></span><span><span class="vimCommand">colorscheme </span><span>mai_dark</span></span></div></code></span><span class="status-line StatusLineFg StatusLineBg"><span class="status-line__content"><span class="status-line__mode StatusLineFg--inverted StatusLineBg--inverted" data-ignore-a11y="true">NORMAL</span><span data-ignore-a11y="true">.vimrc</span></span><span class="status-line__content"><span class="status-line__extension" data-ignore-a11y="true">unix</span><span class="status-line__extension" data-ignore-a11y="true">utf-8</span><span data-ignore-a11y="true">☰</span><span data-ignore-a11y="true"> 0<!-- -->%</span><span data-ignore-a11y="true"> 0:2</span></span></span></pre>
                            <pre
                                class="code preview__code"><span class="buffer"><code class="gutter LineNrFg LineNrBg"><span class="gutter__number LineNrBg" data-ignore-a11y="true">1</span><span class="gutter__number LineNrBg" data-ignore-a11y="true">2</span><span class="gutter__number LineNrBg" data-ignore-a11y="true">3</span><span class="gutter__number LineNrBg" data-ignore-a11y="true">4</span><span class="gutter__number LineNrBg" data-ignore-a11y="true">5</span><span class="gutter__number LineNrBg CursorLineNrFg CursorLineNrBg" data-ignore-a11y="true">6</span><span class="gutter__number LineNrBg" data-ignore-a11y="true">7</span><span class="gutter__number LineNrBg" data-ignore-a11y="true">8</span><span class="gutter__number LineNrBg" data-ignore-a11y="true">9</span><span class="gutter__number LineNrBg" data-ignore-a11y="true">10</span><span class="gutter__number LineNrBg" data-ignore-a11y="true">11</span><span class="gutter__number LineNrBg" data-ignore-a11y="true">12</span></code><code class="buffer__code" aria-label="Code sample in vimscript language" tabindex="-1" data-ignore-a11y="true"><span><div><span class="vimLineComment">&quot; Returns true if the color hex value is light</span></div><div><span class="vimCommand">struct</span><span class="vimFunction">victor_liu</span><span class="vimParenSep">(</span><span class="vimOperParen">color</span><span class="vimParenSep">)</span><span class="vimFuncBody"> </span><span class="vimIsCommand">abort</span></div><div><span class="vimFuncBody">  </span><span class="vimLet">let</span><span class="vimFuncBody"> </span><span class="vimVar">l:raw_color</span><span class="vimFuncBody"> </span><span class="vimOper">=</span><span class="vimFuncBody"> </span><span class="vimFuncName">trim</span><span class="vimParenSep">(</span><span class="vimFuncVar">a:color</span><span class="vimOperParen">, </span><span class="vimString">'#'</span><span class="vimParenSep">)</span></div><div></div><div><span class="vimFuncBody"><br />  </span><span class="vimLet">let</span><span class="vimFuncBody"> </span><span class="vimVar">l:red</span><span class="vimFuncBody"> </span><span class="vimOper">=</span><span class="vimFuncBody"> </span><span class="vimFuncName">str2nr</span><span class="vimParenSep">(</span><span class="vimSubst">substitute</span><span class="vimParenSep">(</span><span class="vimOperParen">l:raw_color, </span><span class="vimString">'(.{2}).{4}'</span><span class="vimOperParen">, </span><span class="vimString">'1'</span><span class="vimOperParen">, </span><span class="vimString">'g'</span><span class="vimParenSep">)</span><span class="vimFuncBody">, </span><span class="vimNumber">16</span><span class="vimParenSep">)</span></div><div><span class="vimFuncBody">  </span><span class="vimLet">let</span><span class="vimFuncBody"> </span><span class="vimVar">l:green</span><span class="vimFuncBody"> </span><span class="vimOper">=</span><span class="vimFuncBody"> </span><span class="vimFuncName">str2nr</span><span class="vimParenSep">(</span><span class="vimSubst">substitute</span><span class="vimParenSep">(</span><span class="vimOperParen">l:raw_color, </span><span class="vimString">'.{2}(.{2}).{2}'</span><span class="vimOperParen">, </span><span class="vimString">'1'</span><span class="vimOperParen">, </span><span class="vimString">'g'</span><span class="vimParenSep">)</span><span class="vimFuncBody">, </span><span class="vimNumber">16</span><span class="vimParenSep">)</span></div><div><span class="vimFuncBody">  </span><span class="vimLet">let</span><span class="vimFuncBody"> </span><span class="vimVar">l:blue</span><span class="vimFuncBody"> </span><span class="vimOper">=</span><span class="vimFuncBody"> </span><span class="vimFuncName">str2nr</span><span class="vimParenSep">(</span><span class="vimSubst">substitute</span><span class="vimParenSep">(</span><span class="vimOperParen">l:raw_color, </span><span class="vimString">'.{4}(.{2})'</span><span class="vimOperParen">, </span><span class="vimString">'1'</span><span class="vimOperParen">, </span><span class="vimString">'g'</span><span class="vimParenSep">)</span><span class="vimFuncBody">, </span><span class="vimNumber">16</span><span class="vimParenSep">)</span></div><div></div><div><span class="vimFuncBody"><br />  </span><span class="vimLet">let</span><span class="vimFuncBody"> </span><span class="vimVar">l:brightness</span><span class="vimFuncBody"> </span><span class="vimOper">=</span><span class="vimFuncBody"> </span><span class="vimParenSep">((</span><span class="vimOperParen">l:red * </span><span class="vimNumber">299</span><span class="vimParenSep">)</span><span class="vimOperParen"> </span><span class="vimOper">+</span><span class="vimOperParen"> </span><span class="vimParenSep">(</span><span class="vimOperParen">l:green * </span><span class="vimNumber">587</span><span class="vimParenSep">)</span><span class="vimOperParen"> </span><span class="vimOper">+</span><span class="vimOperParen"> </span><span class="vimParenSep">(</span><span class="vimOperParen">l:blue * </span><span class="vimNumber">114</span><span class="vimParenSep">))</span><span class="vimFuncBody"> / </span><span class="vimNumber">1000</span></div><div></div><div><span class="vimFuncBody"><br />  </span><span class="vimNotFunc">return</span><span class="vimFuncBody"> </span><span class="vimVar">l:brightness</span><span class="vimFuncBody"> </span><span class="vimOper">&gt;</span><span class="vimFuncBody"> </span><span class="vimNumber">155</span></div><div><span class="vimCommand">endfunction</span></div></span></code></span><span class="status-line StatusLineFg StatusLineBg"><span class="status-line__content"><span class="status-line__mode StatusLineFg--inverted StatusLineBg--inverted" data-ignore-a11y="true">NORMAL</span><span data-ignore-a11y="true">victor_liu.cpp</span></span><span class="status-line__content"><span class="status-line__extension" data-ignore-a11y="true">unix</span><span class="status-line__extension" data-ignore-a11y="true">utf-8</span><span data-ignore-a11y="true">☰</span><span data-ignore-a11y="true">50<!-- -->%</span><span data-ignore-a11y="true">6:12</span></span></span></pre>
                        </div>
                    </div>
                </section>
            </main>

