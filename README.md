# Mayor Chess Club (React)

Same UI as the original HTML/CSS site, converted to React + Vite.

## Run

    npm install
    npm run dev

## Images

Copy your old `images/` folder into `public/images/` so these paths work:

    public/images/logo/mayor.jpeg
    public/images/team/{washini.jpg, sandun.jpeg, tharindu.jpg, wajira.png, dilan.jpeg, user.png}
    public/images/social/{facebook,tiktok,youtube}-logo.png
    public/images/tournaments/{chronicles.jpg, battleOfMinds.jpg}

## How the CSS works

Your original CSS files are kept unchanged in `src/styles/`. Each page injects its own
stylesheet while it is on screen and removes it when you leave (`src/hooks/usePageStyles.js`),
so the pages don't override each other, exactly like the separate HTML files did.
Bootstrap 5.3.7 is loaded globally, as in your HTML.
