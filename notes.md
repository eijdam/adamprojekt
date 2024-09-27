npx create-next-app@latest
# Inštalácia NextJS cez terminál (npx = node package execute)

ls
# linux, vypíše obsah dir (list)

cd
# linux, presmeruje do dir (change directory)

cd ..
# o úroveň vyššie

npm run dev
# spustí kód cez terminál

git init
# inicializovanie git v projekte

git branch -m main
# spraví main branch na githube

git config –global user.name/user.email

git remote add origin url
# prepojí git s githubom

git remote -v
# skontroluje prepojenie



NextJS – files stránkok sa musia volať page.tsx, ak nie je v app dir, tak musí byť v dir, ktorý ma meno v ()
globals.css musí existovať


not-found.tsx musí byť v app dir, overridene defaultnu page 404


find . -path './.next' -prune -o -path './node_modules' -prune -o -path './.git' -prune -o -print | sed -e "s/[^\/]*\// |/g" -e "s/|\([^ ]\)/|-\1/"

^vypise vsetky folders a files okrem .next, node_modules, .git