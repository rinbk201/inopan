This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# Install guid

## 1st install Node and check Node version
  The project require Node enviroment.
  * 1, Check you have already installed Node or not. : ```node -v```
  * 2, if you not installed node. you should install node.
  * 3, Check your node version. You can check with ```node v```. require version is ```18.16.0```

## Clone project
  The project can clone from github with "git clone "repogitry https url".
  * Note: I recommand Cloning from VSCode. if you are already complate collaborate VSCode with gitHub.

## install yarn and node_module.
  * Development is uses ```yarn```. Please install that with```npm install yarn```
  * After that. Please enter ```yarn```. the yarn starts installation node_module and module which deaclear "package.json" automatically.
## アプリの起動の仕方
* cloneやpullをしたらとりあえず```yarn```
* 開発環境用```yarn run dev```
* 本番環境用は```yarn run builsd```→```yarn run start```


## DB関係
* DBの初期化```npx prisma init```
* Prismaのスキーマを書き換えたら```npx prisma db push```
* ブラウザで、DB内にアクセスしたいとき```npx prisma studio```